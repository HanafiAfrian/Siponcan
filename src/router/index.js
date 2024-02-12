import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components/';

import Home from '../Pages/Home';
import Splash from '../Pages/Splash';
import Login from '../Pages/Login';
import Daftar from '../Pages/Daftar';
import LupaPassword from '../Pages/LupaPassword';
import Auth from '../Pages/Auth';
import Authlibur from '../Pages/Authlibur';
import Authotp from '../Pages/Authotp';
import Akun from '../Pages/Akun';
import Akunlibur from '../Pages/Akunlibur';
import Ktp from '../Pages/Ktp';
import Ktpberkas from '../Pages/Ktpberkas';
import ChatDetail from '../Pages/ChatDetail';
import ChatDetaillibur from '../Pages/ChatDetaillibur';
import Chat from '../Pages/Chat';
import Chatlibur from '../Pages/Chatlibur';
import Kkbarupilih from '../Pages/Kkbarupilih';
// penambahan anak
import Kkpenambahananak from '../Pages/Kkpenambahananak';
import Kkpenambahananakdata from '../Pages/Kkpenambahananakdata';
import Kkpenambahananakberkas from '../Pages/Kkpenambahananakberkas';

// kk-perubahan
import Kkperubahan from '../Pages/Kkperubahan';
import Kkperubahanberkas from '../Pages/Kkperubahanberkas';
import Kkperubahanrincian from '../Pages/Kkperubahanrincian';
import Kkperubahanrinciandua from '../Pages/Kkperubahanrinciandua';
import Kkperubahanrinciantiga from '../Pages/Kkperubahanrinciantiga';
import Kkperubahanrincianempat from '../Pages/Kkperubahanrincianempat';
import Kkperubahanrincianlima from '../Pages/Kkperubahanrincianlima';
import Kkperubahanrincianenam from '../Pages/Kkperubahanrincianenam';
import Kkperubahanrinciantujuh from '../Pages/Kkperubahanrinciantujuh';
import Kkperubahandata from '../Pages/Kkperubahandata';
import Kkperubahandatadua from '../Pages/Kkperubahandatadua';
import Kkperubahandatatiga from '../Pages/Kkperubahandatatiga';
import Kkperubahandataempat from '../Pages/Kkperubahandataempat';
import Kkperubahandatalima from '../Pages/Kkperubahandatalima';
import Kkperubahandataenam from '../Pages/Kkperubahandataenam';
import Kkperubahandatatujuh from '../Pages/Kkperubahandatatujuh';
import Pengaduan from '../Pages/Pengaduan';
import Pengaduanlibur from '../Pages/Pengaduanlibur';




//kk-hilang
import Kkhilang from '../Pages/Kkhilang';
import Kkhilangdata from '../Pages/Kkhilangdata';
import Kkhilangberkas from '../Pages/Kkhilangberkas';

import Kkpisah from '../Pages/Kkpisah';
import Kkpisahberkas from '../Pages/Kkpisahberkas';
import KKPisahDataIsian from '../Pages/KKPisahDataIsian';
import KKPisahDataIsianDua from '../Pages/KKPisahDataIsianDua';
import KKPisahDataIsianTiga from '../Pages/KKPisahDataIsianTiga';
import KKPisahDataIsianEmpat from '../Pages/KKPisahDataIsianEmpat';
import KKPisahDataIsianLima from '../Pages/KKPisahDataIsianLima';
import KKPisahDataIsianEnam from '../Pages/KKPisahDataIsianEnam';
import KKPisahDataIsianTujuh from '../Pages/KKPisahDataIsianTujuh';


import Kkrusak from '../Pages/Kkrusak';
import Kkrusakdata from '../Pages/Kkrusakdata';
import Kkrusakberkas from '../Pages/Kkrusakberkas';

import Kknumpangdalamkk from '../Pages/Kknumpangdalamkk';

import KknumpangdalamkkData from '../Pages/KknumpangdalamkkData';
import KknumpangdalamkkDataDua from '../Pages/KknumpangdalamkkDataDua';
import KknumpangdalamkkDataTiga from '../Pages/KknumpangdalamkkDataTiga';
import KknumpangdalamkkDataEmpat from '../Pages/KknumpangdalamkkDataEmpat';
import KknumpangdalamkkDataLima from '../Pages/KknumpangdalamkkDataLima';
import KknumpangdalamkkDataEnam from '../Pages/KknumpangdalamkkDataEnam';
import KknumpangdalamkkDataTujuh from '../Pages/KknumpangdalamkkDataTujuh';




import KkKknumpangdalamkkberkas from '../Pages/KkKknumpangdalamkkberkas';


import Kkbaru from '../Pages/Kkbaru';

