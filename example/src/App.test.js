import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const svg = document.createElement('svg')
  ReactDOM.render(<App />, svg)
  ReactDOM.unmountComponentAtNode(svg)
})
