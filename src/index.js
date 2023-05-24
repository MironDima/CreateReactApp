import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const elem = React.createElement('h2',null,'Hello world!!')
root.render(elem)



