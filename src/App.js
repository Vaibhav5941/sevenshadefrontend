import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminLOgin from './administrator/screens/AdminLogin';
import AdminDashboard from './administrator/screens/AdminDashboard';
import Home from './userinterface/screens/Home';
import Home2 from './userinterface/screens/Home2';
import ProductDetailDisplay from './userinterface/screens/ProductDetailDisplay';
import MyBagDisplay from './userinterface/screens/MyBagDisplay';
import SignInDisplay from './userinterface/screens/SignInDisplay';
import DisplayCheckOut from './userinterface/screens/DisplayCheckOut';
import JoinInDisplay from './userinterface/screens/JoinInDisplay';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route  element={<Home />} path={"/"} /> 
      <Route  element={<Home2 />} path={"/home2"} /> 
      <Route  element={<ProductDetailDisplay />} path={"/productdetaildisplay"} /> 
        <Route  element={<AdminLOgin />} path={"/adminlogin"} />
        <Route  element={<AdminDashboard />} path={"/admindashboard/*"} />
        <Route  element={<MyBagDisplay />} path={"/mybagdisplay/*"} />
        <Route  element={<SignInDisplay />} path={"/signindisplay/*"} />
        <Route  element={<DisplayCheckOut />} path={"/displaycheckout/*"} />
        <Route  element={<JoinInDisplay />} path={"/joinindisplay/*"} />

        
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;