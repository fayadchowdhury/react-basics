import './App.css';
import { Hello } from './components/Hello';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Hello/> {/* Functional components that take no parameters can be placed as self-closing tags */}
      <Info/>
    </div>
  );
}

export default App;
