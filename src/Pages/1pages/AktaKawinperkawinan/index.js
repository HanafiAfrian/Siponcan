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
import Iconb from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Divider, TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Clock, Calendar} from '../../../assets/images';

export default class AktaKawinperkawinan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isVisible: true,
      selectedcat: 'Kawin',
      selectedcat1: 'Islam',
      date: new Date(),
      date1: new Date(),
      mode: 'date',
      mode1: 'date1',
      tampil: false,
      tampil1: false,
      pilih_tanggal_pesan: '',
      pilih_tanggal_selesai: '',
      nik_ayah_s: '',
      nik_ibu_s: '',
      nama_ibu_s: '',
      nik_ayah_is: '',
      nama_ayah_is: '',
      nik_ibu_is: '',
      nama_ibu_is: '',
      kawin_ke: '',
      istri_ke: '',
      nm_organisasi: '',
      ket_organisasi: '',
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
  setDate1 = (event, date1) => {
    date1 = date1 || this.state.date1;

    this.setState({
      tampil1: Platform.OS === 'ios' ? true : false,
      date1,
    });
  };
  tampil = mode => {
    this.setState({
      tampil: true,
      mode,
    });
  };
  tampil1 = mode1 => {
    this.setState({
      tampil1: true,
      mode1,
    });
  };
  datepicker = () => {
    this.tampil('date');
  };
  datepicker1 = () => {
    this.tampil1('date1');
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
    const {tampil1, date1, mode1} = this.state;
    var pilih_tanggal_pesan = moment(date).format('YYYY-MM-DD');
    var pilih_jam_pesan = moment(date).format('HH:mm:00');
    var pilih_tanggal_selesai = moment(date1).format('YYYY-MM-DD');
    var hitungawal = moment(date).format('DD');

    var nikuser = this.props.route.params.nikuser;

    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;
    var niksaksi1 = this.props.route.params.niksaksi1;
    var namasaksi1 = this.props.route.params.namasaksi1;
    var nokksaksi1 = this.props.route.params.nokksaksi1;
    var umursaksi1 = this.props.route.params.umursaksi1;
    var kwnsaksi1 = this.props.route.params.kwnsaksi1;
    var niksaksi2 = this.props.route.params.niksaksi2;
    var namasaksi2 = this.props.route.params.namasaksi2;
    var nokksaksi2 = this.props.route.params.nokksaksi2;
    var umurksaksi2 = this.props.route.params.umurksaksi2;
    var kwnsaksi2 = this.props.route.params.kwnsaksi2;

    var nik_ayah_s = this.props.route.params.nik_ayah_s;
    var nama_ayah_s = this.props.route.params.nama_ayah_s;
    var nik_ibu_s = this.props.route.params.nik_ibu_s;
    var nama_ibu_s = this.props.route.params.nama_ibu_s;
    var nik_ayah_is = this.props.route.params.nik_ayah_is;
    var nama_ayah_is = this.props.route.params.nama_ayah_is;
    var nik_ibu_is = this.props.route.params.nik_ibu_is;
    var nama_ibu_is = this.props.route.params.nama_ibu_is;
    var selectedcat = this.props.route.params.selectedcat;
    var kawin_ke = this.props.route.params.kawin_ke;
    var istri_ke = this.props.route.params.istri_ke;

    var selectedcat1 = this.props.route.params.selectedcat1;
    var nm_organisasi = this.props.route.params.nm_organisasi;
    var ket_organisasi = this.props.route.params.ket_organisasi;

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
            <Iconb name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
            }}>
            Akta Perkawinan
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          {/* <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                marginTop: 20,
                color: 'grey',
              }}>
              Permohonan Akta Perkawinan
            </Text>
          </View> */}

          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AktaKawin', {
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
                  this.props.navigation.navigate('AktaKawinsaksi', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
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
                  this.props.navigation.navigate('AktaKawinperkawinan', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umurksaksi2: umurksaksi2,
                    kwnsaksi2: kwnsaksi2,
                  })
                }
                style={{marginBottom: 20, ...styles.header}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#005b9f',
                  }}>
                  Perkawinan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AktaKawinberkas', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
                    niksaksi1: niksaksi1,
                    namasaksi1: namasaksi1,
                    nokksaksi1: nokksaksi1,
                    umursaksi1: umursaksi1,
                    kwnsaksi1: kwnsaksi1,
                    niksaksi2: niksaksi2,
                    namasaksi2: namasaksi2,
                    nokksaksi2: nokksaksi2,
                    umurksaksi2: umurksaksi2,
                    kwnsaksi2: kwnsaksi2,
                    nik_ayah_s: this.state.nik_ayah_s,
                    nama_ayah_s: this.state.nama_ayah_s,
                    nik_ibu_s: this.state.nik_ibu_s,
                    nama_ibu_s: this.state.nama_ibu_s,
                    nik_ayah_is: this.state.nik_ayah_is,
                    nama_ayah_is: this.state.nama_ayah_is,
                    nik_ibu_is: this.state.nik_ibu_is,
                    nama_ibu_is: this.state.nama_ibu_is,
                    selectedcat: this.state.selectedcat,
                    kawin_ke: this.state.kawin_ke,
                    istri_ke: this.state.istri_ke,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    pilih_jam_pesan: pilih_jam_pesan,
                    pilih_tanggal_selesai: pilih_tanggal_selesai,
                    selectedcat1: this.state.selectedcat1,
                    nm_organisasi: this.state.nm_organisasi,
                    ket_organisasi: this.state.ket_organisasi,
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
            <Text style={{marginBottom: 20, color: 'grey'}}>Perkawinan</Text>

            <TextInput
              label="NIK Ayah dari Suami"
              mode="outlined"
              activeOutlineColor="#005b9f"
              act
              keyboardType="numeric"
              x
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nik_ayah_s}
              onChangeText={text => this.setState({nik_ayah_s: text})}
            />
            <TextInput
              label="Nama Ayah dari Suami"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nama_ayah_s}
              onChangeText={text => this.setState({nama_ayah_s: text})}
            />
            <TextInput
              label="NIK Ibu dari Suami"
              mode="outlined"
              activeOutlineColor="#005b9f"
              act
              keyboardType="numeric"
              x
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nik_ibu_s}
              onChangeText={text => this.setState({nik_ibu_s: text})}
            />
            <TextInput
              label="Nama Ibu dari Suami"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nama_ibu_s}
              onChangeText={text => this.setState({nama_ibu_s: text})}
            />
            <TextInput
              label="NIK Ayah dari Istri"
              mode="outlined"
              activeOutlineColor="#005b9f"
              act
              keyboardType="numeric"
              x
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nik_ayah_is}
              onChangeText={text => this.setState({nik_ayah_is: text})}
            />
            <TextInput
              label="Nama Ayah dari Istri"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nama_ayah_is}
              onChangeText={text => this.setState({nama_ayah_is: text})}
            />
            <TextInput
              label="NIK Ibu dari Istri"
              mode="outlined"
              activeOutlineColor="#005b9f"
              act
              keyboardType="numeric"
              x
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nik_ibu_is}
              onChangeText={text => this.setState({nik_ibu_is: text})}
            />
            <TextInput
              label="Nama Ibu dari Istri"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nama_ibu_is}
              onChangeText={text => this.setState({nama_ibu_is: text})}
            />
            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Status Perkawinan Sebelum Kawin
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
                <Picker.Item color="grey" label="Kawin" value="Kawin" />
                <Picker.Item
                  color="grey"
                  label="Belum Kawin"
                  value="Belum Kawin"
                />
                <Picker.Item
                  color="grey"
                  label="Cerai Hidup"
                  value="Ceri Hidup"
                />
                <Picker.Item
                  color="grey"
                  label="Cerai Mati"
                  value="Ceri Mati"
                />
              </Picker>
            </View>

            <TextInput
              label="Perkawinan yang ke-"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.kawin_ke}
              onChangeText={text => this.setState({kawin_ke: text})}
            />
            <TextInput
              label="Istri yang ke- (Jika Poligami)"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.istri_ke}
              onChangeText={text => this.setState({istri_ke: text})}
            />

            <TextInput
              label="Tanggal Akad/Pemberkatan Perkawinan"
              placeholder="dd/mm/yyyy"
              placeholderTextColor="grey"
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
              label="Tanggal Melapor"
              placeholder="dd/mm/yyyy"
              placeholderTextColor="grey"
              right={
                <TextInput.Icon icon="calendar" onPress={this.datepicker1} />
              }
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={pilih_tanggal_selesai}
              onChangeText={text =>
                this.setState({pilih_tanggal_selesai: text})
              }
              onFocus={this.datepicker1}
              showSoftInputOnFocus={false}
            />

            {tampil1 && (
              <DateTimePicker
                value={date1}
                mode1={mode1}
                is24Hour={true}
                display="default"
                onChange={this.setDate1}
              />
            )}

            <TextInput
              label="Jam Pelaporan"
              placeholder=""
              placeholderTextColor="grey"
              right={
                <TextInput.Icon
                  icon="clock-outline"
                  onPress={this.timepicker}
                />
              }
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={pilih_jam_pesan}
              onChangeText={text => this.setState({pilih_jam_pesan: text})}
              onFocus={this.timepicker}
              showSoftInputOnFocus={false}
            />

            <Text style={{marginLeft: 10, fontSize: 16, color: 'grey'}}>
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
                selectedValue={this.state.selectedcat1}
                onValueChange={this.onValueChangeCat1.bind(this)}>
                <Picker.Item color="grey" label="Islam" value="Islam" />
                <Picker.Item color="grey" label="Kristen" value="Kristen" />
                <Picker.Item color="grey" label="Katolik" value="Katolik" />
                <Picker.Item color="grey" label="Hindu" value="Hindu" />
                <Picker.Item color="grey" label="Budha" value="Budha" />
                <Picker.Item color="grey" label="Konghucu" value="Konghucu" />
              </Picker>
            </View>

            <TextInput
              label="Nama Organisasi Kepercayaan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.nm_organisasi}
              onChangeText={text => this.setState({nm_organisasi: text})}
            />
            <TextInput
              label="Nama Pemuka Agama/Kepercayaan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.ket_organisasi}
              onChangeText={text => this.setState({ket_organisasi: text})}
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
