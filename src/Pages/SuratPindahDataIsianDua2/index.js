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
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TextInput} from 'react-native-paper';

console.disableYellowBox = true;
export default class Kkperubahanrincian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nohp: '',
      nik: '',
      password: '',
      password1: '',
      hidden: true,
      hidden2: true,
	  	       selectedcat: '',
      listData: [],
    };
   this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/suratpindahdata.php';
  }

  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  klikSimpan() {
  
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=daftar';
  var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;  
	var kwnpmhon = this.props.route.params.kwnpmhon;

    var selectedcat = this.props.route.params.selectedcat;
    var provinsi = this.props.route.params.provinsi;
    var kabupaten = this.props.route.params.kabupaten;
    var kecamatan = this.props.route.params.kecamatan;
    var kelurahan = this.props.route.params.kelurahan;
    var alamat = this.props.route.params.alamat;
    var kdpos = this.props.route.params.kdpos;

    var provinsitj = this.props.route.params.provinsitj;
    var kabupatentj = this.props.route.params.kabupatentj;
    var kectj = this.props.route.params.kectj;
    var kltj = this.props.route.params.kltj;
    var alamattj = this.props.route.params.alamattj;
    var kdpostj = this.props.route.params.kdpostj;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var selectedcat4 = this.props.route.params.selectedcat4;

		
		
		
 var nikpmhon1 = this.props.route.params.nikpmhon1;
	  var namapmhon1 = this.props.route.params.namapmhon1;
	   var shdk1 = this.props.route.params.shdk1;

       
		var data1 = 'data2';
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'nikuser=' +
          nikuser +
          '&nikpmhon1=' +
          this.state.nikpmhon2 +
          '&namapmhon1=' +
          this.state.namapmhon2 +
         '&shdk1=' +
           this.state.selectedcat +
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('SuratPindahDataIsianTiga2',{nikuser:nikuser,
			nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,
			 selectedcat:selectedcat, provinsi : provinsi,   kabupaten :kabupaten,   kecamatan : kecamatan ,    kelurahan  : kelurahan ,  alamat :alamat,  kdpos : kdpos, provinsitj : provinsitj,  kabupatentj: kabupatentj,  kectj : kectj, kltj : kltj,  alamattj : alamattj, kdpostj : kdpostj, selectedcat1: selectedcat1,  selectedcat2 : selectedcat2,  selectedcat3 : selectedcat3, selectedcat4 : selectedcat4,
			
			
			
			nikpmhon1 : nikpmhon1, namapmhon1:namapmhon1, shdk1:shdk1, 
			nikpmhon2 : this.state.nikpmhon2, namapmhon2: this.state.namapmhon2, shdk2:this.state.selectedcat, 
			});
          } else if (responseJson == 'false') {
            alert('NIK Sudah Terdaftar');
          }
        });
    
  }
