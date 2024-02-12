import React, {Component} from 'react';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
;

export default class Authotp extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      listData: [],
      idEdit: null,
    };

  this.url = 'https://siponcan.disdukcapilsibolga.id/siponcan/api/aktivity.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
	 var nikuser = this.props.route.params.nikuser;
	  var nama = this.props.route.params.nama; 
	 	 var no_telp = this.props.route.params.no_telp;	
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.setState({hari: json.data.result[0].hari});
        this.setState({mulai: json.data.result[0].mulai});
        this.setState({selesai: json.data.result[0].selesai});
        this.setState({status: json.data.result[0].status});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
    const {tampil, date, mode} = this.state;
    var jamsekarang = moment(date).format('HH:mm:ss');

    //JIKA HARI SABTU
    if (this.state.hari == 'Sabtu') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    //JIKA HARI MINGGU
    else if (this.state.hari == 'Minggu') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }

    //JIKA HARI SENIN KALENDER MERAH
    else if (this.state.hari == 'Senin' && this.state.status == 'T') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA SENIN MULAI JAM 8 :15
    else if (this.state.hari == 'Senin' && this.state.mulai > jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA SENIN SELESAI JAM 16 :00
    else if (this.state.hari == 'Senin' && this.state.selesai < jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }

    //JIKA HARI SELASA KALENDER MERAH
    else if (this.state.hari == 'Selasa' && this.state.status == 'T') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA SELASA MULAI JAM 8 :15
    else if (this.state.hari == 'Selasa' && this.state.mulai > jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA SELASA SELESAI JAM 16 :00
    else if (this.state.hari == 'Selasa' && this.state.selesai < jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }

    //JIKA HARI Rabu KALENDER MERAH
    else if (this.state.hari == 'Rabu' && this.state.status == 'T') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA Rabu MULAI JAM 8 :15
    else if (this.state.hari == 'Rabu' && this.state.mulai > jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA Rabu SELESAI JAM 16 :00
    else if (this.state.hari == 'Rabu' && this.state.selesai < jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }

    //JIKA HARI Kamis KALENDER MERAH
    else if (this.state.hari == 'Kamis' && this.state.status == 'T') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA Kamis MULAI JAM 8 :15
    else if (this.state.hari == 'Kamis' && this.state.mulai > jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA Kamis SELESAI JAM 16 :00
    else if (this.state.hari == 'Kamis' && this.state.selesai < jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }

    //JIKA HARI Jumat KALENDER MERAH
    else if (this.state.hari == 'Jumat' && this.state.status == 'T') {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA Jumat MULAI JAM 8 :15
    else if (this.state.hari == 'Jumat' && this.state.mulai > jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
    // JAM KERJA Jumat SELESAI JAM 16 :00
    else if (this.state.hari == 'Jumat' && this.state.selesai < jamsekarang) {
      this.props.navigation.navigate('Homelibur', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    }
	
	  else 
      {
		  this.props.navigation.replace('Home', {
        nikuser: nikuser,
        nama: nama,
        no_telp: no_telp,
      });
    
	
  }
  }
  render() {
	 var nikuser = this.props.route.params.nikuser;
	  var nama = this.props.route.params.nama; 
	 	 var no_telp = this.props.route.params.no_telp;	
    return (
      
				<Text>
		           
			
			
       </Text>
    );
  }
}
