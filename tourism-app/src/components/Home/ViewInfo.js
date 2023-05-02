import React from 'react'

const ViewInfo = ({locations, id}) => {

    const location = locations.filter( location =>  location.Id === id );
    // console.log(location[0]);
  return (

    
         location.length !== 0 ? (<>
            <div key={location[0].Id} className="container col-xxl-8 px-4 py-5  my-5 rounded-5 shadow-lg">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
               <div className="col-10 col-sm-8 col-lg-6">
            <img src={location[0].image} className="d-block mx-lg-auto img-fluid rounded shadow-lg" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-white lh-1 mb-3">{location[0].name}</h1>
            <p className="lead text-light">{location[0].info}</p>
            </div>
            </div>
            </div>
            </>) : <></>
       

  )
}

export default ViewInfo