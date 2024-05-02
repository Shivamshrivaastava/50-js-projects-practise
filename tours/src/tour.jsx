import React from 'react'
import { useState } from 'react';

const Tour = ({id, ...p}) => {

  const [readMore, setReadMore] = useState(false);

  function handleRead(){
    setReadMore(!readMore);
  }

  return (
    <>
      <div className="box" key={id}>
            <img src={p.image} alt={p.name} />
            <div className='boxContent'>
                <h4>{p.name}</h4>
                <p>{readMore? p.info : `${p.info.substring(0,220)}...`} <button onClick={handleRead}>{readMore? "Read less" : "Read more"}</button> </p>
                <div className="end">
                <p className='priceTag'>Price: <span className='amount'>${p.price}</span></p>
                <p className='notInterested' onClick={()=>{p.removeTour(id)}}>Not Interested</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tour
