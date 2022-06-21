
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Products } from './components/Products';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
           <Route path='' element={<Home/>}></Route>
           <Route path='about' element={<About/>}></Route>
           <Route path='products/' element={<Products/>}> </Route>
           {/*  <Route path='products/*' element={<Products/>}>
            <Route path='products/:id' element={<Product/>}></Route>*/}
            
            {/* If we write route like ths then whateever after product/ comes like product/1 or product/2 it flows to the child. and then the routing 
            happens for the child. But here we will have to display that routed info on the parent itself. Now where to display that info is decided 
            by the outlet tag which we can see in the product page. That is we use the outlet in the parent.  */}
          
           <Route path='products/:id' element={<Product/>}></Route>
          
        </Routes>
       
    </div>
  );
}

export default App;
