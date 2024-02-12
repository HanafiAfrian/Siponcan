import React from 'react';
import {StyleSheet} from 'react-native';
const darkMode = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'green',
  },

  box: {
    backgroundColor: 'white',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    width: '48%',
    height: 120,
    borderRadius: 10,
    shadowColor: '#1e88e5',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
  },

  box2: {
    backgroundColor: 'white',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    width: '100%',
    height: 90,
    borderRadius: 10,
    shadowColor: '#1e88e5',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5,
  },

  rowInbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  rowInbox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },

  modal: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
    width: '90%',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textModal: {
    textAlign: 'left',
    fontSize: 18,
  },
  textModalHeader: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  screenContainer: {
    padding: 10,

    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#005b9f',
  },
  screenContainer2: {
    padding: 6,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 80,
    backgroundColor: '#005b9f',
  },
});

export default darkMode;
