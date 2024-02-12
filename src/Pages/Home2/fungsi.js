import React, {Component, useState } from 'react';

import { View, Text,Image } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
 
  Icondots,
 

} from '../../../assets/images';

export default class Fungsi extends Component {

 
  
    constructor(props) {
        super(props);
        this.state = {
          
            visible: false,
			 
        };
		
    }
  
 
     removeData  ()  {
        try {
             AsyncStorage.clear();
            this.props.navigation.navigate('Splash');
        } catch (error) {
            console.log(error);
        }
    }
	 

render() {
        return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Menu
visible= {this.state.visible}
        anchor={<Text onPress={() => this.setState({visible: true})}>
          
          <Image
                                        source={Icondots}
                                        style={{
                                            width: 35,
                                            height: 35,

                                        }}
                                    />
        </Text>}
        onRequestClose={() => this.hideMenu()}
      >
        <MenuItem onPress={() => this.setState({visible: false})}>Profil</MenuItem>
        <MenuItem onPress={() => this.removeData()}>Logout</MenuItem>
       
      </Menu>
    </View>
  );
}
}