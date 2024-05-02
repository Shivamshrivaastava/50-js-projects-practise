import React from 'react'
// import tour from './tour'
import Tour from './tour'

function tours({tours, removeTour}) {
  return (
    <div className='wrapper'>
    {tours.map((p)=>{
        return (
          <Tour key={p.id} {...p} removeTour={removeTour}/>
        )
    })}
    </div>
  )
}

export default tours