import KkbaruData from '../Pages/KkbaruData';
import KkbaruDataDua from '../Pages/KkbaruDataDua';
import KkbaruDataTiga from '../Pages/KkbaruDataTiga';
import KkbaruDataEmpat from '../Pages/KkbaruDataEmpat';
import KkbaruDataLima from '../Pages/KkbaruDataLima';
import KkbaruDataEnam from '../Pages/KkbaruDataEnam';
import KkbaruDataTujuh from '../Pages/KkbaruDataTujuh';






import Kkbarualamat from '../Pages/Kkbarualamat';
import Kkbaruberkas from '../Pages/Kkbaruberkas';

import Kkgantikplkeluarga from '../Pages/Kkgantikplkeluarga';
import Kkgantikplkeluargaberkas from '../Pages/Kkgantikplkeluargaberkas';

import Kkpindahdatang from '../Pages/Kkpindahdatang';
import Kkpindahdatangjnskepindahan from '../Pages/Kkpindahdatangjnskepindahan';
import KkpindahdatangWna from '../Pages/KkpindahdatangWna';
import Kkpindahdatangklasifikasi from '../Pages/Kkpindahdatangklasifikasi';
import Kkpindahdatangberkas from '../Pages/Kkpindahdatangberkas';

import AktaKawin from '../Pages/AktaKawin';
import AktaKawinSuami from '../Pages/AktaKawinSuami';
import AktaKawinIstri from '../Pages/AktaKawinIstri';
import AktaKawinayahibudrsuami from '../Pages/AktaKawinayahibudrsuami';
import AktaKawinayahibudristri from '../Pages/AktaKawinayahibudristri';
import AktaKawinsaksi from '../Pages/AktaKawinsaksi';
import AktaKawinperkawinan from '../Pages/AktaKawinperkawinan';
import AktaKawinberkas from '../Pages/AktaKawinberkas';

import AktaLahir from '../Pages/AktaLahir';
import AktaLahirberkas from '../Pages/AktaLahirberkas';
import AktaLahirsaksi from '../Pages/AktaLahirsaksi';
import AktaLahirayah from '../Pages/AktaLahirayah';
import AktaLahiribu from '../Pages/AktaLahiribu';
import AktaLahiranak from '../Pages/AktaLahiranak';

import AktaCerai from '../Pages/AktaCerai';
import AktaCeraiIsian from '../Pages/AktaCeraiIsian';
import AktaCeraiperceraian from '../Pages/AktaCeraiperceraian';
import AktaCeraiberkas from '../Pages/AktaCeraiberkas';

import SuratPindah from '../Pages/SuratPindah';
import SuratPindahasal from '../Pages/SuratPindahasal';
import SuratPindahtujuan from '../Pages/SuratPindahtujuan';

import SuratPindahDataIsian from '../Pages/SuratPindahDataIsian';
import SuratPindahDataIsianDua from '../Pages/SuratPindahDataIsianDua';
import SuratPindahDataIsianTiga from '../Pages/SuratPindahDataIsianTiga';
import SuratPindahDataIsianEmpat from '../Pages/SuratPindahDataIsianEmpat';
import SuratPindahDataIsianLima from '../Pages/SuratPindahDataIsianLima';
import SuratPindahDataIsianEnam from '../Pages/SuratPindahDataIsianEnam';
import SuratPindahDataIsianTujuh from '../Pages/SuratPindahDataIsianTujuh';

import SuratPindahberkas from '../Pages/SuratPindahberkas';



import KKPPSuratPindah from '../Pages/KKPPSuratPindah';
import KKPPSuratPindahtujuan from '../Pages/KKPPSuratPindahtujuan';
import KKPPSuratPindahberkas from '../Pages/KKPPSuratPindahberkas';



import Riwayat from '../Pages/Riwayat';
import Riwayatlibur from '../Pages/Riwayatlibur';



import Riwayatdetail from '../Pages/Riwayatdetail';
import Riwayatdetaillibur from '../Pages/Riwayatdetaillibur';


import Riwayatsendemail from '../Pages/Riwayatsendemail';
import Riwayatsendemaillibur from '../Pages/Riwayatsendemaillibur';


import Riwayatsendpos from '../Pages/Riwayatsendpos';
import Riwayatsendposlibur from '../Pages/Riwayatsendposlibur';

import Riwayatdetailktpkia from '../Pages/Riwayatdetailktpkia';
import Riwayatdetailktpkialibur from '../Pages/Riwayatdetailktpkialibur';

import Kia from '../Pages/Kia';
import Kiaberkas from '../Pages/Kiaberkas';

import AktaPengakuananak from '../Pages/AktaPengakuananak';
import AktaPengakuananakisian from '../Pages/AktaPengakuananakisian';


