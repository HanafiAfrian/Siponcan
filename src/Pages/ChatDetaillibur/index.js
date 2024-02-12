import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {ProfilePhoto, ProfileWanita} from '../../../assets/images';
export default class Paket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 25,
      nama: '',
      pesan: '',
      telepon: '',
      alamat: '',
      metode_pembayaran: '',
      listData: [],

      idEdit: null,
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/chat.php';
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
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  async ambilListData() {
    var nama = this.props.route.params.nama;
    var username = this.props.route.params.username;
    var pesan = this.state.pesan;

    await fetch(
      this.url + '/?op=ambildatamitra&username=' + username + '&nama=' + nama,
    )
      .then(response => response.json())
      .then(json => {
        this.setState({jumlah: json.data.result[0].jumlah});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});

        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  klikSimpan() {
    if (this.state.pesan == '') {
      this.ambilListData();
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=pesanmitra';

        var nama = this.props.route.params.nama;
        var username = this.props.route.params.username;
        var pesan = this.state.pesan;
      }

      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: '&nama=' + nama + '&username=' + username + '&pesan=' + pesan,
      });

      this.state.pesan = '';
      this.ambilListData();
    }
  }
  render() {
    var nama = this.props.route.params.nama;
    var tetap = this.props.route.params.tetap;
    var username = this.props.route.params.username;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={styles.header}
          onPress={() => this.props.navigation.navigate('Chatlibur', {nama: tetap})}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Chatlibur', {nama: tetap})
            }>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Icon
                name="chevron-left"
                size={20}
                color="black"
                style={{marginHorizontal: 10}}
              />
              <Image style={styles.imgProfil} source={ProfilePhoto} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: -5,
              color: 'black',
            }}
            onPress={() =>
              this.props.navigation.navigate('Chatlibur', {nama: tetap})
            }>
            {nama}{' '}
          </Text>
        </View>

        <ScrollView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          {this.state.listData.map((val, index) => (
            <View style={{backgroundColor: '#F5F5F5'}} key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 20,
                  marginRight: 15,
                }}>
                <Text
                  style={{
                    color: 'white',
                    maxWidth: 290,
                    backgroundColor: '#1f93f4',
                    borderRadius: 5,
                    fontSize: 19,
                  }}>
                  {val.pesanbalas}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 15,
                }}>
                <Text style={{color: 'red', fontSize: 12}}>{val.jambalas}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: -40,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    maxWidth: 250,
                    backgroundColor: '#EEE8AA',
                    borderRadius: 5,
                    fontSize: 19,
                  }}>
                  {val.pesan}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                }}>
                <Text style={{color: 'red', fontSize: 12}}>{val.jam}</Text>
              </View>

              <View />
            </View>
          ))}
        </ScrollView>

        <View style={styles.rowkirim}>
          <TextInput
            style={styles.inputStyle}
            multiline={true}
            placeholder={'Ketik Pesan...'}
            underlineColorAndroid="transparent"
            placeholderTextColor="gray"
            value={this.state.pesan}
            onChangeText={text => this.setState({pesan: text})}
          />
          <TouchableOpacity onPress={() => this.klikSimpan()}>
            <Text style={styles.kirim} onPress={() => this.klikSimpan()}>
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imgProfil: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 10,
  },
  rowChat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'flex-end',
  },

  rowChatbalas: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'flex-start',
  },

  boxChat: {
    backgroundColor: '#1f93f4',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
  },

  boxChatbalas: {
    backgroundColor: 'grey',
    borderRadius: 40,
    alignItems: 'center',
    padding: 10,
  },

  textChat: {
    color: 'white',

    fontSize: 16,
    padding: 10,
    maxWidth: 250,
  },

  textChatbalas: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    maxWidth: 250,
  },

  waktuChat: {
    color: 'white',
    textAlign: 'right',
    width: '90%',
  },
  dari: {
    color: 'gray',
    textAlign: 'center',
    width: '90%',
    alignItems: 'center',
  },
  waktuChatbalas: {
    color: 'white',
    textAlign: 'left',
    width: '90%',
  },

  rowkirim: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: 10,
    alignItems: 'center',
  },

  inputStyle: {
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 10,
    borderRadius: 10,
    width: '80%',
    elevation: 3,
  },

  kirim: {
    color: '#1f93f4',
    fontWeight: 'bold',
    fontSize: 16,
    elevation: 3,
  },

  imgchat: {
    borderRadius: 50,
    height: 50,
    width: 50,
    margin: 10,
  },
});
