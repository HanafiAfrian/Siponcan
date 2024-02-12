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
     Akta Perceraian
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
                Data Suami & Istri
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={{backgroundColor: 'white', marginHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
		  
		  
		     <Text style={{marginBottom: 20}}>Data Suami </Text>
          <TextInput
            label="NIK Suami "
			 maxLength={16}
            mode="outlined"
            keyboardType="numeric"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
           value={this.state.niksuami}
         onChangeText={text => this.setState({niksuami: text})}
          />
	
		  
		  
		  
		  
          <TextInput
            label="Nama Lengkap Suami "
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namasuami}
             onChangeText={text => this.setState({namasuami: text})}
          />
		  
		  	   <Text style={{marginBottom: 20}}>Data Istri </Text>
          <TextInput
            label="NIK Istri "
            mode="outlined"
			       keyboardType="numeric"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.nikistri}
            onChangeText={text => this.setState({nikistri: text})}
          />
          <TextInput
            label="Nama Lengkap Istri "
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namaistri}
            onChangeText={text => this.setState({namaistri: text})}
          />		  
		
		  
           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
         onPress={() =>
                    this.props.navigation.navigate('AktaCerai', {
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
                    this.props.navigation.navigate('AktaCeraiperceraian', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					
					
						niksuami : this.state.niksuami,	 
						namasuami : this.state.namasuami,	 
						nikistri : this.state.nikistri,	 
						namaistri : this.state.namaistri,	 
			
														
					  
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
