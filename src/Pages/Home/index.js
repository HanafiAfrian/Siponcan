// + hal ktppilih
// + hal panduan
import React, {Component, useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Image,
  StatusBar,
  ImageBackground,
  Modal,
  Linking,
  // Appearance,
} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import darkMode from '../../../styles/darkMode';

import {
  Logo,
  Icondots,
  Iconmail,
  Imgkk,
  Imgktp,
  Imgring,
  Imgtroli,
  Imgpindah,
  Imgrip,
  Imgdivorced,
  Bg,
  Imgchild,
  Imgakui,
  Imgangkat,
  Imgsahanak,
  Imgpenting,
  Imgpengaduan,
  Iconuser,
} from '../../../assets/images';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import { WebView } from 'react-native-webview';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // theme: Appearance.getColorScheme(),
      nik: '',
      password: '',
      hidden: true,
      modalVisible: false,
      modalVisibleKk: false,
      modalVisibleAktakawin: false,
      modalVisibleAktalahir: false,
      modalVisibleAktamati: false,
      modalVisibleAktacerai: false,
      modalVisibleSuratpindah: false,
      modalVisibleInfonew: false,
      modalVisibleKia: false,
      modalVisibleAktaPengakuananak: false,
      modalVisibleAktaPengesahananak: false,
      modalVisibleAktaPengangkatananak: false,
   listData1: [],
      listData2: [],
	       listData3: [],
		       listData4: [],
      listData: [],
      date: new Date(),
	  	isVisible1: true,
	show1: false ,
    };
