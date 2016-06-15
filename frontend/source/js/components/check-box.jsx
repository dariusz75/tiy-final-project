var React = require('react');
var listOfSkills = require('../stores/SkillsStore.js');


var SingleCheckBox = React.createClass({

	handleChange: function (changeEvent) {
		this.props.onChange(changeEvent.target.value);
	},

		render: function() {
			return <div className="skills-check">
    					<label><input type="checkbox" value={this.props.value} onChange={this.handleChange} checked={this.props.isChecked}></input><p>{this.props.title}</p></label>
  					 </div>;	
		}
	});


var Checkboxes = React.createClass({
		
		render: function() {
			var list = listOfSkills.skillsData.map(function(listProps){	
				var isChecked = this.props.skillsChecked[listProps.value];
				return <SingleCheckBox onChange={this.props.handleCheckboxChange}  value={listProps.value} isChecked={isChecked} title={listProps.title} key={listProps.value}/>
			}.bind(this));
			return 	<div className="list-container img-rounded col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xlg-3">
							{list}
							</div>;
		}
	});

module.exports = Checkboxes;