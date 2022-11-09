import React from 'react'
import './Pages.css';

function Product({data}) {
  return (
    <div>
      <div className="row">
                {data.map(data =>  
                <div className="full-card">
                    
                    <img className="img" src={data.recipe.image} alt="Card image cap"/>
                    <div className="card-body">
                    <center>
                        <h5 className="card_title">{data.recipe.label}</h5>
                        <p className="card_text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                        </center>
                    </div>
                    
                </div>
                )}
            </div>
    </div>
  )
}

export default Product