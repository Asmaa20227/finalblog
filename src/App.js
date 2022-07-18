 
 
import Navbarcom from './component/Navbarcom';
import './App.css' ;
import {Route,Routes} from 'react-router-dom'
 
import Home from "./component/Home";
import Bloge  from "./component/Bloge";
import Footer from './component/Footer';


function App() {
 return (  
    <div> 
     
   <Navbarcom/>

  <Routes>
  <Route  path="/Home" element={<Home/>} />  
        
        <Route path='/Bloge' element={<Bloge/>} /> 
       
     </Routes>
   <Footer/>
 </div>
 );

  
}

export default App;
