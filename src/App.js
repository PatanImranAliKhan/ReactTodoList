import './App.css';

import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <Header title="MyTodoList" searchbar={true}/>
      <Todos/>
      <Footer title="Footer Works!!!"/>
    </div>
  );
}

export default App;
