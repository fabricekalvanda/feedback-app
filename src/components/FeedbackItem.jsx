import React from 'react'
import {useState} from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [text, settext] = useState('This is an example of feedback item.')

    

  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click</button>
    
    </div>
  )
}

export default FeedbackItem