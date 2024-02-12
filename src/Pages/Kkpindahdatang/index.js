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
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TextInput} from 'react-native-paper';

console.disableYellowBox = true;
export default class Kkpindahdatang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnpmhon: 'Indonesia',
      kkbarupmhon: 'Pindah Datang',
    };
  }
  render() {
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
        <ScrollView style={{backgroundColor: 'white'}}>
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

                    ...styles.header,
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

                    ...styles.headerOff,
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
            <TextInput
              label="No. KK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nokkpmhon}
              onChangeText={text => this.setState({nokkpmhon: text})}
            />

            {/* <TextInput
              label="Alasan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              disabled
              style={{backgroundColor: 'white', marginBottom: 25, height: 56}}
              theme={{roundness: 10}}
              value={this.state.kkbarupmhon}
              onChangeText={text => this.setState({kkbarupmhon: text})}
            /> */}
            <TextInput
              label="Nama Lengkap Sesuai KTP"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namapmhon}
              onChangeText={text => this.setState({namapmhon: text})}
            />
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikpmhon}
              onChangeText={text => this.setState({nikpmhon: text})}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
              }}>
              Jenis Permohonan
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'red',
                borderRadius: 10,
                marginBottom: 25,
              }}>
              <Picker
                itemStyle={{
                  height: 190,
                  fontSize: 16,
                  fontWeight: 'bold',
                  borderBottomColor: 'red',
                  marginTop: 10,
                  marginHorizontal: 20,
                }}
                numberOfLines={2}
                mode="dropdown"
                // selectedValue={this.state.selectedcat2}
                // onValueChange={this.onValueChangeCat2.bind(this)}
              >
                <Picker.Item
                  color="black"
                  label="Surat Keterangan Kependudukan"
                  value="Surat Keterangan Kependudukan"
                />
                <Picker.Item
                  color="black"
                  label="Surat Keterangan Pindah"
                  value="Surat Keterangan Pindah"
                />
                <Picker.Item
                  color="black"
                  label="Surat Keterangan Pindah(SKPLN)"
                  value="Surat Keterangan Pindah(SKPLN)"
                />
                <Picker.Item
                  color="black"
                  label="Surat Keterangan Tempat Tinggal(SKTT) Bagi Orang Asing Terbatas"
                  value="Surat Keterangan Tempat Tinggal(SKTT) /n Bagi Orang Asing Terbatas"
                />
              </Picker>
            </View>

            <TextInput
              label="Alamat Asal"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              outlineColor="red"
              // value={this.state.umurpmhon}
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                label="RT"
                mode="outlined"
                keyboardType="numeric"
                maxLength={3}
                activeOutlineColor="#005b9f"
                style={{
                  backgroundColor: 'white',
                  marginBottom: 25,
                  width: '45%',
                }}
                theme={{roundness: 10}}
                outlineColor="red"
                // value={this.state.umurpmhon}
                // onChangeText={text => this.setState({umurpmhon: text})}
              />
              <TextInput
                label="RW"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                maxLength={3}
                style={{
                  backgroundColor: 'white',
                  marginBottom: 25,
                  width: '45%',
                }}
                theme={{roundness: 10}}
                outlineColor="red"
                // value={this.state.umurpmhon}
                // onChangeText={text => this.setState({umurpmhon: text})}
              />
            </View>
            {/* <TextInput
              label="Kewarganegaraan"
              mode="outlined"
              disabled
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kwnpmhon}
              onChangeText={text => this.setState({kwnpmhon: text})}
            />
            <TextInput
              label="Alamat Tujuan yang Benar"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.tujuanpmhon}
              onChangeText={text => this.setState({tujuanpmhon: text})}
            /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
