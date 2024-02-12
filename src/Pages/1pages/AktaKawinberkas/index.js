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
import {Divider, TextInput} from 'react-native-paper';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {color} from 'react-native-reanimated';
import {WebView} from 'react-native-webview';

export default class AktaKawinberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://mutawif.co.id/apk/siponcan/api/aktekwain.php';
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
    var niksaksi1 = this.props.route.params.niksaksi1;
    var namasaksi1 = this.props.route.params.namasaksi1;
    var nokksaksi1 = this.props.route.params.nokksaksi1;
    var umursaksi1 = this.props.route.params.umursaksi1;
    var kwnsaksi1 = this.props.route.params.kwnsaksi1;
    var niksaksi2 = this.props.route.params.niksaksi2;
    var namasaksi2 = this.props.route.params.namasaksi2;
    var nokksaksi2 = this.props.route.params.nokksaksi2;
    var umurksaksi2 = this.props.route.params.umurksaksi2;
    var kwnsaksi2 = this.props.route.params.kwnsaksi2;

    var nik_ayah_s = this.props.route.params.nik_ayah_s;
    var nama_ayah_s = this.props.route.params.nama_ayah_s;
    var nik_ibu_s = this.props.route.params.nik_ibu_s;
    var nama_ibu_s = this.props.route.params.nama_ibu_s;
    var nik_ayah_is = this.props.route.params.nik_ayah_is;
    var nama_ayah_is = this.props.route.params.nama_ayah_is;
    var nik_ibu_is = this.props.route.params.nik_ibu_is;
    var nama_ibu_is = this.props.route.params.nama_ibu_is;
    var selectedcat = this.props.route.params.selectedcat;
    var kawin_ke = this.props.route.params.kawin_ke;
    var istri_ke = this.props.route.params.istri_ke;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var pilih_tanggal_selesai = this.props.route.params.pilih_tanggal_selesai;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;

    var selectedcat1 = this.props.route.params.selectedcat1;
    var nm_organisasi = this.props.route.params.nm_organisasi;
    var ket_organisasi = this.props.route.params.ket_organisasi;

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
            Akta Perkawinan
          </Text>
        </View>
        {/* <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              marginTop: 20,
              color: 'grey',
            }}>
            Permohonan Akta Perkawinan
          </Text>
        </View> */}
        <View>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('AktaKawin', {nikuser: nikuser})
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Pemohon
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('AktaKawinsaksi', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
                  })
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Saksi
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('AktaKawinperkawinan', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umurksaksi2: umurksaksi2,
                    kwnsaksi2: kwnsaksi2,
                  })
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Perkawinan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('AktaKawinberkas', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umurksaksi2: umurksaksi2,
                    kwnsaksi2: kwnsaksi2,
                    nik_ayah_s: nik_ayah_s,
                    nama_ayah_s: nama_ayah_s,
                    nik_ibu_s: nik_ibu_s,
                    nama_ibu_s: nama_ibu_s,
                    nama_ayah_is: nama_ayah_is,
                    nik_ibu_is: nik_ibu_is,
                    nama_ibu_is: nama_ibu_is,
                    selectedcat: selectedcat,
                    kawin_ke: kawin_ke,
                    istri_ke: istri_ke,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    pilih_tanggal_selesai: pilih_tanggal_selesai,
                    pilih_jam_pesan: pilih_jam_pesan,
                    selectedcat1: selectedcat1,
                    nm_organisasi: nm_organisasi,
                    ket_organisasi: ket_organisasi,
                  })
                }
                style={{marginBottom: 20, ...styles.header}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Berkas
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <WebView
          style={styles.webViewStyle}
          source={{
            uri:
              'https://mutawif.co.id/apk/siponcan/aktekawin.php?nikuser=' +
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
              '&umurksaksi2=' +
              umurksaksi2 +
              '&kwnsaksi2=' +
              kwnsaksi2 +
              '&nik_ayah_s=' +
              nik_ayah_s +
              '&nama_ayah_s=' +
              nama_ayah_s +
              '&nik_ibu_s=' +
              nik_ibu_s +
              '&nama_ibu_s=' +
              nama_ibu_s +
              '&nik_ayah_is=' +
              nik_ayah_is +
              '&nama_ayah_is=' +
              nama_ayah_is +
              '&nik_ibu_is=' +
              nik_ibu_is +
              '&nama_ibu_is=' +
              nama_ibu_is +
              '&selectedcat=' +
              selectedcat +
              '&kawin_ke=' +
              kawin_ke +
              '&istri_ke=' +
              istri_ke +
              '&pilih_tanggal_pesan=' +
              pilih_tanggal_pesan +
              '&pilih_tanggal_selesai=' +
              pilih_tanggal_selesai +
              '&pilih_jam_pesan=' +
              pilih_jam_pesan +
              '&selectedcat1=' +
              selectedcat1 +
              '&nm_organisasi=' +
              nm_organisasi +
              '&ket_organisasi=' +
              ket_organisasi,
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
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
