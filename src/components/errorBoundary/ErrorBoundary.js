import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    return { error: true };
  }
  componentDidCatch(error, errorinfo) {
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <ErrorMessage></ErrorMessage>;
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
