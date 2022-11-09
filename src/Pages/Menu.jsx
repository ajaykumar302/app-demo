import React from 'react'
import './Pages.css';
// import Navbar from '../Pages/Navbar'

function Menu() {
  return (
    <>
       {/* <Navbar/> */}
       <div className='menu'>
        <div className='food-items'>
        <label>Meal Types</label>
        <ul>
            <li>breakfast</li>
            <li>brunch</li>
            <li>lunch/dinner</li>
            <li>snack</li>
            <li>teatime</li>
        </ul>
        </div>
        <div className='food-items'>
        <label>Cuisine Types</label>
        <ul>
            <li>american</li>
            <li>asian</li>
            <li>british</li>
            <li>caribbean</li>
            <li>central europe</li>
            <li>chinese</li>
            <li>eastern europe</li>
            <li>french</li>
            <li>greek</li>
            <li>indian</li>
            <li>italian</li>
            <li>japanese</li>
            <li>korean</li>
            <li>kosher</li>
            <li>mediterranean</li>
            <li>mexican</li>
            <li>middle eastern</li>
            <li>nordic</li>
            <li>south american</li>
            <li>south east asian</li>
            <li>world</li>
        </ul>
        </div>
        <div className='food-items'>
        <label>Dish Types</label>
        <ul>
            <li>alcohol cocktail</li>
            <li>biscuits and cookies</li>
            <li>bread</li>
            <li>cereals</li>
            <li>condiments and sauces</li>
            <li>desserts</li>
            <li>drinks</li>
            <li>egg</li>
            <li>ice cream and custard</li>
            <li>main course</li>
            <li>pancake</li>
            <li>pasta</li>
            <li>pastry</li>
            <li>pies and tarts</li>
            <li>pizza</li>
            <li>preps</li>
            <li>preserve</li>
            <li>salad</li>
            <li>sandwiches</li>
            <li>seafood</li>
            <li>side dish</li>
            <li>soup</li>
            <li>special occasions</li>
            <li>starter</li>
            <li>sweets</li>
        </ul>
        </div>
       </div>
    </>
    
  )
}

export default Menu