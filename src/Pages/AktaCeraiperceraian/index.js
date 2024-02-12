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

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import {Clock, Calendar} from '../../../assets/images';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AktaCeraiperceraian extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isVisible: true,
      date: new Date(),
      date1: new Date(),
      date2: new Date(),
      date3: new Date(),

      mode: 'date',
      mode1: 'date1',
      mode2: 'date2',
      mode3: 'date3',

      tampil: false,
      tampil1: false,
      tampil2: false,
      tampil3: false,

      pilih_tanggal_pesan: '',
      pilih_tanggal_pesan1: '',
      pilih_tanggal_selesai: '',
      pilih_tanggal_selesai1: '',
    };
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

  setDate2 = (event, date2) => {
    date2 = date2 || this.state.date2;

    this.setState({
      tampil2: Platform.OS === 'ios' ? true : false,
      date2,
    });
  };

  setDate3 = (event, date3) => {
    date3 = date3 || this.state.date3;

    this.setState({
      tampil3: Platform.OS === 'ios' ? true : false,
      date3,
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

  tampil2 = mode2 => {
    this.setState({
      tampil2: true,
      mode2,
    });
  };

  tampil3 = mode3 => {
    this.setState({
      tampil3: true,
      mode3,
    });
  };
  datepicker = () => {
    this.tampil('date');
  };
  datepicker1 = () => {
    this.tampil1('date1');
  };

  datepicker2 = () => {
    this.tampil2('date2');
  };

  datepicker3 = () => {
    this.tampil3('date3');
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
    const {tampil2, date2, mode2} = this.state;
    const {tampil3, date3, mode3} = this.state;
    var pilih_tanggal_pesan = moment(date).format('YYYY-MM-DD');

    var pilih_jam_pesan = moment(date).format('HH:mm:00');
    var pilih_tanggal_selesai = moment(date1).format('YYYY-MM-DD');
    var pilih_tanggal_pesan1 = moment(date2).format('YYYY-MM-DD');
    var pilih_tanggal_selesai1 = moment(date3).format('YYYY-MM-DD');

    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

    var noaktapmhon = this.props.route.params.noaktapmhon;

    var nama_pengadilan = this.props.route.params.nama_pengadilan;

    var no_pengadilan = this.props.route.params.no_pengadilan;  


	var niksuami = this.props.route.params.niksuami;
	var namasuami = this.props.route.params.namasuami;
	var nikistri = this.props.route.params.nikistri;
	var namaistri = this.props.route.params.namaistri;
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
            Akta Perceraian
          </Text>
        </View>
	  
        <ScrollView style={{backgroundColor: 'white', paddingBottom: 70}}>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity

                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Data Perceraian
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={{marginHorizontal: 20}}>
		  
		    <TextInput
              label="Yang Mengajukan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.yangmengajukan}
              onChangeText={text => this.setState({yangmengajukan: text})}
            />
            <TextInput
              label="No.Akta Perkawinan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.noaktapmhon}
              onChangeText={text => this.setState({noaktapmhon: text})}
            />

            <TextInput
              label="Tanggal Akta Perkawinan"
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
              label="Tempat Pencatatan Perkawinan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.tmptcttpperkawinan}
              onChangeText={text => this.setState({tmptcttpperkawinan: text})}
            />
    <TextInput
              label="No. Putusan Pengadilan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25, height: 56}}
              theme={{roundness: 10}}
              value={this.state.no_pengadilan}
              onChangeText={text => this.setState({no_pengadilan: text})}
            />
			
			
			<TextInput
              label="Tanggal Putusan Pengadilan"
              mode="outlined"
              keyboardType="numeric"
              right={
                <TextInput.Icon icon="calendar" onPress={this.datepicker1} />
              }
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
              label="Nama Lembaga Peradilan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nama_pengadilan}
              onChangeText={text => this.setState({nama_pengadilan: text})}
            />

            
   <TextInput
              label="Tempat Lembaga Peradilan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25, height: 56}}
              theme={{roundness: 10}}
              value={this.state.nosuratpenitera}
              onChangeText={text => this.setState({nosuratpenitera: text})}
            />
        

         

            {tampil2 && (
              <DateTimePicker
                value={date2}
                mode2={mode2}
                is24Hour={true}
                display="default"
                onChange={this.setDate2}
              />
            )}

         

           
          </View>
		  
		   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
       onPress={() =>
                  this.props.navigation.navigate('AktaCeraiIsian', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
             
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
                  this.props.navigation.navigate('AktaCeraiberkas', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    kwnpmhon: kwnpmhon,
					
					niksuami : niksuami,
					namasuami : namasuami,
					nikistri : nikistri,
					namaistri : namaistri,
					
					  yangmengajukan: this.state.yangmengajukan,
                    noaktapmhon: this.state.noaktapmhon,
                    pilih_tanggal_pesan: pilih_tanggal_pesan,
                    nama_pengadilan: this.state.nama_pengadilan,
                    pilih_tanggal_selesai: pilih_tanggal_selesai,
					
					 tmptcttpperkawinan: this.state.tmptcttpperkawinan,
					  nosuratpenitera: this.state.nosuratpenitera,
                    no_pengadilan: this.state.no_pengadilan,
                    pilih_tanggal_pesan1: pilih_tanggal_pesan1,
                
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

  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    elevation: 1,
  },
});
