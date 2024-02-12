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
		 
		 
		    var nikpmhon2 = this.props.route.params.nikpmhon2;
        var namapmhon2 = this.props.route.params.namapmhon2;
		 var shdk2 = this.props.route.params.shdk2;

		 	    var nikpmhon3 = this.props.route.params.nikpmhon3;
        var namapmhon3 = this.props.route.params.namapmhon3;
		 var shdk3 = this.props.route.params.shdk3;
  
       	    var nikpmhon4 = this.props.route.params.nikpmhon4;
        var namapmhon4 = this.props.route.params.namapmhon4;
		 var shdk4 = this.props.route.params.shdk4;
		 
		 var nikpmhon5 = this.props.route.params.nikpmhon5;
        var namapmhon5 = this.props.route.params.namapmhon5;
		 var shdk5 = this.props.route.params.shdk5;
		 
		    	 var nikpmhon6 = this.props.route.params.nikpmhon6;
	  var namapmhon6 = this.props.route.params.namapmhon6;
	   var shdk6 = this.props.route.params.shdk6;
		 
		var data1 = 'data7';
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
          this.state.nikpmhon7+
          '&namapmhon1=' +
          this.state.namapmhon7 +
         '&shdk1=' +
          this.state.selectedcat +
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('SuratPindahDataIsianTujuh',{nikuser:nikuser,
			nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,
			 selectedcat:selectedcat, provinsi : provinsi,   kabupaten :kabupaten,   kecamatan : kecamatan ,    kelurahan  : kelurahan ,  alamat :alamat,  kdpos : kdpos, provinsitj : provinsitj,  kabupatentj: kabupatentj,  kectj : kectj, kltj : kltj,  alamattj : alamattj, kdpostj : kdpostj, selectedcat1: selectedcat1,  selectedcat2 : selectedcat2,  selectedcat3 : selectedcat3, selectedcat4 : selectedcat4,
			
			
			
			nikpmhon1 : nikpmhon1, namapmhon1:namapmhon1, shdk1:shdk1, 
			nikpmhon2 : nikpmhon2, namapmhon2:namapmhon2, shdk2:shdk2, 
				nikpmhon3 : nikpmhon3, namapmhon3:namapmhon3, shdk3:shdk3, 
			nikpmhon4 : nikpmhon4, namapmhon4:namapmhon4, shdk4:shdk4, 
				nikpmhon5 : nikpmhon5, namapmhon5:namapmhon5, shdk5:shdk5, 
					nikpmhon6 : nikpmhon6, namapmhon6:namapmhon6, shdk6:shdk6, 
			nikpmhon7 : this.state.nikpmhon7, namapmhon7: this.state.namapmhon7, shdk7:this.state.selectedcat, 
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
		
		
		
		
   
       
		var data1 = 'data7';
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
          this.state.nikpmhon7 +
          '&namapmhon1=' +
          this.state.namapmhon7 +
          '&shdk1=' +
          this.state.selectedcat +
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('SuratPindahberkas',{nikuser:nikuser,
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
	   
	   
	   
	   
				 var nikpmhon2 = this.props.route.params.nikpmhon2;
	  var namapmhon2 = this.props.route.params.namapmhon2;
	   var shdk2 = this.props.route.params.shdk2;
	   
	   		 var nikpmhon3 = this.props.route.params.nikpmhon3;
	  var namapmhon3 = this.props.route.params.namapmhon3;
	   var shdk3 = this.props.route.params.shdk3;
	   
	   		 var nikpmhon4 = this.props.route.params.nikpmhon4;
	  var namapmhon4 = this.props.route.params.namapmhon4;
	   var shdk4 = this.props.route.params.shdk4;
	   
	     		 var nikpmhon5 = this.props.route.params.nikpmhon5;
	  var namapmhon5 = this.props.route.params.namapmhon5;
	   var shdk5 = this.props.route.params.shdk5;
	   
	   	 var nikpmhon6 = this.props.route.params.nikpmhon6;
	  var namapmhon6 = this.props.route.params.namapmhon6;
	   var shdk6 = this.props.route.params.shdk6;
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
         
		  
		    
		           <View style={styles.dash} />
		  
		  
		  
		  
		
            <Text>Data 2</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon2}

            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon2}

            />
         
		  
		    <View style={styles.dash} />
		    
            <Text>Data 3</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon3}
         
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon3}
       
            />
         
		  
		  
            <View style={styles.dash} />
			
			
			
            <Text>Data 4</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon4}
     
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon4}

            />
         
		  
		  
		         <View style={styles.dash} />
		  
		       <Text>Data 5</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon5}

            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon5}
          
            />
         
		
		  
		       <View style={styles.dash} />
		  
            <Text>Data 6</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon6}

            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon6}
         
            />
         
		  
	
		  
		       <View style={styles.dash} />
			   
			       <Text>Data 7</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikpmhon7}
              onChangeText={text => this.setState({nikpmhon7: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namapmhon7}
              onChangeText={text => this.setState({namapmhon7: text})}
            />
         
		  
		    
   <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
          Selesai
            </Text>
          </TouchableOpacity>
           
          
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
             onPress={() =>
                  this.props.navigation.navigate('SuratPindahtujuan', {
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
	    marginBottom: 10,
  },
});
