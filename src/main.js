var React = require('react-native');

var {
	View,
	Text,
	StyleSheet
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
	//function when component is about to displayed in screen
	componentWillMount: function() {
		Parse.initialize("NrExlZXxGkQRWnn2ntnQgRGj7OQolBMIs9drowpY", "VPcEsGzWE3bXkacA6zZsHelIrBLZnYFWez8xx8nr");
	},
	render: function() {
		return ( 
			<View style={styles.container}>
				<Signin />
			</View>
		)
	}
}); 

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});