import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component, useEffect} from 'react';
import {Imgpos, Imgemail,Ambil} from '../../../assets/images';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 5,
      idToken: null,
      nama: '',
      telepon: '',
      alamat: '',
      metode_pembayaran: '',
      listData: [],
      listData1: [],
      listData2: [],
      idEdit: null,
      userLocation: {
        coords: {
          accuracy: 0,
          altitude: 0,
          heading: 0,
          latitude: 0,
          longitude: 0,
          speed: 0,
        },

        mocked: false,
        timestamp: 0,
      },
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/riwayat.php';
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
    this.ambilListData();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  async ambilListData() {
    var nik = this.props.route.params.nik;

    var pesan = this.state.pesan;

    await fetch(this.url + '/?op=pilihprofil&&nik=' + nik)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlahpesan: json.data.result[0].jumlahpesan});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
        this.intervalID = setTimeout(this.ambilListData.bind(this), 1000);
        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
  }


klikSimpan() {
    if (this.state.idEdit) {
      var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
    } else {
      var urlAksi = this.url + '/?op=ambilsendiri';

      var nik = this.props.route.params.nik;
      var id_pengaduan = this.props.route.params.id_pengaduan;
      var email = this.state.email;
    }

    var isSelected = false;
    fetch(urlAksi, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'nik=' +
        nik +
        '&id_pengaduan=' +
        this.props.route.params.id_pengaduan +
        '&email=' +
        this.state.email,
    })
      .then(response => response.json())
      .then(responseJson => {
        alert('Terimakasih, Silakan Ambil Berkas Anda di kantor');
        this.props.navigation.replace('Homelibur', {nikuser: nik});
      });
  }
  render() {
    var nik = this.props.route.params.nik;

    var jenis = this.props.route.params.jenis;
    var status = this.props.route.params.status;
    var creat_at = this.props.route.params.creat_at;
    var id_pengaduan = this.props.route.params.id_pengaduan;

    if (status == 'Verifikasi') {
      this.props.navigation.replace('Riwayatlibur', {nik: nik});
    } else if (status == 'Ditolak') {
      this.props.navigation.replace('Riwayatlibur', {nik: nik});
    }

    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <SafeAreaView style={styles.container}>
          <View style={{}}>
            {/* <Text>
              {nik}
              {jenis}
              {status}
              {creat_at}
              {id_pengaduan}
            </Text> */}

            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 40,
                color: 'black',
              }}>
              Pilih Kemana Dokumen Akan Dikirim
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{}}>
			  
			   <TouchableOpacity
                    onPress={() => this.klikSimpan()}>
                  <View style={styles.boxShadow}>
                   <Image
                      source={Ambil}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />
                    <Text style={styles.dari}>Ambil Sendiri</Text>
                  </View>
                </TouchableOpacity>
               
              </View>
              <View style={{}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.replace('Riwayatsendposlibur', {
                      nik: nik,
                      jenis: jenis,
                      status: status,
                      creat_at: creat_at,
                      id_pengaduan: id_pengaduan,
                    })
                  }>
                  <View style={styles.boxShadow}>
                    <Image
                      source={Imgpos}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />
                    <Text style={styles.dari}>Kirim Lewat POS</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 30,
    margin: 10,
    marginBottom: 40,
  },

  chatContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imgProfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  user: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },

  waktu: {
    color: 'orange',
    position: 'absolute',
    marginLeft: -100,
    fontSize: 12,
    marginTop: -28,
  },

  dari: {
    color: 'black',
    textAlign: 'center',
  },

  lastText: {
    fontSize: 16,
    color: 'grey',
    fontSize: 17,
    marginTop: 10,
  },

  boxShadow: {
    backgroundColor: 'white',
    elevation: 4,
    shadowRadius: 4,
    shadowColor: 'grey',
    width: 100,
    height: 100,
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
});
