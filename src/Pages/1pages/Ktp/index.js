import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Ktp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nikpmhon: '',
      namapmhon: '',
      umurpmhon: '',
      nokkpmhon: '',
    };
  }
  render() {
    var nikuser = this.props.route.params.nikuser;

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
            NIK Online
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Ktp', {
                    nikuser: nikuser,
                    nikpmhon: this.state.nikpmhon,
                    namapmhon: this.state.namapmhon,
                    nokkpmhon: this.state.nokkpmhon,
                    umurpmhon: this.state.umurpmhon,
                  })
                }
                style={{
                  marginBottom: 20,

                  ...styles.header,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Pemohon{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Ktpberkas', {
                    nikuser: nikuser,
                    nikpmhon: this.state.nikpmhon,
                    namapmhon: this.state.namapmhon,
                    nokkpmhon: this.state.nokkpmhon,
                    umurpmhon: this.state.umurpmhon,
                  })
                }
                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                  Berkas
                </Text>
              </TouchableOpacity>
            </View>

            <TextInput
              label="NIK"
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
              value="Kewarganegaraan"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25, height: 56}}
              theme={{roundness: 10}}
              //	value={this.state.kwnayah}
              //onChangeText={text => this.setState({ kwnayah: text })}
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
