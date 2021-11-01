import React from 'react'
import './meeting_item.css'

export default function MeetingItem({price,imgSrc,date,heading,content}) {
	return (
		<div>
			<div class="meeting-item">
          <div class="thumb">
            <div class="price">
              <span>$22.00</span>
            </div>
            <a href="meeting-details.html"><img src={`${process.env.PUBLIC_URL}/images/meeting-01.jpg`} alt="New Lecturer Meeting" /></a>
          </div>
          <div class="down-content">
            <div class="date">
              <h6>Nov <span>10</span></h6>
            </div>
            <a href="meeting-details.html"><h4>New Lecturers Meeting</h4></a>
            <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
          </div>
        </div>
		</div>
	)
}
