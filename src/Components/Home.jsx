import React, { useContext} from 'react'
import { store } from '../Store/Data'
import './Components.css';
import { NavLink } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
import Menu from '../Pages/Menu';


function Home() {

  let [items] = useContext(store)
  const Meal = items.filter((data) => { return data.category === "Meal Types" })
  const Cuisine = items.filter((data) => { return data.category === "Cuisine Types" })
  const Dish = items.filter((data) => { return data.category === "Dish Types" })

  return (
    <div>
      <Navbar />
      <div className='home-con'>
      <div className='home-con1'>
        <Menu/>
      </div>
      <div className='home-con2'>
      <center>
      <h1>FOOD ITEMS</h1>
      </center>
        <h2>Meal Types</h2>
        <div className="rows">
                {Meal.map((e,index) =>  
                  <NavLink className='link' to={`/${e.category}/${e.id}`}>
                <div className="cards" key={index}>
                    
                    <img className="cards-img" src={e.image} alt="Card image cap"/>
                    <div className="cards-body">
                    <center>
                      <h4 className="cards-title">{e.title}</h4>
                        <h5 className="cards-name">{e.name}</h5>
                        <p className="card-text">{e.about}</p>
                        
                        </center>
                    </div>
                    
                </div>
                </NavLink>
                )}
            </div>
        <h2>Cuisine Types</h2>
        <div className="rows">
                {Cuisine.map((e,index) =>  
                  <NavLink className='link' to={`/${e.category}/${e.id}`}>
                  <div className="cards" key={index}>
                    
                    <img className="cards-img" src={e.image} alt="Card image cap"/>
                    <div className="cards-body">
                    <center>
                      <h4 className="cards-title">{e.title}</h4>
                        <h5 className="cards-name">{e.name}</h5>
                        <p className="card-text">{e.about}</p>
                        
                        </center>
                    </div>
                    
                </div>
                </NavLink>
                )}
            </div>
        <h2>Dish Types</h2>
        <div className="rows">
                {Dish.map((e,index) =>  
                  <NavLink  className='link' to={`/${e.category}/${e.id}`}>
                  <div className="cards" key={index}>
                    
                    <img className="cards-img" src={e.image} alt="Card image cap"/>
                    <div className="cards-body">
                    <center>
                      <h4 className="cards-title">{e.title}</h4>
                        <h5 className="cards-name">{e.name}</h5>
                        <p className="card-text">{e.about}</p>
                        
                        </center>
                    </div>
                    
                </div>
                </NavLink>
                )}
            </div>
      
      </div>
      
       
      </div>


    </div>
  )
}

export default Home