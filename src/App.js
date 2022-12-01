import { Routes, Route } from 'react-router-dom';
import * as P from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/melon" element={<P.Melon />} />
      <Route path="/genie" element={<P.Genie />} />
      <Route path="/bugs" element={<P.Bugs />} />
      <Route path="/vibe" element={<P.Vibe />} />
    </Routes>
  );
}

export default App;
