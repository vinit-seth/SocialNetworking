import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Register from './components/register';
import PageNotFound from './components/pagenotfound';
import Footer from './components/layout/footer';
import Rightbar from './components/layout/rightbar/rightbar';

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Rightbar />
      <Footer />

    </>
  );
}

export default App;