this.url1 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/chat.php';
	this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/ambilakun.php';
   this.url2 = 'http://localhost/api/api.php';
     this.url4 = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/uploadprofil.php';

    // Appearance.addChangeListener(scheme => {
    //   console.log(scheme.colorScheme);
    // });
  }

  componentDidMount() {
    this.ambilListData1();
this.ambilListData();
    this.ambilListData2();
	   this.ambilListData3();
	   	   this.ambilListData4();
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
        var urlAksi = this.url4 + '/?op=updatekonfirm';
      } else {
        var urlAksi = this.url4 + '/?op=updatekonfirm';
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
  
  async ambilListData4() {
	   
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
    await fetch(this.url4 + '/?op=hitungkonfirm&nama=' + nama)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlah: json.data.result[0].jumlah});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData4: json.data.result});
        this.intervalID = setTimeout(this.ambilListData4.bind(this), 1000);
        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });

    if (this.state.jumlah == 1) {
      this.klikUpdatekonfirm();

      setTimeout(() => {
        alert('Foto Berhasil di Update');
        this.props.navigation.replace('Home', {
          nikuser: nama,
         
        });
      }, 5000);
    }
  }
 async ambilListData() {
    var nik = this.props.route.params.nikuser;

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
  
  
   async ambilListData3() {
    var id = 1;

    await fetch(this.url2 + '/?op=normal&id=1' )
      .then(response => response.json())
      .then(json => {
        this.setState({nama1: json.data.result[0].nama1});
		   this.setState({alamat1: json.data.result[0].alamat1});
      
   this.setState({telepon: json.data.result[0].telepon});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));

        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
  
  
  async ambilListData1() {
    var nama = this.props.route.params.nikuser;

    await fetch(this.url1 + '/?op=hitungpesanmitra&nama=' + nama)
      .then(response => response.json())
      .then(json => {
        this.setState({jumlahchat: json.data.result[0].jumlahchat});
        console.log('Hasil yang didapat2: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
        this.intervalID = setTimeout(this.ambilListData1.bind(this), 1000);
        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
  }

   klikUpdatebunyi() {
    var nama = this.props.route.params.nikuser;
    if (this.state.nama == 'dfdrtr') {
      alert('Silakan masukkan nama dan alamat');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url1 + '/?op=updatebunyimitra';
      } else {
        var urlAksi = this.url1 + '/?op=updatebunyimitra';
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

  async ambilListData2() {
    var nama = this.props.route.params.nikuser;

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
        this.setState({listData2: json.data.result});
        this.intervalID = setTimeout(this.ambilListData2.bind(this), 1000);
        clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });


  }

  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }
  toggleModalKk(visible) {
    this.setState({modalVisibleKk: visible});
  }
  toggleModalAktakawin(visible) {
    this.setState({modalVisibleAktakawin: visible});
  }
  toggleModalAktalahir(visible) {
    this.setState({modalVisibleAktalahir: visible});
  }
  toggleModalAktamati(visible) {
    this.setState({modalVisibleAktamati: visible});
  }
  toggleModalAktacerai(visible) {
    this.setState({modalVisibleAktacerai: visible});
  }
  toggleModalSuratpindah(visible) {
    this.setState({modalVisibleSuratpindah: visible});
  }
  toggleModalInfonew(visible) {
    this.setState({modalVisibleInfonew: visible});
  }
  togglemodalVisibleKia(visible) {
    this.setState({modalVisibleKia: visible});
  }
  togglemodalVisiblePengakuananak(visible) {
    this.setState({modalVisibleAktaPengakuananak: visible});
  }
  togglemodalVisiblePengangkatananak(visible) {
    this.setState({modalVisibleAktaPengangkatananak: visible});
  }
  togglemodalVisiblePengesahananak(visible) {
    this.setState({modalVisibleAktaPengesahananak: visible});
  }
  state = {
    isVisible: false, //state of modal default false
  };

  removeData() {
    try {
      AsyncStorage.clear();
      this.props.navigation.navigate('FrmLoginFirst');
    } catch (error) {
      console.log(error);
    }
  }
 showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }
  render() {
    const {tampil, date, mode} = this.state;
    var jamsekarang = moment(date).format('HH:mm:ss');

    var nikuser = this.props.route.params.nikuser;
    var nama = this.props.route.params.nama;
    var no_telp = this.props.route.params.no_telp;

    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          {/*Button will change state to true and view will re-render*/}

          {/* // MODAL */}

          {/* row1 */}

          <View
            style={{
              flexDirection: 'column',

              backgroundColor: '#288AFA',
              height: 180,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              elevation: 5,
              shadowColor: '#eaeaea',
              shadowRadius: 2,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image
                  source={Logo}
                  style={{
                    width: 140,
                    height: 60,
                    marginLeft: 10,
                    resizeMode: 'contain',
                    // tintColor: 'white',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 10,
                }}>
                <Text style={styles.textNotif}>{this.state.jumlahchat}</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Chat', {nama: nikuser})
                  }>
                  <Image
                    source={Iconmail}
                    style={{
                      width: 40,
                      height: 40,
                      marginTop: 15,
                      marginRight: 15,
                      tintColor: 'white',
                    }}
                  />
                </TouchableOpacity>

                <View style={{marginTop: 15}}>
                  <Menu
                    visible={this.state.visible}
                    style={{width: 150}}
                    anchor={
                      <Text
                        onPress={() => this.setState({visible: true})}
                        style={{fontSize: 50}}>
                        <Image
                          source={Icondots}
                          style={{
                            width: 35,
                            height: 35,
                            tintColor: 'white',
                          }}
                        />
                      </Text>
                    }
                    onRequestClose={() => this.setState({visible: false})}>
                    <MenuItem
                      onPress={() =>
                        this.props.navigation.navigate('Akun', {
                          nik: nikuser,
                          nama: nama,
                          no_telp: no_telp,
                        })
                      }>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                        }}>
                        Profil
                      </Text>
                    </MenuItem>
                    <MenuItem
                      onPress={() =>
                        this.props.navigation.navigate('Riwayat', {
                          nik: nikuser,
                          nama: nama,
                          no_telp: no_telp,
                        })
                      }>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                        }}>
                      Riwayat
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={() => this.removeData()}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                        }}>
                        Keluar
                      </Text>
                    </MenuItem>
                  </Menu>
                </View>
              </View>
            </View>
    
			 <View style={{ flexDirection: 'row', marginTop: 10, margin: 10 }}>
			     <TouchableOpacity
			      onPress={() => this.setState({show1: true})}
			 >
			   		  <Image
				   style={{width: 50, height: 50, borderRadius: 50, marginLeft: 10, marginTop: 7, }}
            source={{
              uri:
                'https://siponcan.disdukcapilsibolga.id/siponcan/files/fotoprofil/' + this.state.foto,
            }}
           
          />
		   </TouchableOpacity>
			 <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textTransform: 'capitalize' }}>
              {this.state.nama}   {this.state.telepon} 
            </Text>
        <Text style={{ backgroundColor: 'orange', padding: 3, fontSize: 16, fontWeight: '500', marginTop: 3 , color: 'black',}}>NIK: 
              {nikuser} 
            </Text>
          </View>
		    </View>
		  
 </View>
          {/* row1 */}
   <View style={{
                    marginTop: -25, padding: 10, backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 30, flex: 1, shadowColor: '#171717',
                    shadowOffset: { width: 5, height: -4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                   
                }}>
            {/* row2 */}

            <View style={{marginTop: 13}}>
            <View style={{ marginLeft: 5, marginBottom: 10, fontSize: 18 }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Syarat Pengajuan</Text>
                    </View>
			  
			  
          

              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{marginBottom: -35}}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                         onPress={() => {
                        this.toggleModal(true);
                      }}>
					   <View style={styles.mainSyarat}>
                <View style={{ backgroundColor: '#FFE2CF', ...styles.cirle }}>
				<Image source={Imgktp} style={{ width: 45, height: 45 }}></Image>
                   
                      </View>

                      <Text style={styles.textSyarat}>
                        KTP
                      </Text>
					                   </View>
                    </TouchableOpacity>
					
					
                  </View>
                  {/* kk */}
                  <TouchableOpacity          
                    onPress={() => {
                      this.toggleModalKk(true);
                    }}>
     <View style={styles.mainSyarat}>
                   <View style={{ backgroundColor: '#cfffd2', ...styles.cirle }}>
				                <Image source={Imgkk} style={{ width: 45, height: 45 }}></Image>
                  
                    </View>

                    <Text style={styles.textSyarat}>
                      KK
                    </Text>
					          </View>
                  </TouchableOpacity>
                  {/* kk */}

                  {/* akta kawin */}
                  <TouchableOpacity
        
                    onPress={() => {
                      this.toggleModalAktamati(true);
                    }}>
					           <View style={styles.mainSyarat}>
                                      <View style={{ backgroundColor: '#FFE2CF', ...styles.cirle }}>
									   <Image source={Imgrip} style={{ width: 45, height: 45 }}></Image>
                     
                    </View>

                <Text style={styles.textSyarat}>
                      Akta Kematian
                    </Text>
					 </View>
                  </TouchableOpacity>
                  {/* akta kawin */}

                  {/* akta lahir */}
                  <TouchableOpacity
                 
                    onPress={() => {
                      this.toggleModalAktalahir(true);
                    }}>
					         <View style={styles.mainSyarat}>
                      <View style={{ backgroundColor: '#e7cfff', ...styles.cirle }}>
					             <Image source={Imgtroli} style={{ width: 50, height: 50 }}></Image>
                  
                    </View>

                    <Text style={styles.textSyarat}>
                      Akta Kelahiran
                    </Text>
					      </View>
                  </TouchableOpacity>

                  {/* aktaPerkawinan */}
                  <TouchableOpacity
            
                    onPress={() => {
                      this.toggleModalAktakawin(true);
                    }}>
					  <View style={styles.mainSyarat}>
                  <View style={{ backgroundColor: '#FFE2CF', ...styles.cirle }}>
				    <Image source={Imgring} style={{ width: 45, height: 45, }}></Image>
                     
                    </View>

              <Text style={styles.textSyarat}>
                      Akta Perkawinan
                    </Text>
					         </View>
                  </TouchableOpacity>

                  {/* cerai */}
                  <TouchableOpacity
                   
                    onPress={() => {
                      this.toggleModalAktacerai(true);
                    }}>
					            <View style={styles.mainSyarat}>
                                  <View style={{ backgroundColor: '#cfd1ff', ...styles.cirle }}>
								       <Image source={Imgdivorced} style={{ width: 40, height: 40, }}></Image>
                    
                    </View>

                   <Text style={{ fontSize: 12, ...styles.textSyarat }}>
                      Akta Perceraian
                    </Text>
					         </View>
                  </TouchableOpacity>
                  {/* cerai */}

                  {/* kia */}
                  <TouchableOpacity
                  
                    onPress={() => {
                      this.togglemodalVisibleKia(true);
                    }}>
					   <View style={styles.mainSyarat}>
                       <View style={{ backgroundColor: '#76B8FE', ...styles.cirle }}>
					                          <Image source={Imgchild} style={{ width: 40, height: 40, }}></Image>
                      
                    </View>

                     <Text style={{ fontSize: 11.5, ...styles.textSyarat }}>
                      Kartu Identitas Anak
                    </Text>
					                    </View>
                  </TouchableOpacity>
                  {/* kia */}

                  <TouchableOpacity
                    
                    onPress={() => {
                      this.toggleModalSuratpindah(true);
                    }}>
					        <View style={styles.mainSyarat}>
                      <View style={{ backgroundColor: '#cffff7', ...styles.cirle }}>
				   <Image source={Imgpindah} style={{ width: 48, height: 48 }}></Image>
                   
		       </View>
                        <Text style={styles.textSyarat}>Surat Pindah</Text>
                    </View>
			
                  </TouchableOpacity>

                  <TouchableOpacity
                    
                    onPress={() => {
                      this.togglemodalVisiblePengangkatananak(true);
                    }}>
					<View style={styles.mainSyarat}>
                   <View style={{ backgroundColor: '#e7cfff', ...styles.cirle }}>
				            <Image source={Imgangkat} style={{ width: 40, height: 40 }}></Image>
                   
                    </View>
   <Text style={{ fontSize: 10, textAlign: 'center', width: 80, marginTop: 5 , color: 'black'}}>Akta Pengangkatan Anak</Text>
					    </View>
                  </TouchableOpacity>

                  <TouchableOpacity

                    onPress={() => {
                      this.togglemodalVisiblePengakuananak(true);
                    }}>
					 <View style={styles.mainSyarat}>
                        <View style={{ backgroundColor: '#ffcfcf', ...styles.cirle }}>
						                  <Image source={Imgakui} style={{ width: 40, height: 40 }}></Image>
                    
                    </View>

                <Text style={{ fontSize: 11, ...styles.textSyarat }}>
                      Akta Pengakuan Anak
                    </Text>
					              </View>
                  </TouchableOpacity>
                  {/* aktapengakuan anak */}

                  <TouchableOpacity
                    
                    onPress={() => {
                      this.togglemodalVisiblePengesahananak(true);
                    }}>
					<View style={styles.mainSyarat}>
                      <View style={{ backgroundColor: '#ffcfcf', ...styles.cirle }}>
                                <Image source={Imgsahanak} style={{ width: 40, height: 40 }}></Image>
                    </View>

      <Text style={{ fontSize: 11, ...styles.textSyarat }}>
                      Akta Pengesahan Anak
                    </Text>
					                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
                   <View style={styles.layananOnline}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Layanan Online</Text>
                    </View>

               <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
 <TouchableOpacity style={styles.boxLayanan}
                  onPress={() =>
                    this.props.navigation.replace('KtpPilih', {
                      nikuser: nikuser,
                    })
                  }>
                  <View style={styles.imageLayanan}>
				  <Image source={Imgktp} style={{ width: 40, height: 40 }}></Image>
                                   </View>

                       <Text style={styles.textLayanan}>KTP</Text>
                </TouchableOpacity>
				   <TouchableOpacity style={styles.boxLayanan}
                  onPress={() =>
                    this.props.navigation.replace('Kkbarupilih', {
                      nikuser: nikuser,
                    })
                  }>
                  <View style={styles.imageLayanan}>
				    <Image source={Imgkk} style={{ width: 40, height: 40 }}></Image>
               
                  </View>
   <Text style={styles.textLayanan}>Kartu Keluarga</Text>
                </TouchableOpacity>
				   <TouchableOpacity style={styles.boxLayanan}
                  onPress={() =>
                    this.props.navigation.replace('AktaMati', {
                      nikuser: nikuser,
                    })
                  }>
               <View style={styles.imageLayanan}>
			    <Image source={Imgrip} style={{ width: 40, height: 40 }}></Image>
                 
                  </View>
 <Text style={styles.textLayanan}>Akta Kematian</Text>
                </TouchableOpacity>
				
          </View>
		  
		       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
			        <TouchableOpacity style={styles.boxLayanan}
                  onPress={() =>
                    this.props.navigation.replace('AktaLahir', {
                      nikuser: nikuser,
                    })
                  }>
               <View style={styles.imageLayanan}>
			    <Image source={Imgtroli} style={{ width: 40, height: 40 }}></Image>
             
                  </View>
    <Text style={styles.textLayanan}>Akta Kelahiran</Text>
                </TouchableOpacity>
				
				   <TouchableOpacity  style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('AktaKawin', {
                    nikuser: nikuser,
                  })
                }>
                 <View style={styles.imageLayanan}>
				  <Image source={Imgring} style={{ width: 40, height: 40 }}></Image>
                 
                </View>

               <Text style={styles.textLayanan}>Akta Perkawinan</Text>
              </TouchableOpacity>
			  
			    <TouchableOpacity style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('AktaCerai', {
                    nikuser: nikuser,
                  })
                }>
        <View style={styles.imageLayanan}>
		       <Image source={Imgdivorced} style={{ width: 40, height: 40 }}></Image>
                            </View>
 <Text style={styles.textLayanan}>Akta Perceraian</Text>
              </TouchableOpacity>
		              </View>
		  
		  
		      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
			   <TouchableOpacity style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('Kiapm', {
                    nikuser: nikuser,
                  })
                }>
             <View style={styles.imageLayanan}>
			    <Image source={Imgchild} style={{ width: 40, height: 40 }}></Image>
                
                </View>
            <Text style={{ fontSize: 11.5, ...styles.textLayanan }}>Kartu Identitas Anak</Text>
              </TouchableOpacity>
			  
			     <TouchableOpacity style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('SuratPindah', {
                    nikuser: nikuser,
                  })
                }>
               <View style={styles.imageLayanan}>
			    <Image source={Imgpindah} style={{ width: 40, height: 40 , marginTop: 40 }}></Image>
         
           <Text style={styles.textLayanan}>Surat Pindah</Text>
                </View>
              </TouchableOpacity>
			  <TouchableOpacity style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('AktaPengangkatananakpm', {
                    nikuser: nikuser,
                  })
                }>
              <View style={styles.imageLayanan}>
			   <Image source={Imgangkat} style={{ width: 40, height: 40 }}></Image>
             
                </View>

        <Text style={{ fontSize: 10.5, ...styles.textLayanan }}>Akta Pengangkatan Anak</Text>
              </TouchableOpacity>
			  
		     </View>	  
			  
			   <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around', }}>
			   
			     <TouchableOpacity style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('AktaPengakuananakpm', {
                    nikuser: nikuser,
                  })
                }>
            
                            <View style={styles.imageLayanan}>
							 <Image source={Imgakui} style={{ width: 40, height: 40 }}></Image>
                
                </View>

                  <Text style={{ fontSize: 10.5, ...styles.textLayanan }}>Akta Pengakuan Anak</Text>
               
              </TouchableOpacity>
			  
			  
			    <TouchableOpacity  style={styles.boxLayanan}
                onPress={() =>
                  this.props.navigation.replace('AktaPengesahananakpm', {
                    nikuser: nikuser,
                  })
                }>

                            <View style={styles.imageLayanan}>
							   <Image source={Imgsahanak} style={{ width: 40, height: 40 }}></Image>
                 
                </View>

                <Text style={{ fontSize: 10.5, ...styles.textLayanan }}>Akta Pengesahan Anak</Text>
     
              </TouchableOpacity>
			             <View style={styles.boxLayananblank}>


                        </View>
			     </View>	    
			  
			  
			  
            </View>

            {/* row5 */}
            <View style={{marginTop: 10}}>
              {/* aktapengakuananak */}
			  
			    <View style={{ marginLeft: 10, marginBottom: 10, marginTop: 30, fontSize: 18 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 , color: 'black' }}>Info dan Feedback</Text>
                    </View>
              <TouchableOpacity
                onPress={() => {
                  this.toggleModalInfonew(true);
                }}>
                   <View style={{
                            marginTop: 10, backgroundColor: '#cfe2ff', justifyContent: 'flex-start', flexDirection: 'row', padding: 10, borderRadius: 10, marginHorizontal: 10
                        }}>
                  {/* Aktapengesahananak */}
