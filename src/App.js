import FreelanceCard from './components/FreelanceCard/FreelanceCard';
import './App.css';
import {freelances} from './fixtures'

function App() {
  return (
    <div className="App">
    {freelances.map((freelance) => (
      <FreelanceCard key={freelance.id} freelance={freelance}/>
    ))}
    </div>
  );
}

export default App;

// utiliser les tests comme une API 
// dans App.test.js : ajouter l'async, expect le chargement (dans tests), 
//dans App.js : ajouter hook freelance, faire requête réseau dans fonction (== effet de bord, le useEffect) ..
// import useEffect
//import axios from 'axios

// const [freelances, setFreelances]= useState([])
// const [isLoading, setisLoading]= useState(true)

// useEffect(() => {
//     axios.get('api/v1/freelances').then(res=> {
//         setFreelances(res.data)
//         setisLoading(false)
//     })
// }, ())

// return (
//     // <div>
//         {isLoading && <p>Loading</p></div>
// )
