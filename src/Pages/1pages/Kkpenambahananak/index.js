import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import React, {Component} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

console.disableYellowBox = true;

export default class Kkpenambahananak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnpmhon: 'Indonesia',
    };
  }
  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

    var nm_anak = this.props.route.params.nm_anak;
    var selectedcat = this.props.route.params.selectedcat;
    var temp_lahir = this.props.route.params.temp_lahir;

    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
    var pilih_jam_pesan = this.props.route.params.pilih_jam_pesan;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var shdk = this.props.route.params.shdk;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var nm_ayah = this.props.route.params.nm_ayah;
    var nm_ibu = this.props.route.params.nm_ibu;

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
                  KK Baru
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={styles.container}>
            <View style={{backgroundColor: 'white'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  marginTop: 20,
                  color: 'grey',
                }}>
                Penambahan Anak di KK
              </Text>
              <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>
                (Khusus Anak Baru Lahir)
              </Text>
            </View>

            <View style={{marginHorizontal: 20}}>
              <View style={{backgroundColor: 'white'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Kkpenambahananak', {
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
                      this.props.navigation.navigate('Kkpenambahananakdata', {
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
                      Data Anak
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Kkpenambahananakberkas', {
                        nikuser: nikuser,
                        nikpmhon: this.state.nikpmhon,
                        namapmhon: this.state.namapmhon,
                        nokkpmhon: this.state.nokkpmhon,
                        umurpmhon: this.state.umurpmhon,
                        kwnpmhon: this.state.kwnpmhon,
                        nm_anak: nm_anak,
                        selectedcat: selectedcat,
                        temp_lahir: temp_lahir,
                        pilih_tanggal_pesan: pilih_tanggal_pesan,
                        pilih_jam_pesan: pilih_jam_pesan,
                        selectedcat1: selectedcat1,
                        selectedcat2: selectedcat2,
                        shdk: shdk,
                        selectedcat3: selectedcat3,
                        nm_ayah: nm_ayah,
                        nm_ibu: nm_ibu,
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
              </View>
              <Text
                style={{textAlign: 'left', marginBottom: 20, color: 'grey'}}>
                <Text style={{color: 'red'}}>*</Text>Pemohon Wajib Kepala
                Keluarga
              </Text>

              <TextInput
                label="NIK"
                mode="outlined"
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
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
                label="No. KK"
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
                keyboardType="numeric"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.kwnpmhon}
                onChangeText={text => this.setState({kwnpmhon: text})}
              />
            </View>
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
