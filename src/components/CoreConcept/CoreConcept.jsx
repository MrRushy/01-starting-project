import './CoreConcept.css'
//Seperation of Concerns ->
export default function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={(image)} alt={image}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}