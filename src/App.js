import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Competences from './pages/Competences';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <Router>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
      </motion.div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/competences' element={<Competences />} />
      </Routes>
    </Router>
  )
}

export default App;
