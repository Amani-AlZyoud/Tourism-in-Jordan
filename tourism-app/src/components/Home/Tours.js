import React from 'react'
const Tours = ({locations, SetId}) => {

           
      

    
    return (
    
    <div class="container">
        <h1 className='text-center my-5 text-light'>The Most Visited Places In Jordan</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-3 justify-content-center mb-5">

    
    {locations.map( (location) =>  
   
        ( 
            <div className="card  border-warning mx-2" key={location.Id} style={{width: "20rem", display: "inline-block", backgroundColor:"black"}}>
            <img src={location.image}  className="img-fluid rounded mt-2" alt="..."/>
            <div className="card-body">
            <h5 className="card-title fw-bold text-light">{location.name}</h5>
            <a className="btn btn-light" onClick={() => SetId(location.Id)}>Show More</a>
            </div>
            </div>
        )

        )}
        </div>
        </div>


    )
  
}

export default Tours