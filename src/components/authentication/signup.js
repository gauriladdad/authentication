var React = require('react-native');

var {
	Text,
	View,
	StyleSheet,
	TextInput
} = React;

var Button = require('../common/button');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			username: '',
			password: '',
			passwordConfirmation: '',
			errorMessage: ''
		};
	},

	render: function() {
		return (
			<View style={styles.container}>
				<Text> Sign Up </Text>

				<Text style={styles.label}>Username:</Text>
				<TextInput
					value={this.state.username}
					onChangeText={ (text) => this.setState({username: Text})} 
					style={styles.input}/>

				<Text style={styles.label}>Password:</Text>
				<TextInput
					secureTextEntry={true}
					value={this.state.password}
					onChangeText={ (text) => this.setState({password: Text})} 
					style={styles.input}/>
					
				<Text style={styles.label}>Confirm password:</Text>
				<TextInput
					secureTextEntry={true}
					value={this.state.passwordConfirmation}
					onChangeText={ (text) => this.setState({passwordConfirmation: Text})} 
					style={styles.input}/>		

				<Text style={styles.label}>{this.state.errorMessage}</Text>
						
				<Button text={'Signup'}
						onPress={this.onSignupPress}/>	
					
				<Button text={'I have an account...'}
						onPress={this.onSigninPress}/>	
			</View>
		);
	},
	onSignupPress: function() {
		if (this.state.password !== this.state.passwordConfirmation ) {
			this.setState({errorMessage: "Your passwords do not match"});
		}
	},
	onSigninPress: function() {
	//remember the sign in view is already in stack, just need to remove signup from stack
		this.props.navigator.pop();
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	label:
	{
		fontSize: 18
	},
	input:
	{
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	}
});