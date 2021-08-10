import React, { useEffect, useState } from 'react'
// import QuoteBox from './QuoteBox'
import './App.css'
import axios from 'axios'


const initialQuotes = [{
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
},
{
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
},
{
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
},
{
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
},
{
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
},
{
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
},
{
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
},]



const App = () => {
    const [data, setData] = useState(initialQuotes)
    const [quote, setQuote] = useState({})
    const [bgColor, setBgColor] = useState("")

    //handling Color
    const color = [
        "#77B1A9",
        "#9B59B6",
        "#472E32",
        "#73A857",
        "#F39C12",
        "#342224",
        "#27AE60",
        "#764ba2",
        "#2a5298",
        
    ]


    //UseEffect
    useEffect(() => {
        getQuote() //eslint-disable-next-line
        fetchQuote() //eslint-disable-next-line
    }, [])

    const getQuote = () => {
        setQuote(data[Math.floor(Math.random() * data.length)])
        setBgColor(color[Math.floor(Math.random() * color.length)])
        console.log(quote);
    }



    const fetchQuote = async () => {
        const response = await axios.get("https://type.fit/api/quotes")
        setData(response.data)
        setBgColor(color[Math.floor(Math.random() * color.length)])
    }


    return (
        <div className="body" style={{ backgroundColor: bgColor ,transition:"500ms ease"}}>
            <div id="quote-box" style={{ color: bgColor ,transition:"500ms ease"}}>
                <div className="quote">
                    <blockquote id="text"> <i className="fa fa-quote-left"> </i> {quote.text?quote.text :"Quotes are Loading"}</blockquote>
                    <p id="author">- {quote.author ? quote.author : "unknown"}</p>
                </div>
                <div className="button-group">
                    <a id="tweet-quote" style={{ backgroundColor: bgColor }} rel="noreferrer" target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.text}&via=kritebh`}><i className="fab fa-twitter"></i></a>
                    <button id="new-quote" style={{ backgroundColor: bgColor }} onClick={getQuote}>New Quote</button>
                </div>
            </div>
        </div>
    )
}

export default App