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
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

export default class Pengaduanlibur extends Component {
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
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kritik.php';
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
    var nikuser = this.props.route.params.nikuser;

    var pesan = this.state.pesan;

    await fetch(this.url + '/?op=pilihprofil&&nik=' + nikuser)
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
      var urlAksi = this.url + '/?op=pesan';

      var nikuser = '123456';
      var nama = 'l';
      var pesan = 's';
    }

    var isSelected = false;
    fetch(urlAksi, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'nikuser=' +
        this.props.route.params.nikuser +
        '&nama=' +
        this.props.route.params.nama +
        '&pesan=' +
       this.state.pesan,
    })
      .then(response => response.json())
      .then(responseJson => {
        alert('Terimakasih, Atas Kritik dan Saran Anda');
        this.props.navigation.replace('Homelibur', {nikuser: nikuser});
      });
  }

  render() {
    var nikuser = this.props.route.params.nikuser;
 var nama = this.props.route.params.nama;

    return (
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Homelibur', {nikuser: nikuser})
            }>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Icon
                  name="chevron-left"
                  size={20}
                  color="white"
                  style={{marginHorizontal: 10}}
                />
                <Text
                  style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                  Kembali
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <View style={{}}>
          
            <View style={{}}>
              
                <Text style={styles.dari}>Silahkan Ketik Pengaduan Ataupun Kritik dan Saran Anda</Text>
         
              <TextInput
               
                mode="outlined"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 5, height: 300}}
                theme={{roundness: 10}}
                value={this.state.pesan}
                onChangeText={text => this.setState({pesan: text})}
              />

              <TouchableOpacity
                style={styles.screenContainer}
                onPress={() => this.klikSimpan()}>
                <Text
                  style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                  Kirim
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
  
   header: {
    padding: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    elevation: 4,
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
    fontWeight: 'bold',
     marginTop: -20,
      marginBottom: 20,
  },

  lastText: {
    fontSize: 16,
    color: 'grey',
    fontSize: 17,
    marginTop: 10,
  },
});
