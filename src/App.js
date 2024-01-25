import './App.css';
import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello/> {/* Functional components that take no parameters can be placed as self-closing tags */}
    </div>
  );
}

export default App;
