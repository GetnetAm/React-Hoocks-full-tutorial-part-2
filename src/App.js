import './App.css';
import FullName from './Components/Prps';
// import InputCounter from './Components/InputCounter';
// import ShowText from './Components/ShowText';
// import CounterHocks from './Components/CounterHocks';
// import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHocks /> */}

      {/* <InputCounter /> */}
      {/* <ShowText /> */}

      {/*  properties */}

      <FullName name="Ethio 360" addiress="USA" />
      <FullName name="Asrat" addiress="Ethiopia" />
      <FullName name= "Mereja " addiress="London" />


     
    </div>
  );
}

export default App;
