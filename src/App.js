import './App.css';
import ApplicantDetails from './componets/ApplicantDetails/ApplicantDetails';
import Header from './componets/Header/Header';
import Servies from './componets/Servies/Servies.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <ApplicantDetails/>
      <Servies/>
    </div>
  );
}

export default App;
