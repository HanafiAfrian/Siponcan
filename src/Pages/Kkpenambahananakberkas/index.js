import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

import {WebView} from 'react-native-webview';

console.disableYellowBox = true;

export default class Kkpenambahananakberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kktambahanak.php';
  }

  componentDidMount() {
    this.ambilListData1();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  klikUpdatekonfirm() {
    var nama = this.props.route.params.nikuser;
    if (this.props.route.params.nikuser == '') {
      alert('Silakan masukkan nama dan alamat');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url1 + '/?op=updatekonfirm';
      } else {
        var urlAksi = this.url1 + '/?op=updatekonfirm';
      }

      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'nama=' + nama,
      })
        .then(response => response.json())
        .then(json => {});
    }
  }
  async ambilListData1() {
    var nama = this.props.route.params.nikuser;
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
	  var kwnpmhon = this.props.route.params.kwnpmhon;
    var pesan = this.state.pesan;
    let control_Local, control_Online;

    let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
    var username = 'Mutawif';
    await fetch(this.url1 + '/?op=hitungkonfirm&nama=' + nama)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlah: json.data.result[0].jumlah});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
        this.intervalID = setTimeout(this.ambilListData1.bind(this), 1000);
        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });

    if (this.state.jumlah == 1) {
      this.klikUpdatekonfirm();

      setTimeout(() => {
        alert('Lanjut Ke Formulir Akte Kelahiran Anak');
        this.props.navigation.replace('AktaLahir2', {
          nikuser: nikuser,
          nikpmhon: nikpmhon,
          namapmhon: namapmhon,
          nokkpmhon: nokkpmhon,
          umurpmhon: umurpmhon,
		            kwnpmhon: kwnpmhon,
        });
      }, 5000);
    }
  }

  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

    var nm_anak = this.props.route.params.nm_anak;
    var selectedcat = this.props.route.params.selectedcat;
    var temp_lahir = this.props.route.params.temp_lahir;

    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var shdk = this.props.route.params.shdk;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var nm_ayah = this.props.route.params.nm_ayah;
    var nm_ibu = this.props.route.params.nm_ibu;

    return (
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Home', {nikuser: nikuser})
            }
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              marginLeft: 15,
            }}>
            <Icon name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
            }}>
         Peristiwa Penting Kelahiran
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <View style={{backgroundColor: 'white'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                marginTop: 20,
                color: 'grey',
              }}>
              Penambahan Anak di KK{' '}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>
              (Khusus Anak Baru Lahir){' '}
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
             
              style={{marginBottom: 20, ...styles.headerOff}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
             Upload Berkas
              </Text>
            </TouchableOpacity>

          

           
          </View>
        </View>
        <WebView
          style={styles.webViewStyle}
          source={{
            uri:
              'https://siponcan.disdukcapilsibolga.id/siponcan/kktambahanak.php?nikuser=' +
              nikuser +
              '&nikpmhon=' +
              nikpmhon +
              '&namapmhon=' +
              namapmhon +
              '&nokkpmhon=' +
              nokkpmhon +
              '&umurpmhon=' +
              umurpmhon +
              '&kwnpmhon=' +
              kwnpmhon +
              '&nm_anak=' +
              nm_anak +
              '&selectedcat=' +
              selectedcat +
              '&temp_lahir=' +
              temp_lahir +
              '&pilih_tanggal_pesan=' +
              pilih_tanggal_pesan +
              '&pilih_jam_pesan=' +
              pilih_jam_pesan +
              '&selectedcat1=' +
              selectedcat1 +
              '&selectedcat2=' +
              selectedcat2 +
              '&shdk=' +
              shdk +
              '&selectedcat3=' +
              selectedcat3 +
              '&nm_ayah=' +
              nm_ayah +
              '&nm_ibu=' +
              nm_ibu,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
		
		 <TouchableOpacity
              onPress={() =>
                this.props.navigation.replace('Kkpenambahananakdata', {
                  nikuser: nikuser,
                  nikpmhon: nikpmhon,
                  namapmhon: namapmhon,
                  nokkpmhon: nokkpmhon,
                  umurpmhon: umurpmhon,
                  kwnpmhon: kwnpmhon,
                })
              }
          
 style={{marginBottom: 0, marginLeft: -220,...styles.headerOff1}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
             Sebelumnya
              </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  textStyle: {
    color: 'white',
    fontSize: 40,
  },
  pagerStyle: {
    flex: 1,

    backgroundColor: 'white',
  },
   headerOff1: {
    fontSize: 18,
    color: '#005b9f',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',

    marginTop: 0,
  },  

  btnStyle: {
    padding: 6,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#005b9f',
  },

  btnStyleKirim: {
    padding: 6,
    width: '50%',
    height: 50,
    marginBottom: 60,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#005b9f',
  },

  header: {
    fontSize: 18,
    color: '#005b9f',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#2286c3',
    borderBottomWidth: 3,
    marginTop: 20,
  },
  headerOff: {
    fontSize: 18,
    color: '#005b9f',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',

    marginTop: 20,
  },

  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    elevation: 1,
  },
});
