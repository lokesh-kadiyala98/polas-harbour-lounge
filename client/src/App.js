import React, { Component } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'waypoints/lib/jquery.waypoints.min.js';

import NavBar from './components/navBar';
import HeartCounter from './components/heartCounter';
import FeaturesSection from './components/featuresSection';
import Gallery from './components/gallery';
import LocationSection from './components/locationSection';
import Testimonal from './components/testimonial';
import CreatorsSection from './components/creatorsSection';
import OpinionForm from './components/opinionForm';
import FooterComponent from './components/footerComponent';

import { apiEndPoint } from './config.json'
import './vendors/css/normalize.css';
import './vendors/css/animate.css';
import './resources/css/style.css';
import './resources/css/queries.css';
import './resources/js/animations';

toast.configure()

class App extends Component {

  constructor() {
    super()
    this.state = {
      heartCount: -1
    }
  }

  componentDidMount() {
    this.getHeartCount()
  }

  async getHeartCount() {
    const { data } = await axios( apiEndPoint + '/heart_count')

    this.setState({ heartCount: data.count })
  }

  updateHeartCount() {
    this.getHeartCount()
  }
    
  render() { 
    return (  
      <React.Fragment>
        <header>
          <div className="container">
            <NavBar />
            <div className="hero-text-box">
              <h1>What's Up! Foodie.<br />Feeling Hungry?</h1>
              <a className="nb-btn nb-btn-full" rel="noopener noreferrer" target="_blank" href="https://www.swiggy.com/restaurants/polas-harbour-lounge-infantry-road-vijayanagar-colony-ballari-107321">Order On Swiggy</a>
              <a className="nb-btn nb-btn-ghost" href="#features">Show me more</a>
            </div>
          </div>
        </header>
        <HeartCounter number={this.state.heartCount}/>
        <FeaturesSection />
        <Gallery />
        <LocationSection />
        <Testimonal />
        <CreatorsSection />
        <OpinionForm updateHeartCount={() => this.updateHeartCount()} />
        <FooterComponent />
      </React.Fragment>
    );
  }
}
 
export default App;

