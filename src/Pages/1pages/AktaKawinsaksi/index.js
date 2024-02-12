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

export default class AktaKawinsaksi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnsaksi1: 'Indonesia',
      kwnsaksi2: 'Indonesia',
      niksaksi1: '',
      namasaksi1: '',
      nokksaksi1: '',
      umursaksi1: '',

      niksaksi2: '',
      namasaksi2: '',
      nokksaksi2: '',
      umurksaksi2: '',
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
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
          {/* saksi */}
          <ScrollView>
            {/* <View style={{backgroundColor: 'white'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  marginTop: 20,
                  color: 'grey',
                }}>
                Permohonan Akta Perkawinan{' '}
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
                  style={{marginBottom: 20, ...styles.headerOff}}>
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
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
                    })
                  }
                  style={{marginBottom: 20, ...styles.header}}>
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
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
                      niksaksi1: this.state.niksaksi1,
                      namasaksi1: this.state.namasaksi1,
                      nokksaksi1: this.state.nokksaksi1,
                      umursaksi1: this.state.umursaksi1,
                      kwnsaksi1: this.state.kwnsaksi1,
                      niksaksi2: this.state.niksaksi2,
                      namasaksi2: this.state.namasaksi2,
                      nokksaksi2: this.state.nokksaksi2,
                      umurksaksi2: this.state.umurksaksi2,
                      kwnsaksi2: this.state.kwnsaksi2,
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
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
                      niksaksi1: this.state.niksaksi1,
                      namasaksi1: this.state.namasaksi1,
                      nokksaksi1: this.state.nokksaksi1,
                      umursaksi1: this.state.umursaksi1,
                      kwnsaksi1: this.state.kwnsaksi1,
                      niksaksi2: this.state.niksaksi2,
                      namasaksi2: this.state.namasaksi2,
                      nokksaksi2: this.state.nokksaksi2,
                      umurksaksi2: this.state.umurksaksi2,
                      kwnsaksi2: this.state.kwnsaksi2,
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
              <Text style={{marginBottom: 20, color: 'grey'}}>Saksi 1</Text>

              <TextInput
                label="NIK (Saksi1)"
                mode="outlined"
                activeOutlineColor="#005b9f"
                act
                keyboardType="numeric"
                x
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.niksaksi1}
                onChangeText={text => this.setState({niksaksi1: text})}
              />
              <TextInput
                label="Nama Lengkap (Saksi1) (Sesuai KTP)"
                mode="outlined"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.namasaksi1}
                onChangeText={text => this.setState({namasaksi1: text})}
              />
              <TextInput
                label="N0. KK (Saksi1)"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.nokksaksi1}
                onChangeText={text => this.setState({nokksaksi1: text})}
              />
              <TextInput
                label="Umur (Tahun)(Saksi1)"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.umursaksi1}
                onChangeText={text => this.setState({umursaksi1: text})}
              />
              <TextInput
                label="Kewarganegaraan"
                mode="outlined"
                disabled
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.kwnsaksi1}
                onChangeText={text => this.setState({kwnsaksi1: text})}
              />
            </View>

            <Divider />

            <View style={{marginHorizontal: 20}}>
              <Text style={{marginBottom: 20, marginTop: 10, color: 'grey'}}>
                Saksi 2
              </Text>

              <TextInput
                label="NIK (Saksi2)"
                mode="outlined"
                activeOutlineColor="#005b9f"
                act
                keyboardType="numeric"
                x
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.niksaksi2}
                onChangeText={text => this.setState({niksaksi2: text})}
              />
              <TextInput
                label="Nama Lengkap (Saksi2) (Sesuai KTP)"
                mode="outlined"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.namasaksi2}
                onChangeText={text => this.setState({namasaksi2: text})}
              />
              <TextInput
                label="N0. KK (Saksi2)"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.nokksaksi2}
                onChangeText={text => this.setState({nokksaksi2: text})}
              />
              <TextInput
                label="Umur (Tahun)(Saksi2)"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.umurksaksi2}
                onChangeText={text => this.setState({umurksaksi2: text})}
              />
              <TextInput
                label="Kewarganegaraan"
                mode="outlined"
                disabled
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.kwnsaksi2}
                onChangeText={text => this.setState({kwnsaksi2: text})}
              />
            </View>
          </ScrollView>
          {/* saksi */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
