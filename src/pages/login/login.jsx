import "./login.css"

export default function Login(){

    return(
          <div className="login">
            <div className="loginwrapper">
                <div className="loginright">
                    <h2 className="logo" >social media</h2>
                    <span style={{fontSize:"20px"}}>connect with the friend  all around the world <br />at or socailmedia</span>
                </div>
               <div className="loginleft">
                   <br />
                <div className="loginbox">
                 
                 <input className="email" type="text" placeholder=" Email or Phone Number"></input>
                 <input style={{marginTop:'14px'}} className="email" type="password" placeholder=" Password"></input>
 
              <button style={{width:"400px", height:"50px", margin: "0 auto", marginTop:"14px",fontWeight:"700" }} className="btn btn-primary" >Login In</button> 
               
               <h5 style={{color:"blue",marginTop:"30px" }}>forgot password?</h5>
                </div>
                <button style={{width:"200px", height:"50px", marginLeft: "130px", marginTop:"30px",fontWeight:"700"  }} className="btn btn-success" >Create New Account </button> 
                </div>
            </div>
          </div>

    )
}