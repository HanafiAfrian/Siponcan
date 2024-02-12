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
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
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
export default class AktaLahiranak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedcat: 'Laki-Laki',
      selectedcat1: 'RS/RB',
      selectedcat2: 'Dokter',
      selectedcat3: 'Tunggal',
      show: false,
      isVisible: true,
      date: new Date(),
      mode: 'date',
      tampil: false,
      pilih_tanggal_pesan2: '',

      kwnanak: 'Indonesia',
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

  timepicker = () => {
    this.tampil('time');
  };

  showLoader() {
    this.setState({isVisible: true});
  }

  hideLoader() {
    this.setState({isVisible: false});
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
  render() {
    const {tampil, date, mode} = this.state;
    var pilih_tanggal_pesan2 = moment(date).format('YYYY-MM-DD');
    var pilih_jam_pesan = moment(date).format('HH:mm:00');

    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;
var selectedcat12 = this.props.route.params.selectedcat12;
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

    var nikayah = this.props.route.params.nikayah;
    var namaayah = this.props.route.params.namaayah;
    var tmptayah = this.props.route.params.tmptayah;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var kwnayah = this.props.route.params.kwnayah;

    var nikibu = this.props.route.params.nikibu;
    var namaibu = this.props.route.params.namaibu;
    var tmptibu = this.props.route.params.tmptibu;
    var pilih_tanggal_pesan1 = this.props.route.params.pilih_tanggal_pesan1;
    var kwnibu = this.props.route.params.kwnibu;
    var nikanak = this.props.route.params.nikanak;
    var namaanak = this.props.route.params.namaanak;
    var selectedcat = this.props.route.params.selectedcat;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var tmtpanak = this.props.route.params.tmtpanak;
    var harilahir = this.props.route.params.harilahir;

    var anakke = this.props.route.params.anakke;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var beratanak = this.props.route.params.beratanak;
    var pjganak = this.props.route.params.pjganak;
    var selectedcat3 = this.props.route.params.selectedcat3;

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
            Akta Kelahiran 
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                marginTop: 20,
                color: 'grey',
              }}>
              Permohonan Akta Kelahiran
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 20,
                fontSize: 16,
                color: 'grey',
              }}>
              (Khusus yang baru lahir)
            </Text>
          </View>

          <View style={{marginHorizontal: 20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  // marginLeft: -130,
                }}>
                   <TouchableOpacity
                 
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Data Anak
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <TextInput
              label="Nama Lengkap (Anak)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namaanak}
              onChangeText={text => this.setState({namaanak: text})}
            />
            {/* JenisKelamin */}
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
                marginTop: 0,
              }}>
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
                  marginHorizontal: 20,
                }}
                mode="dropdown"
                selectedValue={this.state.selectedcat}
                onValueChange={this.onValueChangeCat.bind(this)}>
                <Picker.Item
                  color="black"
                  label="Laki-Laki"
                  value="Laki-Laki"
                />
                <Picker.Item
                  color="black"
                  label="Perempuan"
                  value="Perempuan"
                />
              </Picker>
            </View>
            {/* JenisKelamin */}

            {/* JenisKelamin */}
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
                marginTop: 30,
              }}>
              Tempat Dilahirkan (anak)
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
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}
                mode="dropdown"
                selectedValue={this.state.selectedcat1}
                onValueChange={this.onValueChangeCat1.bind(this)}>
                <Picker.Item color="black" label="RS/RB" value="RS/RB" />
                <Picker.Item
                  color="black"
                  label="Puskesmas"
                  value="Puskesmas"
                />
                <Picker.Item color="black" label="Polindes" value="Polindes" />
                <Picker.Item color="black" label="Rumah" value="Rumah" />
                <Picker.Item color="black" label="Lainnya" value="Lainnya" />
              </Picker>
            </View>
            {/* JenisKelamin */}

            <TextInput
              label="Tempat Kelahiran (Kota / Kabupaten)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.tmtpanak}
              onChangeText={text => this.setState({tmtpanak: text})}
            />
       

            <TextInput
              label="Tanggal Lahir Anak"
              right={
                <TextInput.Icon icon="calendar" onPress={this.datepicker} />
              }
              placeholder="dd/mm/yyyy"
              placeholderTextColor="grey"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={pilih_tanggal_pesan2}
              onChangeText={text => this.setState({pilih_tanggal_pesan2: text})}
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
              label="Jam Lahir Anak"
              right={
                <TextInput.Icon
                  icon="clock-outline"
                  onPress={this.timepicker}
                />
              }
              placeholder=""
              placeholderTextColor="grey"
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

            <TextInput
              label="Kelahiran ke- (anak)"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.anakke}
              onChangeText={text => this.setState({anakke: text})}
            />

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Penolong Kelahiran
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
                  marginHorizontal: 20,
                }}
                mode="dropdown"
                selectedValue={this.state.selectedcat2}
                onValueChange={this.onValueChangeCat2.bind(this)}>
                <Picker.Item color="black" label="Dokter" value="Dokter" />
                <Picker.Item
                  color="black"
                  label="Bidan/Perawat"
                  value="Bidan/Perawat"
                />
                <Picker.Item color="black" label="Dukun" value="Dukun" />
                <Picker.Item color="black" label="Lainnya" value="Lainnya" />
              </Picker>
            </View>

            <TextInput
              label="Berat (Kg)"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 25,
                marginTop: 10,
              }}
              theme={{roundness: 10}}
              value={this.state.beratanak}
              onChangeText={text => this.setState({beratanak: text})}
            />

            <TextInput
              label="Panjang (Cm)"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.pjganak}
              onChangeText={text => this.setState({pjganak: text})}
            />

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Jenis Kelahiran
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
                marginBottom: 30,
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
                <Picker.Item color="black" label="Tunggal" value="Tunggal" />
                <Picker.Item color="black" label="Kembar 1" value="Kembar 1" />
                <Picker.Item color="black" label="Kembar 2" value="Kembar 2" />
                <Picker.Item color="black" label="Kembar 3" value="Kembar 3" />
                <Picker.Item color="black" label="Kembar 4" value="Kembar 4" />
                <Picker.Item color="black" label="Kembar 5" value="Kembar 5" />
                <Picker.Item color="black" label="Lainnya" value="Lainnya" />
              </Picker>
            </View>
          </View>
		    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
          onPress={() =>
                  this.props.navigation.navigate('AktaLahir2', {
                nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
selectedcat12 : selectedcat12,
                  })
                }
             style={{marginBottom: 20, marginLeft: -20,...styles.headerOff1}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
             Sebelumnya
              </Text>
            </TouchableOpacity>
			
			<TouchableOpacity
                  onPress={() =>
                  this.props.navigation.navigate('AktaLahirayah2', {
                   nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					selectedcat12 : selectedcat12,
                     

                      nikanak: this.state.nikanak,
                      namaanak: this.state.namaanak,
                      selectedcat: this.state.selectedcat,
                      selectedcat1: this.state.selectedcat1,
                      tmtpanak: this.state.tmtpanak,
                      harilahir: this.state.harilahir,
                      pilih_tanggal_pesan2: pilih_tanggal_pesan2,
                      pilih_jam_pesan: pilih_jam_pesan,
                      anakke: this.state.anakke,
                      selectedcat2: this.state.selectedcat2,
                      beratanak: this.state.beratanak,
                      pjganak: this.state.pjganak,
                      selectedcat3: this.state.selectedcat3,
                  })
                }
            style={{marginBottom: 20,marginRight: -20,...styles.headerOff1}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
             Selanjutnya
              </Text>
            </TouchableOpacity>
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
 headerOff1: {
    fontSize: 18,
    color: '#005b9f',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',

    marginTop: 10,
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
    padding: 5,
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
    padding: 10,

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
