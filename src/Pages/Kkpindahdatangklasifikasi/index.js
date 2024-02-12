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
export default class Kkpindahdatangklasifikasi extends Component {
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

                    ...styles.header,
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
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
              }}>
              Klasifikasi Kepindahan
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
                  label="Dalam satu desa/kelurahan atau yang disebut dengan nama lain"
                  value="Dalam satu desa/kelurahan atau yang disebut dengan nama lain"
                />
                <Picker.Item
                  color="black"
                  label="Antar desa/kelurahan atau yang disebut dengan nama lain dalam satu kecamatan"
                  value="Antar desa/kelurahan atau yang disebut dengan nama lain dalam satu kecamatan"
                />
                <Picker.Item
                  color="black"
                  label="Antar Kecamatan atau yang disebut dengan nama lain dalam satu kabupaten/kota"
                  value="Antar Kecamatan atau yang disebut dengan nama lain dalam satu kabupaten/kota"
                />
                <Picker.Item
                  color="black"
                  label="Antar Kabupaten/Kota Dalam Satu Provinsi "
                  value="Antar Kabupaten/Kota Dalam Satu Provinsi"
                />
                <Picker.Item
                  color="black"
                  label="Antar Kabupaten/Kota Dalam Satu Provinsi "
                  value="Antar Kabupaten/Kota Dalam Satu Provinsi"
                />
              </Picker>
            </View>

            <TextInput
              label="Alamat Pindah"
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

            <TextInput
              label="Desa/Kelurahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              outlineColor="red"
              // value={this.state.umurpmhon}
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Kecamatan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              outlineColor="red"
              // value={this.state.umurpmhon}
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Kabupaten/Kota"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              outlineColor="red"
              // value={this.state.umurpmhon}
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Provinsi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              outlineColor="red"
              // value={this.state.umurpmhon}
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <TextInput
              label="Kode POS"
              mode="outlined"
              keyboardType="numeric"
              maxLength={5}
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              outlineColor="red"
              // value={this.state.umurpmhon}
              // onChangeText={text => this.setState({umurpmhon: text})}
            />
            <Text>Alasan Kepindahan</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <BouncyCheckbox
                text="Pekerjaan"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10, width: '40%'}}
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
              <TextInput
                mode="flat"
                activeUnderlineColor="#005b9f"
                style={{
                  backgroundColor: 'white',
                  marginBottom: 25,
                  width: '60%',
                }}
                theme={{roundness: 10}}
                outlineColor="red"
                // value={this.state.umurpmhon}
                // onChangeText={text => this.setState({umurpmhon: text})}
              />
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <BouncyCheckbox
                text="Keamanan"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10, width: '40%'}}
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
                text="Pendidikan"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10, width: '40%'}}
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

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <BouncyCheckbox
                text="Keluarga"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10, width: '40%'}}
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
                text="Pendidikan"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, marginBottom: 10, width: '40%'}}
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

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <BouncyCheckbox
                text="Keamanan"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, width: '40%'}}
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

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <BouncyCheckbox
                text="Lainnya"
                fillColor="#004ba0"
                unfillColor="#FFFFFF"
                style={{marginTop: 15, width: '40%'}}
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
              <TextInput
                mode="flat"
                activeUnderlineColor="#005b9f"
                style={{
                  backgroundColor: 'white',
                  marginBottom: 25,
                  width: '60%',
                  marginTop: -20,
                }}
                theme={{roundness: 10}}
                outlineColor="red"
                // value={this.state.umurpmhon}
                // onChangeText={text => this.setState({umurpmhon: text})}
              />
            </View>
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
