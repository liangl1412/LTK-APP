import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import HeroActions from '../actions/HeroActions';
import HeroStore from '../stores/HeroStore';

class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    if (this.props.hero.key in HeroStore.state.favHero) {
      this.state.favorite = true;
    }
    else {
      this.state.favorite = false;
    }
  }

  toggle(){
    this.setState({
      expanded : !this.state.expanded
    });
  }

  componentDidMount() {
    HeroStore.listen(this.onChange.bind(this));
  }

  onChange(state) {
    if (this.props.hero.key in state.favHero) {
      this.setState({
        favorite:true
      });
    }
    else {
      this.setState({
        favorite:false
      });
    }
  }
    
  render() {
    return (
      <View>
        <View style={styles.container}>
            <TouchableHighlight
              underlayColor="#eee"
              onPress={this.toggle.bind(this)}
              >          
              <View style={styles.cardBox} >
                  <Image
                      source={this.props.heroImage}
                      style={styles.thumbnail} />
                  <Text style={styles.title}>{this.props.hero.name}</Text>
                  <Text style={styles.id}>{this.props.hero.id}</Text>
              </View>
            </TouchableHighlight>
             
            {
              this.state.expanded ?
              <View style={styles.moreInfo}>
                {this.props.hero.skills.map(function(object, i){
                  return ( 
                    <View style={styles.skills} key={i}>
                      <Text style={styles.skillsTitle}>{object.title}</Text>
                      <Text style={styles.skillsDesc}>{object.desc}</Text>
                    </View>
                  )
                })}
                {
                  this.state.favorite ? 
                  <TouchableHighlight style={styles.fullWidthButton} underlayColor="#eee" onPress={() => HeroActions.removeFavHero(this.props.hero)}>
                    <Text style={styles.fullWidthButtonText}>Remove</Text>
                  </TouchableHighlight>
                  :
                  <TouchableHighlight style={styles.fullWidthButton} underlayColor="#eee" onPress={() => HeroActions.addFavHero(this.props.hero)}>
                    <Text style={styles.fullWidthButtonText}>Add</Text>
                  </TouchableHighlight>
                }
              </View>:
              <View />
            }
          </View>
          <View style={styles.separator} />
        </View>
    );
  }
}
var styles = StyleSheet.create({
    cardBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        position:'relative'
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    id: {
      position:'absolute',
      top:10,
      right:10
    },
    moreInfo: {
      padding:10
    },
    skills: {
      marginBottom:10
    },
    skillsTitle: {
      fontSize:15,
      marginBottom:5
    },
    skillsDesc: {
      fontSize:13
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    fullWidthButton:{
      height:32,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#DD2F2F',
      borderRadius:3,
    },
    fullWidthButtonText: {
      fontSize:24,
      color: 'white'
    }
});

module.exports = HeroCard;
