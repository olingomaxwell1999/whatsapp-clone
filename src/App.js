import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import Homepage from './Pages/Homepage/Homepage.jsx'
import Signuppage from './Pages/Signuppage/Signuppage';
import Verify from './Pages/Verify/Verify';
import Messages from './Components/Messages/Messages';
import Profile from './Pages/Profile/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/signup' element={<Signuppage/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/message' element={<Messages/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
