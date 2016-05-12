var React = require('react');


var TopBar = React.createClass({
	
		render: function() {
			return <div class="navbar navbar-default navbar-fixed-top">
					    <div class="container-fluid">
					      <div class="navbar-header">
					        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-content">
					         <span class="icon-bar"></span>
					         <span class="icon-bar"></span> 
					         <span class="icon-bar"></span>  
					        </button>          
					        <a class="navbar-brand" href="#" class="scroll-link " data-id="#">LONDON SOFTWARE JUNIORS</a>
					      </div>      

					      <div class="collapse navbar-collapse navbar-right" id="navbar-content">
					        <ul class="nav navbar-nav" id="ul_navigation">
					          <li class="active"><a data-toggle="collapse" data-target=".navbar-collapse" data-id="top" href="#" class="scroll-link"><i class="fa fa-book" aria-hidden="true"></i>
										Our Mission</a></li>
					          <li ><a data-toggle="collapse" data-target=".navbar-collapse" data-id="about-me" href="#about-me" class="scroll-link"><i class="fa fa-list" aria-hidden="true"></i>
										List of Talents</a></li>
										<li ><a data-toggle="collapse" data-target=".navbar-collapse" data-id="about-me" href="#about-me" class="scroll-link"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
										Our Partners</a></li>
										<li ><a data-toggle="collapse" data-target=".navbar-collapse" data-id="about-me" href="#about-me" class="scroll-link"><i class="fa fa-envelope" aria-hidden="true"></i>
										Contact Us</a></li>
					          <li><span data-toggle="collapse" data-target=".navbar-collapse" data-id="contact" href="#contact" class="scroll-link" ><button type="button" class="btn btn-default navbar-btn"><i class="fa fa-list-alt" aria-hidden="true"></i>
										Log In</button></span></li>
					        </ul>          
					      </div>
					    </div>
    				 </div>
		  
		}
	});		

module.exports = TopBar;