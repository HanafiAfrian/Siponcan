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

export default class AktaMati extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;

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

    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;
    var nikjns = this.props.route.params.nikjns;
    var namajns = this.props.route.params.namajns;
    var namaibujns = this.props.route.params.namaibujns;
    var selectedcat = this.props.route.params.selectedcat;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var tpmeninggal = this.props.route.params.tpmeninggal;

    return (
      <SafeAreaView
        style={{backgroundColor: 'white', flex: 1}}
        keyboardShouldPersistTaps="handled">
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
            Akta Mati
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 20, backgroundColor: 'white'}}>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaMati', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,

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
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      pilih_jam_pesan: pilih_jam_pesan,
                      nikjns: nikjns,
                      namajns: namajns,
                      namaibujns: namaibujns,
                      selectedcat: selectedcat,
                      selectedcat1: selectedcat1,
                      tpmeninggal: tpmeninggal,
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
                    this.props.navigation.navigate('AktaMatisaksi', {
                      nikuser: nikuser,
                      nikpmhon: this.state.nikpmhon,
                      namapmhon: this.state.namapmhon,
                      nokkpmhon: this.state.nokkpmhon,
                      umurpmhon: this.state.umurpmhon,
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
                    this.props.navigation.navigate('AktaMatijenazah', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,

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
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      pilih_jam_pesan: pilih_jam_pesan,
                      nikjns: nikjns,
                      namajns: namajns,
                      namaibujns: namaibujns,
                      selectedcat: selectedcat,
                      selectedcat1: selectedcat1,
                      tpmeninggal: tpmeninggal,
                    })
                  }
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Jenazah
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AktaMatiberkas', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,

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
                      pilih_tanggal_pesan: pilih_tanggal_pesan,
                      pilih_jam_pesan: pilih_jam_pesan,
                      nikjns: nikjns,
                      namajns: namajns,
                      namaibujns: namaibujns,
                      selectedcat: selectedcat,
                      selectedcat1: selectedcat1,
                      tpmeninggal: tpmeninggal,
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
              onChangeText={text => this.setState({umurpmhon: text})}
              value="Indonesia"
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
