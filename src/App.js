import React from 'react'
import QuoteBox from './QuoteBox'
import './App.css'
const App = ()=>{

    const bgcolor = "#77B1A9" 

    return(
        <div className="body" style={{backgroundColor:bgcolor}}>
            <QuoteBox quote="The most difficult thing is the decision to act, the rest is merely tenacity." author="Amelia Earhart" color={bgcolor}/>
        </div>
    )
} 

export default App