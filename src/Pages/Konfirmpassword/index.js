import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Iconsiponcan} from '../../../assets/images';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nik: '',
      password: '',
      password1: '',
      hidden: true,
      listData: [],
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/lupapassword.php';
  }
  componentDidMount() {
    this.ambilListData();
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
    if (this.state.password == '') {
      alert('Masukkan Password');
    } else if (this.state.password1 == '') {
      alert('Masukkan Ulang Password');
    } else if (this.state.password.length < 6) {
      alert('Password Minimal 6 Karakter');
    } else if (this.state.password1.length < 6) {
      alert('Password Minimal 6 Karakter');
    } else if (this.state.password != this.state.password1) {
      alert('Password tidak Cocok');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=konfirm';
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
        var nik = this.props.route.params.nik;
        var password = this.state.password;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'nik=' +
          this.props.route.params.nik +
          '&password=' +
          this.state.password,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'ok') {
            alert('Password Berhasil diperbaruhi');
            this.props.navigation.replace('Login');
          } else if (responseJson == 'nonaktif') {
            alert('Akun Anda Belom Aktif Silahkan Coba Beberapa Saat Lagi');
          } else {
            alert('Pasword tidak cocok');
            this.setState({email: ''});
            this.setState({password: ''});
            this.setState({nohp: ''});

            this.ambilListData();
          }
        });
    }
  }

  render() {
    var nik = this.props.route.params.nik;
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          {/* undrawimage */}

          <Image
            source={Iconsiponcan}
            style={{
             width: '100%',
               height: 80,
             marginTop: -90,
              alignSelf: 'center',
              marginBottom: 20,
			   resizeMode: 'contain',
            }}
          />
          {/* undrawimage */}

          {/* nik */}
          <Text
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#004ba0',
              marginBottom: 30,
            }}>
            Isikan Password Baru
          </Text>
          {/* endNik */}
          <TextInput
            label="Password"
            theme={{roundness: 20}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          {/* password */}

          <TextInput
            label="Ketik Ulang Password"
            theme={{roundness: 20}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.password1}
            onChangeText={text => this.setState({password1: text})}
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

          {/* endLupaPassword */}

          {/* btnLogin */}

          {/* <View style={styles.screenContainer}>
            <Button
              title="Confirm"
              color="#005b9f"
              onPress={() => this.klikSimpan()}
            />
          </View> */}

        <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Konfirmasi
            </Text>
          </TouchableOpacity>

          {/* endBtnLogin */}
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