import AktaPengakuananakberkas from '../Pages/AktaPengakuananakberkas';

import AktaPengesahananak from '../Pages/AktaPengesahananak';
import AktaPengesahananakberkas from '../Pages/AktaPengesahananakberkas';

import AktaPengangkatananak from '../Pages/AktaPengangkatananak';
import AktaPengangkatananakisian from '../Pages/AktaPengangkatananakisian';
import AktaPengangkatananakberkas from '../Pages/AktaPengangkatananakberkas';

import KtpHilang from '../Pages/KtpHilang';
import KtpHilangberkas from '../Pages/KtpHilangberkas';

import KtpPerubahan from '../Pages/KtpPerubahan';
import KtpPerubahanberkas from '../Pages/KtpPerubahanberkas';

import KtpRusak from '../Pages/KtpRusak';
import KtpRusakberkas from '../Pages/KtpRusakberkas';

import AktaMati from '../Pages/AktaMati';
import AktaMatisaksi from '../Pages/AktaMatisaksi';
import AktaMatijenazah from '../Pages/AktaMatijenazah';
import AktaMatiberkas from '../Pages/AktaMatiberkas';



import KKPPMati from '../Pages/KKPPMati';
import KKPPMatijenazah from '../Pages/KKPPMatijenazah';
import KKPPMatiberkas from '../Pages/KKPPMatiberkas';


import Konfirmpassword from '../Pages/Konfirmpassword';
import FrmLoginFirst from '../Pages/FrmLoginFirst';

import Notivelibur from '../Pages/Notivelibur';
import Homelibur from '../Pages/Homelibur';

import Editprofil from '../Pages/Editprofil';
import Editprofillibur from '../Pages/Editprofillibur';



import Gantipassword from '../Pages/Gantipassword';
import Gantipasswordlibur from '../Pages/Gantipasswordlibur';


import AktaLahir2 from '../Pages/AktaLahir2';
import AktaLahiranak2 from '../Pages/AktaLahiranak2';
import AktaLahirayah2 from '../Pages/AktaLahirayah2';
import AktaLahirberkas2 from '../Pages/AktaLahirberkas2';
import AktaLahiribu2 from '../Pages/AktaLahiribu2';
import AktaLahirsaksi2 from '../Pages/AktaLahirsaksi2';


import AktaMati2 from '../Pages/AktaMati2';
import AktaMatiberkas2 from '../Pages/AktaMatiberkas2';
import AktaMatijenazah2 from '../Pages/AktaMatijenazah2';
import AktaMatisaksi2 from '../Pages/AktaMatisaksi2';

import SuratPindah2 from '../Pages/SuratPindah2';
import SuratPindahasal2 from '../Pages/SuratPindahasal2';

   import SuratPindahDataIsian2 from '../Pages/SuratPindahDataIsian2';
import SuratPindahDataIsianDua2 from '../Pages/SuratPindahDataIsianDua2';
import SuratPindahDataIsianTiga2 from '../Pages/SuratPindahDataIsianTiga2';
import SuratPindahDataIsianEmpat2 from '../Pages/SuratPindahDataIsianEmpat2';
import SuratPindahDataIsianLima2 from '../Pages/SuratPindahDataIsianLima2';
import SuratPindahDataIsianEnam2 from '../Pages/SuratPindahDataIsianEnam2';
import SuratPindahDataIsianTujuh2 from '../Pages/SuratPindahDataIsianTujuh2';




import SuratPindahberkas2 from '../Pages/SuratPindahberkas2';
import SuratPindahtujuan2 from '../Pages/SuratPindahtujuan2';

import Kkpenambahananak2 from '../Pages/Kkpenambahananak2';
import Kkpenambahananakberkas2 from '../Pages/Kkpenambahananakberkas2';
import Kkpenambahananakdata2 from '../Pages/Kkpenambahananakdata2';

import KKPPMati2 from '../Pages/KKPPMati2';
import KKPPMatiberkas2 from '../Pages/KKPPMatiberkas2';
import KKPPMatijenazah2 from '../Pages/KKPPMatijenazah2';

import KKPPSuratPindah2 from '../Pages/KKPPSuratPindah2';
import KKPPSuratPindahberkas2 from '../Pages/KKPPSuratPindahberkas2';
import KKPPSuratPindahtujuan2 from '../Pages/KKPPSuratPindahtujuan2';
import KtpPilih from '../Pages/KtpPilih';
import PeristiwaPenting from '../Pages/PeristiwaPenting';

import AktaPengesahananakpm from '../Pages/AktaPengesahananakpm';
import AktaPengesahananakisian from '../Pages/AktaPengesahananakisian';
import AktaPengakuananakpm from '../Pages/AktaPengakuananakpm';
import AktaPengangkatananakpm from '../Pages/AktaPengangkatananakpm';
import Kiapm from '../Pages/Kiapm';

