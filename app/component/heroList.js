import React, { Component } from 'react';
import {
  ListView
} from 'react-native';
import HeroCard from './heroCard';
import HEROIMAGE from '../heroImage';

class HeroList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2
          })
      };
  }

  componentDidMount() { 
    const data = this.props.heroData;
    if(data.length) {
      data.sort(function(a, b){
          return a.id - b.id;
      });
    }
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.heroData)
    });
  }

  render() {
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBook.bind(this)}
          enableEmptySections={true}
          />
    );
  }
  renderBook(hero) {
      return (
        <HeroCard hero={hero} heroImage={HEROIMAGE[hero.img]}/>
      );
  }
}

module.exports = HeroList;
