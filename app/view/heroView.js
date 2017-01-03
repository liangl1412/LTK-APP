import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import HeroList from '../component/heroList';
import HeroActions from '../actions/HeroActions';

class HeroView extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <View style={styles.topbar}>
          <Text style={styles.topbarTitle}>{this.props.title.toUpperCase()}</Text>
        </View>
        <View style={styles.separator} />
        {Object.keys(this.props.heroData).length > 0 ?
          <ScrollView automaticallyAdjustContentInsets={false}>
            <HeroList  heroData={this.props.heroData}/>
          </ScrollView>
          :
          <View />
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
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});

module.exports = HeroView;
