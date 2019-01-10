import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';
import showId from './components/post_show';
import Post from './components/post_create';


const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('store.getSate()',store.getState());
ReactDOM.render(<Provider store = {store}>
<BrowserRouter>
<div>
      <Switch>
      
      <Route path = "/api/book/isbn/:isbn" component={showId}/>
      <Route path = "/api/book" component={Post}/>
      <Route path = "/api/books" component={App}/>
      </Switch>
      </div>
</BrowserRouter>
    <App />
    </Provider>,
     document.getElementById('root'));

