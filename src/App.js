import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Contacs from './components/contacts/Contacs';
import {provider,Provider} from 'react-redux';
import store from './Store';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Provider store= {store}>
<Router>
    <div className="body-bg">
      <Navbar></Navbar>
     
      <Switch>
        <Route exact path = '/' component = {Contacs}></Route>
        <Route exact path = '/contact/add' component = {AddContact}></Route>
        <Route exact path = '/contact/edit/:id' component = {EditContact}></Route>
       
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
