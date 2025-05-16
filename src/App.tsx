import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TransitionDemo from './react18/useTransition/TransitionDemo';
import NonActionDemo from './useAction/ActionDemo';
import OptimisticDemo from './useOptimistic/OptimisticDemo';
import FormStatusDemo from './useFormStatus/formStatusDemo';

function App() {

  return (
    <>
      <nav>
        <ul className="flexLine">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/transition">useTransition</Link></li>
          <li><Link to="/action">useAction</Link></li>
          <li><Link to="/optimistic">useOptimistic</Link></li>
          <li><Link to="/formStatus">useFormStatus</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transition" element={<TransitionDemo />} />
        <Route path="/action" element={<NonActionDemo />} />
        <Route path="/optimistic" element={<OptimisticDemo />} />
        <Route path="/formStatus" element={<FormStatusDemo />} />
      </Routes>
    </>
  )
}

export default App;
