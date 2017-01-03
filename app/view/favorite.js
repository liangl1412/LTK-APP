import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import HeroList from '../component/heroList';
import HeroActions from '../actions/HeroActions';

class Favorite extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <View style={styles.topbar}>
          <Text style={styles.topbarTitle}>{this.props.title.toUpperCase()}</Text>
          <Text style={styles.topbarClear} onPress={() => HeroActions.removeAllFavHero()} >Clear</Text>
        </View>
        <View style={styles.separator} />
        {Object.keys(this.props.heroData).length > 0 ?
          <ScrollView>
            <HeroList  heroData={this.props.heroData}/>
          </ScrollView>
          :
          <View style={styles.emptyContainer}>
            <Image source={require('../img/logo.png')} />
            <Text>Pick your hero for quick access</Text>
          </View>
        }
      </View>
    )

  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusbar: {
      height:20
    },
    topbar: {
      height:24,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      margin:10,
    },
    topbarTitle: {
      fontWeight:'bold'
    },
    topbarClear: {
      color: '#007aff'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    emptyContainer:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    }
});

module.exports = Favorite;
