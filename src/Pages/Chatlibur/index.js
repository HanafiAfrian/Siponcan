import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {Component, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfilePhoto, ProfileWanita} from '../../../assets/images';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 30,
      nama: '',
      telepon: '',
      alamat: '',
      metode_pembayaran: '',
      listData: [],
      listData1: [],
      listData2: [],
      idEdit: null,
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/chatgroup.php';
    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/chat.php';
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
    this.ambilListData();
    this.ambilListData1();
    this.ambilListData2();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  async ambilListData() {
    var nama = this.props.route.params.nama;

    var pesan = this.state.pesan;

    await fetch(this.url + '/?op=ambildatamitra&&nama=' + nama)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlahpesan: json.data.result[0].jumlahpesan});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  async ambilListData1() {
    var nama = this.props.route.params.nama;

    var pesan = this.state.pesan;
    let control_Local, control_Online;

    let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
    var username = 'Mutawif';
    await fetch(this.url1 + '/?op=hitungpesanmitra&nama=' + nama)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlahchat: json.data.result[0].jumlahchat});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  async ambilListData2() {
    var nama = this.props.route.params.nama;

    let control_Local, control_Online;
    let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
    var username = 'Mutawif';
    await fetch(this.url1 + '/?op=hitungbunyimitra&&nama=' + nama)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlahbunyi: json.data.result[0].jumlahbunyi});
        this.setState({jumlah: json.data.result[0].jumlah});
        this.setState({kepada: json.data.result[0].kepada});
        this.setState({dari: json.data.result[0].dari});
        console.log(
          'Hasil yang didapatbunyi: ' + JSON.stringify(json.data.result),
        );
        this.setState({listData1: json.data.result});

        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var nama = this.props.route.params.nama;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Homelibur', {nikuser: nama})
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
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('ChatDetaillibur', {
                username: nama,
                nama: 'Admin',
                nmgrp: nama,
                nmgrp1: 'Admin',
                tetap: nama,
              })
            }>
            <Image style={styles.imgProfil} source={ProfilePhoto} />
          </TouchableOpacity>
          {this.state.listData.map((val, index) => (
            <View style={styles.chatContain} key={index}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('ChatDetaillibur', {
                    username: nama,
                    nama: 'Admin',
                    nmgrp: nama,
                    nmgrp1: 'Admin',
                    tetap: nama,
                  })
                }>
                <View
                  style={{
                    marginLeft: 80,
                    marginRight: 40,
                    marginTop: -50,
                    // width: 300,
                  }}>
                  <Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.replace('ChatDetaillibur', {
                          username: val.kepada,
                          nama: val.dari,
                          nmgrp: val.nm_grp,
                          nmgrp1: val.nm_grp1,
                          tetap: nama,
                        })
                      }>
                      <Text style={styles.dari}>
                        {val.dari} {val.nmgrp1}
                      </Text>
                    </TouchableOpacity>
                  </Text>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.replace('ChatDetaillibur', {
                        username: nama,
                        nama: 'Admin',
                        nmgrp: nama,
                        nmgrp1: 'Admin',
                        tetap: nama,
                      })
                    }>
                    <Text
                      style={styles.lastText}
                      onPress={() =>
                        this.props.navigation.replace('ChatDetaillibur', {
                          username: nama,
                          nama: 'Admin',
                          nmgrp: nama,
                          nmgrp1: 'Admin',
                          tetap: nama,
                        })
                      }>
                      {val.pesan}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.replace('ChatDetaillibur', {
                        username: nama,
                        nama: 'Admin',
                        nmgrp: nama,
                        nmgrp1: 'Admin',
                        tetap: nama,
                      })
                    }>
                    <Text style={styles.waktu}>{val.tanggal}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,

    marginTop: 10,
    marginBottom: 1,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    elevation: 3,
  },

  chatContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    padding: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#1e88e5',
    elevation: 4,
  },

  imgProfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
  },

  user: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },

  waktu: {
    color: 'orange',
    position: 'absolute',
    marginLeft: -170,
    marginTop: -40,
    fontSize: 12,
  },

  dari: {
    fontSize: 16,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  lastText: {
    fontSize: 16,
    color: 'grey',
    fontSize: 17,
    marginTop: 5,
  },

  welcomebg: {
    height: 80,
    marginBottom: 80,
    backgroundColor: '#1b2333',
    marginTop: -90,
    width: '100%',
  },

  iconbackstyle: {
    marginLeft: 20,
    marginTop: 40,
    width: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -30,
    fontWeight: 'bold',
  },
});
