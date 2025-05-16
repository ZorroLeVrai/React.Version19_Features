import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TransitionDemo from './react18/useTransition/TransitionDemo';
import NonActionDemo from './useAction/ActionDemo';

function App() {

  return (
    <>
      <nav>
        <ul className="flexLine">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/transition">useTransition</Link></li>
          <li><Link to="/action">useAction</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transition" element={<TransitionDemo />} />
        <Route path="/action" element={<NonActionDemo />} />
      </Routes>
    </>
  )
}

export default App;
