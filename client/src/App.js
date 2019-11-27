import React from 'react';
import TopNav from './components/TopNav'
import ItemBody from './components/ItemBody';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import SingleItem from './components/SingleItem'


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <div>
        <TopNav/>
        <Switch>
          <div className="container">
            <Route path="/:id" component={SingleItem}/>
            <Route path="/" exact component={ItemBody}/>
          </div>
        </Switch>
      </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