import KtpHilangdata from '../Pages/KtpHilangdata';
import KtpPerubahandata from '../Pages/KtpPerubahandata';
import KtpRusakdata from '../Pages/KtpRusakdata';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name=" " component={Home} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FrmLoginFirst"
        component={FrmLoginFirst}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Authotp"
        component={Authotp}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="KtpPilih"
        component={KtpPilih}
        options={{headerShown: false}}
      />    

	  <Stack.Screen
        name="PeristiwaPenting"
        component={PeristiwaPenting}
        options={{headerShown: false}}
      />
	  
	  
	  	  <Stack.Screen
        name="AktaPengesahananakpm"
        component={AktaPengesahananakpm}
        options={{headerShown: false}}
      />
	  
	    	  <Stack.Screen
        name="KtpHilangdata"
        component={KtpHilangdata}
        options={{headerShown: false}}
      />
	  
	    	  <Stack.Screen
        name="KtpPerubahandata"
        component={KtpPerubahandata}
        options={{headerShown: false}}
      />
	  
	    	  <Stack.Screen
        name="KtpRusakdata"
        component={KtpRusakdata}
        options={{headerShown: false}}
      />
	  
	  	  <Stack.Screen
        name="AktaPengangkatananakpm"
        component={AktaPengangkatananakpm}
        options={{headerShown: false}}
      />
	  
	  	  <Stack.Screen
        name="AktaPengakuananakpm"
        component={AktaPengakuananakpm}
        options={{headerShown: false}}
      />
	  
	  	  <Stack.Screen
        name="Kiapm"
        component={Kiapm}
        options={{headerShown: false}}
      />
	   <Stack.Screen
        name="Editprofil"
        component={Editprofil}
        options={{headerShown: false}}
      />  

	  <Stack.Screen
        name="Editprofillibur"
        component={Editprofillibur}
        options={{headerShown: false}}
      />
	  
	   <Stack.Screen
        name="Gantipassword"
        component={Gantipassword}
        options={{headerShown: false}}
      />   
	  
	  <Stack.Screen
        name="Gantipasswordlibur"
        component={Gantipasswordlibur}
        options={{headerShown: false}}
      />
	  
      <Stack.Screen
        name="LupaPassword"
        component={LupaPassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Konfirmpassword"
        component={Konfirmpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Authlibur"
        component={Authlibur}
        options={{headerShown: false}}
      />
      {/* KTP */}
      <Stack.Screen name="Ktp" component={Ktp} options={{headerShown: false}} />
      <Stack.Screen
        name="Ktpberkas"
        component={Ktpberkas}
        options={{headerShown: false}}
      />
      {/* KTP */}

      {/* KK */}
      <Stack.Screen
        name="Kkbarupilih"
        component={Kkbarupilih}
        options={{title: 'Pilih Alasan'}}
      />
      <Stack.Screen
        name="Akun"
        component={Akun}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Akunlibur"
        component={Akunlibur}
        options={{headerShown: false}}
      /> 
	  
	  <Stack.Screen
        name="Riwayat"
        component={Riwayat}
          options={{
          title: 'Pilih Pengiriman',

          headerStyle: {
            backgroundColor: '#03a9f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />	
	  
	  	  <Stack.Screen
        name="Riwayatlibur"
        component={Riwayatlibur}
          options={{
          title: 'Pilih Pengiriman',

          headerStyle: {
            backgroundColor: '#03a9f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />	


	  <Stack.Screen
        name="Riwayatdetailktpkia"
        component={Riwayatdetailktpkia}
          options={{
          title: 'Pilih Pengiriman',

          headerStyle: {
            backgroundColor: '#03a9f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />  
	  
	  <Stack.Screen
        name="Riwayatdetailktpkialibur"
        component={Riwayatdetailktpkialibur}
          options={{
          title: 'Pilih Pengiriman',

          headerStyle: {
            backgroundColor: '#03a9f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
	  
	  
	    <Stack.Screen
        name="Riwayatdetail"
        component={Riwayatdetail}
    options={{
          title: 'Pilih Pengiriman',

          headerStyle: {
            backgroundColor: '#03a9f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />   

	  <Stack.Screen
        name="Riwayatdetaillibur"
        component={Riwayatdetaillibur}
    options={{
          title: 'Pilih Pengiriman',

          headerStyle: {
            backgroundColor: '#03a9f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
	  
	    <Stack.Screen
        name="Riwayatsendemail"
        component={Riwayatsendemail}
        options={{headerShown: false}}
      />  

	  <Stack.Screen
        name="Riwayatsendemaillibur"
        component={Riwayatsendemaillibur}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="Riwayatsendpos"
        component={Riwayatsendpos}
        options={{headerShown: false}}
      />  


    <Stack.Screen
        name="Pengaduan"
        component={Pengaduan}
     options={{headerShown: false}}
      />  


	  <Stack.Screen
        name="Riwayatsendposlibur"
        component={Riwayatsendposlibur}
        options={{headerShown: false}}
      />
	  
      {/* kkbaru */}
      <Stack.Screen
        name="Kkbaru"
        component={Kkbaru}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="KkbaruData"
        component={KkbaruData}
        options={{headerShown: false}}
      />
	  
	  	  <Stack.Screen
        name="KkbaruDataDua"
        component={KkbaruDataDua}
        options={{headerShown: false}}
      />
	  
	  	  	  <Stack.Screen
        name="KkbaruDataTiga"
        component={KkbaruDataTiga}
        options={{headerShown: false}}
      />
	  
	  	  	  	  <Stack.Screen
        name="KkbaruDataEmpat"
        component={KkbaruDataEmpat}
        options={{headerShown: false}}
      />
	  
	  	  	  	  	  <Stack.Screen
        name="KkbaruDataLima"
        component={KkbaruDataLima}
        options={{headerShown: false}}
      />
	    	  	  	  	  <Stack.Screen
        name="KkbaruDataEnam"
        component={KkbaruDataEnam}
        options={{headerShown: false}}
      />
	  	    	  	  	  	  <Stack.Screen
        name="KkbaruDataTujuh"
        component={KkbaruDataTujuh}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatlibur"
        component={Chatlibur}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatDetail"
        component={ChatDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatDetaillibur"
        component={ChatDetaillibur}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkbarualamat"
        component={Kkbarualamat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkbaruberkas"
        component={Kkbaruberkas}
        options={{headerShown: false}}
      />

      {/* kkbaru */}

      <Stack.Screen
        name="Kkgantikplkeluarga"
        component={Kkgantikplkeluarga}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkgantikplkeluargaberkas"
        component={Kkgantikplkeluargaberkas}
        options={{headerShown: false}}
      />

      {/* penambahan anak */}
      <Stack.Screen
        name="Kkpenambahananak"
        component={Kkpenambahananak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkpenambahananakdata"
        component={Kkpenambahananakdata}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkpenambahananakberkas"
        component={Kkpenambahananakberkas}
        options={{headerShown: false}}
      />
      {/* penambahan anak */}

      {/* perubahan kk */}
      <Stack.Screen
        name="Kkperubahan"
        component={Kkperubahan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkperubahanrincian"
        component={Kkperubahanrincian}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="Kkperubahanrinciandua"
        component={Kkperubahanrinciandua}
        options={{headerShown: false}}
      /> 
	  <Stack.Screen
        name="Kkperubahanrinciantiga"
        component={Kkperubahanrinciantiga}
        options={{headerShown: false}}
      />
	  
	  
	  	  <Stack.Screen
        name="Kkperubahanrincianempat"
        component={Kkperubahanrincianempat}
        options={{headerShown: false}}
      />
	    	  <Stack.Screen
        name="Kkperubahanrincianlima"
        component={Kkperubahanrincianlima}
        options={{headerShown: false}}
      />
	  
	      	  <Stack.Screen
        name="Kkperubahanrincianenam"
        component={Kkperubahanrincianenam}
        options={{headerShown: false}}
      />
	  
	        	  <Stack.Screen
        name="Kkperubahanrinciantujuh"
        component={Kkperubahanrinciantujuh}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkperubahanberkas"
        component={Kkperubahanberkas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkperubahandata"
        component={Kkperubahandata}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="Kkperubahandatadua"
        component={Kkperubahandatadua}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="Kkperubahandatatiga"
        component={Kkperubahandatatiga}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="Kkperubahandataempat"
        component={Kkperubahandataempat}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="Kkperubahandatalima"
        component={Kkperubahandatalima}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="Kkperubahandataenam"
        component={Kkperubahandataenam}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="Kkperubahandatatujuh"
        component={Kkperubahandatatujuh}
        options={{headerShown: false}}
      />
	  
      {/* perubahan kk */}

      {/* kkhilang */}
      <Stack.Screen
        name="Kkhilang"
        component={Kkhilang}
        options={{headerShown: false}}
      />
	  
	   <Stack.Screen
        name="Kkhilangdata"
        component={Kkhilangdata}
        options={{headerShown: false}}
      />
	  
	   <Stack.Screen
        name="Kkhilangberkas"
        component={Kkhilangberkas}
        options={{headerShown: false}}
      /> 

	  <Stack.Screen
        name="Kkrusak"
        component={Kkrusak}
        options={{headerShown: false}}
      /> 

	  <Stack.Screen
        name="Kkrusakdata"
        component={Kkrusakdata}
        options={{headerShown: false}}
      />
	  
	   <Stack.Screen
        name="Kkrusakberkas"
        component={Kkrusakberkas}
        options={{headerShown: false}}
      />
	  
	        <Stack.Screen
        name="Kkpisah"
        component={Kkpisah}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="Kkpisahberkas"
        component={Kkpisahberkas}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="KKPisahDataIsian"
        component={KKPisahDataIsian}
        options={{headerShown: false}}
      />    
	  <Stack.Screen
        name="KKPisahDataIsianDua"
        component={KKPisahDataIsianDua}
        options={{headerShown: false}}
      />
	  <Stack.Screen
        name="KKPisahDataIsianTiga"
        component={KKPisahDataIsianTiga}
        options={{headerShown: false}}
      />	  
	  
	  <Stack.Screen
        name="KKPisahDataIsianEmpat"
        component={KKPisahDataIsianEmpat}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="KKPisahDataIsianLima"
        component={KKPisahDataIsianLima}
        options={{headerShown: false}}
      />	 
	  <Stack.Screen
        name="KKPisahDataIsianEnam"
        component={KKPisahDataIsianEnam}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="KKPisahDataIsianTujuh"
        component={KKPisahDataIsianTujuh}
        options={{headerShown: false}}
      />
	  
	  
	  
	         <Stack.Screen
        name="Kknumpangdalamkk"
        component={Kknumpangdalamkk}
        options={{headerShown: false}}
      />     

	  <Stack.Screen
        name="KknumpangdalamkkData"
        component={KknumpangdalamkkData}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="KknumpangdalamkkDataDua"
        component={KknumpangdalamkkDataDua}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="KknumpangdalamkkDataTiga"
        component={KknumpangdalamkkDataTiga}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="KknumpangdalamkkDataEmpat"
        component={KknumpangdalamkkDataEmpat}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="KknumpangdalamkkDataLima"
        component={KknumpangdalamkkDataLima}
        options={{headerShown: false}}
      />
	  
	         <Stack.Screen
        name="KknumpangdalamkkDataEnam"
        component={KknumpangdalamkkDataEnam}
        options={{headerShown: false}}
      />
	  
	        <Stack.Screen
        name="KknumpangdalamkkDataTujuh"
        component={KknumpangdalamkkDataTujuh}
        options={{headerShown: false}}
      />
	  
	  
	     <Stack.Screen
        name="KkKknumpangdalamkkberkas"
        component={KkKknumpangdalamkkberkas}
        options={{headerShown: false}}
      />
     
      {/* kkhilang */}

      <Stack.Screen
        name="Kkpindahdatang"
        component={Kkpindahdatang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkpindahdatangklasifikasi"
        component={Kkpindahdatangklasifikasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KkpindahdatangWna"
        component={KkpindahdatangWna}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkpindahdatangjnskepindahan"
        component={Kkpindahdatangjnskepindahan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kkpindahdatangberkas"
        component={Kkpindahdatangberkas}
        options={{headerShown: false}}
      />
      {/* KK */}

      {/* akta kawin */}
      <Stack.Screen
        name="AktaKawin"
        component={AktaKawin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaKawinsaksi"
        component={AktaKawinsaksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaKawinperkawinan"
        component={AktaKawinperkawinan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaKawinberkas"
        component={AktaKawinberkas}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="AktaKawinSuami"
        component={AktaKawinSuami}
        options={{headerShown: false}}
      />  
	  
	  <Stack.Screen
        name="AktaKawinIstri"
        component={AktaKawinIstri}
        options={{headerShown: false}}
      /> 
	  <Stack.Screen
        name="AktaKawinayahibudrsuami"
        component={AktaKawinayahibudrsuami}
        options={{headerShown: false}}
      />  
	  <Stack.Screen
        name="AktaKawinayahibudristri"
        component={AktaKawinayahibudristri}
        options={{headerShown: false}}
      />
      {/* akta kawin */}

      {/* AktaLahir */}
      <Stack.Screen
        name="AktaLahir"
        component={AktaLahir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaLahirsaksi"
        component={AktaLahirsaksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaLahirayah"
        component={AktaLahirayah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaLahiribu"
        component={AktaLahiribu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaLahiranak"
        component={AktaLahiranak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaLahirberkas"
        component={AktaLahirberkas}
        options={{headerShown: false}}
      />
      {/* AktaLahir */}

      {/* AktaMati */}
      <Stack.Screen
        name="AktaMati"
        component={AktaMati}
        options={{headerShown: false}}
      />
	  
	  
	     <Stack.Screen
        name="KKPPMati"
        component={KKPPMati}
        options={{headerShown: false}}
      />



  
	     <Stack.Screen
        name="Pengaduanlibur"
        component={Pengaduanlibur}
        options={{headerShown: false}}
      />	  
	     <Stack.Screen
        name="KKPPMatijenazah"
        component={KKPPMatijenazah}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="KKPPMatiberkas"
        component={KKPPMatiberkas}
        options={{headerShown: false}}
      />
	  
	  
      <Stack.Screen
        name="AktaMatisaksi"
        component={AktaMatisaksi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaMatijenazah"
        component={AktaMatijenazah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaMatiberkas"
        component={AktaMatiberkas}
        options={{headerShown: false}}
      />

      {/* AktaMati */}

      {/* AktaCerai */}
      <Stack.Screen
        name="AktaCerai"
        component={AktaCerai}
        options={{headerShown: false}}
      />  
	  
	  <Stack.Screen
        name="AktaCeraiIsian"
        component={AktaCeraiIsian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaCeraiperceraian"
        component={AktaCeraiperceraian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaCeraiberkas"
        component={AktaCeraiberkas}
        options={{headerShown: false}}
      />
      {/* AktaCerai */}

      {/* SuratPindah */}
      <Stack.Screen
        name="SuratPindah"
        component={SuratPindah}
        options={{headerShown: false}}
      />
	  
	  
	      <Stack.Screen
        name="KKPPSuratPindah"
        component={KKPPSuratPindah}
        options={{headerShown: false}}
      />
	  
	  
	      <Stack.Screen
        name="KKPPSuratPindahtujuan"
        component={KKPPSuratPindahtujuan}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="KKPPSuratPindahberkas"
        component={KKPPSuratPindahberkas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuratPindahasal"
        component={SuratPindahasal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuratPindahtujuan"
        component={SuratPindahtujuan}
        options={{headerShown: false}}
      />   
	  <Stack.Screen
        name="SuratPindahDataIsian"
        component={SuratPindahDataIsian}
        options={{headerShown: false}}
      />
	  	  <Stack.Screen
        name="SuratPindahDataIsian2"
        component={SuratPindahDataIsian2}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="SuratPindahDataIsianDua"
        component={SuratPindahDataIsianDua}
        options={{headerShown: false}}
      />	  
	    <Stack.Screen
        name="SuratPindahDataIsianDua2"
        component={SuratPindahDataIsianDua2}
        options={{headerShown: false}}
      />	 	  
	  <Stack.Screen
        name="SuratPindahDataIsianTiga"
        component={SuratPindahDataIsianTiga}
        options={{headerShown: false}}
      />	
	  <Stack.Screen
        name="SuratPindahDataIsianTiga2"
        component={SuratPindahDataIsianTiga2}
        options={{headerShown: false}}
      />	
	  <Stack.Screen
        name="SuratPindahDataIsianEmpat"
        component={SuratPindahDataIsianEmpat}
        options={{headerShown: false}}
      />	 
	  	  <Stack.Screen
        name="SuratPindahDataIsianEmpat2"
        component={SuratPindahDataIsianEmpat2}
        options={{headerShown: false}}
      />	 
	  <Stack.Screen
        name="SuratPindahDataIsianLima"
        component={SuratPindahDataIsianLima}
        options={{headerShown: false}}
      />	
	  <Stack.Screen
        name="SuratPindahDataIsianLima2"
        component={SuratPindahDataIsianLima2}
        options={{headerShown: false}}
      />	
	  <Stack.Screen
        name="SuratPindahDataIsianEnam"
        component={SuratPindahDataIsianEnam}
        options={{headerShown: false}}
      />	

	  <Stack.Screen
        name="SuratPindahDataIsianEnam2"
        component={SuratPindahDataIsianEnam2}
        options={{headerShown: false}}
      />	
	  <Stack.Screen
        name="SuratPindahDataIsianTujuh"
        component={SuratPindahDataIsianTujuh}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="SuratPindahDataIsianTujuh2"
        component={SuratPindahDataIsianTujuh2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuratPindahberkas"
        component={SuratPindahberkas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homelibur"
        component={Homelibur}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notivelibur"
        component={Notivelibur}
       options={{headerShown: false}}
      />
      {/* SuratPindah */}

      {/* Kia */}
      <Stack.Screen name="Kia" component={Kia} options={{headerShown: false}} />
      <Stack.Screen
        name="Kiaberkas"
        component={Kiaberkas}
        options={{headerShown: false}}
      />
      {/* Kia */}

      {/* AktaPengakuananak */}
      <Stack.Screen
        name="AktaPengakuananak"
        component={AktaPengakuananak}
        options={{headerShown: false}}
      />    
	  <Stack.Screen
        name="AktaPengakuananakisian"
        component={AktaPengakuananakisian}
        options={{headerShown: false}}
      /> 
	  
	  <Stack.Screen
        name="AktaPengesahananakisian"
        component={AktaPengesahananakisian}
        options={{headerShown: false}}
      />
	  
	  
      <Stack.Screen
        name="AktaPengakuananakberkas"
        component={AktaPengakuananakberkas}
        options={{headerShown: false}}
      />

      {/* AktaPengakuananak */}

      {/* AktaPengesahananak */}
      <Stack.Screen
        name="AktaPengesahananak"
        component={AktaPengesahananak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AktaPengesahananakberkas"
        component={AktaPengesahananakberkas}
        options={{headerShown: false}}
      />

      {/* AktaPengesahananak */}
      {/* AktaPengesahananak */}
      <Stack.Screen
        name="AktaPengangkatananak"
        component={AktaPengangkatananak}
        options={{headerShown: false}}
      />   

	  <Stack.Screen
        name="AktaPengangkatananakisian"
        component={AktaPengangkatananakisian}
        options={{headerShown: false}}
      />
	  
	  
      <Stack.Screen
        name="AktaPengangkatananakberkas"
        component={AktaPengangkatananakberkas}
        options={{headerShown: false}}
      />

      {/* AktaPengesahananak */}

      {/* ktp-sbs */}
      <Stack.Screen
        name="KtpPerubahan"
        component={KtpPerubahan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KtpPerubahanberkas"
        component={KtpPerubahanberkas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KtpRusak"
        component={KtpRusak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KtpRusakberkas"
        component={KtpRusakberkas}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KtpHilang"
        component={KtpHilang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KtpHilangberkas"
        component={KtpHilangberkas}
        options={{headerShown: false}}
      />


    <Stack.Screen
        name="AktaLahir2"
        component={AktaLahir2}
        options={{headerShown: false}}
      />
	  
    <Stack.Screen
        name="AktaLahiranak2"
        component={AktaLahiranak2}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name="AktaLahirayah2"
        component={AktaLahirayah2}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name="AktaLahirberkas2"
        component={AktaLahirberkas2}
        options={{headerShown: false}}
      />
   <Stack.Screen
        name="AktaLahiribu2"
        component={AktaLahiribu2}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="AktaLahirsaksi2"
        component={AktaLahirsaksi2}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="AktaMati2"
        component={AktaMati2}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="AktaMatiberkas2"
        component={AktaMatiberkas2}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="AktaMatijenazah2"
        component={AktaMatijenazah2}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="AktaMatisaksi2"
        component={AktaMatisaksi2}
        options={{headerShown: false}}
      />  	  
	  
	  

     <Stack.Screen
        name="SuratPindah2"
        component={SuratPindah2}
        options={{headerShown: false}}
      />  	  
	  
     <Stack.Screen
        name="SuratPindahasal2"
        component={SuratPindahasal2}
        options={{headerShown: false}}
      />  	  
	  
     <Stack.Screen
        name="SuratPindahberkas2"
        component={SuratPindahberkas2}
        options={{headerShown: false}}
      />  	  
     <Stack.Screen
        name="SuratPindahtujuan2"
        component={SuratPindahtujuan2}
        options={{headerShown: false}}
      /> 	  	  
	  

   <Stack.Screen
        name="Kkpenambahananak2"
        component={Kkpenambahananak2}
        options={{headerShown: false}}
      /> 

   <Stack.Screen
        name="Kkpenambahananakberkas2"
        component={Kkpenambahananakberkas2}
        options={{headerShown: false}}
      /> 

   <Stack.Screen
        name="Kkpenambahananakdata2"
        component={Kkpenambahananakdata2}
        options={{headerShown: false}}
      /> 	

   <Stack.Screen
        name="KKPPMati2"
        component={KKPPMati2}
        options={{headerShown: false}}
      /> 

   <Stack.Screen
        name="KKPPMatiberkas2"
        component={KKPPMatiberkas2}
        options={{headerShown: false}}
      /> 

   <Stack.Screen
        name="KKPPMatijenazah2"
        component={KKPPMatijenazah2}
        options={{headerShown: false}}
      /> 	

   <Stack.Screen
        name="KKPPSuratPindah2"
        component={KKPPSuratPindah2}
        options={{headerShown: false}}
      /> 

   <Stack.Screen
        name="KKPPSuratPindahberkas2"
        component={KKPPSuratPindahberkas2}
        options={{headerShown: false}}
      /> 

   <Stack.Screen
        name="KKPPSuratPindahtujuan2"
        component={KKPPSuratPindahtujuan2}
        options={{headerShown: false}}
      /> 	  
      {/* ktp-sbs */}
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
