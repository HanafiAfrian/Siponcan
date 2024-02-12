import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider, TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Clock, Calendar} from '../../../assets/images';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AktaMatijenazah extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isVisible: true,
      date: new Date(),
      mode: 'date',
      tampil: false,
      pilih_tanggal_pesan: '',
      selectedcat: 'Sakit Biasa/Tua',
      selectedcat1: 'Dokter',
    };
  }

  async onValueChangeCat(value) {
    this.setState({selectedcat: value});
  }

  async onValueChangeCat1(value) {
    this.setState({selectedcat1: value});
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

  render() {
    const {tampil, date, mode} = this.state;
    var pilih_tanggal_pesan = moment(date).format('YYYY-MM-DD');
    var pilih_jam_pesan = moment(date).format('HH:mm:00');
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;

    var niksaksi1 = this.props.route.params.niksaksi1;
    var namasaksi1 = this.props.route.params.namasaksi1;
    var nokksaksi1 = this.props.route.params.nokksaksi1;
    var umursaksi1 = this.props.route.params.umursaksi1;
    var kwnsaksi1 = this.props.route.params.kwnsaksi1;
    var niksaksi2 = this.props.route.params.niksaksi2;
    var namasaksi2 = this.props.route.params.namasaksi2;
    var nokksaksi2 = this.props.route.params.nokksaksi2;
    var umursaksi2 = this.props.route.params.umursaksi2;
    var kwnsaksi2 = this.props.route.params.kwnsaksi2;

    var nikjns = this.props.route.params.nikjns;
    var namajns = this.props.route.params.namajns;
    var namaibujns = this.props.route.params.namaibujns;
    var selectedcat = this.props.route.params.selectedcat;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var tpmeninggal = this.props.route.params.tpmeninggal;
    return (
      <SafeAreaView style={{backgroundColor: 'white'}}>
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
            Akta Mati
          </Text>
        </View>
        <ScrollView style={{marginBottom: 70}}>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AktaMati', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,

                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umursaksi2: umursaksi2,
                    kwnsaksi2: kwnsaksi2,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    pilih_jam_pesan: pilih_jam_pesan,
                    nikjns: this.state.nikjns,
                    namajns: this.state.namajns,
                    namaibujns: this.state.namaibujns,
                    selectedcat: this.state.selectedcat,
                    selectedcat1: this.state.selectedcat1,
                    tpmeninggal: this.state.tpmeninggal,
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
                  this.props.navigation.navigate('AktaMatisaksi', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,

                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umursaksi2: umursaksi2,
                    kwnsaksi2: kwnsaksi2,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    pilih_jam_pesan: pilih_jam_pesan,
                    nikjns: this.state.nikjns,
                    namajns: this.state.namajns,
                    namaibujns: this.state.namaibujns,
                    selectedcat: this.state.selectedcat,
                    selectedcat1: this.state.selectedcat1,
                    tpmeninggal: this.state.tpmeninggal,
                  })
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Saksi
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AktaMatijenazah', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,

                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umursaksi2: umursaksi2,
                    kwnsaksi2: kwnsaksi2,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    pilih_jam_pesan: pilih_jam_pesan,
                    nikjns: this.state.nikjns,
                    namajns: this.state.namajns,
                    namaibujns: this.state.namaibujns,
                    selectedcat: this.state.selectedcat,
                    selectedcat1: this.state.selectedcat1,
                    tpmeninggal: this.state.tpmeninggal,
                  })
                }
                style={{marginBottom: 20, ...styles.header}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Jenazah
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AktaMatiberkas', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,

                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umursaksi2: umursaksi2,
                    kwnsaksi2: kwnsaksi2,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    pilih_jam_pesan: pilih_jam_pesan,
                    nikjns: this.state.nikjns,
                    namajns: this.state.namajns,
                    namaibujns: this.state.namaibujns,
                    selectedcat: this.state.selectedcat,
                    selectedcat1: this.state.selectedcat1,
                    tpmeninggal: this.state.tpmeninggal,
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
          <View style={{marginHorizontal: 20}}>
            <TextInput
              label="Tanggal Kematian"
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
              label="Waktu Kematian"
              mode="outlined"
              keyboardType="numeric"
              right={
                <TextInput.Icon
                  icon="clock-outline"
                  onPress={this.timepicker}
                />
              }
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={pilih_jam_pesan}
              onChangeText={text => this.setState({pilih_jam_pesan: text})}
              onFocus={this.timepicker}
              showSoftInputOnFocus={false}
            />

            <TextInput
              label="NIK Jenazah"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikjns}
              onChangeText={text => this.setState({nikjns: text})}
            />
            <TextInput
              label="Nama Lengkap Jenazah"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namajns}
              onChangeText={text => this.setState({namajns: text})}
            />
            <TextInput
              label="Nama Lengkap Ibu Jenazah"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namaibujns}
              onChangeText={text => this.setState({namaibujns: text})}
            />

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Penyebab Kematian
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
                  marginTop: 10,
                  marginHorizontal: 20,
                }}
                mode="dropdown"
                selectedValue={this.state.selectedcat}
                onValueChange={this.onValueChangeCat.bind(this)}>
                <Picker.Item
                  color="grey"
                  label="Sakit Biasa/Tua"
                  value="Sakit Biasa/Tua"
                />
                <Picker.Item
                  color="grey"
                  label="Pandemi/Wabah Penyakit"
                  value="Pandemi/Wabah Penyakit"
                />
                <Picker.Item
                  color="grey"
                  label="Kecelakaan"
                  value="Kecelakaan"
                />
                <Picker.Item
                  color="grey"
                  label="Kriminalitas"
                  value="Kriminalitas"
                />
                <Picker.Item
                  color="grey"
                  label="Bunuh Diri"
                  value="Bunuh Diri"
                />
                <Picker.Item color="grey" label="Lainnya" value="Lainnya" />
              </Picker>
            </View>

            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
                marginTop: 30,
              }}>
              Yang Menerangkan
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
                <Picker.Item color="grey" label="Dokter" value="Dokter" />
                <Picker.Item
                  color="grey"
                  label="Tenaga Kesehatan"
                  value="Tenaga Kesehatan"
                />
                <Picker.Item color="grey" label="Polisi" value="Polisi" />
                <Picker.Item color="grey" label="Lainnya" value="Lainnya" />
              </Picker>
            </View>
            <TextInput
              label="Tempat Kematian"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.tpmeninggal}
              onChangeText={text => this.setState({tpmeninggal: text})}
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
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#005b9f',
    marginBottom: 60,
  },

  header: {
    fontSize: 18,
    color: '#005b9f',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#2286c3',
    borderBottomWidth: 3,
    marginTop: 20,
    backgroundColor: '#bbdefb',
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
