
import { Route, Routes } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

import Auth from './pages/Auth';

const queryClient = QueryClient()

function App() {
  return (
    <QueryClient client={queryClient}>
      <Toaster />
      <div className='container xl:max-w-screen-xl'>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>

    </QueryClient >
  )
}

export default App
