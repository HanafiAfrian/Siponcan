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
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TextInput} from 'react-native-paper';

console.disableYellowBox = true;
export default class KkpindahdatangWna extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnpmhon: 'Indonesia',
      kkbarupmhon: 'Pindah Datang',
      show: false,
      isVisible: true,
      date: new Date(),

      mode: 'date',

      tampil: false,

      pilih_tanggal_pesan: '',
    };
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      tampil: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  tampil = mode => {
    this.setState({
      tampil: true,
      mode,
    });
  };
  datepicker = () => {
    this.tampil('date');
  };

  render() {
    const {tampil, date, mode} = this.state;
    var nikuser = this.props.route.params.nikuser;
    return (
      <SafeAreaView style={styles.container}>
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
        <ScrollView>
          <View style={{marginHorizontal: 20}}>
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
                    this.props.navigation.navigate(
                      'Kkpindahdatangklasifikasi',
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

                    ...styles.header,
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
                  style={{marginBottom: 20, ...styles.headerOff}}>
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
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontStyle: 'italic'}}>
              * Diisi oleh Penduduk (Orang Asing) pemegang ITAS yang Mengajukan
              SKTT dan OA Pemegang ITAP yang Mengajukan Surat Keterangan
              Kependudukan Lainnya
            </Text>
            <TextInput
              label="Nama Sponsor"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />

            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginBottom: 20,
                marginTop: 20,
              }}>
              Alasan Kepindahan
            </Text>

            <View>
              <BouncyCheckbox
                text="Kepala Keluarga"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginBottom: 10}}
                textStyle={{
                  textDecorationLine: 'none',
                }}
                innerIconStyle={{
                  borderRadius: 9,

                  borderWidth: 2, // to make it a little round increase the value accordingly
                }}
                // onPress={() =>
                //   this.setState({
                //     hidden: !this.state.hidden,

                //   })
                // }
              />
              <BouncyCheckbox
                text="Kepala Keluarga dan Seluruh Anggota Keluarga"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginBottom: 10}}
                textStyle={{
                  textDecorationLine: 'none',
                }}
                innerIconStyle={{
                  borderRadius: 9,

                  borderWidth: 2, // to make it a little round increase the value accordingly
                }}
                // onPress={() =>
                //   this.setState({
                //     hidden: !this.state.hidden,

                //   })
                // }
              />
            </View>

            <View>
              <BouncyCheckbox
                text="Kepala Keluarga dan Sebagian Anggota Keluarga"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10}}
                textStyle={{
                  textDecorationLine: 'none',
                }}
                innerIconStyle={{
                  borderRadius: 9,

                  borderWidth: 2, // to make it a little round increase the value accordingly
                }}
                // onPress={() =>
                //   this.setState({
                //     hidden: !this.state.hidden,

                //   })
                // }
              />
              <BouncyCheckbox
                text="Anggota Keluarga"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10}}
                textStyle={{
                  textDecorationLine: 'none',
                }}
                innerIconStyle={{
                  borderRadius: 9,

                  borderWidth: 2, // to make it a little round increase the value accordingly
                }}
                // onPress={() =>
                //   this.setState({
                //     hidden: !this.state.hidden,

                //   })
                // }
              />
            </View>
            <TextInput
              label="Alamat Sponsor"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Nomor KITAS & KITAP"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Tanggal berlaku KITAS & KITAP"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />

            <Text style={{fontStyle: 'italic'}}>
              * Diisi oleh Penduduk yang Mengajukan Surat Keterangan Pindah Luar
              Negeri
            </Text>
            <TextInput
              label="Negara Tujuan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',

                marginTop: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Kode Negara"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',

                marginTop: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Alamat Tujuan"
              mode="outlined"
              multiline={true}
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',

                marginTop: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Penanggung Jawab"
              mode="outlined"
              multiline={true}
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',

                marginTop: 10,
              }}
              theme={{roundness: 10}}
              outlineColor="grey"
              //   value=
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Rencana Pindah Tanggal"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              right={
                <TextInput.Icon icon="calendar" onPress={this.datepicker} />
              }
              style={{
                backgroundColor: 'white',
                marginTop: 10,
                marginBottom: 20,
              }}
              theme={{roundness: 10}}
              // value={pilih_tanggal_pesan}
              // onChangeText={text => this.setState({pilih_tanggal_pesan: text})}
              onFocus={this.datepicker}
              showSoftInputOnFocus={false}
            />

            {tampil && (
              <DateTimePicker
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={this.setDate}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
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
  dash: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderStyle: 'dashed',
  },
});
