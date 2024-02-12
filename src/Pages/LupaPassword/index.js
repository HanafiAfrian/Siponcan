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
    if (this.state.nik == '') {
      alert('Masukkan NIK');
      // } else if (this.state.nik.length < 16) {
      //   alert('NIK Tidak Valid');
    } else if (this.state.no_telp == '') {
      alert('Masukkan No.Handphone');
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
        var no_telp = this.state.no_telp;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'nik=' + this.state.nik + '&no_telp=' + this.state.no_telp,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'ok') {
            this.props.navigation.navigate('Konfirmpassword', {
              nik: this.state.nik,
            });
          } else if (responseJson == 'nonaktif') {
            alert('Akun Anda Belum Aktif Silahkan Coba Beberapa Saat Lagi');
          } else {
            alert('Nik Atau Nomor Telepon Tidak Sesuai');
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
              marginTop: -90,
              alignSelf: 'center',
              marginBottom: 50,
			   resizeMode: 'contain',
            }}
          />
          {/* undrawimage */}
          <Text
            style={{
              textAlign: 'center',
              // fontSize: 16,
              fontStyle: 'italic',
              color: '#004ba0',
              margin: 10,
              marginBottom: 20,
            }}>
            Isikan NIK dan Nomor Handphone Untuk Mereset Password Anda
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
            label="No. Handphone"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            keyboardType="numeric"
            style={{backgroundColor: 'white', marginBottom: 30, marginTop: 10}}
            value={this.state.no_telp}
            onChangeText={text => this.setState({no_telp: text})}
          />

          {/* showHide */}

          {/* endLupaPassword */}

          {/* btnLogin */}

          {/* <Button
              title="Konfirmasi"
              color="#005b9f"
              onPress={() => this.klikSimpan()}
            /> */}
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
