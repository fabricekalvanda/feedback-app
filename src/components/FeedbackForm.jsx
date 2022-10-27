import { useState, useContext } from 'react'
import RatingSelect from './RatingSelect'
import React, { Component } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisable] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback} = useContext(FeedbackContext)

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisable(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisable(true)
        }else {
            setMessage(null)
            setBtnDisable(false)
        }


        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            addFeedback(newFeedback)

            setText('')
        }
    }

    return (
    
      <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type='text' 
                    placeholder='Write your review'
                    value={text} 
                />
                <Button type="submit" isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
      </Card>
    )
  }

export default FeedbackForm