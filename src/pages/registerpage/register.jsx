import "./register.css"

export default function Register(){

    return(
          <div className="Register">
            <div className="Registerwrapper">
                <div className="Registerright">
                    <h2 className="logo" style={{ fontweight: "900", fontSize: "60px",color:"#1877f2"}} >social media</h2>
                    <span style={{fontSize:"20px"}}>connect with the friend  all around the world <br />at or socailmedia</span>
                </div>
               <div className="Registerleft">
                   <br />
                <div className="Registerbox">
                 
                 <input className="email" type="text" placeholder=" Username"></input>
                 <input style={{marginTop:'14px'}} className="email" type="text" placeholder=" Email"></input>
    
                 <input style={{marginTop:"14px"}} className="email" type=" text" placeholder="Password"></input>
                 <input style={{marginTop:'14px'}} className="email" type="password" placeholder=" Password again"></input>
 
              <button style={{width:"400px", height:"50px", margin: "0 auto", marginTop:"14px",fontWeight:"700" }} className="btn btn-primary" >Sign In</button> 
               
               <h5 style={{color:"#1877f2",marginTop:"30px" }}>forgot password?</h5>
                </div>
                <button style={{width:"200px", height:"50px", marginLeft: "130px", marginTop:"30px",fontWeight:"700"  }} className="btn btn-success" >Login into Account </button> 
                </div>
            </div>
          </div>

    )
}