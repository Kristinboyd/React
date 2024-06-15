// Libraries
import React, { useState } from 'react';
// Components
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
// Constants
import { EXAMPLES } from '../data.js';

export default function Examples() {
  // state
  const [selectedTopic, setSelectedTopic] = useState();

  // handler functions
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
