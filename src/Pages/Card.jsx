import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
//  import { store } from '../Store/Data'
import Navbar from './Navbar'
import axios from 'axios';


function Card() {
    const [items, setItems] = useState(null);
    const {label} = useParams();

    const [breakfast, setBreakFast] = useState([]);
    const [snack, setSnack] = useState([]);
    const [Teatime, setTeatime] = useState([]);
    const [Indian, setIndian] = useState([]);
    const [american, setAmerican] = useState([]);
    const [japanese, setJapanese] = useState([]);
    const [Seafood, setSeafood] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [special, setSpecial] = useState([]);
//  const [data] =useContext(store);
 const YOUR_APP_id = "95917f6c";
 const YOUR_APP_KEY = "b00ceefa2d52a319abc8a0d7a0d647a4";
 useEffect(()=>{
  const getData = async () => {
    const Data = await axios.get(`https://api.edamam.com/search?q=breakfast&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setBreakFast(Data.hits);
    const Data1 = await axios.get(`https://api.edamam.com/search?q=snack&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setSnack(Data1.hits);
    const Data2 = await axios.get(`https://api.edamam.com/search?q=teatime&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setTeatime(Data2.hits);
    const Data3 = await axios.get(`https://api.edamam.com/search?q=Indian&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setIndian(Data3.hits);
    const Data4 = await axios.get(`https://api.edamam.com/search?q=american&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setAmerican(Data4.hits);
    const Data5 = await axios.get(`https://api.edamam.com/search?q=japanese&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setJapanese(Data5.hits);
    const Data6 = await axios.get(`https://api.edamam.com/search?q=seafood&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setSeafood(Data6.hits);
    const Data7 = await axios.get(`https://api.edamam.com/search?q=drinks&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setDrinks(Data7.hits);
    const Data8 = await axios.get(`https://api.edamam.com/search?q=specialoccasions&app_id=${YOUR_APP_id}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`)
    setSpecial(Data8.hits);
  }
  getData()
  },[label])
  useEffect(() =>{
    const items =
    (breakfast.find((item) => item.label === parseInt(label)))||
    (snack.find((item) => item.label === parseInt(label)))||
    (Teatime.find((item) => item.label === parseInt(label)))||
    (Indian.find((item) => item.label === parseInt(label)))||
    (american.find((item) => item.label === parseInt(label)))||
    (japanese.find((item) => item.label === parseInt(label)))||
    (Seafood.find((item) => item.label === parseInt(label)))
    (drinks.find((item) => item.label === parseInt(label)))
    (special.find((item) => item.label === parseInt(label)))
    // window.scroll(0, 0)
    if (items) {
      setItems(items)
    }
 },[breakfast,snack,Teatime,Indian,american,japanese,Seafood,drinks,special,label])
 console.log(items);

  return (
    <>
        <div>
            <Navbar/>
            <h1>card</h1>
            <div className="row">
            {
            items? (
                <div className="full-card">
        
        <img className="img" src={items.recipe.image} alt="Card image cap"/>
        <div className="card-body">
        <center>
            <h5 className="card_title">{items.recipe.id}</h5>
            <p className="card_text">Total Amount Of Calories : {Math.round(items.recipe.calories)}</p>
            <a href="#" className="btn btn-primary">Buy</a>
            </center>
        </div>
        
    </div> 
            ):null
        }
            </div>
        </div>
     
    </>
    
  )
}

export default Card
