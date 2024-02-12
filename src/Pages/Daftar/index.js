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
import {ScrollView} from 'react-native-gesture-handler';

export default class Daftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nohp: '',
      nik: '',
      password: '',
      password1: '',
      hidden: true,
      hidden2: true,
      listData: [],
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/register.php';
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
    var str = this.state.nik;

    var res = str.substring(0, 4);

    if (res == '1234') {
      alert('NIK Salah');
    } else if (res == '0123') {
      alert('NIK Salah');
    } else if (res == '0000') {
      alert('NIK Salah');
    } else if (res == '1111') {
      alert('NIK Salah');
    } else if (res == '2222') {
      alert('NIK Salah');
    } else if (res == '3333') {
      alert('NIK Salah');
    } else if (res == '4444') {
      alert('NIK Salah');
    } else if (res == '5555') {
      alert('NIK Salah');
    } else if (res == '6666') {
      alert('NIK Salah');
    } else if (res == '7777') {
      alert('NIK Salah');
    } else if (res == '8888') {
      alert('NIK Salah');
    } else if (res == '9999') {
      alert('NIK Salah');
    } else if (res == '9876') {
      alert('NIK Salah');
    } else if (this.state.nama == '') {
      alert('Silakan Isi Nama Lengkap');
    } else if (this.state.nohp == '') {
      alert('Silakan Isi Nomor Telepon');
    } else if (this.state.nohp.length < 11) {
      alert('Input Nomor Telepon Kurang');
    } else if (this.state.nik == '') {
      alert('Silakan Isi NIK');
    } else if (this.state.nik.length < 16) {
      alert('Input NIK Kurang');
    } else if (this.state.password == '') {
      alert('Silakan Isi Password');
    } else if (this.state.password1 == '') {
      alert('Silakan Isi Konfirm Password');
    } else if (this.state.password != this.state.password1) {
      alert('Konfirm Password Salah');
    } else if (this.state.password.length < 6) {
      alert('Input Password Kurang');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=daftar';

        var nama = this.state.nama;
        var nohp = this.state.nohp;
        var nik = this.state.nik;
        var email = this.state.email;
        var password = this.state.password;
        var password1 = this.state.password1;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'nama=' +
          nama +
          '&nohp=' +
          this.state.nohp +
          '&email=' +
          this.state.email +
          '&nik=' +
          nik +
          '&password=' +
          password,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
            alert(
              'Registar Berhasil, Silahkan Login Menggunakan NIK dan Password anda',
            );
            this.props.navigation.replace('Login');
          }
 else if (responseJson == 'false') {
            alert('NIK Sudah Terdaftar');
          }
		  
		  else if (responseJson == 'salah') {
            alert('No Telepon Sudah Terdaftar');
          }
        });
    }
  }

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontSize: 32, color: '#004ba0'}}>
            Pendaftaran
          </Text>
          {/* undrawimage */}

          {/* <Image
                        source={Iconsiponcan}
                        style={{
                            width: 200,
                            height: 200,
                            marginTop: 30,
                            alignSelf: 'center',
                            backgroundColor: 'red'
                        }}
                    /> */}
          {/* undrawimage */}

          {/* noHp */}
          <TextInput
            label="Nama Lengkap (Sesuai KTP)"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            style={{backgroundColor: 'white', marginTop: 35}}
            value={this.state.nama}
            onChangeText={text => this.setState({nama: text})}
          />
          {/* endNoHp */}
          {/* nik */}
          <TextInput
            label="NIK"
            maxLength={16}
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            keyboardType="numeric"
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.nik}
            onChangeText={text => this.setState({nik: text})}
          />

          {/* noHp */}
          <TextInput
            label="No. HP"
			  maxLength={13}
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            keyboardType="numeric"
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.nohp}
            onChangeText={text => this.setState({nohp: text})}
          />
          {/* endNoHp */}

          <TextInput
            label="Email Aktif"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          {/* endNik */}
          {/* password */}
          <TextInput
            label="Password (Min. 6 Karakter)"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          <TextInput
            label="Password"
            theme={{roundness: 30}}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{backgroundColor: 'white', marginTop: 15}}
            value={this.state.password1}
            onChangeText={text => this.setState({password1: text})}
          />

          <BouncyCheckbox
            text="Show Password"
            fillColor="#004ba0"
            unfillColor="#FFFFFF"
            style={{marginTop: 15, marginBottom: 10, width: '40%'}}
            textStyle={{
              textDecorationLine: 'none',
            }}
            innerIconStyle={{
              borderRadius: 9,

              borderWidth: 2, // to make it a little round increase the value accordingly
            }}
            onPress={() =>
              this.setState({
                hidden: !this.state.hidden,
                hidden2: !this.state.hidden2,
              })
            }
          />

          {/* showHide */}

          {/* btnLogin */}

          {/* <View style={styles.screenContainer}>
            <Button
              title="DAFTAR"
              color="#005b9f"
              onPress={() => this.klikSimpan()}
            />
          </View> */}

          <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Daftar
            </Text>
          </TouchableOpacity>
          {/* endBtnLogin */}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'grey'}}>Sudah punya akun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16, color: '#004ba0'}}>
                {' '}
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 20,
  },

  screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
});
