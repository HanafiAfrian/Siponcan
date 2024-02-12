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
      listData: [],
	  	   selectedcat: 'Kepala Keluarga',
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kkperubahanrincian.php';
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
        var nikpmhon6 = this.state.nikpmhon6;
        var namapmhon6 = this.state.namapmhon6;
        var shdk6 = this.state.selectedcat;
        var ket6 = this.state.ket6;
       
		var data6 = 'data6';
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
          this.state.nikpmhon6 +
          '&namapmhon1=' +
          this.state.namapmhon6 +
          '&shdk1=' +
          shdk6 +
		   '&data1=' +
          data6 +
          '&ket1=' +
          ket6,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('Kkperubahanrinciantujuh',{
				nikuser:nikuser,
				nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,
			nikpmhon1 : this.props.route.params.nikpmhon1, namapmhon1:this.props.route.params.namapmhon1, shdk1:this.props.route.params.shdk1,  ket1:this.props.route.params.ket1, 
			
			nikpmhon2: this.props.route.params.nikpmhon2, namapmhon2:this.props.route.params.namapmhon2, shdk2:this.props.route.params.shdk2 ,ket2:this.props.route.params.ket2, 
			
			nikpmhon3 :this.props.route.params.nikpmhon3,
        namapmhon3 :this.props.route.params.namapmhon3,
         shdk3 : this.props.route.params.shdk3,
         ket3 : this.props.route.params.ket3,
		 
		 
	
        nikpmhon4 : this.props.route.params.nikpmhon4,
        namapmhon4 : this.props.route.params.namapmhon4,
         shdk4 : this.props.route.params.shdk4,
         ket4 : this.props.route.params.ket4,
		 
		   nikpmhon5 : this.props.route.params.nikpmhon5,
        namapmhon5 : this.props.route.params.namapmhon5,
         shdk5 : this.props.route.params.shdk5,
         ket5 : this.props.route.params.ket5,
		 
		 nikpmhon6 : this.state.nikpmhon6,
         namapmhon6 : this.state.namapmhon6,
         shdk6 : this.state.selectedcat,
         ket6 : this.state.ket6,
		 
		 
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
	    var ket1 = this.props.route.params.ket1; 
	
		 var nikpmhon2 = this.props.route.params.nikpmhon2;
	  var namapmhon2 = this.props.route.params.namapmhon2;
	   var shdk2 = this.props.route.params.shdk2;
	    var ket2 = this.props.route.params.ket2; 

	 var nikpmhon3 = this.props.route.params.nikpmhon3;
	  var namapmhon3 = this.props.route.params.namapmhon3;
	   var shdk3 = this.props.route.params.shdk3;
	    var ket3 = this.props.route.params.ket3; 
		
		 var nikpmhon4 = this.props.route.params.nikpmhon4;
	  var namapmhon4 = this.props.route.params.namapmhon4;
	   var shdk4 = this.props.route.params.shdk4;
	    var ket4 = this.props.route.params.ket4; 
			
		 var nikpmhon5 = this.props.route.params.nikpmhon5;
	  var namapmhon5 = this.props.route.params.namapmhon5;
	   var shdk5 = this.props.route.params.shdk5;
	    var ket5 = this.props.route.params.ket5; 
		
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
          Perubahan Elemen KK
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
                   Rincian KK
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
            <TextInput
              label="Status Hubungan Dalam Keluarga"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
               value={shdk1}
           
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
			     value={ket1}
     
            />
           <View style={styles.dash} />
		 <Text></Text>
			 <Text>Data 2</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon2}
              onChangeText={text => this.setState({nikpmhon1: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon2}
              onChangeText={text => this.setState({namapmhon1: text})}
            />
            <TextInput
              label="Status Hubungan Dalam Keluarga"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
               value={shdk2}
                onChangeText={text => this.setState({shdk1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
			     value={ket2}
                onChangeText={text => this.setState({ket1: text})}
            />
			<View style={styles.dash} />
			 <Text></Text>
			 <Text>Data 3</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon3}
              onChangeText={text => this.setState({nikpmhon3: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon3}
              onChangeText={text => this.setState({namapmhon3: text})}
            />
            <TextInput
              label="Status Hubungan Dalam Keluarga"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
               value={shdk3}
                onChangeText={text => this.setState({shdk3: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
			     value={ket3}
                onChangeText={text => this.setState({ket3: text})}
            />
			
			
			
			<View style={styles.dash} />
			 <Text></Text>
			 <Text>Data 4</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon4}
              onChangeText={text => this.setState({nikpmhon4: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon4}
              onChangeText={text => this.setState({namapmhon4: text})}
            />
            <TextInput
              label="Status Hubungan Dalam Keluarga"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
               value={shdk4}
                onChangeText={text => this.setState({shdk4: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
			     value={ket4}
                onChangeText={text => this.setState({ket4: text})}
            />
			
			<View style={styles.dash} />
			 <Text></Text>
			 <Text>Data 5</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={nikpmhon5}
              onChangeText={text => this.setState({nikpmhon5: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={namapmhon5}
              onChangeText={text => this.setState({namapmhon5: text})}
            />
            <TextInput
              label="Status Hubungan Dalam Keluarga"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
               value={shdk5}
                onChangeText={text => this.setState({shdk5: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
			     value={ket5}
                onChangeText={text => this.setState({ket5: text})}
            />
			
			
			
			<View style={styles.dash} />
			 <Text></Text>
			 <Text>Data 6</Text>
            <TextInput
              label="NIK"
              mode="outlined"
              keyboardType="numeric"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.nikpmhon6}
              onChangeText={text => this.setState({nikpmhon6: text})}
            />
            <TextInput
              label="Nama Lengkap (Sesuai KTP)"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
              value={this.state.namapmhon6}
              onChangeText={text => this.setState({namapmhon6: text})}
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
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 25}}
              theme={{roundness: 10}}
			     value={this.state.ket6}
                onChangeText={text => this.setState({ket6: text})}
            />
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
                  this.props.navigation.navigate('Kkperubahan', {
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
              onPress={() =>
              
                  this.props.navigation.navigate('Kkperubahandata', {
                 nikuser: nikuser,
					nikpmhon  : nikpmhon,
					namapmhon : namapmhon,
					nokkpmhon: nokkpmhon,
					umurpmhon: umurpmhon,
					kwnpmhon: kwnpmhon,
                  })
                }
            style={{marginBottom: 20,marginRight: -20,...styles.headerOff1}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#005b9f'}}>
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
