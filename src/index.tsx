import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import MyForm from './MyForm';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyForm />);
}
