import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> mobile and web applications.</h1>
    			<p>for <em>agencies</em> and sometimes, <em>myself</em>.</p>

			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Mobile</h4>
					<ul>
						<li><em>Swift</em></li>
						<li><em>Objective-C</em></li>
						<li><em>Ionic</em></li>
						<li><em>CoreData</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Client Side</h4>
					<ul className="">
						<li><em><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
						<li><em>PHP</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side</h4>
					<ul>
					<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
						</li>
						<li><em>Firebase</em></li>
						<li><em>MySQL</em></li>
						<li><em>SQLite</em></li>
						
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies.</em><br/>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="apple-logo">Apple Developer Academmy</li>
					<li className="deway-logo">Deway</li>
					<li className="pedganha-logo">A2 Software</li>
					<li className="nwsoft-logo">NWSoft</li>
					<li className="computex-logo">Computex</li>
				</ul>

			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;