import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
export default class KtpPilih extends Component {
  render() {
    var nikuser = this.props.route.params.nikuser;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        {/* Membentu keluarga baru */}
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
            <Icon2 name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
             Kembali
          </Text>
        </View>
        <View style={styles.box}>
          <View
            style={{
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
                padding: 10,
              }}
              onPress={() =>
                this.props.navigation.replace('KtpHilang', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                KARTU TANDA PENDUDUK-HILANG
              </Text>

              <Icon
                name="arrow-right"
                size={20}
                color="#005b9f"
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>
          </View>

          <Divider style={{marginTop: 10}} />
        </View>
        {/* Membentu keluarga baru */}

        {/* penggantian kk */}
        <View style={styles.box}>
          <View
            style={{
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
                padding: 10,
              }}
              onPress={() =>
                this.props.navigation.replace('KtpPerubahan', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                KARTU TANDA PENDUDUK-PERUBAHAN DATA
              </Text>

              <Icon
                name="arrow-right"
                size={20}
                color="#005b9f"
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>
          </View>

          <Divider style={{marginTop: 10}} />
        </View>
        {/* penggantian kk baru */}

        {/* PISAH KK */}
        <View style={styles.box}>
          <View
            style={{
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 10,
                padding: 10,
              }}
              onPress={() =>
                this.props.navigation.replace('KtpRusak', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                KARTU TANDA PENDUDUK-RUSAK
              </Text>

              <Icon
                name="arrow-right"
                size={20}
                color="#005b9f"
                style={{marginHorizontal: 10}}
              />
            </TouchableOpacity>
          </View>

          <Divider style={{marginTop: 10}} />
        </View>
        {/* PISAH KK */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10,
    marginHorizontal: 10,
  },
    headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#1e88e5',
    elevation: 1,
  },
});
