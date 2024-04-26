// Constants 
import { reactDescriptions } from "../constants";
// Images
import reactImg from '../assets/react-core-concepts.png';
// Utils
import { genRandomInt } from "../utils";


// Header
export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}