import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useState} from 'react';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Clock, Calendar} from '../../../assets/images';

console.disableYellowBox = true;

export default class Kkpenambahananakdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isVisible: true,
      selectedcat: 'Laki-Laki',
      selectedcat1: 'O',
      shdk: 'Anak',
      selectedcat2: 'Islam',
      selectedcat3: 'Ada',
      date: new Date(),
      mode: 'date',
      tampil: false,
      pilih_tanggal_pesan: '',
    };
  }

  async onValueChangeCat(value) {
    this.setState({selectedcat: value});
  }

  async onValueChangeCat1(value) {
    this.setState({selectedcat1: value});
  }
  async onValueChangeCat2(value) {
    this.setState({selectedcat2: value});
  }

  async onValueChangeCat3(value) {
    this.setState({selectedcat3: value});
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

  timepicker = () => {
    this.tampil('time');
  };

  showLoader() {
    this.setState({isVisible: true});
  }

  hideLoader() {
    this.setState({isVisible: false});
  }
  render() {
    const {tampil, date, mode} = this.state;
    var pilih_tanggal_pesan = moment(date).format('YYYY-MM-DD');
    var pilih_jam_pesan = moment(date).format('HH:mm:00');
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

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
            <View style={{backgroundColor: 'white'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  marginTop: 20,
                  color: 'grey',
                }}>
                Penambahan Anak di KK{' '}
              </Text>
              <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>
                (Khusus Anak Baru Lahir){' '}
              </Text>
            </View>

            <View style={{backgroundColor: 'white'}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Kkpenambahananak', {
                      nikuser: nikuser,
                    })
                  }
                  style={{marginBottom: 20, ...styles.headerOff}}>
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
                    this.props.navigation.navigate('Kkpenambahananakdata', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
                    })
                  }
                  style={{marginBottom: 20, ...styles.header}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Data Anak
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Kkpenambahananakberkas', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
                      nm_anak: this.state.nm_anak,
                      selectedcat: this.state.selectedcat,
                      temp_lahir: this.state.temp_lahir,
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      pilih_jam_pesan: pilih_jam_pesan,
                      selectedcat1: this.state.selectedcat1,
                      selectedcat2: this.state.selectedcat2,
                      shdk: this.state.shdk,
                      selectedcat3: this.state.selectedcat3,
                      nm_ayah: this.state.nm_ayah,
                      nm_ibu: this.state.nm_ibu,
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
            </View>

            <TextInput
              label="Nama Lengkap"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 20}}
              theme={{roundness: 10}}
              value={this.state.nm_anak}
              onChangeText={text => this.setState({nm_anak: text})}
            />

            {/* JenisKelamin */}

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Jenis Kelamin
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
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
                mode="dropdown"
                selectedValue={this.state.selectedcat}
                onValueChange={this.onValueChangeCat.bind(this)}>
                <Picker.Item color="grey" label="Laki-Laki" value="Laki-Laki" />
                <Picker.Item color="grey" label="Perempuan" value="Perempuan" />
              </Picker>
            </View>
            {/* JenisKelamin */}

            <TextInput
              label="Tempat Lahir"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.temp_lahir}
              onChangeText={text => this.setState({temp_lahir: text})}
            />

            <TextInput
              label="Tanggal Lahir"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              right={
                <TextInput.Icon icon="calendar" onPress={this.datepicker} />
              }
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={pilih_tanggal_pesan}
              onChangeText={text => this.setState({pilih_tanggal_pesan: text})}
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

            <TextInput
              label="Waktu Lahir"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              right={
                <TextInput.Icon
                  icon="clock-outline"
                  onPress={this.timepicker}
                />
              }
              style={{backgroundColor: 'white', marginBottom: 20}}
              theme={{roundness: 10}}
              value={pilih_jam_pesan}
              onChangeText={text => this.setState({pilih_jam_pesan: text})}
              onFocus={this.datepicker}
              showSoftInputOnFocus={false}
            />

            {/* Goldar */}

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Golongan Darah
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
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
                mode="dropdown"
                selectedValue={this.state.selectedcat1}
                onValueChange={this.onValueChangeCat1.bind(this)}>
                <Picker.Item color="black" label="O" value="O" />
                <Picker.Item color="black" label="A" value="A" />
                <Picker.Item color="black" label="B" value="B" />
                <Picker.Item color="black" label="AB" value="AB" />
                <Picker.Item
                  color="black"
                  label="Tidak Tahu"
                  value="Tidak Tahu"
                />
              </Picker>
            </View>
            {/* Goldar */}

            {/* Goldar */}

            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
                marginTop: 20,
              }}>
              Agama
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
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
                mode="dropdown"
                selectedValue={this.state.selectedcat2}
                onValueChange={this.onValueChangeCat2.bind(this)}>
                <Picker.Item color="grey" label="Islam" value="Islam" />
                <Picker.Item color="grey" label="Kristen" value="Kristen" />
                <Picker.Item color="grey" label="Katolik" value="Katolik" />
                <Picker.Item color="grey" label="Hindu" value="Hindu" />
                <Picker.Item color="grey" label="Budha" value="Budha" />
                <Picker.Item color="grey" label="Konghucu" value="Konghucu" />
                <Picker.Item
                  color="grey"
                  label="Kepercayaan Lainnya"
                  value="Kepercayaan Lainnya"
                />
              </Picker>
            </View>
            {/* Goldar */}

            <TextInput
              label="SHDK"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 20,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.shdk}
              disabled
              onChangeText={text => this.setState({shdk: text})}
            />
            {/* Kelainan fisik dan mental */}

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Kelainan Fisik dan Mental
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
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
                mode="dropdown"
                selectedValue={this.state.selectedcat3}
                onValueChange={this.onValueChangeCat3.bind(this)}>
                <Picker.Item color="black" label="Ada" value="Ada" />
                <Picker.Item
                  color="black"
                  label="Tidak Ada"
                  value="Tidak Ada"
                />
              </Picker>
            </View>
            {/* Kelainan fisik dan mental */}

            <TextInput
              label="Nama Ayah"
              mode="outlined"
              // disabled

              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.nm_ayah}
              onChangeText={text => this.setState({nm_ayah: text})}
            />
            <TextInput
              label="Nama Ibu"
              mode="outlined"
              // disabled

              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nm_ibu}
              onChangeText={text => this.setState({nm_ibu: text})}
            />
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
