import React, { Component } from 'react';
import NewItem from './components/items/NewItem';
import AllItem from './components/items/AllItems';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
      return (
        <div className="container-fluid mt-3">
          <div className='row'>
            <div className="col-md-6 offset-3">
              <NewItem/>
              <AllItem/>
            </div>
          </div>
        </div>      
      );
  }
  }
export default App;