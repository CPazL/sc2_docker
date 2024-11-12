import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import ViewUsers from './components/ViewUsers';
import FindUser from './components/FindUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/view" element={<ViewUsers />} />
        <Route path="/find" element={<FindUser />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/delete" element={<DeleteUser />} />
      </Routes>
    </Router>
  );
}

export default App;
