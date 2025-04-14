import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback } = this.props;

    if (hasError) {
      if (fallback) {
        // If a custom fallback UI or message is provided
        return typeof fallback === 'function'
          ? fallback({ error })
          : fallback;
      }

      // Default fallback message
      return (
        <div style={{
          padding: '16px',
          backgroundColor: '#ffe5e5',
          color: '#990000',
          borderRadius: '4px'
        }}>
          <h2>Something went wrong.</h2>
          <p>{error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
