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
import Icon from 'react-native-vector-icons/Ionicons';
import {Divider, TextInput} from 'react-native-paper';
import React, {Component} from 'react';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';

export default class AktaKawin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnpmhon: 'Indonesia',
      nikpmhon: '',
      namapmhon: '',
      nokkpmhon: '',
      umurpmhon: '',
    };
  }
  render() {
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
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var pilih_tanggal_selesai = this.props.route.params.pilih_tanggal_selesai;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;

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
            <Icon name="arrow-back-outline" size={30} color="white" />
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
          {/* pemohon */}
          <ScrollView>
            {/* <View style={{backgroundColor: 'white'}}>
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
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaKawin', {
                      nikuser: nikuser,
                    })
                  }
                  style={{marginBottom: 20, ...styles.header}}>
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
                      nikpmhon: this.state.nikpmhon,
                      namapmhon: this.state.namapmhon,
                      nokkpmhon: this.state.nokkpmhon,
                      umurpmhon: this.state.umurpmhon,
                      kwnpmhon: this.state.kwnpmhon,
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
                      nikpmhon: this.state.nikpmhon,
                      namapmhon: this.state.namapmhon,
                      nokkpmhon: this.state.nokkpmhon,
                      umurpmhon: this.state.umurpmhon,
                      kwnpmhon: this.state.kwnpmhon,
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
                  style={{marginBottom: 20, ...styles.headerOff}}>
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
                      nikpmhon: this.state.nikpmhon,
                      namapmhon: this.state.namapmhon,
                      nokkpmhon: this.state.nokkpmhon,
                      umurpmhon: this.state.umurpmhon,
                      kwnpmhon: this.state.kwnpmhon,
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
                      nik_ayah_s: nik_ayah_s,
                      nama_ayah_s: nama_ayah_s,
                      nik_ibu_s: nik_ibu_s,
                      nama_ibu_s: nama_ibu_s,
                      nama_ayah_is: nama_ayah_is,
                      nik_ibu_is: nik_ibu_is,
                      nama_ibu_is: nama_ibu_is,
                      selectedcat: selectedcat,
                      kawin_ke: kawin_ke,
                      istri_ke: istri_ke,
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      pilih_tanggal_selesai: pilih_tanggal_selesai,
                      pilih_jam_pesan: pilih_jam_pesan,
                      selectedcat1: selectedcat1,
                      nm_organisasi: nm_organisasi,
                      ket_organisasi: ket_organisasi,
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
              <Text style={{marginBottom: 20, color: 'grey'}}>
                Data Pemohon
              </Text>

              <TextInput
                label="NIK"
                mode="outlined"
                activeOutlineColor="#005b9f"
                act
                keyboardType="numeric"
                x
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
                label="N0. KK"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.nokkpmhon}
                onChangeText={text => this.setState({nokkpmhon: text})}
              />
              <TextInput
                label="Umur (Tahun)"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.umurpmhon}
                onChangeText={text => this.setState({umurpmhon: text})}
              />
              <TextInput
                label="Kewarganegaraan"
                mode="outlined"
                disabled
                activeOutlineColor="#005b9f"
                theme={{roundness: 10}}
                style={{backgroundColor: 'white', marginBottom: 25}}
                value={this.state.kwnpmhon}
                onChangeText={text => this.setState({kwnpmhon: text})}
              />
            </View>
          </ScrollView>
          {/* pemohon */}
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
