import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Divider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Kkbarupilih extends Component {
  render() {
    var nikuser = this.props.route.params.nikuser;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        {/* Membentu keluarga baru */}
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
                this.props.navigation.replace('Kkbaru', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                MEMBENTUK KELUARGA BARU
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
                this.props.navigation.replace('Kkgantikplkeluarga', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PENGGANTIAN KEPALA KELUARGA
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
                this.props.navigation.replace('Kkpisah', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PISAH KK
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

        {/* MENUMPANG DALAM KK */}
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
                this.props.navigation.replace('Kknumpangdalamkk', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                MENUMPANG DALAM KK
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
        {/* MENUMPANG DALAM KK */}

        {/* PERUBAHAN ELEMEN DATA DI KK */}
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
                this.props.navigation.replace('Kkperubahan', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PERUBAHAN ELEMEN DATA KK
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
        {/* PERUBAHAN ELEMEN DATA DI KK */}

        {/* PERUBAHAN ELEMEN DATA DI KK */}
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
                this.props.navigation.replace('Kkhilang', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                KK HILANG
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
        {/* PERUBAHAN ELEMEN DATA DI KK */}

        {/* KK RUSAK */}
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
                this.props.navigation.replace('Kkrusak', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                KK RUSAK
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
        {/*KK RUSAK */}

        {/*   PERISTIWA PENTING */}
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
                this.props.navigation.replace('PeristiwaPenting', {
                  nikuser: nikuser,
                })
              }>
              <Text style={{fontSize: 18, color: 'grey', maxWidth: '70%'}}>
                PERISTIWA PENTING
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
        {/*  PERISTIWA PENTING */}
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
