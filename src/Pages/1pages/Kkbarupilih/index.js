import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default class Kkbarupilih extends Component {
  render() {
    var nikuser = this.props.route.params.nikuser;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        {/* Membentu keluarga baru */}
        <View style={styles.box}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 18, color: 'grey'}}>
              MEMBENTUK KELUARGA BARU
            </Text>
            <Text style={{marginTop: 10, color: 'grey'}}>Persyaratan</Text>

            <Text style={{color: 'grey'}}>1. Buku Nikah Akta Kawin</Text>
            <Text style={{color: 'grey'}}>2. Kartu Keluarga</Text>
            <Text style={{color: 'grey'}}>3. KTP-el Pemohon</Text>
            <TouchableOpacity
              style={{
                width: '75%',
                height: 40,
                backgroundColor: '#005b9f',
                marginTop: 20,
                marginLeft: 38,
                borderRadius: 5,
              }}
              onPress={() =>
                this.props.navigation.navigate('Kkbaru', {nikuser: nikuser})
              }>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  padding: 10,
                }}>
                ISI FORM PERMOHONAN
              </Text>
            </TouchableOpacity>
          </View>

          <Divider style={{marginTop: 20}} />
        </View>
        {/* Membentu keluarga baru */}

        {/* penggantian kepala keluarga */}
        <View style={styles.box}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 18, color: 'grey'}}>
              PENGGANTIAN KEPALA KELUARGA
            </Text>
            <Text style={{marginBottom: 20, color: 'grey'}}>
              (Khusus KK Sibolga)
            </Text>

            <Text style={{color: 'grey'}}>1. Kutipan akta kematian</Text>
            <Text style={{color: 'grey'}}>
              2. Kutipan akta perceraian (jika kepala keluarga cerai)
            </Text>
            <Text style={{color: 'grey'}}>3. Kartu keluarga</Text>
            <Text style={{color: 'grey'}}>4. KTP-el Pemohon</Text>
            <TouchableOpacity
              style={{
                width: '75%',
                height: 40,
                backgroundColor: '#005b9f',
                marginTop: 20,
                marginLeft: 38,
                borderRadius: 5,
              }}
              onPress={() =>
                this.props.navigation.navigate('Kkgantikplkeluarga', {
                  nikuser: nikuser,
                })
              }>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  padding: 10,
                }}>
                ISI FORM PERMOHONAN
              </Text>
            </TouchableOpacity>
          </View>

          <Divider style={{marginTop: 20}} />
        </View>
        {/* penggantian kepala keluarga */}

        {/* penggantian kepala keluarga */}
        <View style={styles.box}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 18, color: 'grey'}}>PINDAH DATANG</Text>
            <Text style={{marginBottom: 20, color: 'grey'}}>
              (Khusus KK Sibolga)
            </Text>

            <Text style={{color: 'grey'}}>Persyaratan</Text>
            <Text style={{color: 'grey'}}>1. KTP-el Pemohon</Text>
            <Text style={{color: 'grey'}}>2. Surat keterangan pindah</Text>
            <TouchableOpacity
              style={{
                width: '75%',
                height: 40,
                backgroundColor: '#005b9f',
                marginTop: 20,
                marginLeft: 38,
                borderRadius: 5,
              }}
              onPress={() =>
                this.props.navigation.navigate('Kkpindahdatang', {
                  nikuser: nikuser,
                })
              }>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  padding: 10,
                }}>
                ISI FORM PERMOHONAN
              </Text>
            </TouchableOpacity>
          </View>

          <Divider style={{marginTop: 20}} />
        </View>
        {/* penggantian kepala keluarga */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10,
    marginHorizontal: 10,
  },
});
