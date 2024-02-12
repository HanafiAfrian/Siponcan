import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import {color} from 'react-native-reanimated';
import {WebView} from 'react-native-webview';

import Icon from 'react-native-vector-icons/Ionicons';
export default class AktaMatiberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kkppkematian.php';
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
        alert('Lanjut Ke Formulir Akte Kematian');
        this.props.navigation.replace('AktaMati2', {
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
   var namakepkel = this.props.route.params.namakepkel;

    var niksaksi1 = this.props.route.params.niksaksi1;
    var namasaksi1 = this.props.route.params.namasaksi1;
    var nokksaksi1 = this.props.route.params.nokksaksi1;
    var umursaksi1 = this.props.route.params.umursaksi1;
    var kwnsaksi1 = this.props.route.params.kwnsaksi1;
    var niksaksi2 = this.props.route.params.niksaksi2;
    var namasaksi2 = this.props.route.params.namasaksi2;
    var nokksaksi2 = this.props.route.params.nokksaksi2;
    var umursaksi2 = this.props.route.params.umursaksi2;
    var kwnsaksi2 = this.props.route.params.kwnsaksi2;

    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;
    var nikjns = this.props.route.params.nikjns;
    var namajns = this.props.route.params.namajns;
    var namaibujns = this.props.route.params.namaibujns;
    var selectedcat = this.props.route.params.selectedcat;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var tpmeninggal = this.props.route.params.tpmeninggal;

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
            Peristiwa Penting Kematian 
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            
            style={{marginBottom: 20, ...styles.headerOff}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
              Upload Berkas
            </Text>
          </TouchableOpacity>

       

         
        </View>
 
        <WebView
          style={styles.webViewStyle}
          source={{
            uri:
              'https://siponcan.disdukcapilsibolga.id/siponcan/kkppmeninggal.php?nikuser=' +
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
			            '&namakepkel=' +
              namakepkel +
            
              '&pilih_tanggal_pesan=' +
              pilih_tanggal_pesan +
              '&pilih_jam_pesan=' +
              pilih_jam_pesan +
              '&nikjns=' +
              nikjns +
              '&namajns=' +
              namajns +
              '&namaibujns=' +
              namaibujns +
              '&selectedcat=' +
              selectedcat +
              '&selectedcat1=' +
              selectedcat1 +
              '&tpmeninggal=' +
              tpmeninggal,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
		  <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('KKPPMatijenazah', {
                nikuser: nikuser,
                nikpmhon: nikpmhon,
                namapmhon: namapmhon,
                nokkpmhon: nokkpmhon,
                umurpmhon: umurpmhon,

                niksaksi1: niksaksi1,
                namasaksi1: namasaksi1,
                nokksaksi1: nokksaksi1,
                umursaksi1: umursaksi1,
                kwnsaksi1: kwnsaksi1,
                niksaksi2: niksaksi2,
                namasaksi2: namasaksi2,
                nokksaksi2: nokksaksi2,
                umursaksi2: umursaksi2,
                kwnsaksi2: kwnsaksi2,
                pilih_tanggal_pesan: pilih_tanggal_pesan,
                pilih_jam_pesan: pilih_jam_pesan,
                nikjns: nikjns,
                namajns: namajns,
                namaibujns: namaibujns,
                selectedcat: selectedcat,
                selectedcat1: selectedcat1,
                tpmeninggal: tpmeninggal,
              })
            }
   
 style={{marginBottom: 20, marginLeft: -220,...styles.headerOff1}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
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

  btnStyle: {
    padding: 6,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#005b9f',
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

    marginTop: 10,
  },  
  btnStyleKirim: {
    padding: 6,
    width: '50%',
    height: 50,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#005b9f',
    marginBottom: 60,
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
