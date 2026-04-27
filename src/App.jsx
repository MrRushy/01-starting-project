import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcept/CoreConcepts';
import Examples from './components/TabButton/Examples';
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
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
