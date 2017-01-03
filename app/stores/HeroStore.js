import alt from '../alt';
import HeroActions from '../actions/HeroActions';

import shuData from '../data/shu.json';
import wuData from '../data/wu.json';
import neutralData from '../data/neutral.json';
import weiData from '../data/wei.json';

class HeroStore {

  constructor() {
    this.favHero = {};
    this.shuHero = shuData;
    this.wuHero = wuData;
    this.weiHero = weiData;
    this.neutralHero = neutralData;
    this.bindActions(HeroActions);
  }

  onAddFavHero(hero) {
    this.favHero[hero.img] = hero;
  }

  onRemoveFavHero(hero) {
    var key = hero.img
    delete this.favHero[key];
  }

  onRemoveAllFavHero() {
    this.favHero={}
  }
}

export default alt.createStore(HeroStore, 'HeroStore');
