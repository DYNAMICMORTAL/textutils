import './App.css';
import Firstsection from './components/Firstsection';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    <Navbar title='TextUtils'/>
      <Firstsection titleText='Welcome to TextUtils'/>
    <Textform/>
    </>
  );
}

export default App;
