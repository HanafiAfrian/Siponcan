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
export default class Kia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isVisible: true,
      date: new Date(),
      mode: 'date',
      tampil: false,
     pilih_tanggal_pesan: '',
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

  tampil = mode => {
    this.setState({
      tampil: true,
      mode,
    });
  };

  datepicker = () => {
    this.tampil('date');
  };
    async onValueChangeCat(value) {
    this.setState({selectedcat: value});
  }

  async onValueChangeCat1(value) {
    this.setState({selectedcat1: value});
  }
  render() {
   const {tampil, date, mode} = this.state;
	
	      var pilih_tanggal_pesan = moment(date).format('YYYY-MM-DD');
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
            onPress={() => this.props.navigation.navigate('Home', {nikuser:nikuser,})}
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
            KIA
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
                Data Anak
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={{backgroundColor: 'white', marginHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
          <TextInput
            label="NIK"
			maxLength={16}
            mode="outlined"
            keyboardType="numeric"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
             value={this.state.nikpr}
           onChangeText={text => this.setState({nikpr: text})}
          />
          <TextInput
            label="Nama Lengkap"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
           value={this.state.namapr}
            onChangeText={text => this.setState({namapr: text})}
          />
          <TextInput
            label="Tempat Lahir"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.temptlahir}
            onChangeText={text => this.setState({temptlahir: text})}
          />
          <TextInput
            label="Tanggal Terbit Akta Lahir"
            mode="outlined"
            keyboardType="numeric"
            right={<TextInput.Icon icon="calendar" onPress={this.datepicker} />}
            activeOutlineColor="#005b9f"
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
              mode1={mode}
              is24Hour={true}
              display="default"
              onChange={this.setDate}
            />
          )}

          {/* JenisKelamin */}
          <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              color: 'grey',
            }}>
            Jenis Kelamin
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              marginBottom: 25,
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
             onValueChange={this.onValueChangeCat.bind(this)}
            >
              <Picker.Item color="grey" label="Laki-Laki" value="Laki-Laki" />
              <Picker.Item color="grey" label="Perempuan" value="Perempuan" />
            </Picker>
          </View>
          {/* JenisKelamin */}

          <Text style={{marginLeft: 10, fontSize: 16, color: 'grey'}}>
            Agama
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
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
                paddingHorizontal: 20,
              }}
              mode="dropdown"
               selectedValue={this.state.selectedcat1}
               onValueChange={this.onValueChangeCat1.bind(this)}
            >
              <Picker.Item color="grey" label="Islam" value="Islam" />
              <Picker.Item color="grey" label="Kristen" value="Kristen" />
              <Picker.Item color="grey" label="Katolik" value="Katolik" />
              <Picker.Item color="grey" label="Hindu" value="Hindu" />
              <Picker.Item color="grey" label="Budha" value="Budha" />
              <Picker.Item color="grey" label="Konghucu" value="Konghucu" />
			 			  <Picker.Item color="grey" label="Kepercayaan Lainnya" value="Kepercayaan Lainnya"/>
            </Picker>
          </View>

        

          <TextInput
            label="Nomor Akta Kelahiran"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.noaktakel}
            onChangeText={text => this.setState({noaktakel: text})}
          />

          <TextInput
            label="Nama Ayah"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namaayah}
            onChangeText={text => this.setState({namaayah: text})}
          />
          <TextInput
            label="Nama Ibu"
            mode="outlined"
            activeOutlineColor="#005b9f"
            style={{backgroundColor: 'white', marginBottom: 25}}
            theme={{roundness: 10}}
            value={this.state.namaibu}
            onChangeText={text => this.setState({namaibu: text})}
          />
		     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
         onPress={() =>
                    this.props.navigation.navigate('Kiapm', {
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
                    this.props.navigation.navigate('Kiaberkas', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					
					  	nikpr:this.state.nikpr,
				namapr:this.state.namapr,
				temptlahir: this.state.temptlahir,
				pilih_tanggal_pesan: pilih_tanggal_pesan,
				selectedcat : this.state.selectedcat,
				selectedcat1: this.state.selectedcat1,
				noaktakel : this.state.noaktakel,
				namaayah : this.state.namaayah,
				namaibu : this.state.namaibu,	  
					  
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
