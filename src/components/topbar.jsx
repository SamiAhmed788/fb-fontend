import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import { Chat, NotificationAdd } from '@mui/icons-material';
import "./topbar.css"
export default function Topbar() {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">socialmedia</span>
                </div>
                <div className="topbarCenter">
                    <div className="serchbar">
                    <SearchIcon aria-label="search" className='searchIcon'/>
                    <input placeholder='Search for friend, post or views' type="text" className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person aria-label="person icon" />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat/>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <NotificationAdd/>
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img src="src/assets/person1.jpeg" alt="aaa" className="topbarImg" width={"100px"}/>
                </div>
            </div>
        </>
    );
}
