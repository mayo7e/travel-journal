import React from "react"


 export default function Hero (props){
     console.log(props)
    return(
       <nav className ="hero" >
            <img alt="#"  className ="hero--image" src = {props.item.imageUrl} />
            <section className="hero--details">
            <div className="hero--sub_details">
                <img alt="#" className ="hero--details_icon" src = "../images/location_2.png" />
                <span className="hero--details_location" >{props.item.location}</span>
               <a  className="hero--details_map" href ={props.item.googleMapsUrl}><span>View on Google Maps</span> </a>
            </div>
                <h2 className="hero--details_title" >{props.item.title}</h2>
                <p className="hero--details_duration" > {props.item.startDate} - {props.item.endDate}</p>
                <p  className="hero--details_description">{props.item.description}0000</p>
            </section>
            
            
            
       </nav>
    )
}