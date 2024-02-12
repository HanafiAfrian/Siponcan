import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {WebView} from 'react-native-webview';
export default class AktaLahir extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/aktalahir.php';
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
	 var selectedcat12 = this.props.route.params.selectedcat12;
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

    var nikayah = this.props.route.params.nikayah;
    var namaayah = this.props.route.params.namaayah;
    var tmptayah = this.props.route.params.tmptayah;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var kwnayah = this.props.route.params.kwnayah;

    var nikibu = this.props.route.params.nikibu;
    var namaibu = this.props.route.params.namaibu;
    var tmptibu = this.props.route.params.tmptibu;
    var pilih_tanggal_pesan1 = this.props.route.params.pilih_tanggal_pesan1;
    var kwnibu = this.props.route.params.kwnibu;

    var nikanak = this.props.route.params.nikanak;
    var namaanak = this.props.route.params.namaanak;
    var selectedcat = this.props.route.params.selectedcat;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var tmtpanak = this.props.route.params.tmtpanak;
    var harilahir = this.props.route.params.harilahir;
    var pilih_tanggal_pesan2 = this.props.route.params.pilih_tanggal_pesan2;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;
    var anakke = this.props.route.params.anakke;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var beratanak = this.props.route.params.beratanak;
    var pjganak = this.props.route.params.pjganak;
    var selectedcat3 = this.props.route.params.selectedcat3;

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
            Akta Kelahiran
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              marginTop: 20,
              color: 'grey',
            }}>
            Permohonan Akta Kelahiran 
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginHorizontal: 20,
              fontSize: 16,
              color: 'grey',
            }}>
            (Khusus yang baru lahir)
          </Text>
        </View>

        <View style={{marginHorizontal: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginLeft: 0,
              }}>
                <TouchableOpacity
                 
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Upload Berkas
                  </Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <WebView
          style={styles.webViewStyle}
          source={{
            uri:
              'https://siponcan.disdukcapilsibolga.id/siponcan/aktalahir.php?nikuser=' +
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
			    '&selectedcat12=' +
              selectedcat12 +
              '&niksaksi1=' +
              niksaksi1 +
              '&namasaksi1=' +
              namasaksi1 +
              '&nokksaksi1=' +
              nokksaksi1 +
              '&umursaksi1=' +
              umursaksi1 +
              '&kwnsaksi1=' +
              kwnsaksi1 +
              '&niksaksi2=' +
              niksaksi2 +
              '&namasaksi2=' +
              namasaksi2 +
              '&nokksaksi2=' +
              nokksaksi2 +
              '&umursaksi2=' +
              umursaksi2 +
              '&kwnsaksi2=' +
              kwnsaksi2 +
              '&nikayah=' +
              nikayah +
              '&namaayah=' +
              namaayah +
              '&tmptayah=' +
              tmptayah +
              '&pilih_tanggal_pesan=' +
              pilih_tanggal_pesan +
              '&kwnayah=' +
              kwnayah +
              '&nikibu=' +
              nikibu +
              '&namaibu=' +
              namaibu +
              '&tmptibu=' +
              tmptibu +
              '&pilih_tanggal_pesan1=' +
              pilih_tanggal_pesan1 +
              '&kwnibu=' +
              kwnibu +
              '&nikanak=' +
              nikanak +
              '&namaanak=' +
              namaanak +
              '&selectedcat=' +
              selectedcat +
              '&selectedcat1=' +
              selectedcat1 +
              '&tmtpanak=' +
              tmtpanak +
              '&harilahir=' +
              harilahir +
              '&pilih_tanggal_pesan2=' +
              pilih_tanggal_pesan2 +
              '&pilih_jam_pesan=' +
              pilih_jam_pesan +
              '&anakke=' +
              anakke +
              '&selectedcat2=' +
              selectedcat2 +
              '&beratanak=' +
              beratanak +
              '&pjganak=' +
              pjganak +
              '&selectedcat3=' +
              selectedcat3,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
		 <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('AktaLahirsaksi2', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
selectedcat12 : selectedcat12,
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

                    nikayah: nikayah,
                    namaayah: namaayah,
                    tmptayah: tmptayah,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    kwnayah: kwnayah,

                    nikibu: nikibu,
                    namaibu: namaibu,
                    tmptibu: tmptibu,
                    pilih_tanggal_pesan1: pilih_tanggal_pesan1,
                    kwnibu: kwnibu,

                    nikanak: nikanak,
                    namaanak: namaanak,
                    selectedcat: selectedcat,
                    selectedcat1: selectedcat1,
                    tmtpanak: tmtpanak,
                    harilahir: harilahir,
                    pilih_tanggal_pesan2: pilih_tanggal_pesan2,
                    pilih_jam_pesan: pilih_jam_pesan,
                    anakke: anakke,
                    selectedcat2: selectedcat2,
                    beratanak: beratanak,
                    pjganak: pjganak,
                    selectedcat3: selectedcat3,
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

    marginTop: 10,
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
    padding: 5,
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
    padding: 10,

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
