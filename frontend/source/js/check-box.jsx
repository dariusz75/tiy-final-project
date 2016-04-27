var React = require('react');



var SingleCheckBox = React.createClass({
		render: function() {
			return <div>
    					<label><input type="checkbox" value={this.props.value}></input><p>{this.props.title}</p></label>
  					 </div>;	
		}
	});


var FullList = React.createClass({
		render: function() {
			var list = this.props.skillsData.map(function(listProps){
				return <SingleCheckBox value={listProps.value} title={listProps.title} key={listProps.value}/>
			});
			return 	<div className="list-container img-rounded col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xlg-3">
							{list}
							</div>;
		}
	});

module.exports = FullList;