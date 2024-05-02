import React, { useState } from 'react'
import People from "./data"

const Review = () => {
    const [index, setIndex] = useState(0);
    const { id,name,job,image,text } = People[index];

  return (
    <>
      {People}
    </>
  )
}

export default Review
