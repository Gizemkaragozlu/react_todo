import './App.css';
import Content from './Content';
import Footer from './components/Footer';
import { TodoProvider } from './contexts/TodoContext';
import Header from './Header';


function App() {
  return (

<TodoProvider>
<section className="todoapp">
  <Header/>
  <Content/>
</section>
<Footer/>

</TodoProvider>

  );
}

export default App;
