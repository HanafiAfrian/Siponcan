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
import {Divider, TextInput} from 'react-native-paper';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
export default class AktaMatisaksi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kwnsaksi1: 'indonesia',
      kwnsaksi2: 'indonesia',
    };
  }
  render() {
    var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;   
	var kwnpmhon = this.props.route.params.kwnpmhon;
    var selectedcat12 = this.props.route.params.selectedcat12;

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
        style={{backgroundColor: 'white'}}
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
            Akta Kematian
          </Text>
        </View>
        <ScrollView style={{marginBottom: 70}}>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             <TouchableOpacity
            
                  style={{marginBottom: 20, ...styles.headerOff}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#005b9f',
                    }}>
                    Data Saksi
                  </Text>
                </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={{marginHorizontal: 20}}>
            <Text style={{marginBottom: 20, color: 'grey'}}>Saksi 1</Text>

            <TextInput
              label="NIK Saksi "
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
              label="Nama Lengkap  Saksi  (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namasaksi1}
              onChangeText={text => this.setState({namasaksi1: text})}
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

            <Divider />

          

          
          </View>
		  
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
          onPress={() =>
                  this.props.navigation.navigate('AktaMatijenazah2', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
selectedcat12 : selectedcat12,
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
             style={{marginBottom: 20, marginLeft: -20,...styles.headerOff1}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
             Sebelumnya
              </Text>
            </TouchableOpacity>
			
			<TouchableOpacity
              onPress={() =>
                  this.props.navigation.navigate('AktaMatiberkas2', {
                    nikuser: nikuser,
                    nikpmhon: nikpmhon,
                    namapmhon: namapmhon,
                    nokkpmhon: nokkpmhon,
                    umurpmhon: umurpmhon,
					kwnpmhon : kwnpmhon ,
selectedcat12 : selectedcat12,
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

  textStyle: {
    color: 'white',
    fontSize: 40,
  },
  pagerStyle: {
    flex: 1,

    backgroundColor: 'white',
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
