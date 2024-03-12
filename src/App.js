import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Next from './Next';
import Help from './Help';
import Start from './Start';
import Game from './Game';
import HelpDesk from './HelpDesk';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/next" element={<Next/>}></Route>
      <Route path="/help" element={<Help/>}></Route>
      <Route path="/start" element={<Start/>}></Route>
      <Route path="/game" element={<Game/>}></Route>
      <Route path="/helpDesk" element={<HelpDesk/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;