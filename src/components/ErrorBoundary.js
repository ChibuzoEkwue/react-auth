import React, { Component } from "react";

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
		};
	}

	componentDidCatch(error, errorInfo) {
		console.log({ error, errorInfo });
	}

	static getDerivedStateFromError(error) {
		return { error };
	}

	render() {
		if (this.state.error)
			return (
				<div style={{ color: "red" }}>
					<h2>{this.props.msg || "Something went wrong"}</h2>
				</div>
			);

		return this.props.children;
	}
}

export default ErrorBoundary;
