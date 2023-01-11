import './App.css';
import {Home} from './Components/Home';
import Homesectiontwo from './Components/Homesection-two';

import { Projectdevelopedby } from './Components/Projectdevelopedby';
import {Footer} from './Components/Footer';
import Floorplan from './Components/Floorplan';
import Mapreach from './Components/Mapreach';
import Explore from './Components/Explore';
import Video from './Components/Video';
function App() {  


  return (
    <>
    <Home/>
    <Homesectiontwo/>
    <Mapreach/>
    <Floorplan/> 
    <Explore/>
    <Projectdevelopedby/>
    {/* <Video/> */}
   <Footer/>
    </>
  );
}

export default App;


