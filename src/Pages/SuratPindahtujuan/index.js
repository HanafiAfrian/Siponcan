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
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SuratPindahtujuan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedcat1: 'Pekerjaan',
      selectedcat2: 'Kepala Keluarga',
      selectedcat3: 'Numpang KK',
      selectedcat4: 'Numpang KK',
      provinsitj: '',
      kabupatentj: '',
      kectj: '',
      kltj: '',
      alamattj: '',
      kdpostj: '',
    };
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

  async onValueChangeCat4(value) {
    this.setState({selectedcat4: value});
  }
  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;    
	var kwnpmhon = this.props.route.params.kwnpmhon;

    var selectedcat = this.props.route.params.selectedcat;
    var provinsi = this.props.route.params.provinsi;
    var kabupaten = this.props.route.params.kabupaten;
    var kecamatan = this.props.route.params.kecamatan;
    var kelurahan = this.props.route.params.kelurahan;
    var alamat = this.props.route.params.alamat;
    var kdpos = this.props.route.params.kdpos;

    var provinsitj = this.props.route.params.provinsitj;
    var kabupatentj = this.props.route.params.kabupatentj;
    var kectj = this.props.route.params.kectj;
    var kltj = this.props.route.params.kltj;
    var alamattj = this.props.route.params.alamattj;
    var kdpostj = this.props.route.params.kdpostj;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var selectedcat4 = this.props.route.params.selectedcat4;
    return (
      <SafeAreaView>
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
            Surat Pindah
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white', marginBottom: 70}}>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              
              <TouchableOpacity
            
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Alamat Tujuan
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={{marginHorizontal: 20}}>
           

            <TextInput
              label="Propinsi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25, height: 56}}
              theme={{roundness: 10}}
              value={this.state.provinsitj}
              onChangeText={text => this.setState({provinsitj: text})}
            />
            <TextInput
              label="Kabupaten / Kota"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kabupatentj}
              onChangeText={text => this.setState({kabupatentj: text})}
            />
            <TextInput
              label="Kecamatan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kectj}
              onChangeText={text => this.setState({kectj: text})}
            />
            <TextInput
              label="Kelurahan/Desa"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kltj}
              onChangeText={text => this.setState({kltj: text})}
            />
            <TextInput
              label="Alamat"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.alamattj}
              onChangeText={text => this.setState({alamattj: text})}
            />
            <TextInput
              label="RT & RW"
              
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kdpostj}
              onChangeText={text => this.setState({kdpostj: text})}
            />

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Alasan Pindah
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
                <Picker.Item color="grey" label="Pekerjaan" value="Pekerjaan" />
                <Picker.Item
                  color="grey"
                  label="Pendidikan"
                  value="Pendidikan"
                />
                <Picker.Item color="grey" label="Keamanan" value="Keamanan" />
                <Picker.Item color="grey" label="Kesehatan" value="Kesehatan" />
                <Picker.Item color="grey" label="Perumahan" value="Perumahan" />
              </Picker>
            </View>

            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
                marginTop: 20,
              }}>
              Jenis Kepindahan
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
                <Picker.Item
                  color="grey"
                  label="Kepala Keluarga"
                  value="Kepala Keluarga"
                />
                <Picker.Item
                  color="grey"
                  label="Kepala Keluarga dan Seluruh Anggota Keluarga"
                  value="Kepala Keluarga dan Seluruh Anggota Keluarga"
                />
                <Picker.Item
                  color="grey"
                  label="Kepala Keluarga dan Sebagian Anggota Keluarga"
                  value="Kepala Keluarga dan Sebagian Anggota Keluarga"
                />
                <Picker.Item
                  color="grey"
                  label="Anggota Keluarga"
                  value="Anggota Keluarga"
                />
              </Picker>
            </View>

            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                color: 'grey',
                marginTop: 20,
              }}>
              Data Keluarga di KK yang Tidak Pindah
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
                <Picker.Item
                  color="grey"
                  label="Numpang KK"
                  value="Numpang KK"
                />
                <Picker.Item
                  color="grey"
                  label="Membuat KK Baru"
                  value="Membuat KK Baru"
                />
              </Picker>
            </View>

            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                color: 'grey',
                marginTop: 20,
              }}>
              Data Keluarga di KK yang Pindah
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
                selectedValue={this.state.selectedcat4}
                onValueChange={this.onValueChangeCat4.bind(this)}>
                <Picker.Item
                  color="grey"
                  label="Numpang KK"
                  value="Numpang KK"
                />
                <Picker.Item
                  color="grey"
                  label="Membuat KK Baru"
                  value="Membuat KK Baru"
                />
              </Picker>
            </View>
          </View>
		   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
           onPress={() =>
                  this.props.navigation.navigate('SuratPindahasal', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    selectedcat: selectedcat,
                    provinsi: provinsi,
                    kabupaten: kabupaten,
                    kecamatan: kecamatan,
                    kelurahan: kelurahan,
                    alamat: alamat,
                    kdpos: kdpos,
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
                  this.props.navigation.navigate('SuratPindahDataIsian', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,   
					kwnpmhon: kwnpmhon,
                    selectedcat: selectedcat,
                    provinsi: provinsi,
                    kabupaten: kabupaten,
                    kecamatan: kecamatan,
                    kelurahan: kelurahan,
                    alamat: alamat,
                    kdpos: kdpos,

                    provinsitj: this.state.provinsitj,
                    kabupatentj: this.state.kabupatentj,
                    kectj: this.state.kectj,
                    kltj: this.state.kltj,
                    alamattj: this.state.alamattj,
                    kdpostj: this.state.kdpostj,
                    selectedcat1: this.state.selectedcat1,
                    selectedcat2: this.state.selectedcat2,
                    selectedcat3: this.state.selectedcat3,
                    selectedcat4: this.state.selectedcat4,
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
