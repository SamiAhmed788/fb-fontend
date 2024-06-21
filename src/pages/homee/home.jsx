import React from "react"
import "./home.css"
import Topbar from "../../components/topbar";
import { Slidebar } from "../../components/slidebar/slidebar";
import { Feeds } from "../../components/feeds/feeds";
import { Rightbar } from "../../components/rightbar/rightbar";

export  function Homee() {


    return (
    <>
<Topbar/>
<div  className="HomeContainer" >
  <Slidebar/>
  <Feeds/>
  <Rightbar/>

</div>
  </> 
  
  )
  

}


 