import React from "react"

import "./feed.css"
import { Share } from "../share/share"
import { Posts } from "../post/post"
import { dumydata } from "../../dummmydata/dummydata"
export  function Feeds() {


    return (
    <div className="feeds">
<div className="feedwrapper">
  <Share/>
  {dumydata.map((p)=>(
      <Posts key={p.id} data={p}/>
  )
  )}

</div>
  </div> 
  
  )
  

}


 