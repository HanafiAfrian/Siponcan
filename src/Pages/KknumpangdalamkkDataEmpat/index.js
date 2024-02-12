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
	  	       selectedcat: 'Kepala Keluarga',
      listData: [],
    };
this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kknumpdandalamkkdata.php';
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
		
		
		
        var nikpmhon1 = this.props.route.params.nikpmhon1;
        var namapmhon1 = this.props.route.params.namapmhon1;
		 var shdk1 = this.props.route.params.shdk1;
		 
		 
		    var nikpmhon2 = this.props.route.params.nikpmhon2;
        var namapmhon2 = this.props.route.params.namapmhon2;
		 var shdk2 = this.props.route.params.shdk2;

		 	    var nikpmhon3 = this.props.route.params.nikpmhon3;
        var namapmhon3 = this.props.route.params.namapmhon3;
		 var shdk3 = this.props.route.params.shdk3;
  
       
		var data1 = 'data4';
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
          this.state.nikpmhon4 +
          '&namapmhon1=' +
          this.state.namapmhon4 +
         '&shdk1=' +
          this.state.selectedcat +
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('KknumpangdalamkkDataLima',{nikuser:nikuser,
			nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,
			
			
			
			nikpmhon1 : nikpmhon1, namapmhon1:namapmhon1, shdk1:shdk1, 
			nikpmhon2 : nikpmhon2, namapmhon2:namapmhon2, shdk2:shdk2, 
				nikpmhon3 : nikpmhon3, namapmhon3:namapmhon3, shdk3:shdk3, 
		
			nikpmhon4 : this.state.nikpmhon4, namapmhon4: this.state.namapmhon4, shdk4:this.state.selectedcat, 
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
		
		
		
   
       
		var data1 = 'data4';
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
          this.state.nikpmhon4 +
          '&namapmhon1=' +
          this.state.namapmhon4 +
          '&shdk1=' +
          this.state.selectedcat +
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('KkKknumpangdalamkkberkas',{nikuser:nikuser,
			nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,			
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
		
				 var nikpmhon1 = this.props.route.params.nikpmhon1;
	  var namapmhon1 = this.props.route.params.namapmhon1;
	   var shdk1 = this.props.route.params.shdk1;
	   
	   
	   
	   
				 var nikpmhon2 = this.props.route.params.nikpmhon2;
	  var namapmhon2 = this.props.route.params.namapmhon2;
	   var shdk2 = this.props.route.params.shdk2;
	   
	   		 var nikpmhon3 = this.props.route.params.nikpmhon3;
	  var namapmhon3 = this.props.route.params.namapmhon3;
	   var shdk3 = this.props.route.params.shdk3;
	   
	   
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
     Menumpang Dalam KK
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
      Data Anggota KK Pengikut
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
         
		  
		     <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              color: 'grey',
            }}>
      Status Hubungan Dalam Keluarga
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              marginBottom: 25,
            }}>
            <Picker
              itemStyle={{
                height: 190,
                fontSize: 16,
                fontWeight: 'bold',
                borderBottomColor: 'red',
                marginHorizontal: 20,
              }}
              mode="dropdown"
               selectedValue={shdk1}
   
            >
              <Picker.Item color="grey" label="Kepala Keluarga" value="Kepala Keluarga" />
              <Picker.Item color="grey" label="Suami" value="Suami" />
			              <Picker.Item color="grey" label="Istri" value="Istri" />
						   <Picker.Item color="grey" label="Anak" value="Anak" />
						      <Picker.Item color="grey" label="Menantu" value="Menantu" />
							     <Picker.Item color="grey" label="Cucu" value="Cucu" />
								    <Picker.Item color="grey" label="Orang Tua" value="Orang Tua" />
									   <Picker.Item color="grey" label="Mertua" value="Mertua" />
									    
										     <Picker.Item color="grey" label="Famili Lainnya" value="Famili Lainnya" />
											      <Picker.Item color="grey" label="Pembantu" value="Pembantu" />
												        <Picker.Item color="grey" label="Lainnya" value="Lainnya" />
            </Picker>
          </View>
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
         
		  
		     <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              color: 'grey',
            }}>
      Status Hubungan Dalam Keluarga
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              marginBottom: 25,
            }}>
            <Picker
              itemStyle={{
                height: 190,
                fontSize: 16,
                fontWeight: 'bold',
                borderBottomColor: 'red',
                marginHorizontal: 20,
              }}
              mode="dropdown"
               selectedValue={shdk2}

            >
              <Picker.Item color="grey" label="Kepala Keluarga" value="Kepala Keluarga" />
              <Picker.Item color="grey" label="Suami" value="Suami" />
			              <Picker.Item color="grey" label="Istri" value="Istri" />
						   <Picker.Item color="grey" label="Anak" value="Anak" />
						      <Picker.Item color="grey" label="Menantu" value="Menantu" />
							     <Picker.Item color="grey" label="Cucu" value="Cucu" />
								    <Picker.Item color="grey" label="Orang Tua" value="Orang Tua" />
									   <Picker.Item color="grey" label="Mertua" value="Mertua" />
									    
										     <Picker.Item color="grey" label="Famili Lainnya" value="Famili Lainnya" />
											      <Picker.Item color="grey" label="Pembantu" value="Pembantu" />
												        <Picker.Item color="grey" label="Lainnya" value="Lainnya" />
            </Picker>
          </View>
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
         
		  
		     <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              color: 'grey',
            }}>
      Status Hubungan Dalam Keluarga
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              marginBottom: 25,
            }}>
            <Picker
              itemStyle={{
                height: 190,
                fontSize: 16,
                fontWeight: 'bold',
                borderBottomColor: 'red',
                marginHorizontal: 20,
              }}
              mode="dropdown"
               selectedValue={shdk3}
            
            >
              <Picker.Item color="grey" label="Kepala Keluarga" value="Kepala Keluarga" />
              <Picker.Item color="grey" label="Suami" value="Suami" />
			              <Picker.Item color="grey" label="Istri" value="Istri" />
						   <Picker.Item color="grey" label="Anak" value="Anak" />
						      <Picker.Item color="grey" label="Menantu" value="Menantu" />
							     <Picker.Item color="grey" label="Cucu" value="Cucu" />
								    <Picker.Item color="grey" label="Orang Tua" value="Orang Tua" />
									   <Picker.Item color="grey" label="Mertua" value="Mertua" />
									    
										     <Picker.Item color="grey" label="Famili Lainnya" value="Famili Lainnya" />
											      <Picker.Item color="grey" label="Pembantu" value="Pembantu" />
												        <Picker.Item color="grey" label="Lainnya" value="Lainnya" />
            </Picker>
          </View>
		  
            <View style={styles.dash} />
			
			
			
            <Text>Data 4</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikpmhon4}
              onChangeText={text => this.setState({nikpmhon4: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namapmhon4}
              onChangeText={text => this.setState({namapmhon4: text})}
            />
         
		  
		     <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              color: 'grey',
            }}>
      Status Hubungan Dalam Keluarga
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              marginBottom: 25,
            }}>
            <Picker
              itemStyle={{
                height: 190,
                fontSize: 16,
                fontWeight: 'bold',
                borderBottomColor: 'red',
                marginHorizontal: 20,
              }}
              mode="dropdown"
               selectedValue={this.state.selectedcat}
             onValueChange={this.onValueChangeCat.bind(this)}
            >
              <Picker.Item color="grey" label="Kepala Keluarga" value="Kepala Keluarga" />
              <Picker.Item color="grey" label="Suami" value="Suami" />
			              <Picker.Item color="grey" label="Istri" value="Istri" />
						   <Picker.Item color="grey" label="Anak" value="Anak" />
						      <Picker.Item color="grey" label="Menantu" value="Menantu" />
							     <Picker.Item color="grey" label="Cucu" value="Cucu" />
								    <Picker.Item color="grey" label="Orang Tua" value="Orang Tua" />
									   <Picker.Item color="grey" label="Mertua" value="Mertua" />
									    
										     <Picker.Item color="grey" label="Famili Lainnya" value="Famili Lainnya" />
											      <Picker.Item color="grey" label="Pembantu" value="Pembantu" />
												        <Picker.Item color="grey" label="Lainnya" value="Lainnya" />
            </Picker>
          </View>
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
                  this.props.navigation.navigate('Kknumpangdalamkk', {
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
