import React, { Component } from 'react';
import Favorite from './view/favorite';
import HeroView from './view/heroView';
import HeroList from './component/heroList';
import HeroStore from './stores/HeroStore';
import HeroActions from './actions/HeroActions';
import TabNavigator from 'react-native-tab-navigator';
import {
  Image
} from 'react-native';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = HeroStore.getState();
    this.state.selectedTab = 'favorite';
  }
  

  componentDidMount() {
    HeroStore.listen(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState({
      favHero: state.favHero
    });
  }

  render() {
    return (
        <TabNavigator selectedTab={this.state.selectedTab} tabBarStyle={{ height: 55}}>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'favorite'}
              renderIcon={() => <Image source={require('./img/favorite_bw.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/favorite.png')} />}
              title="Favorite"
              onPress={() => {
                  this.setState({
                      selectedTab: 'favorite'
                  });
              }}>
              <Favorite heroData = {this.state.favHero} title={this.state.selectedTab}/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'shu'}
              renderIcon={() => <Image source={require('./img/shu_bw.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/shu.png')} />}
              title="Shu"
              onPress={() => {
                  this.setState({
                      selectedTab: 'shu'
                  });
              }}>
              <HeroView heroData={this.state.shuHero} title={this.state.selectedTab}/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'wu'}
              renderIcon={() => <Image source={require('./img/wu_bw.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/wu.png')} />}
              title="Wu"
              onPress={() => {
                  this.setState({
                      selectedTab: 'wu'
                  });
              }}>
              <HeroView heroData={this.state.wuHero} title={this.state.selectedTab}/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'wei'}
              renderIcon={() => <Image source={require('./img/wei_bw.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/wei.png')} />}
              title="Wei"
              onPress={() => {
                  this.setState({
                      selectedTab: 'wei'
                  });
              }}>
              <HeroView heroData={this.state.weiHero} title={this.state.selectedTab}/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'neutral'}
              renderIcon={() => <Image source={require('./img/neutral_bw.png')} />}
              renderSelectedIcon={() => <Image source={require('./img/neutral.png')} />}
              title="Neutral"
              onPress={() => {
                  this.setState({
                      selectedTab: 'neutral'
                  });
              }}>
              <HeroView heroData={this.state.neutralHero} title={this.state.selectedTab}/>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}
module.exports = App;
