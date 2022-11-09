 import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { useNavigate} from 'react-router-dom'
import logo from './logo.svg';
import Product from './Product';
import './Pages.css';



function Navbar() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  // let product = useNavigate()
  // const [hide, setHide] = useState(false);
  const YOUR_APP_ID = "95917f6c";
  const YOUR_APP_KEY = "b00ceefa2d52a319abc8a0d7a0d647a4";
  const submitHandler = e => {
    e.preventDefault();
    // product("/Product")
    // setHide(true)
    // console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
 
 
  return (
    <>
        <nav> 
        <img src={logo} alt="logo" className='logo' />
        <ul type='none'>
          <li><NavLink to='/home' className='active'>Home</NavLink></li>
          <li><NavLink to='#'className='active'>Menu</NavLink></li>
       <li>
       <form onSubmit={submitHandler} className='form'>
          <input className="form-control me-2" placeholder="Search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> 
        
          <button className="btn btn-primary" type="submit">Search</button>
         
        </form>
       </li>
          <li><NavLink to='/offers'className='active'>Offers</NavLink></li>
          <li><NavLink to='/help'className='active'>Help</NavLink></li>
          <li><NavLink to='/cart'className='active'>Cart</NavLink></li>
        </ul>  
        </nav>
        
        {data.length >= 1 ? <Product data={data} /> : null}
    </>
    
  )
}

export default Navbar