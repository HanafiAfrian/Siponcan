import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PeristiwaPenting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var nikuser = this.props.route.params.nikuser;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        {/*  PENAMBAHAN KK KARENA KELAHIRAN */}
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
                this.props.navigation.replace('Kkpenambahananak', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PENAMBAHAN KK KARENA KELAHIRAN
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
        {/* PENAMBAHAN KK KARENA KELAHIRAN */}

        {/*     PENGURANGAN KK KARENA KEMATIAN */}
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
                this.props.navigation.replace('KKPPMati', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PENGURANGAN KK KARENA KEMATIAN
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
        {/*    PENGURANGAN KK KARENA KEMATIAN */}

        {/* PENAMBAHAN KK KARENA KELAHIRAN */}

        {/* PENGURANGAN KK KERENA PINDAH*/}
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
                this.props.navigation.replace('KKPPSuratPindah', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PENGURANGAN KK KERENA PINDAH
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
});
