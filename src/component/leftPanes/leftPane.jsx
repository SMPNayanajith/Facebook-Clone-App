import React from 'react'
import "./leftPane.css"
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function leftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPainContainer">
        <div className="leftPainMenu">
          <div className="leftPainMenuItems">
          <ChatIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Messages</span>
          </div>
          <div className="leftPainMenuItems">
          <GroupsIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Groups</span>
          </div>
          <div className="leftPainMenuItems">
          <RssFeedIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Feed</span>
          </div>
           <div className="leftPainMenuItems">
          <FlagIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Pages</span>
          </div>
          <div className="leftPainMenuItems">
          <CalendarMonthIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Events</span>
          </div>
          <div className="leftPainMenuItems">
          <SettingsIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Settings</span>
          </div>
          <div className="leftPainMenuItems">
          <SportsEsportsIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> Games</span>
          </div>
          <div className="leftPainMenuItems">
          <NewspaperIcon className='LeftPainMenuIcons'/>
          <span className="leftPainMenu"> News </span>
          </div>
          
        </div>
        <hr />
        <div className="pagesYouLike">
          <h2>Pages You Liked</h2>
        </div>
       <div className="pageList">
       <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
        <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
        <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
        <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
        <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
        <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
        <li className="pagelistItem">
          <img src="/image/2.jpg" alt="" className='c'/>
          <span className="pageName">Code with Bunchi</span>
        </li>
       </div>
      </div>

    </div>
  )
}
