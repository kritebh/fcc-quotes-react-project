import React,{useEffect,useState} from 'react'
import QuoteBox from './QuoteBox'
import './App.css'
import axios from 'axios'
const App = () => {
    const [data,setData] = useState([])
    const [quote,setQuote] = useState({text:"",author:""})
    const [bgColor,setBgColor] = useState("")

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

    //Handling Quotes From API
     const sendQuote= ()=>{
        setQuote(data[Math.floor(Math.random()*data.length)])
        setBgColor(color[Math.floor(Math.random() * color.length)])
        console.log(quote);
    }

    //UseEffect
    useEffect(()=>{
        getQuote()
        sendQuote()
    },[])

   const getQuote= async ()=>{
        const response = await axios.get("https://type.fit/api/quotes")
        setData(response.data)
    }

    

    return (
        <div className="body" style={{ backgroundColor: bgColor}}>
            <QuoteBox quote={quote?.text} author={quote?.author} color={bgColor} getQuote={sendQuote}/>
        </div>
    )
}

export default App