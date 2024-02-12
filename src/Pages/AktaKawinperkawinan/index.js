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
      selectedcat1: 'Kristen',
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
    var niksuami = this.props.route.params.niksuami;	
	    var namasuami = this.props.route.params.namasuami;	
		    var selectedcat = this.props.route.params.selectedcat;	
			    var kawin_kesuami = this.props.route.params.kawin_kesuami;	
				
	    var nikistri = this.props.route.params.nikistri;	
		    var namaistri = this.props.route.params.namaistri;	
			    var selectedcat1 = this.props.route.params.selectedcat1;	
				    var kawin_keistri = this.props.route.params.kawin_keistri;	
					
					
					    var nik_ayah_s = this.props.route.params.nik_ayah_s;	
									    var nama_ayah_s = this.props.route.params.nama_ayah_s;	
													    var nik_ibu_s = this.props.route.params.nik_ibu_s;	
																	    var nama_ibu_s = this.props.route.params.nama_ibu_s;	
							
				    var nik_ayah_is = this.props.route.params.nik_ayah_is;	
						    var nama_ayah_is = this.props.route.params.nama_ayah_is;	
								    var nik_ibu_is = this.props.route.params.nik_ibu_is;	
										    var nama_ibu_is = this.props.route.params.nama_ibu_is;	

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
                 
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Data Perkawinan
                  </Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={{marginHorizontal: 20}}>
            <Text style={{marginBottom: 20, color: 'grey'}}>Perkawinan</Text>

          
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
              style={{backgroundColor: 'white', marginBottom: 5}}
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
              label="Tempat Pemberkatan Perkawinan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{
                backgroundColor: 'white',
                marginBottom: 5,
                marginTop: 20,
              }}
              theme={{roundness: 10}}
              value={this.state.tempatpemberkatan}
              onChangeText={text => this.setState({tempatpemberkatan: text})}
            />

            <TextInput
              label="Kawin Secara Agama"
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
		    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
   onPress={() =>
                  this.props.navigation.navigate('AktaKawinayahibudristri', {
                    nikuser: nikuser,
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
                  this.props.navigation.navigate('AktaKawinsaksi', {
                     nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					
					
					niksuami : niksuami,	 
						namasuami : namasuami,	 
						     selectedcat: selectedcat,
						kawin_kesuami : kawin_kesuami,	
					
					nikistri : nikistri,	 
						namaistri : namaistri,	 
						selectedcat1 : selectedcat1,	 
						kawin_keistri :kawin_keistri,	
					

						nik_ayah_s : nik_ayah_s,	 
						nama_ayah_s : nama_ayah_s,	 
						nik_ibu_s : nik_ibu_s,	 
						nama_ibu_s : nama_ibu_s,						
						
											nik_ayah_is : nik_ayah_is,	 
						nama_ayah_is : nama_ayah_is,	 
						nik_ibu_is : nik_ibu_is,	 
						nama_ibu_is : nama_ibu_is,		
						
								pilih_tanggal_pesan : pilih_tanggal_pesan,		
							tempatpemberkatan : this.state.tempatpemberkatan,
							nm_organisasi : this.state.nm_organisasi,
 						ket_organisasi : this.state.ket_organisasi,               
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
