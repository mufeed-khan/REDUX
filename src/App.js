
import { useSelector } from 'react-redux';
import { selectUser } from './actions/User';
import './App.css';
import Logout from './Components/Logout';
import Login from './Components/Login';


function App() {
  const user=useSelector(selectUser)
  return (
    <div className="App">
      
     {user ?  <Logout/> : <Login/>}
    </div>
  );
}

export default App;
