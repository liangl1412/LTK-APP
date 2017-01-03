import React, { Component } from 'react';
import Favorite from './view/favorite';
import HeroView from './view/heroView';
import HeroList from './component/heroList';
import HeroStore from './stores/HeroStore';
import HeroActions from './actions/HeroActions';


import {
  TabBarIOS,
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
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'favorite'}
              systemIcon="favorites"
              onPress={() => {
                  this.setState({
                      selectedTab: 'favorite'
                  });
              }}>
              <Favorite heroData = {this.state.favHero} title={this.state.selectedTab}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'shu'}
              icon={require('./img/shu_bw.png')}
              selectedIcon={require('./img/shu.png')}
              title="Shu"
              renderAsOriginal
              onPress={() => {
                  this.setState({
                      selectedTab: 'shu'
                  });
              }}>
              <HeroView heroData={this.state.shuHero} title={this.state.selectedTab}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'wu'}
              icon={require('./img/wu_bw.png')}
              selectedIcon={require('./img/wu.png')}
              title="Wu"
              renderAsOriginal
              onPress={() => {
                  this.setState({
                      selectedTab: 'wu'
                  });
              }}>
              <HeroView heroData={this.state.wuHero} title={this.state.selectedTab}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'wei'}
              icon={require('./img/wei_bw.png')}
              selectedIcon={require('./img/wei.png')}
              title="Wei"
              renderAsOriginal
              onPress={() => {
                  this.setState({
                      selectedTab: 'wei'
                  });
              }}>
              <HeroView heroData={this.state.weiHero} title={this.state.selectedTab}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'neutral'}
              icon={require('./img/neutral_bw.png')}
              selectedIcon={require('./img/neutral.png')}
              title="Neutral"
              renderAsOriginal
              onPress={() => {
                  this.setState({
                      selectedTab: 'neutral'
                  });
              }}>
              <HeroView heroData={this.state.neutralHero} title={this.state.selectedTab}/>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}
module.exports = App;
