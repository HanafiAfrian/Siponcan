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
        var pendsemula1 = this.state.pendsemula2;
        var pendmenjadi1 = this.state.pendmenjadi2;
        var pendperubahan1 = this.state.pendperubahan2;
        var pendket1 = this.state.pendket2;
		
		
		  var peksemula1 = this.state.peksemula2;
		  var pekmenjadi1 = this.state.pekmenjadi2;
		var pekperubahan1 = this.state.pekperubahan2;
		  var pekket1 = this.state.pekket2;
		  
       	  var agamasemula1 = this.state.agamasemula2;
		  var agamamenjadi1 = this.state.agamamenjadi2;
		var agamaperubahan1 = this.state.agamaperubahan2;
		  var agamaket1 = this.state.agamaket2;

 	  var lsemula1 = this.state.lsemula2;
		  var lmenjadi1 = this.state.lmenjadi2;
		var lperubahan1 = this.state.lperubahan2;
		  var lket1 = this.state.lket2;		  
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
          '&pendsemula1=' +
          this.state.pendsemula2 +
          '&pendmenjadi1=' +
          this.state.pendmenjadi2 +
		  '&pendperubahan1=' +
          this.state.pendperubahan2 +
		  '&pendket1=' +
          this.state.pendket2 +
		  
		  '&peksemula1=' +
          this.state.peksemula2 +
		  '&pekmenjadi1=' +
          this.state.pekmenjadi2 +
		  '&pekperubahan1=' +
          this.state.pekperubahan2 +
		  '&pekket1=' +
          this.state.pekket2 +
		  
		  '&agamasemula1=' +
          this.state.agamasemula2 +
		  '&agamamenjadi1=' +
          this.state.agamamenjadi2 +
		  '&agamaperubahan1=' +
          this.state.agamaperubahan2 +
		  '&agamaket1=' +
          this.state.agamaket2 +
		  
		  '&lsemula1=' +
          this.state.lsemula2 +
		  '&lmenjadi1=' +
          this.state.lmenjadi2 +
		  '&lperubahan1=' +
          this.state.lperubahan2 +
		  '&lket1=' +
          this.state.lket2 +
		  
		   '&data1=' +
          data1 ,
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson == 'true') {
           
            this.props.navigation.replace('Kkperubahandatatujuh',{nikuser:nikuser,
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
    var pendsemula1 = this.props.route.params.pendsemula1;
    var pendmenjadi1 = this.props.route.params.pendmenjadi1;
    var pendperubahan1 = this.props.route.params.pendperubahan1;
    var pendket1 = this.props.route.params.pendket1;
	
    var peksemula1 = this.props.route.params.peksemula1;
    var pekmenjadi1 = this.props.route.params.pekmenjadi1;
    var pekperubahan1 = this.props.route.params.pekperubahan1;
    var pekket1 = this.props.route.params.pekket1;
	
    var agamasemula1 = this.props.route.params.agamasemula1;
    var agamamenjadi1 = this.props.route.params.agamamenjadi1;
    var agamaperubahan1 = this.props.route.params.agamaperubahan1;
    var agamaket1 = this.props.route.params.agamaket1;
	
    var lsemula1 = this.props.route.params.lsemula1;
    var lmenjadi1 = this.props.route.params.lmenjadi1;
    var lperubahan1 = this.props.route.params.lperubahan1;
    var lket1 = this.props.route.params.lket1;
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
              value={pendsemula1}
              onChangeText={text => this.setState({pendsemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={pendmenjadi1}
              onChangeText={text => this.setState({pendmenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={pendperubahan1}
              onChangeText={text => this.setState({pendperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={pendket1}
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
              value={peksemula1}
              onChangeText={text => this.setState({peksemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={pekmenjadi1}
              onChangeText={text => this.setState({pekmenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={pekperubahan1}
              onChangeText={text => this.setState({pekperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={pekket1}
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
              value={agamasemula1}
              onChangeText={text => this.setState({agamasemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={agamamenjadi1}
              onChangeText={text => this.setState({agamamenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={agamaperubahan1}
              onChangeText={text => this.setState({agamaperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={agamaket1}
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
              value={lsemula1}
              onChangeText={text => this.setState({lsemula1: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={lmenjadi1}
              onChangeText={text => this.setState({lmenjadi1: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={lperubahan1}
              onChangeText={text => this.setState({lperubahan1: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={lket1}
              onChangeText={text => this.setState({lket1: text})}
            />
             <View style={styles.dash} />
			 
			  <Text></Text>
            <Text style={{marginTop: 20}}>Data 2</Text>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Pendidikan Terakhir
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendsemula2}
              onChangeText={text => this.setState({pendsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendmenjadi2}
              onChangeText={text => this.setState({pendmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendperubahan2}
              onChangeText={text => this.setState({pendperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendket2}
              onChangeText={text => this.setState({pendket2: text})}
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
              value={this.state.peksemula2}
              onChangeText={text => this.setState({peksemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekmenjadi2}
              onChangeText={text => this.setState({pekmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekperubahan2}
              onChangeText={text => this.setState({pekperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekket2}
              onChangeText={text => this.setState({pekket2: text})}
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
              value={this.state.agamasemula2}
              onChangeText={text => this.setState({agamasemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamamenjadi2}
              onChangeText={text => this.setState({agamamenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaperubahan2}
              onChangeText={text => this.setState({agamaperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaket2}
              onChangeText={text => this.setState({agamaket2: text})}
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
              value={this.state.lsemula2}
              onChangeText={text => this.setState({lsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lmenjadi2}
              onChangeText={text => this.setState({lmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lperubahan2}
              onChangeText={text => this.setState({lperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lket2}
              onChangeText={text => this.setState({lket2: text})}
            />
			
				 <Text></Text>
            <Text style={{marginTop: 20}}>Data 3</Text>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Pendidikan Terakhir
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendsemula2}
              onChangeText={text => this.setState({pendsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendmenjadi2}
              onChangeText={text => this.setState({pendmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendperubahan2}
              onChangeText={text => this.setState({pendperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendket2}
              onChangeText={text => this.setState({pendket2: text})}
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
              value={this.state.peksemula2}
              onChangeText={text => this.setState({peksemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekmenjadi2}
              onChangeText={text => this.setState({pekmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekperubahan2}
              onChangeText={text => this.setState({pekperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekket2}
              onChangeText={text => this.setState({pekket2: text})}
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
              value={this.state.agamasemula2}
              onChangeText={text => this.setState({agamasemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamamenjadi2}
              onChangeText={text => this.setState({agamamenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaperubahan2}
              onChangeText={text => this.setState({agamaperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaket2}
              onChangeText={text => this.setState({agamaket2: text})}
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
              value={this.state.lsemula2}
              onChangeText={text => this.setState({lsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lmenjadi2}
              onChangeText={text => this.setState({lmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lperubahan2}
              onChangeText={text => this.setState({lperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lket2}
              onChangeText={text => this.setState({lket2: text})}
            />
			
				 <Text></Text>
            <Text style={{marginTop: 20}}>Data 4</Text>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Pendidikan Terakhir
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendsemula2}
              onChangeText={text => this.setState({pendsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendmenjadi2}
              onChangeText={text => this.setState({pendmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendperubahan2}
              onChangeText={text => this.setState({pendperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendket2}
              onChangeText={text => this.setState({pendket2: text})}
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
              value={this.state.peksemula2}
              onChangeText={text => this.setState({peksemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekmenjadi2}
              onChangeText={text => this.setState({pekmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekperubahan2}
              onChangeText={text => this.setState({pekperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekket2}
              onChangeText={text => this.setState({pekket2: text})}
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
              value={this.state.agamasemula2}
              onChangeText={text => this.setState({agamasemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamamenjadi2}
              onChangeText={text => this.setState({agamamenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaperubahan2}
              onChangeText={text => this.setState({agamaperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaket2}
              onChangeText={text => this.setState({agamaket2: text})}
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
              value={this.state.lsemula2}
              onChangeText={text => this.setState({lsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lmenjadi2}
              onChangeText={text => this.setState({lmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lperubahan2}
              onChangeText={text => this.setState({lperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lket2}
              onChangeText={text => this.setState({lket2: text})}
            />
			
			
			 <Text></Text>
            <Text style={{marginTop: 20}}>Data 5</Text>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Pendidikan Terakhir
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendsemula2}
              onChangeText={text => this.setState({pendsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendmenjadi2}
              onChangeText={text => this.setState({pendmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendperubahan2}
              onChangeText={text => this.setState({pendperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendket2}
              onChangeText={text => this.setState({pendket2: text})}
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
              value={this.state.peksemula2}
              onChangeText={text => this.setState({peksemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekmenjadi2}
              onChangeText={text => this.setState({pekmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekperubahan2}
              onChangeText={text => this.setState({pekperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekket2}
              onChangeText={text => this.setState({pekket2: text})}
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
              value={this.state.agamasemula2}
              onChangeText={text => this.setState({agamasemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamamenjadi2}
              onChangeText={text => this.setState({agamamenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaperubahan2}
              onChangeText={text => this.setState({agamaperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaket2}
              onChangeText={text => this.setState({agamaket2: text})}
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
              value={this.state.lsemula2}
              onChangeText={text => this.setState({lsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lmenjadi2}
              onChangeText={text => this.setState({lmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lperubahan2}
              onChangeText={text => this.setState({lperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lket2}
              onChangeText={text => this.setState({lket2: text})}
            />
			
			
			 <Text></Text>
            <Text style={{marginTop: 20}}>Data 6</Text>
            <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>
              Pendidikan Terakhir
            </Text>
            <TextInput
              label="Semula"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendsemula2}
              onChangeText={text => this.setState({pendsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendmenjadi2}
              onChangeText={text => this.setState({pendmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendperubahan2}
              onChangeText={text => this.setState({pendperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pendket2}
              onChangeText={text => this.setState({pendket2: text})}
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
              value={this.state.peksemula2}
              onChangeText={text => this.setState({peksemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekmenjadi2}
              onChangeText={text => this.setState({pekmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekperubahan2}
              onChangeText={text => this.setState({pekperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.pekket2}
              onChangeText={text => this.setState({pekket2: text})}
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
              value={this.state.agamasemula2}
              onChangeText={text => this.setState({agamasemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamamenjadi2}
              onChangeText={text => this.setState({agamamenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaperubahan2}
              onChangeText={text => this.setState({agamaperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.agamaket2}
              onChangeText={text => this.setState({agamaket2: text})}
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
              value={this.state.lsemula2}
              onChangeText={text => this.setState({lsemula2: text})}
            />
            <TextInput
              label="Menjadi"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lmenjadi2}
              onChangeText={text => this.setState({lmenjadi2: text})}
            />
            <TextInput
              label="Dasar Perubahan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lperubahan2}
              onChangeText={text => this.setState({lperubahan2: text})}
            />
            <TextInput
              label="Keterangan"
              mode="outlined"
              activeOutlineColor="#005b9f"
              style={{backgroundColor: 'white', marginBottom: 5}}
              theme={{roundness: 10}}
              value={this.state.lket2}
              onChangeText={text => this.setState({lket2: text})}
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
                    nikpmhon: this.state.nikpmhon,
                    namapmhon: this.state.namapmhon,
                    nokkpmhon: this.state.nokkpmhon,
                    umurpmhon: this.state.umurpmhon,
                    kwnpmhon: this.state.kwnpmhon,
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
