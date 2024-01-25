import './App.css';
import { Routes,Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import Edit from './pages/Edit';
import AddNew from './pages/AddNew'
import Preview from './pages/Preview';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<AllPosts/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/new' element={<AddNew/>}/>
      <Route path='/preview' element={<Preview/>}/>
     </Routes>
    </>
  );
}

export default App;
