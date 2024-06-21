import React from "react"
import "./share.css"
import { PermMedia,Label,Room, EmojiEmotions } from "@mui/icons-material"
export  function Share() {


    return (
 
        <div className="share">
        <div className="sharewrapper">
        <div className="shareTop">
            <img  className="shareprofile" src="src/assets/person7.jpeg" alt="" />
          <input placeholder="what's in your mind" type="text" className="shareinput" />
        </div>
        <hr />
        <div className="sharebottom">
<div className="shareoptions">

<div className="shareoption">
    <PermMedia  htmlColor="tomato" className="shareicon"/>
<span className="shareoptiontext">
    photo Or video
</span>
</div>

<div className="shareoption">
    <Label htmlColor="blue"  className="shareicon"/>
<span className="shareoptiontext">
    Tag
</span>
</div>
<div className="shareoption">
    <Room htmlColor="green"  className="shareicon"/>
<span className="shareoptiontext">
    Location
</span>
</div>
<div className="shareoption">
    <EmojiEmotions  htmlColor="gold"  className="shareicon"/>
<span className="shareoptiontext">
    Feelings
</span>
</div>
</div>
<button className="sharebutton">Share</button>
        </div>
        </div>
        </div>
  
  )
  

}

