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
import {WebView} from 'react-native-webview';

import Icon from 'react-native-vector-icons/Ionicons';

export default class AktaCeraiberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/aktecerai.php';
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


var niksuami = this.props.route.params.niksuami;
	var namasuami = this.props.route.params.namasuami;
	var nikistri = this.props.route.params.nikistri;
	var namaistri = this.props.route.params.namaistri; 
		var yangmengajukan = this.props.route.params.yangmengajukan; 
    var noaktapmhon = this.props.route.params.noaktapmhon;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var nama_pengadilan = this.props.route.params.nama_pengadilan;
    var pilih_tanggal_selesai = this.props.route.params.pilih_tanggal_selesai;
    var no_pengadilan = this.props.route.params.no_pengadilan;
	 var tmptcttpperkawinan = this.props.route.params.tmptcttpperkawinan;
	  var nosuratpenitera = this.props.route.params.nosuratpenitera;
	
    var pilih_tanggal_pesan1 = this.props.route.params.pilih_tanggal_pesan1;
    var pilih_tanggal_selesai1 = this.props.route.params.pilih_tanggal_selesai1;

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
                Akta Perceraian
          </Text>
        </View>
     <Text>	
		



     </Text>
        <View>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                   <TouchableOpacity

                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
               Upload Berkas
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
		
        </View>
        {/* upload ktp */}

        <WebView
          style={styles.webViewStyle}
          source={{
            uri:
              'https://siponcan.disdukcapilsibolga.id/siponcan/aktecerai.php?nikuser=' +
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
			  
			       '&niksuami=' +
              niksuami +
			       '&namasuami=' +
              namasuami +
			       '&nikistri=' +
              nikistri +
			       '&namaistri=' +
              namaistri +
			  
			    '&noaktapmhon=' +
              noaktapmhon +
              '&yangmengajukan=' +
              yangmengajukan +
              '&pilih_tanggal_pesan=' +
              pilih_tanggal_pesan +
              '&nama_pengadilan=' +
              nama_pengadilan +
              '&pilih_tanggal_selesai=' +
              pilih_tanggal_selesai +
			  
	
			  
			  '&tmptcttpperkawinan=' +
              tmptcttpperkawinan +
			  	'&nosuratpenitera=' +
              nosuratpenitera +
			  
              '&no_pengadilan=' +
              no_pengadilan +
              '&pilih_tanggal_pesan1=' +
              pilih_tanggal_pesan1 +
              '&pilih_tanggal_selesai1=' +
              pilih_tanggal_selesai1,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
		  <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('AktaCeraiperceraian', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
                    noaktapmhon: noaktapmhon,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    nama_pengadilan: nama_pengadilan,
                    pilih_tanggal_selesai: pilih_tanggal_selesai,
                    no_pengadilan: no_pengadilan,
                    pilih_tanggal_pesan1: pilih_tanggal_pesan1,
                    pilih_tanggal_selesai1: pilih_tanggal_selesai1,
                  })
                }
             style={{marginBottom: 20, marginLeft: -220,...styles.headerOff1}}>
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
