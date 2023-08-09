import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Vous pouvez également envoyer les informations d'erreur à un service de journalisation ici
  }

  render() {
    if (this.state.hasError) {
      return <div>Une erreur est survenue. Veuillez réessayer plus tard.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;