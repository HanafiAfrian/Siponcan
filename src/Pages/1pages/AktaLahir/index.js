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
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';

export default class AktaLahir extends Component {
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
    var umursaksi2 = this.props.route.params.umursaksi2;
    var kwnsaksi2 = this.props.route.params.kwnsaksi2;

    var nikayah = this.props.route.params.nikayah;
    var namaayah = this.props.route.params.namaayah;
    var tmptayah = this.props.route.params.tmptayah;
    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var kwnayah = this.props.route.params.kwnayah;

    var nikibu = this.props.route.params.nikibu;
    var namaibu = this.props.route.params.namaibu;
    var tmptibu = this.props.route.params.tmptibu;
    var pilih_tanggal_pesan1 = this.props.route.params.pilih_tanggal_pesan1;
    var kwnibu = this.props.route.params.kwnibu;

    var nikanak = this.props.route.params.nikanak;
    var namaanak = this.props.route.params.namaanak;
    var selectedcat = this.props.route.params.selectedcat;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var tmtpanak = this.props.route.params.tmtpanak;
    var harilahir = this.props.route.params.harilahir;
    var pilih_tanggal_pesan2 = this.props.route.params.pilih_tanggal_pesan2;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;
    var anakke = this.props.route.params.anakke;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var beratanak = this.props.route.params.beratanak;
    var pjganak = this.props.route.params.pjganak;
    var selectedcat3 = this.props.route.params.selectedcat3;
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
            Akta Kelahiran
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                marginTop: 20,
                color: 'grey',
              }}>
              Permohonan Akta Kelahiran
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 20,
                fontSize: 16,
                color: 'grey',
              }}>
              (Khusus yang baru lahir)
            </Text>
          </View>

          <View style={{marginHorizontal: 20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaLahir', {
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
                    this.props.navigation.navigate('AktaLahirsaksi', {
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
                    this.props.navigation.navigate(
                      'AktaLahirayah',

                      {
                        nikuser: nikuser,
                        nikpmhon: nikpmhon,
                        namapmhon: namapmhon,
                        nokkpmhon: nokkpmhon,
                        umurpmhon: umurpmhon,
                        kwnpmhon: kwnpmhon,

                        niksaksi1: niksaksi1,
                        namasaksi1: namasaksi1,
                        nokksaksi1: nokksaksi1,
                        umursaksi1: umursaksi1,
                        kwnsaksi1: kwnsaksi1,
                        niksaksi2: niksaksi2,
                        namasaksi2: namasaksi2,
                        nokksaksi2: nokksaksi2,
                        umursaksi2: umursaksi2,
                        kwnsaksi2: kwnsaksi2,
                      },
                    )
                  }
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Ayah
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaLahiribu', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,

                      niksaksi1: niksaksi1,
                      namasaksi1: namasaksi1,
                      nokksaksi1: nokksaksi1,
                      umursaksi1: umursaksi1,
                      kwnsaksi1: kwnsaksi1,
                      niksaksi2: niksaksi2,
                      namasaksi2: namasaksi2,
                      nokksaksi2: nokksaksi2,
                      umursaksi2: umursaksi2,
                      kwnsaksi2: kwnsaksi2,

                      nikayah: nikayah,
                      namaayah: namaayah,
                      tmptayah: tmptayah,
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      kwnayah: kwnayah,

                      nikibu: nikibu,
                      namaibu: namaibu,
                      tmptibu: tmptibu,
                      pilih_tanggal_pesan1: pilih_tanggal_pesan1,
                      kwnibu: kwnibu,
                    })
                  }
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Ibu
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaLahiranak', {
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
                      umursaksi2: this.state.umursaksi2,
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
                    Anak
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaLahirberkas', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,

                      niksaksi1: niksaksi1,
                      namasaksi1: namasaksi1,
                      nokksaksi1: nokksaksi1,
                      umursaksi1: umursaksi1,
                      kwnsaksi1: kwnsaksi1,
                      niksaksi2: niksaksi2,
                      namasaksi2: namasaksi2,
                      nokksaksi2: nokksaksi2,
                      umursaksi2: umursaksi2,
                      kwnsaksi2: kwnsaksi2,

                      nikayah: nikayah,
                      namaayah: namaayah,
                      tmptayah: tmptayah,
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      kwnayah: kwnayah,

                      nikibu: nikibu,
                      namaibu: namaibu,
                      tmptibu: tmptibu,
                      pilih_tanggal_pesan1: pilih_tanggal_pesan1,
                      kwnibu: kwnibu,

                      nikanak: nikanak,
                      namaanak: namaanak,
                      selectedcat: selectedcat,
                      selectedcat1: selectedcat1,
                      tmtpanak: tmtpanak,
                      harilahir: harilahir,
                      pilih_tanggal_pesan2: pilih_tanggal_pesan2,
                      pilih_jam_pesan: pilih_jam_pesan,
                      anakke: anakke,
                      selectedcat2: selectedcat2,
                      beratanak: beratanak,
                      pjganak: pjganak,
                      selectedcat3: selectedcat3,
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
            <Text style={{marginBottom: 20, color: 'grey'}}>Data Pemohon</Text>

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
              disabled
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kwnpmhon}
              onChangeText={text => this.setState({kwnpmhon: text})}
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
    padding: 5,
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
    padding: 10,

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
