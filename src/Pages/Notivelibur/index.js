import {Text, View, ScrollView, StyleSheet,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Notivelibur extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }
  render() {
    var nikuser = this.props.route.params.nikuser;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
	<View style={styles.headerTitle}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Homelibur', {nikuser: nikuser})
            }
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
              marginLeft: 15,
            }}>
            <Icon name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
            }}>
                 Pemberitahuan
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              backgroundColor: '#ffca28',
              padding: 10,
              fontSize: 16,
              borderRadius: 10,
            }}>
            Mohon Maaf. Layanan Pengajuan Berkas Hanya Dapat Dilakukan Pada Hari
            Kerja. Terimakasih
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    elevation: 1,
  },});
