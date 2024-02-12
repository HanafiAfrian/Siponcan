import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {ProfilePhoto, ProfileWanita} from '../../../assets/images';

export default class Akun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      idEdit: null,
    };

    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/ambilakun.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var nik = this.props.route.params.nik;

    await fetch(this.url + '/?op=pilihprofil&nik=' + nik)
      .then(response => response.json())
      .then(json => {
        this.setState({nama: json.data.result[0].nama});
        this.setState({no_telp: json.data.result[0].no_telp});
        this.setState({nik: json.data.result[0].nik});
        this.setState({email: json.data.result[0].email});

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
    } else if (this.state.password2 == '') {
      alert('Masukkan Ulang Password');
    } else if (this.state.password.length < 6) {
      alert('Password Minimal 6 Karakter');
    } else if (this.state.password2.length < 6) {
      alert('Konfrimasi Password Minimal 6 Karakter');
    } else if (this.state.password != this.state.password2) {
      alert('Konfirmasi Password tidak Cocok');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=gantipassword';

        var nik = this.props.route.params.nik;
        var password = this.state.password;
        var password2 = password2;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'nik=' + nik + '&password=' + this.state.password,
      })
        .then(response => response.json())
        .then(responseJson => {
          alert('Password Berhasil di Update');
          this.props.navigation.replace('Akunlibur', {nik: nik});
        });
    }
  }
  render() {
    var nik = this.props.route.params.nik;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#005b9f',
            height: 180,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View style={{marginTop: 20, marginLeft: 20}}>
            <TouchableOpacity
              style={styles.iconbackstyle}
              onPress={() =>
                this.props.navigation.replace('Akunlibur', {nik: nik})
              }>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20, marginLeft: -20}}>
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Data Akun
            </Text>
          </View>
          <View />
        </View>
        <View
          style={{
            marginTop: -120,
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 20,
            padding: 10,
            elevation: 3,
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              label="Password"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                width: '100%',
              }}
              theme={{roundness: 10}}
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              label="Konfirmasi Password"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                width: '100%',
              }}
              theme={{roundness: 10}}
              value={this.state.password2}
              onChangeText={text => this.setState({password2: text})}
            />
          </View>

          <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Konfirmasi
            </Text>
          </TouchableOpacity>

          {/* <View style={styles.garis}></View> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // marginTop: -20,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,
  },

  menustyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 25,
  },

  screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
  menustyle1: {
    marginRight: 110,
    marginTop: -25,
  },
  garis: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    marginTop: 10,
  },

  logoiconmail: {
    width: 20,
    height: 20,
  },

  menutext: {
    color: 'grey',
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    // marginBottom: -20,
  },
  welcome1: {
    margin: 10,
    textAlign: 'center',
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  welcome2: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
  },
});
