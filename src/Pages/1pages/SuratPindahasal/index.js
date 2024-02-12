import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';

export default class SuratPindahasal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedcat: 'Antar Kab/Kota dalam satu propinsi',

      provinsi: 'Sumatra Utara',
      kabupaten: 'Sibolga',
      kelurahan: '',
      alamat: '',
      kdpos: '',
      kecamatan: '',
    };
  }

  async onValueChangeCat(value) {
    this.setState({selectedcat: value});
  }

  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;

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
                onPress={() =>
                  this.props.navigation.navigate('SuratPindah', {
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
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Pemohon
                </Text>
              </TouchableOpacity>

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
                style={{marginBottom: 20, ...styles.header}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Asal
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SuratPindahtujuan', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    selectedcat: this.state.selectedcat,
                    provinsi: this.state.provinsi,
                    kabupaten: this.state.kabupaten,
                    kecamatan: this.state.kecamatan,
                    kelurahan: this.state.kelurahan,
                    alamat: this.state.alamat,
                    kdpos: this.state.kdpos,
                  })
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Tujuan
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SuratPindahberkas', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
                    selectedcat: this.state.selectedcat,
                    provinsi: this.state.provinsi,
                    kabupaten: this.state.kabupaten,
                    kecamatan: this.state.kecamatan,
                    kelurahan: this.state.kelurahan,
                    alamat: this.state.alamat,
                    kdpos: this.state.kdpos,
                    provinsitj: provinsitj,
                    kabupatentj: kabupatentj,
                    kectj: kectj,
                    kltj: kltj,
                    alamattj: alamattj,
                    kdpostj: kdpostj,
                    selectedcat1: selectedcat1,
                    selectedcat2: selectedcat2,
                    selectedcat3: selectedcat3,
                    selectedcat4: selectedcat4,
                  })
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Berkas
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={{marginHorizontal: 20}}>
            <Text style={{marginBottom: 20, color: 'grey', marginLeft: 5}}>
              Data Pemohon
            </Text>

            <Text style={{marginLeft: 5, fontSize: 16, color: 'grey'}}>
              Klasifikasi Kepindahan
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
                marginTop: 5,
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
                selectedValue={this.state.selectedcat}
                onValueChange={this.onValueChangeCat.bind(this)}>
                <Picker.Item
                  color="grey"
                  label="Antar Kab/Kota dalam satu propinsi"
                  value="Antar Kab/Kota dalam satu propinsi"
                />
                <Picker.Item
                  color="grey"
                  label="Antar Propinsi"
                  value="Antar Propinsi"
                />
              </Picker>
            </View>

            <TextInput
              label="Propinsi"
              disabled
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.provinsi}
              onChangeText={text => this.setState({provinsi: text})}
            />
            <TextInput
              label="Kabupaten"
              disabled
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kabupaten}
              onChangeText={text => this.setState({kabupaten: text})}
            />
            <TextInput
              label="Kecamatan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kecamatan}
              onChangeText={text => this.setState({kecamatan: text})}
            />
            <TextInput
              label="Kelurahan/Desa"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kelurahan}
              onChangeText={text => this.setState({kelurahan: text})}
            />
            <TextInput
              label="Alamat"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.alamat}
              onChangeText={text => this.setState({alamat: text})}
            />
            <TextInput
              label="Kode Pos"
              keyboardType="numeric"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kdpos}
              onChangeText={text => this.setState({kdpos: text})}
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
