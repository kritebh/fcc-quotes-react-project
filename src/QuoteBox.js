import React from 'react'
import './quotebox.css'

const QuoteBox = (props)=>{


    return (
        <div id="quote-box" style={{color:props.color}}>
        <div className="quote">
        <blockquote id="text"> <i className="fa fa-quote-left"> </i> {props.quote?props.quote:"Famous Quote Loading"}</blockquote>
        <p id="author">- {props.author?props.author:"unknown"}</p>
        </div>
        <div className="button-group">
        <a id="tweet-quote" style={{backgroundColor:props.color}} rel="noreferrer" target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${props.quote}&via=kritebh`}><i className="fab fa-twitter"></i></a>
        <button id="new-quote" style={{backgroundColor:props.color}} onClick={props.getQuote}>New Quote</button>
        </div>
        </div>
    )
}

export default QuoteBox