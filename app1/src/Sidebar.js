import React from 'react'
import './sidebar.css'

export default function Sidebar() {
	return (
		<div>
			<div className="categories">
        <h4>Meeting Catgories</h4>
        <ul>
          <li><a href="#">Sed tempus enim leo</a></li>
          <li><a href="#">Aenean molestie quis</a></li>
          <li><a href="#">Cras et metus vestibulum</a></li>
          <li><a href="#">Nam et condimentum</a></li>
          <li><a href="#">Phasellus nec sapien</a></li>
        </ul>
        <div className="main-button-red">
          <a href="meetings.html">All Upcoming Meetings</a>
        </div>
			</div>
		</div>
	)
}
