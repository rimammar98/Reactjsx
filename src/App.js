import FullName from './componant/Profile/FullName';
import ProfilePhoto from './componant/Profile/ProfilePhoto';
import './App.css';
import Address from './componant/Profile/Address';

function App() {
  return(

 <div className="App">
<FullName />
<div className="content">
<ProfilePhoto/>
<div className="address">
    <Address/>
</div>
</div>
</div>
);
  
}

export default App;
  
