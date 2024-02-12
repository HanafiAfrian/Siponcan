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
	var niksuami = this.props.route.params.niksuami;	
	    var namasuami = this.props.route.params.namasuami;	
		    var selectedcat = this.props.route.params.selectedcat;	
			    var kawin_kesuami = this.props.route.params.kawin_kesuami;	
				
	    var nikistri = this.props.route.params.nikistri;	
		    var namaistri = this.props.route.params.namaistri;	
			    var selectedcat1 = this.props.route.params.selectedcat1;	
				    var kawin_keistri = this.props.route.params.kawin_keistri;	
					
					
					    var nik_ayah_s = this.props.route.params.nik_ayah_s;	
									    var nama_ayah_s = this.props.route.params.nama_ayah_s;	
													    var nik_ibu_s = this.props.route.params.nik_ibu_s;	
																	    var nama_ibu_s = this.props.route.params.nama_ibu_s;	
							
				    var nik_ayah_is = this.props.route.params.nik_ayah_is;	
						    var nama_ayah_is = this.props.route.params.nama_ayah_is;	
								    var nik_ibu_is = this.props.route.params.nik_ibu_is;	
										    var nama_ibu_is = this.props.route.params.nama_ibu_is;	
											
			    var pilih_tanggal_pesan = this.props.route.params.pilih_tanggal_pesan;
		    var tempatpemberkatan = this.props.route.params.tempatpemberkatan;
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
              <Text style={{marginBottom: 20, color: 'grey'}}>Saksi </Text>

              <TextInput
                label="NIK Saksi"
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
                label="Nama Lengkap Saksi (Sesuai KTP)"
                mode="outlined"
                activeOutlineColor="#005b9f"
                style={{backgroundColor: 'white', marginBottom: 25}}
                theme={{roundness: 10}}
                value={this.state.namasaksi1}
                onChangeText={text => this.setState({namasaksi1: text})}
              />
              
           
            </View>

            <Divider />

            <View style={{marginHorizontal: 20}}>
             
            </View>
			
			 <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
          onPress={() =>
                     this.props.navigation.navigate('AktaKawinperkawinan', {
                    nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					
					
					niksuami : niksuami,	 
						namasuami : namasuami,	 
						     selectedcat: selectedcat,
						kawin_kesuami : kawin_kesuami,	
					
					nikistri : nikistri,	 
						namaistri : namaistri,	 
						selectedcat1 : selectedcat1,	 
						kawin_keistri :kawin_keistri,	
					

						nik_ayah_s : nik_ayah_s,	 
						nama_ayah_s : nama_ayah_s,	 
						nik_ibu_s : nik_ibu_s,	 
						nama_ibu_s : nama_ibu_s,						
						
											nik_ayah_is : nik_ayah_is,	 
						nama_ayah_is : nama_ayah_is,	 
						nik_ibu_is : nik_ibu_is,	 
						nama_ibu_is : nama_ibu_is,		
						
								pilih_tanggal_pesan : pilih_tanggal_pesan,		
							tempatpemberkatan : tempatpemberkatan,
							nm_organisasi : nm_organisasi,
 						ket_organisasi : ket_organisasi,    
						
							niksaksi1 : this.state.niksaksi1,  
								namasaksi1 : this.state.namasaksi1,  
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
            this.props.navigation.navigate('AktaKawinberkas', {
                      nikuser: nikuser,
                      nikpmhon: nikpmhon,
                      namapmhon: namapmhon,
                      nokkpmhon: nokkpmhon,
                      umurpmhon: umurpmhon,
                      kwnpmhon: kwnpmhon,
					
					
					niksuami : niksuami,	 
						namasuami : namasuami,	 
						     selectedcat: selectedcat,
						kawin_kesuami : kawin_kesuami,	
					
					nikistri : nikistri,	 
						namaistri : namaistri,	 
						selectedcat1 : selectedcat1,	 
						kawin_keistri :kawin_keistri,	
					

						nik_ayah_s : nik_ayah_s,	 
						nama_ayah_s : nama_ayah_s,	 
						nik_ibu_s : nik_ibu_s,	 
						nama_ibu_s : nama_ibu_s,						
						
											nik_ayah_is : nik_ayah_is,	 
						nama_ayah_is : nama_ayah_is,	 
						nik_ibu_is : nik_ibu_is,	 
						nama_ibu_is : nama_ibu_is,		
						
								pilih_tanggal_pesan : pilih_tanggal_pesan,		
							tempatpemberkatan : tempatpemberkatan,
							nm_organisasi : nm_organisasi,
 						ket_organisasi : ket_organisasi,    
						
							niksaksi1 : this.state.niksaksi1,  
								namasaksi1 : this.state.namasaksi1,  
                    
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
