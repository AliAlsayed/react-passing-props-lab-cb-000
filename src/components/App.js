import React from 'react';

import FruitBasket from './FruitBasket';

//const App = () => <FruitBasket />;

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      fruit: [],
      filter: [],
      currentFilters: null
    };
  }
}
export default App;
