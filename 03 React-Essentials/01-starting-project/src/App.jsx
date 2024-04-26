// Components
import Header from './Components/Header';
import CoreConcepts from './Components/CoreConcepts';
import TabButton from './components/TabButton';
// Data
import { CORE_CONCEPTS } from './data';

// Default App
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="Components"/>
            <TabButton label="JSX"/>
            <TabButton label="Props"/>
            <TabButton label="State"/>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
