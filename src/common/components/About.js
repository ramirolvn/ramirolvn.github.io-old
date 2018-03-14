import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
		super(props);
  }

  render () {
    return (
      <div>

      		<Banner />

      	  <div className="about" align="center">

      	  	<h3 >About Me a</h3>

      	  	<p>I have been developing mobile apps for over 4 years. Over the years, I have adopted, mastered and moved on from many languages, frameworks and architectures. I am currently focusing on Swift.</p> 

      	  	<p>I also do web applications mainly with React with Firebase as backend.</p>

      	  	<p>In 2013 I had the great experience to be an Apple's trainee from the 'Apple Developer Academy'.</p>

      	  	<p>Over the years, I have developed web and mobile apps for entreprises as an employee and as freelancer too. </p>

      	  	<h3>About Site</h3>

      	  	<p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser) which has the advantage of initially rendering quicker and being indexed by search engines.</p>
      	  	
	      </div>

      </div>
    );
  }
}

export default About;