<View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                                <Image source={Imgpenting} style={{ width: 40, height: 40, }}></Image>
                            </View>
                  
                  <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10,color: 'black'  }}> Info Penting</Text>
                                <Text style={{color: 'black' }}> Klik Untuk Lihat Info Penting</Text>
                            </View>
                  </View>

                  <View>
                 
                  </View>
              
              </TouchableOpacity>
            </View>
            {/* row6 */}
              <View style={{marginTop: 5}}>
              {/* aktapengakuananak */}
        <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('Pengaduan', {
                    nikuser: nikuser,
                    nama : this.state.nama,
                  })
                }>
                   <View style={{
                            marginTop: 10, backgroundColor: '#cfe2ff', justifyContent: 'flex-start', flexDirection: 'row', padding: 10, borderRadius: 10,
                            marginHorizontal: 10
                        }}>
                  {/* Aktapengesahananak */}

              <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                                <Image source={Imgpengaduan} style={{ width: 40, height: 40, }}></Image>
                            </View>
                      <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10,color: 'black'  }}> Kritik & Saran</Text>
                              <Text style={{color: 'black' }}> Klik Untuk Memberi Kritik & Saran</Text>
                            </View>
                  </View>

                  <View>
                   
                
                </View>
              </TouchableOpacity>
            </View>
            
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,

                color: 'black',
              }}>
              2022 &copy; Copyright Disdukcapil Sibolga
            </Text>
           
          </View>
        </ScrollView>

        {/* modal info */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleInfonew}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Informasi Penting
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalInfonew(!this.state.modalVisibleInfonew);
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 16, color: 'grey'}}>
                  Semua persyaratan yang di upload / photo wajib menggunakan
                  berkas asli.
                </Text>
                <Text style={{marginTop: 15, fontSize: 16, color: 'grey'}}>
                  Pemohon / Pelapor harus terkait anggota keluarga yang
                  tercantum di KK
                </Text>
                <Text style={{marginTop: 15, fontSize: 16, color: 'grey'}}>
                  Semua data yang diajukan merupakan data yang benar dan menjadi
                  tanggung jawab pemohon / pelapor
                </Text>
                <Text style={{marginTop: 15, fontSize: 16, color: 'grey'}}>
                  Layanan ini berlaku hanya untuk WNI dan pengurusan dalam
                  negeri
                </Text>
                <Text style={{marginTop: 15, fontSize: 16, color: 'grey'}}>
                  Segala pengurusan layanan tidak dipungut biaya (Gratis)
                </Text>
                <TouchableOpacity
                  style={{marginTop: 20}}
                   onPress={() => Linking.openURL('https://siponcan.disdukcapilsibolga.id/siponcan/files/book.pdf')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#42a5f5',
                      fontWeight: 'bold',
                    }}>
                    BUKU PANDUAN APLIKASI
                  </Text>
                </TouchableOpacity>
   <TouchableOpacity
                  style={{marginTop: 20}}
                   onPress={() => Linking.openURL('https://www.youtube.com/watch?v=o6OzFQGw5g8&t=135s')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      color: '#42a5f5',
                      fontWeight: 'bold',
                    }}>
                    VIDEO  PANDUAN APLIKASI
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.screenContainer}
                  onPress={() => {
                    this.toggleModalInfonew(!this.state.modalVisibleInfonew);
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal info */}

        {/* modal online data nIK */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Kartu Tanda Penduduk
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={styles.textModal}>Photo/Scan terlebih dahulu</Text>
                <Text style={styles.textModal}>
                  Persyaratan dokumen dibawah ini
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'grey',
                }}>
                KARTU TANDA PENDUDUK-HILANG
              </Text>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: 'grey',
                }}>
                KARTU TANDA PENDUDUK-PERUBAHAN DATA
              </Text>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: 'grey',
                }}>
                KARTU TANDA PENDUDUK-RUSAK
              </Text>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>

              <TouchableOpacity
                style={styles.screenContainer}
                onPress={() => this.setState({modalVisible: false})}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  TUTUP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* modal online data nIK */}

        {/* modal kartu keluarga */}
        {/* modal kartu keluarga */}
        <SafeAreaView>
          <Modal
            style={{marginTop: 50}}
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalVisibleKk}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <ScrollView>
              <View style={styles.modalContainer}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginVertical: 10,
                    borderRadius: 10,
                    padding: 10,
                    width: '100%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 20,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: 'bold',
                          marginBottom: 20,
                          color: 'grey',
                        }}>
                        Kartu Keluarga
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        this.toggleModalKk(!this.state.modalVisibleKk);
                      }}>
                      <Icon
                        name="close"
                        size={20}
                        color="red"
                        style={{marginHorizontal: 10}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 20,
                    }}>
                    <View>
                      <Text style={styles.textModal}>
                        Photo/Scan terlebih dahulu
                      </Text>
                      <Text style={styles.textModal}>
                        Persyaratan dokumen dibawah ini
                      </Text>
                    </View>
                  </View>

                  {/*    MEMBENTUK KELUARGA BARU*/}
                  <Text style={styles.textModalHeader}>
                    MEMBENTUK KELUARGA BARU
                  </Text>
                  <Text style={{marginTop: 10, color: 'grey'}}>
                    Persyaratan
                  </Text>

                  <Text style={{color: 'grey'}}>1. Buku Nikah Akta Kawin</Text>
                  <Text style={{color: 'grey'}}>2. Kartu Keluarga</Text>
                  <Text style={{color: 'grey'}}>3. KTP-el Pemohon</Text>

                  {/*  PENAMBAHAN ANAK PADA KK */}

                  {/*  PERUBAHAN / PERBAIKAN DATA DI KK */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />

                  {/*    PENGGANTIAN KEPALA KELUARGA*/}
                  <Text style={styles.textModalHeader}>
                    PENGGANTIAN KEPALA KELUARGA
                  </Text>
                  <Text style={{marginBottom: 20, color: 'grey'}}>
                    (Khusus KK Sibolga)
                  </Text>

                  <Text style={{color: 'grey'}}>1. Kutipan akta kematian</Text>
                  <Text style={{color: 'grey'}}>
                    2. Kutipan akta perceraian (jika kepala keluarga cerai)
                  </Text>
                  <Text style={{color: 'grey'}}>3. Kartu keluarga</Text>
                  <Text style={{color: 'grey'}}>4. KTP-el Pemohon</Text>

                  {/*  PENAMBAHAN ANAK PADA KK */}

                  {/*  PERUBAHAN / PERBAIKAN DATA DI KK */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />

                  {/*  Pisah KK*/}
                  <Text style={styles.textModalHeader}>PISAH KK</Text>

                  <Text style={{color: 'grey'}}>1. KTP Pemohon</Text>
                  <Text style={{color: 'grey'}}>2. KK lama</Text>
                  <Text style={{color: 'grey'}}>
                    3. Surat Keterangan Cerai (Jika Pisah Karena Perceraian)
                  </Text>
                  <Text style={{color: 'grey'}}>
                    4. Surat Pindah Domisili (Jika Pindah Karena Pindah)
                  </Text>

                  {/*  PENAMBAHAN ANAK PADA KK */}

                  {/*  PERUBAHAN / PERBAIKAN DATA DI KK */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />

                  {/*  Menumpang dalam KK*/}
                  <Text style={styles.textModalHeader}>MENUMPANG DALAM KK</Text>

                  <Text style={{color: 'grey'}}>1. KTP Pemohon</Text>
                  <Text style={{color: 'grey'}}>2. KK lama</Text>
                  <Text style={{color: 'grey'}}>
                    3. Surat Keterangan Pindh Datang (Untuk Numpang KK)
                  </Text>

                  {/*  PENAMBAHAN ANAK PADA KK */}

                  {/*  PERUBAHAN / PERBAIKAN DATA DI KK */}

                  {/*  PERUBAHAN / PERBAIKAN DATA DI KK */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />
                  <Text style={styles.textModalHeader}>
                    PERUBAHAN ELEMEN DATA DI KK
                  </Text>
                  <Text style={styles.textModal}>1. Kartu Keluarga</Text>
                  <Text style={styles.textModal}>
                    2. Surat Keterangan / bukti perubahan peristiwa kependudukan
                    dan peristiwa penting
                  </Text>
                  <Text style={styles.textModal}>3. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    4. Buku Nikah / Akta Kawin
                  </Text>

                  {/*  PERUBAHAN / PERBAIKAN DATA DI KK */}

                  {/* KK HILANG / RUSAK */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />
                  <Text style={styles.textModalHeader}>KK HILANG </Text>
                  <Text style={styles.textModal}>1. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    2. Kartu Keluarga (Jika Rusak)
                  </Text>
                  <Text style={styles.textModal}>
                    3. Surat Keterangan hilang dari kepolisian (Jika Hilang)
                  </Text>

                  {/* KK HILANG / RUSAK */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />
                  <Text style={styles.textModalHeader}>KK RUSAK</Text>
                  <Text style={styles.textModal}>1. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    2. Kartu Keluarga (Jika Rusak)
                  </Text>
                  <Text style={styles.textModal}>
                    3. Surat Keterangan hilang dari kepolisian (Jika Hilang)
                  </Text>

                  {/*  KK HILANG / RUSAK*/}

                  {/* KK KARENA LAHIR */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />
                  <Text style={styles.textModalHeader}>
                   PERISTIWA PENTING PENAMBAHAN KK KARENA KELAHIRAN
                  </Text>
                  <Text style={styles.textModal}>
                    1. Jika buku nikah (halaman 2 & 3){' '}
                  </Text>
                  <Text style={styles.textModal}>2. Kartu Keluarga</Text>
                  <Text style={styles.textModal}>3. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    4. Surat Ket. Lahir dari Rs/Bidan.Klinik
                  </Text>
                  {/* KK KARENA LAHIR */}

                  {/* KK KARENA MATI */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />
                  <Text style={styles.textModalHeader}>
                    PERISTIWA PENTING PENGURANGAN KK KARENA KEMATIAN
                  </Text>
                  <Text style={styles.textModal}>1. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    2. Kartu keluarga Jenazah
                  </Text>
                  <Text style={styles.textModal}>3. KTP-el Jenazah</Text>
                  <Text style={styles.textModal}>
                    4. Surat Keterangan kematian dari kelurahan
                  </Text>
                  {/* KK KARENA MATI */}

                  {/* PENGURANGAN KK KARENA PINDAH */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />
                  <Text style={styles.textModalHeader}>
                    PERISTIWA PENTING PENGURANGAN KK KERENA PINDAH
                  </Text>
                  <Text style={{marginBottom: 20, color: 'grey'}}>
                    (Khusus KK Sibolga)
                  </Text>
                  <Text style={styles.textModal}>1. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    2. Kartu Keluarga
                  </Text>
                  <Text style={styles.textModal}>3. Buku Nikah / Akte Kawin</Text>
              
                  {/* PENGURANGAN KK KARENA PINDAH */}

                  {/* BUAT KK BARU */}
                  <View
                    style={{
                      marginTop: 15,
                      marginBottom: 40,
                      width: '100%',
                      height: 1,
                      backgroundColor: 'grey',
                    }}
                  />

                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() => this.setState({modalVisibleKk: false})}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      TUTUP
                    </Text>
                  </TouchableOpacity>

                  {/*  BUAT KK BARU*/}
                </View>
              </View>
            </ScrollView>
          </Modal>
        </SafeAreaView>
        {/* modal kartu keluarga */}

        {/* modal Akta kawin */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktakawin}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Perkawinan
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalAktakawin(
                      !this.state.modalVisibleAktakawin,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={styles.textModal}>Photo/Scan terlebih dahulu</Text>
                <Text style={styles.textModal}>
                  Persyaratan dokumen dibawah ini
                </Text>
              </View>
              <Text style={styles.textModal}>
                1. Surat Kawin dari Pemuka Agama
              </Text>

              <Text style={styles.textModal}>
                2. Pas Foto Gandeng Berwarna Ukuran 4x6
              </Text>
              <Text style={styles.textModal}>3. Kartu Keluarga</Text>
              <Text style={styles.textModal}>4. KTP-el Suami Istri</Text>
              <Text style={styles.textModal}>
                5. Kutipan Akte Perceraian dan Kutipan Akte Kematian bagi mereka
                yang telah cerai atau pasangan telah meninggal
              </Text>
              <Text style={styles.textModal}>6. KTP-el Pemohon</Text>

              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisibleAktakawin: false})}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta kawin */}

        {/* modal Akta lahir */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktalahir}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Kelahiran
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalAktalahir(
                      !this.state.modalVisibleAktalahir,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={styles.textModal}>Photo/Scan terlebih dahulu</Text>
                <Text style={styles.textModal}>
                  Persyaratan dokumen dibawah ini
                </Text>
              </View>
              <Text style={styles.textModal}>
                1. Surat Ket.Lahir dari RS/Bidan/Klinik
              </Text>

              <Text style={styles.textModal}>
                2. Surat Nikah/Akta Perkawinan
              </Text>
              <Text style={styles.textModal}>3. Kartu Keluarga</Text>

              <Text style={styles.textModal}>4. KTP-el Orang Tua(Pemohon)</Text>

              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisibleAktalahir: false})}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta lahir */}

        {/* modal Akta mati */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktamati}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Kematian
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalAktamati(!this.state.modalVisibleAktamati);
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={styles.textModal}>Photo/Scan terlebih dahulu</Text>
                <Text style={styles.textModal}>
                  Persyaratan dokumen dibawah ini
                </Text>
              </View>
              <Text style={styles.textModal}>
                1. Surat Keterangan Kematian dari Dokter/Rumah Sakit atau Kepala
                Desa/Lurah
              </Text>

              <Text style={styles.textModal}>2. Kartu Keluarga</Text>
              <Text style={styles.textModal}>3. Ktp-el Jenazah</Text>

              <Text style={styles.textModal}>4. KTP-el Pemohon</Text>

              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisibleAktamati: false})}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta mati */}

        {/* modal Akta perceraian */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktacerai}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Perceraian
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalAktacerai(
                      !this.state.modalVisibleAktacerai,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={styles.textModal}>Photo/Scan terlebih dahulu</Text>
                <Text style={styles.textModal}>
                  Persyaratan dokumen dibawah ini
                </Text>
              </View>
              <Text style={styles.textModal}>
                1. Salinan putusan pengadilan yang telah memperoleh kekuatan
                hukum tetap
              </Text>

              <Text style={styles.textModal}>
                2. Kutipan Akta Perkawinan suami istri
              </Text>
              <Text style={styles.textModal}>3. Kartu keluarga</Text>

              <Text style={styles.textModal}>4. Surat Pengantar Panitera</Text>
              <Text style={styles.textModal}>5. KTP-el Pemohon</Text>

              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisibleAktacerai: false})}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta perceraian */}

        {/* modal Akta Surat Pindah */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleSuratpindah}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Surat Pindah
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalSuratpindah(
                      !this.state.modalVisibleSuratpindah,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={styles.textModal}>Photo/Scan terlebih dahulu</Text>
                <Text style={styles.textModal}>
                  Persyaratan dokumen dibawah ini
                </Text>
              </View>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>

              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({modalVisibleSuratpindah: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta Surat Pindah */}

        {/* modal KIA */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleKia}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Kartu Identitas Anak
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.togglemodalVisibleKia(!this.state.modalVisibleKia);
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 16, color: 'grey'}}>
                  Semua persyaratan yang di upload / photo wajib menggunakan
                  berkas asli.
                </Text>
                <Text style={styles.textModal}>1. KTP Ayah</Text>
                <Text style={styles.textModal}>2. KTP Ibu</Text>
                <Text style={styles.textModal}>3. Akta Kelahiran</Text>
                <Text style={styles.textModal}>
                  4. Foto Kartu Keluarga Asli
                </Text>
                <Text style={styles.textModal}>
                  5. Foto Anak ( Bagi diatas 5 Tahun, Latar Biru untuk Tahun
                  Lahir Anak Genap atau Merah untuk Tahun Lahir Anak Ganjil )
                </Text>
                <Text style={styles.textModal}>
                  6. Perpanjangan KIA/KIA Hilang/Keterangan Lainnya
                </Text>
              </View>
              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisibleKia: false})}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal KIA */}

        {/*  modal akta Pengakuan Anak */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktaPengakuananak}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Pengakuan Anak
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.togglemodalVisiblePengakuananak(
                      !this.state.modalVisibleAktaPengakuananak,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 16, color: 'grey'}}>
                  Semua persyaratan yang di upload / photo wajib menggunakan
                  berkas asli.
                </Text>
                <Text style={styles.textModal}>1. KTP Ayah</Text>
                <Text style={styles.textModal}>2. KTP Ibu</Text>
              </View>
              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({modalVisibleAktaPengakuananak: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta Pengakuan Anak*/}

        {/* modal akta Pengesahan */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktaPengesahananak}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Pengesahan Anak
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.togglemodalVisiblePengesahananak(
                      !this.state.modalVisibleAktaPengesahananak,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 16, color: 'grey'}}>
                  Semua persyaratan yang di upload / photo wajib menggunakan
                  berkas asli.
                </Text>
                <Text style={styles.textModal}>1. KTP Ayah</Text>
                <Text style={styles.textModal}>2. KTP Ibu</Text>
              </View>
              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({modalVisibleAktaPengesahananak: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal akta Pengesahan*/}

        {/* modal akta Pengesahan */}
        <Modal
          style={{marginTop: 50}}
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalVisibleAktaPengangkatananak}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 20,
                      color: 'grey',
                    }}>
                    Akta Pengangkatan Anak
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.togglemodalVisiblePengangkatananak(
                      !this.state.modalVisibleAktaPengangkatananak,
                    );
                  }}>
                  <Icon
                    name="close"
                    size={20}
                    color="red"
                    style={{marginHorizontal: 10}}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 16, color: 'grey'}}>
                  Semua persyaratan yang di upload / photo wajib menggunakan
                  berkas asli.
                </Text>
                <Text style={styles.textModal}>1. KTP Ayah</Text>
                <Text style={styles.textModal}>2. KTP Ibu</Text>
              </View>
              <View style={styles.screenContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({modalVisibleAktaPengangkatananak: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    TUTUP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
		
		 <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.show1}>
			   <WebView
   source={{ uri: 'https://siponcan.disdukcapilsibolga.id/siponcan/uploadprofil.php?nikuser=' +
              nikuser , }}
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
        {/* modal akta Pengesahan*/}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  rowInbox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },

  modal: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    width: '90%',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textModal: {
    textAlign: 'left',
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  textModalHeader: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'grey',
  },

  screenContainer: {
    padding: 10,

    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#005b9f',
  },
  screenContainer2: {
    padding: 6,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 80,
    backgroundColor: '#005b9f',
  },
  styleNik: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',

    borderWidth: 1,
    width: '48%',
    height: 130,
    borderRadius: 10,
  },

  styleKk: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    width: '48%',
    height: 130,
    borderRadius: 10,
  },

  textNotif: {
    fontSize: 15,
    width: 25,
    height: 25,
    textAlign: 'right',
    backgroundColor: 'orange',
    borderRadius: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    right: 27,
    top: 8,
  },
    boxLayanan: {
        width: '28%', backgroundColor: 'white', borderColor: '#83D5FF', borderWidth: 1, height: 100, borderRadius: 10, alignContent: 'center', alignItems: 'center', shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },

    boxLayananblank: {
        width: '28%', backgroundColor: 'white', height: 100, borderRadius: 10, alignContent: 'center', alignItems: 'center', shadowColor: '#171717',

    },

    cirle: {
        borderRadius: 10, width: 60, height: 60, alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10
    },

    mainSyarat: {
        width: 85, alignContent: 'center', alignItems: 'center'
    },

    textSyarat:
        { textAlign: 'center', width: 80, marginTop: 5, fontSize: 12 , color: 'black',},


    layananOnline:
        { width: 150, padding: 8, borderRadius: 7, marginLeft: 5, marginBottom: 10, fontSize: 18, marginTop: 30 },

    imageLayanan:
        { borderRadius: 50, width: 50, height: 50, alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 5 },

    textLayanan:
        { textAlign: 'center', width: 80, marginTop: 5, color: 'darkblue' }
});
