import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component, useEffect} from 'react';
import {ProfilePhoto, ProfileWanita} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TextInput} from 'react-native-paper';

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
      var urlAksi = this.url + '/?op=konfirmpos';

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
        '&alamat=' +
        this.state.alamat +
        '&telp=' +
        this.state.telp,
    })
      .then(response => response.json())
      .then(responseJson => {
        alert('Terimakasih, Berkas Anda Akan Segera Dikirim');
        this.props.navigation.replace('Homelibur', {nikuser: nik});
      });
  }

  render() {
    var nik = this.props.route.params.nik;

    var jenis = this.props.route.params.jenis;
    var status = this.props.route.params.status;
    var creat_at = this.props.route.params.creat_at;

    var id_pengaduan = this.props.route.params.id_pengaduan;

    return (
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <SafeAreaView style={styles.container}>
          <View style={{}}>
            {/* <Text>
   {nik}
   {jenis}
   {status}
   {creat_at}
	   {id_pengaduan}

                      </Text> */}

            <View style={{}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('Riwayatsendemaillibur', {
                    nik: nik,
                    jenis: jenis,
                    status: status,
                    creat_at: creat_at,
                  })
                }>
                <Text style={styles.dari}>Masukkan Alamat</Text>
              </TouchableOpacity>
              <TextInput
                label="Alamat Lengkap"
                mode="outlined"
                multiline
                numberOfLines={4}
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.alamat}
                onChangeText={text => this.setState({alamat: text})}
              />
              <TextInput
                label="No Telepon"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25, height: 56}}
                theme={{roundness: 10}}
                value={this.state.telp}
                onChangeText={text => this.setState({telp: text})}
              />
              <TouchableOpacity
                style={styles.screenContainer}
                onPress={() => this.klikSimpan()}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                  Konfirmasi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  screenContainer: {
    padding: 15,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
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
    fontSize: 16,
    color: 'black',

    fontWeight: '600',
    marginBottom: 10,
  },

  lastText: {
    fontSize: 16,
    color: 'grey',
    fontSize: 17,
    marginTop: 10,
  },
});
