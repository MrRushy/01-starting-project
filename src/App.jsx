import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';  //react hooks
import CoreConcepts from './components/CoreConcept/CoreConcepts';
//function UserData(){
//  const user = {first:"Rushil",last:"Shanmugam",age:"22"};
 
//  return(
 //   <div>
  //    <h2>Name: {user.last},{user.first}</h2>
  //    <h3>Age: {user.age}</h3>
 //   </div>
  //)
//}


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic</p>
  if(selectedTopic){
    tabContent=(
       <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>
    )
  }

  function handleSelect(selectedButton){
    //based on which button, change the content
    //according to that button Topic
   // console.log(selectedButton)
    setSelectedTopic(selectedButton)
    console.log(tabContent)
  }
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
       <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === "components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === "jsx"} onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === "props"} onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === "state"} onSelect={()=>handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
         
       </section>
      </main>
    </>
  );
}

export default App;
