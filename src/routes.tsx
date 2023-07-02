import { Routes, Route } from 'react-router-dom';

// Import components for each route
import {Home} from './components/Home';
import {Join} from './components/Join';

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/:sessionId" element={<Home />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  )
}