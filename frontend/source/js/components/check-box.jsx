var React = require('react');
var listOfSkills = require('../stores/SkillsStore.js');


var SingleCheckBox = React.createClass({
		render: function() {
			return <div className="skills-check">
    					<label><input type="checkbox" value={this.props.value}></input><p>{this.props.title}</p></label>
  					 </div>;	
		}
	});


var Checkboxes = React.createClass({
		render: function() {
			var list = listOfSkills.skillsData.map(function(listProps){
				return <SingleCheckBox value={listProps.value} title={listProps.title} key={listProps.value}/>
			});
			return 	<div className="list-container img-rounded col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xlg-3">
							{list}
							</div>;
		}
	});

module.exports = Checkboxes;