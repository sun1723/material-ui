import { Grid } from '@material-ui/core'
import React from 'react'
import Sidebar from './Sidebar'
import './meeting.css'
import MeetingItem from './MeetingItem'

export default function Meeting() {
	return (
		<div>
			<Grid container sm={12} className="container">
          <Grid item sm={12}>
            <div className="section-heading">
              <h2>Upcoming Meetings</h2>
            </div>
          </Grid>
          <Grid item sm={4}>
            <Sidebar />
          </Grid>
          <Grid item sm={8} container>
            <Grid item sm={6} >
                <MeetingItem />
              </Grid>
              <Grid item sm={6}>
                <div class="meeting-item">
                  <div class="thumb">
                    <div class="price">
                      <span>$36.00</span>
                    </div>
                    <a href="meeting-details.html"><img src={`${process.env.PUBLIC_URL}/images/meeting-02.jpg`} alt="Online Teaching" /></a>
                  </div>
                  <div class="down-content">
                    <div class="date">
                      <h6>Nov <span>24</span></h6>
                    </div>
                    <a href="meeting-details.html"><h4>Online Teaching Techniques</h4></a>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div class="meeting-item">
                  <div class="thumb">
                    <div class="price">
                      <span>$14.00</span>
                    </div>
                    <a href="meeting-details.html"><img src={`${process.env.PUBLIC_URL}/images/meeting-03.jpg`} alt="Higher Education" /></a>
                  </div>
                  <div class="down-content">
                    <div class="date">
                      <h6>Nov <span>26</span></h6>
                    </div>
                    <a href="meeting-details.html"><h4>Higher Education Conference</h4></a>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div class="meeting-item">
                  <div class="thumb">
                    <div class="price">
                      <span>$48.00</span>
                    </div>
                    <a href="meeting-details.html"><img src= {`${process.env.PUBLIC_URL}/images/meeting-04.jpg`} alt="Student Training" /></a>
                  </div>
                  <div class="down-content">
                    <div class="date">
                      <h6>Nov <span>30</span></h6>
                    </div>
                    <a href="meeting-details.html"><h4>Student Training Meetup</h4></a>
                    <p>Morbi in libero blandit lectus cursus ullamcorper.</p>
                  </div>
                </div>
            </Grid>
        </Grid>
      </Grid>
    </div>
	)
}
