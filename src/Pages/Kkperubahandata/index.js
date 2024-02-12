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
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';
import {TextInput} from 'react-native-paper';

console.disableYellowBox = true;
export default class Kkperubahandata extends Component {
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
    };
    this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/kkperubahankk.php';
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
		
        var pendsemula1 = this.state.pendsemula1;
        var pendmenjadi1 = this.state.pendmenjadi1;
        var pendperubahan1 = this.state.pendperubahan1;
        var pendket1 = this.state.pendket1;
		
		
		  var peksemula1 = this.state.peksemula1;
		  var pekmenjadi1 = this.state.pekmenjadi1;
		var pekperubahan1 = this.state.pekperubahan1;
		  var pekket1 = this.state.pekket1;
		  
       	  var agamasemula1 = this.state.agamasemula1;
		  var agamamenjadi1 = this.state.agamamenjadi1;
		var agamaperubahan1 = this.state.agamaperubahan1;
		  var agamaket1 = this.state.agamaket1;

 	  var lsemula1 = this.state.lsemula1;
		  var lmenjadi1 = this.state.lmenjadi1;
		var lperubahan1 = this.state.lperubahan1;
		  var lket1 = this.state.lket1;		  
		var data1 = 'data1';
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
          '&pendsemula1=' +
          this.state.pendsemula1 +
          '&pendmenjadi1=' +
          this.state.pendmenjadi1 +
		  '&pendperubahan1=' +
          this.state.pendperubahan1 +
		  '&pendket1=' +
          this.state.pendket1 +
		  
		  '&peksemula1=' +
          this.state.peksemula1 +
		  '&pekmenjadi1=' +
          this.state.pekmenjadi1 +
		  '&pekperubahan1=' +
          this.state.pekperubahan1 +
		  '&pekket1=' +
          this.state.pekket1 +
		  
		  '&agamasemula1=' +
          this.state.agamasemula1 +
		  '&agamamenjadi1=' +
          this.state.agamamenjadi1 +
		  '&agamaperubahan1=' +
          this.state.agamaperubahan1 +
		  '&agamaket1=' +
          this.state.agamaket1 +
		  
		  '&lsemula1=' +
          this.state.lsemula1 +
		  '&lmenjadi1=' +
          this.state.lmenjadi1 +
		  
          '&lperubahan1=' +
          lperubahan1 +
		   '&data1=' +
          data1 +
          '&lket1=' +
          lket1,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('Kkperubahandatadua',{nikuser:nikuser,
						nikpmhon : nikpmhon, namapmhon : namapmhon,  nokkpmhon: nokkpmhon, umurpmhon:umurpmhon , kwnpmhon, kwnpmhon,
			pendsemula1 : this.state.pendsemula1, pendmenjadi1:this.state.pendmenjadi1, pendperubahan1:this.state.pendperubahan1, pendket1:this.state.pendket1,

		peksemula1 :this.state.peksemula1, pekmenjadi1:this.state.pekmenjadi1,  
		pekperubahan1:this.state.pekperubahan1, pekket1 :this.state.pekket1, 
		
		agamasemula1 :this.state.agamasemula1, agamamenjadi1:this.state.agamamenjadi1,  
		agamaperubahan1:this.state.agamaperubahan1, agamaket1 :this.state.agamaket1 ,
		
lsemula1 :this.state.lsemula1, lmenjadi1:this.state.lmenjadi1,  
		lperubahan1:this.state.lperubahan1, lket1 :this.state.lket1 ,		
			});
          } else if (responseJson == 'false') {
            alert('NIK Sudah Terdaftar');
          }
        });
    
  }

  render() {
    var nikuser = this.props.route.params.nikuser;
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
                 Data Perubahan
                </Text>
              </TouchableOpacity>
            </ScrollView>

            {/* data1 */}

            <Text style={{marginTop: 20}}>Data 1</Text>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Pendidikan Terakhir
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendsemula1}
              onChangeText={text => this.setState({pendsemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendmenjadi1}
              onChangeText={text => this.setState({pendmenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendperubahan1}
              onChangeText={text => this.setState({pendperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendket1}
              onChangeText={text => this.setState({pendket1: text})}
            />
            <Text
              style={{marginTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
              Pekerjaan
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.peksemula1}
              onChangeText={text => this.setState({peksemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekmenjadi1}
              onChangeText={text => this.setState({pekmenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekperubahan1}
              onChangeText={text => this.setState({pekperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekket1}
              onChangeText={text => this.setState({pekket1: text})}
            />
            <Text
              style={{marginTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
              Agama
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamasemula1}
              onChangeText={text => this.setState({agamasemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamamenjadi1}
              onChangeText={text => this.setState({agamamenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaperubahan1}
              onChangeText={text => this.setState({agamaperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaket1}
              onChangeText={text => this.setState({agamaket1: text})}
            />
            <Text
              style={{marginTop: 20, fontWeight: 'bold', fontStyle: 'italic'}}>
              Lainnya*
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lsemula1}
              onChangeText={text => this.setState({lsemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lmenjadi1}
              onChangeText={text => this.setState({lmenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lperubahan1}
              onChangeText={text => this.setState({lperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lket1}
              onChangeText={text => this.setState({lket1: text})}
            />
         
            {/* enddata1 */}
  <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              Tambah Data
            </Text>
          </TouchableOpacity>
            {/* data2 */}

            {/* enddata7 */}
          </View>
        </ScrollView>
		
		
		   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
		   
			  <TouchableOpacity
          onPress={() =>
                  this.props.navigation.navigate('Kkperubahanrincian', {
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
                  this.props.navigation.navigate('Kkperubahanberkas', {
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
