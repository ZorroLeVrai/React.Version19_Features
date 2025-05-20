import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TransitionDemo from './react18/useTransition/TransitionDemo';
import NonActionDemo from './useAction/ActionDemo';
import OptimisticDemo from './useOptimistic/OptimisticDemo';
import FormStatusDemo from './useFormStatus/FormStatusDemo';
import MetadataDemo from './metaData/MetadataDemo';
import UseDemo from './use/UseDemo';
import UseDemoV2 from './use/UseDemoV2';
import RefDemo from './forwardRef/refDemo';

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
          <li><Link to="/use">useDemo</Link></li>
          <li><Link to="/use2">useDemo V2</Link></li>
          <li><Link to="/ref">forward Ref</Link></li>
          <li><Link to="/metadata">metadata</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transition" element={<TransitionDemo />} />
        <Route path="/action" element={<NonActionDemo />} />
        <Route path="/optimistic" element={<OptimisticDemo />} />
        <Route path="/formStatus" element={<FormStatusDemo />} />
        <Route path="/use" element={<UseDemo />} />
        <Route path="/use2" element={<UseDemoV2 />} />
        <Route path="/ref" element={<RefDemo />} />
        <Route path="/metadata" element={<MetadataDemo />} />
      </Routes>
    </>
  )
}

export default App;
