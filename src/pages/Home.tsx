import React,{ useEffect, useRef, useState } from 'react'
import SvgMap from '../SvgMap';
import {select} from "d3"

import { mapValues } from '../api';

import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
const Home:React.FC = () => {
  const[content,setContent]=useState<string>("")
    useEffect(() => {
      mapValues.forEach((value, index) =>{
        var tooltipDiv = select("body")
        .append("div") 
        .attr("class", "tooltip")
        .attr("id", "tooltip_"+value.id)             
        .style("opacity", 0);

      let element= document.querySelector("#"+value.id);

      element?.addEventListener("click",function(e){
        console.log("Click on "+value.id)
      })

      element?.addEventListener("mouseenter",function(e){

        tooltipDiv.transition()     
            .duration(100)      
            .style("opacity", 0.9);
             
            tooltipDiv.html(element?.getAttribute("name")+"")
            .style("left", (element?.getBoundingClientRect().x) + "px")     
            .style("top", (element?.getBoundingClientRect().y) + "px");
            
      })
      element?.addEventListener("mouseout",function(e){
        
        tooltipDiv.transition()        
            .duration(200)
            .style("opacity", 0);
      })
      
      })

      }
      ,[])

    

  return (
    <>
   <TransformWrapper  initialScale={1}>
    <TransformComponent>
       <SvgMap />
    </TransformComponent>
    
   </TransformWrapper>
     
     
     
    </>
  )
}

export default Home