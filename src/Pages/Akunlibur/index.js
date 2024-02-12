import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
    Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { WebView } from 'react-native-webview';
import {ProfilePhoto, ProfileWanita} from '../../../assets/images';

export default class Akun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
 listData1: [],
      idEdit: null,
	  	isVisible: true,
	show1: false ,
    };

    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/ambilakun.php';
	  this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/uploadprofil.php';
  }
  componentDidMount() {
    this.ambilListData();
	 this.ambilListData1();
  }
     componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  
  klikUpdatekonfirm() {
    var nama = this.props.route.params.nik;
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
	   
    var nama = this.props.route.params.nik;
    var nikuser = this.props.route.params.nik;
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
        alert('Foto Berhasil di Update');
        this.props.navigation.replace('Akunlibur', {
          nik: nama,
         
        });
      }, 5000);
    }
  }
  async ambilListData() {
    var nik = this.props.route.params.nik;

    await fetch(this.url + '/?op=pilihprofil&nik=' + nik)
      .then(response => response.json())
      .then(json => {
        this.setState({nama: json.data.result[0].nama});
        this.setState({no_telp: json.data.result[0].no_telp});
        this.setState({nik: json.data.result[0].nik});
		    this.setState({email: json.data.result[0].email});
			  this.setState({foto: json.data.result[0].foto});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));

        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
   showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }
  render() {
    var nik = this.props.route.params.nik;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#005b9f',
            height: 180,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View style={{marginTop: 20, marginLeft: 20}}>
            <TouchableOpacity
              style={styles.iconbackstyle}
              onPress={() =>
                this.props.navigation.replace('Homelibur', {nikuser: nik})
              }>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20, marginLeft: -20}}>
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Data Akun
            </Text>
          </View>
          <View />
        </View>
        <View
          style={{
            marginTop: -120,
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 20,
            padding: 10,
            elevation: 3,
          }}>
          <View style={styles.article}>
            <View
              style={{
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View>
             <TouchableOpacity
			      onPress={() => this.setState({show1: true})}
			 >
				  <Image
				   style={{width: 60, height: 60, borderRadius: 60}}
            source={{
              uri:
                'https://siponcan.disdukcapilsibolga.id/siponcan/files/fotoprofil/' + this.state.foto,
            }}
           
          />
		   </TouchableOpacity>
              </View>
              <View>
                {this.state.listData.map((val, index) => (
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {val.nama}
                  </Text>
                ))}
              </View>
              <View />
            </View>
          </View>

          <View style={styles.containeruser1} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profilnama')}>
            <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.menutext}>NIK</Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text>
                  {' '}
                  <View>
                    <Text style={{color: 'grey'}}>{nik}</Text>
                  </View>
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.garis} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profilemail')}>
            <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.menutext}>Nama </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text>
                  {' '}
                  <View>
            <Text style={{color: 'grey'}}>{this.state.nama}</Text>
                  </View>
                </Text>
                <TouchableOpacity />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.garis} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profilnohp')}>
            <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.menutext}>Nomor Handphone</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text>
                  <View>
                    <Text style={{color: 'grey'}}>{this.state.no_telp}</Text>
                  </View>
                </Text>
                <TouchableOpacity />
              </View>
            </View>
          </TouchableOpacity>
		   <View style={styles.garis} />
   <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profilnohp')}>
            <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={styles.menutext}>Email</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text>
                  <View>
                    <Text style={{color: 'grey'}}>{this.state.email}</Text>
                  </View>
                </Text>
                <TouchableOpacity />
              </View>
            </View>
          </TouchableOpacity>
		     <TouchableOpacity
            style={styles.screenContainer}
              onPress={() =>
                  this.props.navigation.navigate('Editprofillibur', {
			  nik: nik, }) }>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Edit Profil
            </Text>
          </TouchableOpacity>
		   <TouchableOpacity
            style={styles.screenContainer}
           onPress={() =>
                  this.props.navigation.navigate('Gantipasswordlibur', {
			  nik: nik, }) }>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Ganti Password
            </Text>
          </TouchableOpacity>
          {/* <View style={styles.garis}></View> */}
        </View>
		 <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.show1}>
			   <WebView
   source={{ uri: 'https://siponcan.disdukcapilsibolga.id/siponcan/uploadprofil.php?nikuser=' +
              nik , }}
   style={styles.webViewStyle}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   onLoadStart={() => this.showLoader()}
   onLoad={() => this.hideLoader()}
 />
              <SafeAreaView>
                <ScrollView>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                      <View>
					  
					  
					  
					  
					  
					  
					  
					  
					  
					<View>
   


  
 
    

  
   
    
  
  </View>
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  </View>

                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          marginTop: 20,
                          marginBottom: 40,
                        }}>
                        <TouchableOpacity
                          onPress={() => this.setState({show1: false})}
                          style={{
                            width: '90%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            margin: 20,
                            borderRadius: 5,
                            backgroundColor: '#0d7883',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 14,
                              fontWeight: 'bold',
                            }}>
                            Kembali
                          </Text>
                        </TouchableOpacity>

                        
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // marginTop: -20,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,
  },

  menustyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 25,
  },

screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
  menustyle1: {

    marginRight: 110,
    marginTop: -25,
  },
  garis: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    marginTop: 10,
  },

  logoiconmail: {
    width: 20,
    height: 20,
  },

  menutext: {
    
    color: 'grey',
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    // marginBottom: -20,
  },
  welcome1: {
    margin: 10,
    textAlign: 'center',
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  welcome2: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
  },
});
