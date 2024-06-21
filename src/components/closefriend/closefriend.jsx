import "./closefriend.css"

export default function Closefriend({user}){
console.log(user);
    return(
        <div>

  <li className="sidebarfriend">
<img className="sidebarfriendimg" src={user.profile} alt="" />
<span className="sidebaarfriendname">{user.userName}</span>
  </li>
        </div>
    )
}