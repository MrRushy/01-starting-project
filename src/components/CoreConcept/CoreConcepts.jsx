import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts(){
    return(
           <section id="core-concepts">
             <h2>Time to get started!</h2>
            <ul>
              {
                //Array of JS object but i need Array of HTML objects
                
                  CORE_CONCEPTS.map((conceptItem)=> <CoreConcept {...conceptItem} /> )
                
              }
            </ul>
           </section>
    ) 
}