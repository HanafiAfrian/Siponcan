import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Image,
    Linking,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Iconsiponcan} from '../../../assets/images';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase  from "@react-native-firebase/app";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nik: '',
      password: '',
      hidden: true,
      listData: [],
	    idToken :null,
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/login.php';
  }
  componentDidMount() {
    this.ambilListData();
	var firebaseConfig = {
 apiKey: "AIzaSyADO18nO--dT1tAssQCQhwVibchswbryg8",
  authDomain: "sibolgasiponcan.firebaseapp.com",
  projectId: "sibolgasiponcan",
  storageBucket: "sibolgasiponcan.appspot.com",
  messagingSenderId: "896657376556",
  appId: "1:896657376556:web:7c26361c793df82512d889"
};

if (!Firebase.apps.length){
	Firebase.initializeApp(firebaseConfig);		
} else {
	Firebase.app();
	
}

	 PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  
  onRegister: function (token) {
   console.log("TOKEN:", token);
  },
onRegister:(token) =>this.setState({idToken:token.token}),
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

  }

  async ambilListData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  klikSimpan() {
    if (this.state.nik == '') {
      alert('Masukkan NIK');
    } else if (this.state.password == '') {
      alert('Silakan Isi Password');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=login';
        var str = '1 2 3 4 5 6 7 8 9 0';
        var waktu = new Date().getMilliseconds();
        var waktu2 = new Date().getSeconds();
        var waktu3 = new Date().getMinutes();
        var waktu4 = new Date().getHours();
        var waktu5 = new Date().getDay();
        var every_word_im_shuffling = str
          .split(/\s\b(?!\s)/)
          .sort(function () {
            return 0.2 - Math.random();
          })
          .join(+waktu + waktu2 + waktu3 + waktu4 + waktu5);
        console.log(every_word_im_shuffling);
        var res = every_word_im_shuffling.substring(0, 4);
        var nik = this.state.nik;
        var password = this.state.password;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'nik=' + this.state.nik +
		'&password=' + this.state.password+
		 '&token=' +
          this.state.idToken ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'ok') {
            this.props.navigation.replace('Authotp', {nik: this.state.nik});
          } else if (responseJson == 'nonaktif') {
            alert('Akun Anda Belum Aktif Silahkan Coba Beberapa Saat Lagi');
          } else {
            alert('Nik dan Password tidak Sesuai');
            this.setState({email: ''});
            this.setState({password: ''});
            this.setState({nohp: ''});

            this.ambilListData();
          }
        });
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          {/* <Text style={{textAlign: 'center', fontSize: 32, color: '#004ba0'}}>
            SIPONCAN
          </Text> */}
          {/* undrawimage */}
 
              
          <Image
            source={Iconsiponcan}
            style={{
              width: '100%',
               height: 80,
              marginTop: 20,
              alignSelf: 'center',
              marginBottom: 50,
			   resizeMode: 'contain',
            }}
          />
          {/* undrawimage */}
<Text
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#004ba0',
              marginBottom: 20,
            }}>

Silahkan Login Menggunakan NIK dan Password Anda Yang Telah Terdfatar

</Text>
          {/* nik */}
          <TextInput
            label="NIK"
            maxLength={16}
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            keyboardType="numeric"
            style={{backgroundColor: 'white'}}
            value={this.state.nik}
            onChangeText={text => this.setState({nik: text})}
          />
          {/* endNik */}
          {/* password */}
          <TextInput
            label="Password"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 10}}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          {/* endPassword */}

          {/* showHide */}
          {/* <TouchableOpacity
                        onPress={() => this.setState({ hidden: !this.state.hidden })}
                    >
                        <Text>Go</Text>
                    </TouchableOpacity> */}

          <BouncyCheckbox
            text="Show Password"
            fillColor="#004ba0"
            unfillColor="#FFFFFF"
            style={{marginTop: 15, marginBottom: 10}}
            textStyle={{
              textDecorationLine: 'none',
            }}
            innerIconStyle={{
              borderRadius: 9,

              borderWidth: 2, // to make it a little round increase the value accordingly
            }}
            onPress={() => this.setState({hidden: !this.state.hidden})}
          />

          {/* showHide */}

          {/* lupaPassword */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LupaPassword')}>
            <Text style={styles.lupapassword}>Lupa Password</Text>
          </TouchableOpacity>
          {/* endLupaPassword */}

          {/* btnLogin */}

          <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Masuk
            </Text>
          </TouchableOpacity>
          {/* <View >
            <Button
              title=
              color="#005b9f"

            />
          </View> */}
          {/* endBtnLogin */}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>Belum punya akun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Daftar')}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16, color: '#005b9f'}}>
                {' '}
                Daftar
              </Text>
            </TouchableOpacity>
			
		
          </View>
		  	 <Text
              style={{textAlign: 'center', color: '#42a5f5', marginTop: 20}}
              onPress={() => Linking.openURL('https://apikteknologi.id/')}>
              Desain By Apik Teknologi
            </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  lupapassword: {
    color: '#004ba0',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },

  screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
});
