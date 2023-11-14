import logo from './logo.svg';
import './App.css';
import Api from './compenents/Api';






function App() {
   
 const finparent=(p)=>{
    alert('Hello From Parent' +p)
 }

  return (
    <div className="App">
    <Api/>

    </div>
  );
}

export default App;
