import * as React from 'react'
import { render } from 'react-dom'
import { foo } from './a'

const App = () => {
  
  return (
    <div>Welcome to React, We are a go!</div>
  )
}

render(<App />,document.getElementById('container'))
