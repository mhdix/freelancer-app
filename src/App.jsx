
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';


function App() {
  return (
    <div className='container xl:max-w-screen-xl'>
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </div>
  )
}

export default App
