import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
// rem适配
import './config/rem'
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))