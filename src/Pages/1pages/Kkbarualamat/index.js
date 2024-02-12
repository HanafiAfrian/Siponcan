import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Kkbarualamat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kecpmhon: '',
      kepmhon: '',
      alamatpmhon: '',
    };
  }
  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikuser = this.props.route.params.nikuser;
    var kkbarupmhon = this.props.route.params.kkbarupmhon;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;
    var kwnpmhon = this.props.route.params.kwnpmhon;

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
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                marginTop: 20,
                color: 'grey',
              }}>
              Permohonan KK Baru
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 20,
                fontSize: 16,
                color: 'grey',
              }}>
              (Alasan Membentuk Keluarga Baru, Khusus Suami Istri yg memilik KK
              Sibolga)
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Kkbaru', {
                  nikuser: nikuser,
                  kkbarupmhon: kkbarupmhon,
                  nikpmhon: nikpmhon,
                  namapmhon: namapmhon,
                  nokkpmhon: nokkpmhon,
                  umurpmhon: umurpmhon,
                  kwnpmhon: kwnpmhon,
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
                this.props.navigation.navigate('Kkbarualamat', {
                  nikuser: nikuser,
                  kkbarupmhon: kkbarupmhon,
                  nikpmhon: nikpmhon,
                  namapmhon: namapmhon,
                  nokkpmhon: nokkpmhon,
                  umurpmhon: umurpmhon,
                  kwnpmhon: kwnpmhon,
                  kecpmhon: this.state.kecpmhon,
                  kelpmhon: this.state.kelpmhon,
                  alamatpmhon: this.state.alamatpmhon,
                })
              }
              style={{marginBottom: 20, ...styles.header}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                Alamat Baru
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Kkbaruberkas', {
                  nikuser: nikuser,
                  kkbarupmhon: kkbarupmhon,
                  nikpmhon: nikpmhon,
                  namapmhon: namapmhon,
                  nokkpmhon: nokkpmhon,
                  umurpmhon: umurpmhon,
                  kwnpmhon: kwnpmhon,
                  kecpmhon: this.state.kecpmhon,
                  kelpmhon: this.state.kelpmhon,
                  alamatpmhon: this.state.alamatpmhon,
                })
              }
              style={{marginBottom: 20, ...styles.headerOff}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
                Berkas
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{marginBottom: 20, color: 'grey'}}>Alamat Baru</Text>

            <TextInput
              label="Kecamatan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kecpmhon}
              onChangeText={text => this.setState({kecpmhon: text})}
            />
            <TextInput
              label="Desa / Kelurahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.kelpmhon}
              onChangeText={text => this.setState({kelpmhon: text})}
            />
            <TextInput
              label="Alamat"
              multiline
              placeholder="Cth: JL. Bersama..,Dusun..."
              placeholderTextColor="grey"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.alamatpmhon}
              onChangeText={text => this.setState({alamatpmhon: text})}
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
