
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'

function App() {
  return (
      <Router>
        <Routes >
          <Route path = '/' element = {<Layout></Layout>} />
        </Routes>

      </Router>
  )
}

export default App
