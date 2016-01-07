<TextInput 
	value={this.state.username}
	onChangeText={(text) => this.setState({ username: text})}/>

what the state here is really doing in value and onChangeText = 
onChangeText = updates state whenever text changes
value = whenever text changes, the component is re-rendered. at this time
the state value is used as textInput's value.

** state changes always cause the component to re-render.