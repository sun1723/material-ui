import {Container , Typography , Grid} from '@material-ui/core'
import './Banner.css';

export default function Banner({videoSrc}) {
	return (
		<Container maxWidth='xl' component = "div" className= "main-banner" style={{padding:0}}>
			<video autoPlay muted loop id="bg-video">
				<source src={videoSrc} type="video/mp4" />
			</video>
			<Typography component="div" className="video-overlay " >
				<Grid container className="container">
					<Grid item lg={12}>
						<div className="header-text">
							<h6>Hello Students</h6>
							<h2>Welcome to Education</h2>
							<p>This is an edu meeting HTML CSS template provided by <a rel="noreferrer" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p>
							<div class="main-button-red">
								<div class="scroll-to-section">
									<a href="#contact">Join Us Now!</a>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</Typography>
		</Container>
	)
}
