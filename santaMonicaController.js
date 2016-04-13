var React = require('react');
var ReactDOM = require('react-dom');
//var db = require('./database');

var Likes = React.createClass({
	
	getInitialState: function(){
		return {
			likes: 0,
			likesState: "off",
			dislikes: 0,
			dislikesState: "off"
		}
	},

	clickLike: function(){
		
		if(this.state.likesState === "off"){
			this.setState({
				likes: this.state.likes++,
				likesState: "on"
			});
		}

		if(this.state.likesState === "on"){
			this.setState({
				likes: this.state.likes--,
				likesState: "off"
			});
		}
	},

	clickDislike: function(){
		if(this.state.dislikesState === "off"){
			this.setState({
				dislikes: this.state.dislikes++,
				dislikesState: "on"
			});
		}

		if(this.state.dislikesState === "on"){
			this.setState({
				dislikes: this.state.dislikes--,
				dislikesState: "off"
			});
		}
	},

	render: function(){
		return(
			<div>
				Likes: {this.state.likes} Dislikes: {this.state.dislikes}
			</div>
		)
	}

});

ReactDOM.render(<Likes />, document.getElementById('quality'));