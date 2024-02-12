import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default class AktaCerai extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnpmhon12: 'Indonesia',
    };
  }
  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

    var noaktapmhon = this.props.route.params.noaktapmhon;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var nama_pengadilan = this.props.route.params.nama_pengadilan;
    var pilih_tanggal_selesai = this.props.route.params.pilih_tanggal_selesai;
		 var tmptcttpperkawinan = this.props.route.params.tmptcttpperkawinan;
	  var nosuratpenitera = this.props.route.params.nosuratpenitera;
    var no_pengadilan = this.props.route.params.no_pengadilan;
    var pilih_tanggal_pesan1 = this.props.route.params.pilih_tanggal_pesan1;
    var pilih_tanggal_selesai1 = this.props.route.params.pilih_tanggal_selesai1;

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
        <ScrollView>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        
              <TouchableOpacity

                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Data Pemohon
                </Text>
              </TouchableOpacity>

             
            </View>
          </ScrollView>
          <View style={{marginHorizontal: 20}}>
            <TextInput
              label="NIK"
			  maxLength={16}
              mode="outlined"
              activeOutlineColor="#005b9f"
              keyboardType="numeric"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikpmhon}
              onChangeText={text => this.setState({nikpmhon: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namapmhon}
              onChangeText={text => this.setState({namapmhon: text})}
            />
            <TextInput
              label="Email Aktif"
              mode="outlined"
           
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nokkpmhon}
              onChangeText={text => this.setState({nokkpmhon: text})}
            />
            <TextInput
              label="No. Telepon"
			  maxLength={13}
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.umurpmhon}
              onChangeText={text => this.setState({umurpmhon: text})}
            />
			<TextInput
                label="Lingkungan"
				maxLength={13}
                mode="outlined"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.kwnpmhon}
                onChangeText={text => this.setState({kwnpmhon: text})}
              />
              

            <TextInput
              label="Kewarganegaraan"
              mode="outlined"
              disabled
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kwnpmhon12}
              onChangeText={text => this.setState({kwnpmhon12: text})}
            />
          </View>
		  
		   <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AktaCeraiIsian', {
                    nikuser: nikuser,
                    nikpmhon: this.state.nikpmhon,
                    namapmhon: this.state.namapmhon,
                    nokkpmhon: this.state.nokkpmhon,
                    umurpmhon: this.state.umurpmhon,
                    kwnpmhon: this.state.kwnpmhon,
                  })
                }
          
style={{marginBottom: 20,marginRight: -190,...styles.headerOff1}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Selanjutnya
                </Text>
              </TouchableOpacity>
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
