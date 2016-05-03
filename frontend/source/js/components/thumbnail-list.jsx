var React = require('react');
var Thumbnail = require('./thumbnail')

module.exports = React.createClass({
		render: function() {
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return <Thumbnail key={thumbnailProps.id} imageUrl={thumbnailProps.imageUrl} header={thumbnailProps.header} descritption={thumbnailProps.descritption} title={thumbnailProps.title} number={thumbnailProps.number}/>
			});
			return 	<div>
							{list}
							</div>;
		}
	});