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
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';
export default class SuratPindahberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kkpppindah.php';
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
        alert('Data Berhasil Di Simpan');
        this.props.navigation.replace('Home', {
          nikuser: nikuser,
          nikpmhon: nikpmhon,
          namapmhon: namapmhon,
          nokkpmhon: nokkpmhon,
          umurpmhon: umurpmhon,
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
    var selectedcat = this.props.route.params.selectedcat;
    var provinsi = this.props.route.params.provinsi;
    var kabupaten = this.props.route.params.kabupaten;
    var kecamatan = this.props.route.params.kecamatan;
    var kelurahan = this.props.route.params.kelurahan;
    var alamat = this.props.route.params.alamat;
    var kdpos = this.props.route.params.kdpos;

    var provinsitj = this.props.route.params.provinsitj;
    var kabupatentj = this.props.route.params.kabupatentj;
    var kectj = this.props.route.params.kectj;
    var kltj = this.props.route.params.kltj;
    var alamattj = this.props.route.params.alamattj;
    var kdpostj = this.props.route.params.kdpostj;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var selectedcat4 = this.props.route.params.selectedcat4;

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
           Peristiwa Penting  Pindah 
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
              'https://siponcan.disdukcapilsibolga.id/siponcan/kkppsuratpindah.php?nikuser=' +
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
              '&selectedcat=' +
              selectedcat +
              '&provinsi=' +
              provinsi +
              '&kabupaten=' +
              kabupaten +
              '&kecamatan=' +
              kecamatan +
              '&kelurahan=' +
              kelurahan +
              '&alamat=' +
              alamat +
              '&kdpos=' +
              kdpos +
              '&provinsitj=' +
              provinsitj +
              '&kabupatentj=' +
              kabupatentj +
              '&kectj=' +
              kectj +
              '&kltj=' +
              kltj +
              '&alamattj=' +
              alamattj +
              '&kdpostj=' +
              kdpostj +
              '&selectedcat1=' +
              selectedcat1 +
              '&selectedcat2=' +
              selectedcat2 +
              '&selectedcat3=' +
              selectedcat3 +
              '&selectedcat4=' +
              selectedcat4,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
		<TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('KKPPSuratPindahtujuan2', {
                nikuser: nikuser,
                nikpmhon: nikpmhon,
                namapmhon: namapmhon,
                nokkpmhon: nokkpmhon,
                umurpmhon: umurpmhon,
                selectedcat: selectedcat,
                provinsi: provinsi,
                kabupaten: kabupaten,
                kecamatan: kecamatan,
                kelurahan: kelurahan,
                alamat: alamat,
                kdpos: kdpos,

                provinsitj: provinsitj,
                kabupatentj: kabupatentj,
                kectj: kectj,
                kltj: kltj,
                alamattj: alamattj,
                kdpostj: kdpostj,
                selectedcat1: selectedcat1,
                selectedcat2: selectedcat2,
                selectedcat3: selectedcat3,
                selectedcat4: selectedcat4,
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
