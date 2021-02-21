
import './App.css';
import Login from './Components/Login';
import UserCreation from './Components/UserCreation';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RoleCreation from "./Components/RoleCreation";
import RoleInquiry from './Components/RoleInquiry';
import UserInquiry from './Components/UserInquiry';


function App() {
  return (
    <Router>
      
      <Route path="" component={Login}/>
     <Route path="/UserCreation" component={UserCreation}/>
     <Route path="/RoleCreation" component={RoleCreation}/>
     <Route path="/RoleInquiry" component={RoleInquiry}/>
     <Route path="/UserInquiry" component={UserInquiry}/>
    </Router>
  );
}

export default App;
