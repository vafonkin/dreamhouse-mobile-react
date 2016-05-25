'use strict';

var React = require('react-native');
var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
  title: {
    fontSize:12,
    marginTop:0,
    textAlign:'center'
  },
  header: {
    flex: 0,
    height:90,
  },
  headerRow: {
    flex: 0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:60,
  },
  logo: {
    width:60,
    height:60
  }
});