klikSimpan1() {
  
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=daftar';


      var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;  
	var kwnpmhon = this.props.route.params.kwnpmhon;

    var selectedcat = this.props.route.params.selectedcat;
    var provinsi = this.props.route.params.provinsi;
    var kabupaten = this.props.route.params.kabupaten;
    var kecamatan = this.props.route.params.kecamatan;
    var kelurahan = this.props.route.params.kelurahan;
    var alamat = this.props.route.params.alamat;
    var kdpos = this.props.route.params.kdpos;

    var provinsitj = this.props.route.params.provinsitj;
    var kabupatentj = this.props.route.params.kabupatentj;
    var kectj = this.props.route.params.kectj;
    var kltj = this.props.route.params.kltj;
    var alamattj = this.props.route.params.alamattj;
    var kdpostj = this.props.route.params.kdpostj;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var selectedcat4 = this.props.route.params.selectedcat4;

		
		
	
       
		var data1 = 'data2';
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'nikuser=' +
          nikuser +
          '&nikpmhon1=' +
          this.state.nikpmhon2 +
          '&namapmhon1=' +
          this.state.namapmhon2 +
          '&shdk1=' +
           this.state.selectedcat +
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('SuratPindahberkas2',{nikuser:nikuser,
			nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,		
    selectedcat:selectedcat, provinsi : provinsi,   kabupaten :kabupaten,   kecamatan : kecamatan ,    kelurahan  : kelurahan ,  alamat : alamat,
      kdpos : kdpos, provinsitj : provinsitj,  kabupatentj: kabupatentj,  kectj : kectj, kltj : kltj,  alamattj : alamattj, kdpostj : kdpostj, selectedcat1: selectedcat1,  selectedcat2 : selectedcat2,  selectedcat3 : selectedcat3, selectedcat4 : selectedcat4,		
			});
          } else if (responseJson == 'false') {
            alert('NIK Sudah Terdaftar');
          }
        });
    
  }
   async onValueChangeCat(value) {
    this.setState({selectedcat: value});
  }
  render() {
     var nikuser = this.props.route.params.nikuser;
    var nikpmhon = this.props.route.params.nikpmhon;
    var namapmhon = this.props.route.params.namapmhon;
    var nokkpmhon = this.props.route.params.nokkpmhon;
    var umurpmhon = this.props.route.params.umurpmhon;  
	var kwnpmhon = this.props.route.params.kwnpmhon;

    var selectedcat = this.props.route.params.selectedcat;
    var provinsi = this.props.route.params.provinsi;
    var kabupaten = this.props.route.params.kabupaten;
    var kecamatan = this.props.route.params.kecamatan;
    var kelurahan = this.props.route.params.kelurahan;
    var alamat = this.props.route.params.alamat;
    var kdpos = this.props.route.params.kdpos;

    var provinsitj = this.props.route.params.provinsitj;
    var kabupatentj = this.props.route.params.kabupatentj;
    var kectj = this.props.route.params.kectj;
    var kltj = this.props.route.params.kltj;
    var alamattj = this.props.route.params.alamattj;
    var kdpostj = this.props.route.params.kdpostj;
    var selectedcat1 = this.props.route.params.selectedcat1;
    var selectedcat2 = this.props.route.params.selectedcat2;
    var selectedcat3 = this.props.route.params.selectedcat3;
    var selectedcat4 = this.props.route.params.selectedcat4;
		
				 var nikpmhon1 = this.props.route.params.nikpmhon1;
	  var namapmhon1 = this.props.route.params.namapmhon1;
	   var shdk1 = this.props.route.params.shdk1;
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
        Surat Pindah
          </Text>
        </View>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 20}}>
            <View style={{backgroundColor: 'white'}} />
			         
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             

              <TouchableOpacity

                style={{marginBottom: 20, ...styles.headerOff}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
  Data Anggota Keluarga yang pindah 
                </Text>
              </TouchableOpacity>

             
            </ScrollView>

            <Text>Data 1</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon1}

            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon1}
     
            />
         
		  
		  
		  
		  
		  
		  
		
            <Text>Data 2</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikpmhon2}
              onChangeText={text => this.setState({nikpmhon2: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namapmhon2}
              onChangeText={text => this.setState({namapmhon2: text})}
            />
         
		  
		   
		  
            <View style={styles.dash} />
   <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Tambah Data
            </Text>
          </TouchableOpacity>
           
          
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
             onPress={() =>
                  this.props.navigation.navigate('SuratPindahtujuan2', {
                    nikuser: nikuser,
                  })
                }
             style={{marginBottom: 20, marginLeft: -20,...styles.headerOff1}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
             Sebelumnya
              </Text>
            </TouchableOpacity>
			
			  <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan1()}
       style={{marginBottom: 20,marginRight: -20,...styles.headerOff1}}>
            <Text  style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
		Selanjutnya
            </Text>
          </TouchableOpacity>
			
			
		
			     </View>
          </View>
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

  container: {flex: 1, backgroundColor: 'white'},
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
    marginRight: 10,
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
    marginRight: 10,
    marginTop: 20,
  },

  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    elevation: 1,
  },
screenContainer: {
    padding: 15,

    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
  dash: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderStyle: 'dashed',
  },
});
