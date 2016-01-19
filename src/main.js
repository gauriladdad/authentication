var React = require('react-native');

var {
	StyleSheet,
	Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');

var ROUTES = 
{
	signin: Signin,
	signup: Signup
};

module.exports = React.createClass({
	//function when component is about to displayed in screen
	componentWillMount: function() {
		Parse.initialize("NrExlZXxGkQRWnn2ntnQgRGj7OQolBMIs9drowpY", "VPcEsGzWE3bXkacA6zZsHelIrBLZnYFWez8xx8nr");
	},
	//Navigator renders or view stack changes (push/pop view)
	renderScene: function(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />;
	},
	render: function() {
		return ( 
			<Navigator 
				style={styles.container}
				initialRoute={ {name: 'signin'} }
				renderScene={this.renderScene}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; } }/>
		)
	}
}); 

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});