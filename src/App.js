import React from 'react';
import './App.css';
import Header from './presentational/Header'

import ErrorBoundary from './presentational/ErrorBoundries'
import Routes from './routes'


const navItems = [
  {
    id: 'home',
    path: '/'
  },
  {
    id: 'Todo',
    path: '/todo'
  },
  {
    id: 'Login',
    path: '/login'
  }
]

function App() {
  return (
      <ErrorBoundary >
        <Header items={navItems} />
        <Routes />
      </ErrorBoundary>
  );
}

export default App;
