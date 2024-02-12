import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {WebView} from 'react-native-webview';
export default class KtpHilangberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/ktphilang.php';
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


 var nikpr = this.props.route.params.nikpr;
  var namapr = this.props.route.params.namapr;
   var temptlahir = this.props.route.params.temptlahir;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
	 var selectedcat = this.props.route.params.selectedcat;
	var selectedcat1 = this.props.route.params.selectedcat1;
	var noketpolisi = this.props.route.params.noketpolisi;
	var pilih_tanggal_selesai = this.props.route.params.pilih_tanggal_selesai;
var lokasihilang = this.props.route.params.lokasihilang;
    return (
    <View style={styles.container}>
        <View style={styles.headerTitle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', {nikuser:nikuser})}
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
              fontSize: 20,
              color: 'white',
              marginTop: 5,
            }}>
            Kartu Tanda Penduduk Hilang
          </Text>
        </View>


        <View style={{marginHorizontal: 20}}>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
          
                style={{marginBottom: 10, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Upload Berkas
                </Text>
              </TouchableOpacity>

             
            </View>
          </View>
        </View>
	
      
       <WebView
          style={styles.webViewStyle}
          source={{
            uri:
              'https://siponcan.disdukcapilsibolga.id/siponcan/ktphilang.php?nikuser=' +
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
			  
			    '&nikpr=' +
              nikpr +
			    '&namapr=' +
              namapr +			  
			      '&temptlahir=' +
              temptlahir +
			  
			      '&pilih_tanggal_pesan=' +
              pilih_tanggal_pesan +
			  
			      '&selectedcat=' +
              selectedcat +
			      '&selectedcat1=' +
              selectedcat1 +
			    '&noketpolisi=' +
              noketpolisi +
			  '&pilih_tanggal_selesai=' +
              pilih_tanggal_selesai +
			  '&lokasihilang=' +
              lokasihilang ,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
		
		<TouchableOpacity
                onPress={() => this.props.navigation.navigate('KtpHilangdata', {nikuser:nikuser,
				nikpmhon:nikpmhon,
				})}
                    style={{marginBottom: 20, marginLeft: -220,...styles.headerOff1}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: '#005b9f'}}>
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

    marginTop: -20,
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
