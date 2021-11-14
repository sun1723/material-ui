import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import { Carousel_section } from './Carousel_section';
import Meeting from './Meeting';
// import bannerVideo from '/public/images/course-video.mp4'

function App() {
  return (
<body>
  <Header />
  <Banner videoSrc = {process.env.PUBLIC_URL + "images/course-video.mp4"} />
  <section class="services">
    <Carousel_section />
  </section>

  <section class="meeting" id="meetings">
    <Meeting />
  </section>
</body>
  );
}

export default App;
