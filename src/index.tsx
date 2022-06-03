import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import { QuizProvider } from './contexts/quizContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();