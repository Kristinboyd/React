// Libraries 
import {useState} from 'react'
// Components
import Header from './Components/Header';
import CoreConcepts from './Components/CoreConcepts';
import TabButton from './components/TabButton';
// Data
import { CORE_CONCEPTS } from './data';

// Default App
function App() {

  // state
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  // helper functions
  function handleSelect(selectedButton) {
    // selectedButton => 'Components', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }

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
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
