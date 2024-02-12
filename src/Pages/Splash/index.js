import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
// import {block} from 'react-native-reanimated';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
      listData1: [],

      idEdit: null,
    };

    this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/berita.php';
	
  }
  componentDidMount() {
    this.ambilListData1();
  }

  async ambilListData1() {
    var id = '2';

    await fetch(this.url1 + '/?op=ambilgambar&id=' + id)
      .then(response => response.json())
      .then(json => {
        this.setState({gambar1: json.data.result[0].gambar1});
        this.setState({gambar2: json.data.result[0].gambar2});
        this.setState({gambar3: json.data.result[0].gambar3});
        this.setState({gambar4: json.data.result[0].gambar4});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
      })
      .catch(error => {
        console.log(error);
        alert('Koneksi Internet Tidak Ada');
      });
    setTimeout(() => {
      this.props.navigation.replace('Auth');
      // navigation.replace('Masuk');
    }, 2000);
  }

  // navigation.replace('Masuk');

  render() {
    return (
      // <View
      //   style={{flex: 1, justifyContent: 'center', backgroundColor: '#06bcee'}}>
      //   <ActivityIndicator size="large" color="#ffffff" />
      // </View>
      <View style={{backgroundColor: '#1d256e', flex: 1}}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://siponcan.disdukcapilsibolga.id/siponcan/files/' + this.state.gambar1,
            }}
            style={styles.logo}
          />
          <Text
            style={{
              color: 'white',
              fontStyle: 'italic',
              marginHorizontal: 15,
              textAlign: 'center',
            }}>
            Sistem Pelayanan Administrasi Kependudukan Online Cepat dan Nyaman
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bnttext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: '#eaeaea',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1d256e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    color: '#005b9f',
    marginTop: 10,
  },

  logo: {
    width: '80%',
    height: 80,
    marginTop: 30,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,

    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 200,
  },
  midtext: {
    color: '#828487',
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 5,
  },

  image: {
    paddingTop: 10,
    paddingLeft: -20,
    paddingRight: -30,
    width: '100%',
    height: '100%',

    justifyContent: 'center',
  },

  line: {
    height: 1,
    width: 130,
    backgroundColor: '#828487',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1d256e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: -5,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
  },

  btnsos: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: 'grey',
  },

  logoicon: {
    width: 20,
    height: 20,
    marginLeft: 0,
    marginRight: 20,
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext3: {
    // fontSize: 12,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },

  backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
  },
});
