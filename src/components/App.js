import React from 'react';

import FruitBasket from './FruitBasket';

const App = () => <FruitBasket />;

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fruitList: []
    }
  }
};
