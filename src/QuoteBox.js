import React from 'react'
import './quotebox.css'

const QuoteBox = (props)=>{
    return (
        <div id="quote-box" style={{color:props.color}}>
        <div className="quote">
        <blockquote id="text"> <i class="fa fa-quote-left"> </i> {props.quote}</blockquote>
        <p id="author">- {props.author?props.author:"unknown"}</p>
        </div>
        <div className="button-group">
        <button id="tweet-quote" style={{backgroundColor:props.color}}><i class="fab fa-twitter"></i></button>
        <button id="new-quote" style={{backgroundColor:props.color}}>New Quote</button>
        </div>
        </div>
    )
}

export default QuoteBox