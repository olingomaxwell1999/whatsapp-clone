import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from './Pages/Loginpage/Loginpage';
import Chats from './Pages/Chats/Chats';
import {AuthContextProvider} from './Context/Context'


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage/>}/>
          <Route path='/chats' element={<Chats/>}/>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
      
  
      
    </div>
  );
}

export default App;
