import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import {data }from "./data"

export default function App (){
    const Update = data.map((item) => {
        return (
            <Hero
            key = {item.title}
            item = {item}
             />
          
        )
    })
    return (
        <div>
            <Header />
            {Update}
        </div>
    )
}