import React from "react";

export default class ErrorBoundary extends React.Component {

	state = {
		hasError: false
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <div className="error">error nach</div>
		} else {
			return this.props.children
		}
	}
}