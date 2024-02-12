import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default class AktaPengangkatananak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isVisible: true,
     date: new Date(),
      date1: new Date(),
	  date2: new Date(),
     mode: 'date',
      mode1: 'date1',
	    mode2: 'date1',
     tampil: false,
      tampil1: false,
tampil2: false,
      pilih_tanggal_pesan: '',
      pilih_tanggal_pesan1: '',
	        pilih_tanggal_pesan2: '',

	       selectedcat: 'Laki-Laki',
	selectedcat1: 'Islam',
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
  datepicker = () => {
    this.tampil('date');
  };
    async onValueChangeCat(value) {
    this.setState({selectedcat: value});
  }
  datepicker1 = () => {
    this.tampil1('date1');
  };
  
    datepicker2 = () => {
    this.tampil2('date2');
  };
  async onValueChangeCat1(value) {
    this.setState({selectedcat1: value});
  }
  render() {
    const {tampil, date, mode} = this.state;
    const {tampil1, date1, mode1} = this.state;
	 const {tampil2, date2, mode2} = this.state;
	      var pilih_tanggal_pesan = moment(date).format('YYYY-MM-DD');
		      var pilih_tanggal_pesan1 = moment(date1).format('YYYY-MM-DD');
			   var pilih_tanggal_pesan2 = moment(date2).format('YYYY-MM-DD');
	     var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;			  
	
	var nikpr = this.props.route.params.nikpr;
    var namapr = this.props.route.params.namapr;
    var temptlahir = this.props.route.params.temptlahir;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var selectedcat = this.props.route.params.selectedcat;
	   var selectedcat1 = this.props.route.params.selectedcat1;
    var anakke = this.props.route.params.anakke;
    var noaktakel = this.props.route.params.noaktakel;
    var pilih_tanggal_pesan1 = this.props.route.params.pilih_tanggal_pesan1;
    var penerbit = this.props.route.params.penerbit;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerTitle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', {nikuser: nikuser,})}
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
            Akta Pengakuan Anak
          </Text>
        </View>
		
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
           

            <TouchableOpacity
        
              style={{marginBottom: 20, ...styles.headerOff}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                Data Isian
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={{backgroundColor: 'white', marginHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
		  
		  
		     <Text style={{marginBottom: 20}}>Data Ibu </Text>
          <TextInput
            label="NIK Ibu "
			 maxLength={16}
            mode="outlined"
            keyboardType="numeric"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
           value={this.state.nikibukandung}
         onChangeText={text => this.setState({nikibukandung: text})}
          />
	
		  
		  
		  
		  
          <TextInput
            label="Nama Lengkap Ibu "
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namaibukandung}
             onChangeText={text => this.setState({namaibukandung: text})}
          />
		  
		  	   <Text style={{marginBottom: 20}}>Data Ayah </Text>
          <TextInput
            label="NIK Ayah "
            mode="outlined"
			       keyboardType="numeric"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.nikayahkandung}
            onChangeText={text => this.setState({nikayahkandung: text})}
          />
          <TextInput
            label="Nama Lengkap Ayah "
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namaayahkandung}
            onChangeText={text => this.setState({namaayahkandung: text})}
          />		  
		  <Text style={{marginBottom: 20}}>Data Saksi</Text>
          <TextInput
            label="NIK  Saksi"
			       keyboardType="numeric"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.nikibuangkat}
            onChangeText={text => this.setState({nikibuangkat: text})}
          />
          <TextInput
            label="Nama Lengkap Saksi"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namaibuangkat}
            onChangeText={text => this.setState({namaibuangkat: text})}
          />  
		    
		  
		    <Text style={{marginBottom: 20}}>Data Administrasi</Text>
          <TextInput
            label="Nomor Putusan Pengadilan"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.noputusanpengadilan}
            onChangeText={text => this.setState({noputusanpengadilan: text})}
          />
		  
		  
		  
          <TextInput
            label="Tanggal Putusan Pengadilan"
       mode="outlined"
            keyboardType="numeric"
            right={<TextInput.Icon icon="calendar" onPress={this.datepicker2} />}
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
           value={pilih_tanggal_pesan2}
          onChangeText={text => this.setState({pilih_tanggal_pesan2: text})}
            onFocus={this.datepicker2}
            showSoftInputOnFocus={false}
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
          {/* JenisKelamin */}
         
          <TextInput
            label="Nama Lembaga Peradilan"
            mode="outlined"
           
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.nmputusanpengadilan}
            onChangeText={text => this.setState({nmputusanpengadilan: text})}
          />

          <TextInput
            label="Tempat  Lembaga Peradilan"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.temptputusanpengadilan}
            onChangeText={text => this.setState({temptputusanpengadilan: text})}
          />
          
		  
           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
         onPress={() =>
                    this.props.navigation.navigate('AktaPengakuananak', {
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
                    this.props.navigation.navigate('AktaPengakuananakberkas', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					
					  	nikpr: nikpr,
				namapr: namapr,
				temptlahir: temptlahir,
				pilih_tanggal_pesan: pilih_tanggal_pesan,
				selectedcat : selectedcat,
				selectedcat1: selectedcat1,
				anakke : anakke,
				noaktakel : noaktakel,
				pilih_tanggal_pesan1 : pilih_tanggal_pesan1,	  
					penerbit : penerbit,	 
					
						nikibukandung : this.state.nikibukandung,	 
						namaibukandung : this.state.namaibukandung,	 
						nikayahkandung : this.state.nikayahkandung,	 
						namaayahkandung : this.state.namaayahkandung,	 
						nikibuangkat : this.state.nikibuangkat,	 
						namaibuangkat : this.state.namaibuangkat,	 
				
						noputusanpengadilan : this.state.noputusanpengadilan,	 
						pilih_tanggal_pesan2 : pilih_tanggal_pesan2,	 
						nmputusanpengadilan : this.state.nmputusanpengadilan,	 
						temptputusanpengadilan : this.state.temptputusanpengadilan,	 
														
					  
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
