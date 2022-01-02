import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import WhatIsBmi from './components/WhatIsBmi'
import Home from './components/Home'
import Error404 from './components/Error404'
import Classification from './components/Classification'

function App() {
  return (
    <Router>
      <div className="w-full h-screen py-20 px-10 bg-sky-200">
        <Navbar />
        <div className="container mt-5 bg-white shadow-lg mx-auto p-10 rounded-lg">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/what-is-bmi" element={<WhatIsBmi />} />
            <Route path="/classification-of-bmi" element={<Classification />} />
            {/* error 404 */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
