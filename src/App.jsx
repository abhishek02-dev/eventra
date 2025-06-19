import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import CreateEvent from './pages/CreateEvent';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import Report from './pages/Report';
import MyRegistrations from './pages/MyRegistrations';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        < Dashboard/>
        <Toaster position="top-center" />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/users" element={<UserGrid/>} />
          <Route path="/reports" element={<Report/>} />
          <Route path="/myregistrations" element={<MyRegistrations/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
