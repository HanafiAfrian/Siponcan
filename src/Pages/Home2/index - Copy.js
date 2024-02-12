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
} from '../../../assets/images';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';

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
      listData: [],
      date: new Date(),
    };
    this.url1 = 'https://mutawif.co.id/apk/siponcan/api/chat.php';
    this.url = 'https://mutawif.co.id/apk/siponcan/api/aktivity.php';

    // Appearance.addChangeListener(scheme => {
    //   console.log(scheme.colorScheme);
    // });
  }

  componentDidMount() {
    this.ambilListData1();
    this.ambilListData2();
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
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

    if (this.state.jumlahchat > this.state.jumlahbunyi) {
      this.klikUpdatebunyi();
      let control_Local, control_Online;
      let onlineSound = 'https://mutawif.co.id/apk/siponcan/api/sound.mp3';
      control_Online = new Sound(onlineSound, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        control_Online.play(() => {
          control_Online.release();
        });
      });
    }
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
      this.props.navigation.replace('FrmLoginFirst');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {tampil, date, mode} = this.state;
    var jamsekarang = moment(date).format('HH:mm:ss');

    var nikuser = this.props.route.params.nikuser;
    var nama = this.props.route.params.nama;
    var no_telp = this.props.route.params.no_telp;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <ScrollView style={{backgroundColor: 'white'}}>
          {/*Button will change state to true and view will re-render*/}

          {/* // MODAL */}
          <View style={styles.container}>
            {/* row1 */}

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image
                  source={Logo}
                  style={{
                    width: 200,
                    height: 70,
                    resizeMode: 'contain',
                    marginTop: 15,
                    marginLeft: -15,
                  }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    marginTop: -10,
                    marginLeft: 0,
                    color: '#005b9f',
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
                      marginTop: 30,
                      marginRight: 15,
                    }}
                  />
                </TouchableOpacity>

                <View style={{marginTop: 35}}>
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
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'grey',
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
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Riwayat
                      </Text>
                    </MenuItem>
					
                    <MenuItem
                      onPress={() => {
                        this.toggleModalInfonew(true);
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Info Penting
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={() => this.removeData()}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}>
                        Keluar
                      </Text>
                    </MenuItem>
                  </Menu>
                </View>
              </View>
            </View>
            {/* row1 */}

            {/* row2 */}

            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'grey'}}>
                Layanan
              </Text>

              <View
                style={{
                  width: 100,
                  backgroundColor: 'orange',
                  height: 2,
                  marginBottom: 20,
                }}
              />

              {/* ktp */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/* <TouchableOpacity
                  onPress={() => {
                    this.toggleModal(true);
                  }}
                  style={styles.styleNik}>
                  <View style={styles.rowInbox}>
                    <Image
                      source={Imgktp}
                      style={{
                        width: 45,
                        height: 45,
                      }}
                    />
                  </View>

                  <View
                    style={{flexDirection: 'column', paddingHorizontal: 10}}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'grey',
                      }}>
                      Online Data (NIK)
                    </Text>
                    <Text style={{textAlign: 'left', color: 'grey'}}>
                      Jika NIK belum terdaftar online{' '}
                    </Text>
                  </View>
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => {
                    this.toggleModal(true);
                  }}
                  style={styles.styleNik}>
                  <View style={styles.rowInbox}>
                    <Image
                      source={Imgktp}
                      style={{
                        width: 45,
                        height: 45,
                      }}
                    />
                  </View>

                  <View
                    style={{flexDirection: 'column', paddingHorizontal: 10}}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 13,
                        color: 'grey',
                      }}>
                      Kartu Tanda Penduduk
                    </Text>
                    <Text style={{textAlign: 'left', color: 'grey'}}>
                      Pengurusan KTP
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* ktp */}

                {/* kk */}
                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalKk(true);
                  }}
                  style={styles.styleKk}>
                  <View style={styles.rowInbox}>
                    <Image
                      source={Imgkk}
                      style={{
                        width: 45,
                        height: 45,
                      }}
                    />
                  </View>

                  <View
                    style={{flexDirection: 'column', paddingHorizontal: 10}}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'grey',
                      }}>
                      Kartu Keluarga
                    </Text>
                    <Text style={{textAlign: 'left', color: 'grey'}}>
                      Pengurusan KK
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* kk */}
              </View>
            </View>
            {/* row2 */}

            {/* row3 */}

            <View style={{marginTop: 20}}>
              {/*  */}

              {/* aktaperkawinan */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModalAktakawin(true);
                    }}>
                    <View style={styles.rowInbox}>
                      <Image
                        source={Imgring}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Perkawinan
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Akta Perkawinan
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* aktaperkawinan */}

                {/* aktakelahiran */}
                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModalAktalahir(true);
                    }}>
                    <View style={styles.rowInbox2}>
                      <Image
                        source={Imgtroli}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{flexDirection: 'column', paddingHorizontal: 10}}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Kelahiran
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Akta Kelahiran
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* aktakelahiran */}
              </View>
            </View>
            {/* row3 */}

            {/* row4 */}

            <View style={{marginTop: 20}}>
              {/* aktakematian */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModalAktamati(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                      }}>
                      <Image
                        source={Imgrip}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Kematian
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Akta Kematian
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* aktaperkawinan */}

                {/* aktakelahiran */}
                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.toggleModalAktacerai(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginTop: 10,
                      }}>
                      <Image
                        source={Imgdivorced}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{flexDirection: 'column', paddingHorizontal: 10}}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Perceraian
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Akta Perceraian
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* aktakelahiran */}
              </View>
            </View>
            {/* row4 */}

            {/* row5 */}

            <View style={{marginTop: 20}}>
              {/* suratpindah */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.togglemodalVisibleKia(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginTop: 10,
                      }}>
                      <Image
                        source={Imgchild}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{flexDirection: 'column', paddingHorizontal: 10}}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Kartu Identitas Anak
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan KIA
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.togglemodalVisiblePengangkatananak(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginTop: 10,
                      }}>
                      <Image
                        source={Imgangkat}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{flexDirection: 'column', paddingHorizontal: 10}}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Pengangkatan Anak
                      </Text>
                      <Text
                        style={{
                          textAlign: 'left',
                          color: 'grey',
                      
                        }}>
                        Pengurusan Akta Pengangkatan Anak
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* suratpindah */}
              </View>
            </View>
            {/* row5 */}

            {/* row6 */}

            <View style={{marginTop: 20}}>
              {/* aktapengakuananak */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.togglemodalVisiblePengakuananak(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginTop: 10,
                      }}>
                      <Image
                        source={Imgakui}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{flexDirection: 'column', paddingHorizontal: 10}}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Pengakuan Anak
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Akta Pengakuan Anak
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Aktapengesahananak */}

                <View style={styles.box}>
                  <TouchableOpacity
                    onPress={() => {
                      this.togglemodalVisiblePengesahananak(true);
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        marginTop: 10,
                      }}>
                      <Image
                        source={Imgsahanak}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Akta Pengesahan Anak
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Akta Pengesahan Anak
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Aktapengesahananak */}
              </View>
            </View>
            {/* row6 */}

            {/* row6 */}

            <View style={{marginTop: 20}}>
              {/* suratpindah */}

              <View style={styles.box2}>
                <TouchableOpacity
                  onPress={() => {
                    this.toggleModalSuratpindah(true);
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      padding: 10,
                      marginTop: 10,
                    }}>
                    <Image
                      source={Imgpindah}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />

                    <View
                      style={{
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'grey',
                        }}>
                        Surat Pindah
                      </Text>
                      <Text style={{textAlign: 'left', color: 'grey'}}>
                        Pengurusan Surat Pindah
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* row7 */}

            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,

                color: 'grey',
              }}>
              2022 &copy; Copyright Disdukcapil Sibolga
            </Text>
            <Text
              style={{textAlign: 'center', color: '#42a5f5', marginBottom: 20}}
              onPress={() => Linking.openURL('https://apikteknologi.id/')}>
              Desain By Apik Teknologi
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
                KARTU TANDA PENDUDUK HILANG
              </Text>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>
              <TouchableOpacity
                style={styles.screenContainer}
                onPress={() =>
                  this.props.navigation.replace('KtpHilang', {  nikuser: nikuser,}) &
                  this.setState({modalVisible: false})
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  ISI FORM PERMOHONAN
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: 'grey',
                }}>
                KARTU TANDA PENDUDUK PERUBAHAN DATA
              </Text>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>
              <TouchableOpacity
                style={styles.screenContainer}
                onPress={() =>
                  this.props.navigation.replace('KtpPerubahan', {nikuser: nikuser,}) &
                  this.setState({modalVisible: false})
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  ISI FORM PERMOHONAN
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: 'grey',
                }}>
                KARTU TANDA PENDUDUK RUSAK
              </Text>
              <Text style={styles.textModal}>1. Kartu Keluarga</Text>

              <Text style={styles.textModal}>2. KTP-el Pemohon</Text>

              <TouchableOpacity
                style={styles.screenContainer}
                onPress={() =>
                  this.props.navigation.replace('KtpRusak', {nikuser: nikuser,}) &
                  this.setState({modalVisible: false})
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  ISI FORM PERMOHONAN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* modal online data nIK */}

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
                       <Text style={{marginTop: 10, color: 'grey'}}>Persyaratan</Text>

            <Text style={{color: 'grey'}}>1. Buku Nikah Akta Kawin</Text>
            <Text style={{color: 'grey'}}>2. Kartu Keluarga</Text>
            <Text style={{color: 'grey'}}>3. KTP-el Pemohon</Text>

                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                     this.props.navigation.navigate('Kkbaru', {nikuser: nikuser}) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>

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
                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kkgantikplkeluarga', {
                  nikuser: nikuser,}) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>

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
                  <Text style={styles.textModalHeader}>
              PISAH KK
                  </Text>
              

            <Text style={{color: 'grey'}}>1. KTP Pemohon</Text>
            <Text style={{color: 'grey'}}>
              2. KK lama
            </Text>
            <Text style={{color: 'grey'}}>3. Surat Keterangan Cerai (Jika Pisah Karena Perceraian)</Text>
            <Text style={{color: 'grey'}}>4.  Surat Pindah Domisili (Jika Pindah Karena Pindah)</Text>
                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kkpisah', {
                  nikuser: nikuser,}) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>

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
                  <Text style={styles.textModalHeader}>
              MENUMPANG DALAM KK
                  </Text>
              

            <Text style={{color: 'grey'}}>1. KTP Pemohon</Text>
            <Text style={{color: 'grey'}}>
              2. KK lama
            </Text>
            <Text style={{color: 'grey'}}>3. Surat Keterangan Pindh Datang (Untuk Numpang KK)</Text>
           
                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kknumpangdalamkk', {
                  nikuser: nikuser,}) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>

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

                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kkperubahan', {
                        nikuser: nikuser,
                      }) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>

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

                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kkhilang', {
                        nikuser: nikuser,
                      }) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>
				  
				  
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
                  <Text style={styles.textModalHeader}>KK  RUSAK</Text>
                  <Text style={styles.textModal}>1. KTP-el Pemohon</Text>
                  <Text style={styles.textModal}>
                    2. Kartu Keluarga (Jika Rusak)
                  </Text>
                  <Text style={styles.textModal}>
                    3. Surat Keterangan hilang dari kepolisian (Jika Hilang)
                  </Text>

                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kkrusak', {
                        nikuser: nikuser,
                      }) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
                    </Text>
                  </TouchableOpacity>

                  {/*  KK HILANG / RUSAK*/}

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
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: 'grey',
                    }}>
                  PERISTIWA PENTING
                  </Text>

                  <TouchableOpacity
                    style={styles.screenContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Kkbarupilih', {
                        nikuser: nikuser,
                      }) & this.setState({modalVisibleKk: false})
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      ISI FORM PERMOHONAN
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
                  onPress={() =>
                    this.props.navigation.navigate('AktaKawin', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleAktakawin: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                  onPress={() =>
                    this.props.navigation.navigate('AktaLahir', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleAktalahir: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                  onPress={() =>
                    this.props.navigation.navigate('AktaMati', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleAktamati: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                  onPress={() =>
                    this.props.navigation.navigate('AktaCerai', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleAktacerai: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                    this.props.navigation.navigate('SuratPindah', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleSuratpindah: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                  onPress={() =>
                    this.props.navigation.navigate('Kia', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleKia: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                    this.props.navigation.navigate('AktaPengakuananak', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleKia: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                    this.props.navigation.navigate('AktaPengesahananak', {
                      nikuser: nikuser,
                    }) & this.setState({modalVisibleKia: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
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
                    this.props.navigation.navigate('AktaPengangkatananak', {
                      nikuser: nikuser,
                    }) &
                    this.setState({modalVisibleAktaPengangkatananak: false})
                  }>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    ISI FORM PERMOHONAN
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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

  box: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    width: '48%',
    height: 150,
    borderRadius: 10,
    // shadowColor: '#1e88e5',
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 3,
  },

  box2: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    width: '100%',
    height: 90,
    borderRadius: 10,
    // shadowColor: '#1e88e5',
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 3,
  },

  rowInbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
    borderRadius: 20,
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
    // shadowColor: '#1e88e5',
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 3,
  },

  styleKk: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    width: '48%',
    height: 130,
    borderRadius: 10,
    // shadowColor: '#1e88e5',
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 3,
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
    right: 40,
    top: 20,
  },
});
