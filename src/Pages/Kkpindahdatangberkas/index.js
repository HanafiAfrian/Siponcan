import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
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
import {WebView} from 'react-native-webview';
console.disableYellowBox = true;
export default class Kkpindahdatangberkas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData1: [],
    };
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kkpindahdatang.php';
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
    var kkbarupmhon = this.props.route.params.kkbarupmhon;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

    var tujuanpmhon = this.props.route.params.tujuanpmhon;
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
            KK Baru
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
            Permohonan KK Baru
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginHorizontal: 20,
              color: 'grey',
            }}>
            (Pindah Antar Kelurahan/Kecamatan)
          </Text>
        </View>

        <View style={{marginHorizontal: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Kkpindahdatang', {
                    nikuser: nikuser,
                  })
                }
                style={{
                  marginBottom: 20,

                  ...styles.headerOff,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Pemohon
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Kkpindahdatangklasifikasi', {
                    nikuser: nikuser,
                  })
                }
                style={{
                  marginBottom: 20,

                  ...styles.headerOff,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Kepindahan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(
                    'Kkpindahdatangjnskepindahan',
                    {
                      nikuser: nikuser,
                    },
                  )
                }
                style={{
                  marginBottom: 20,

                  ...styles.headerOff,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Jns.Kepindahan
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('KkpindahdatangWna', {
                    nikuser: nikuser,
                  })
                }
                style={{
                  marginBottom: 20,

                  ...styles.headerOff,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Data WNA
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Kkpindahdatangberkas', {
                    nikuser: nikuser,
                    kkbarupmhon: this.state.kkbarupmhon,
                    nikpmhon: this.state.nikpmhon,
                    namapmhon: this.state.namapmhon,
                    nokkpmhon: this.state.nokkpmhon,
                    umurpmhon: this.state.umurpmhon,
                    kwnpmhon: this.state.kwnpmhon,
                    tujuanpmhon: this.state.tujuanpmhon,
                  })
                }
                style={{marginBottom: 20, ...styles.header}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
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
              'https://siponcan.disdukcapilsibolga.id/siponcan/kkpindahdatang.php?nikuser=' +
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
              '&tujuanpmhon=' +
              tujuanpmhon +
              '&kkbarupmhon=' +
              kkbarupmhon,
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
    marginRight: 15,
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
    marginRight: 15,
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
