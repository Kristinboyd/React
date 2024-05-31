// Components
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx';


// App
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}
