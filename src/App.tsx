import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TransitionDemo from './react18/useTransition/TransitionDemo';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transition" element={<TransitionDemo />} />
      </Routes>
    </>
  )
}

export default App;
