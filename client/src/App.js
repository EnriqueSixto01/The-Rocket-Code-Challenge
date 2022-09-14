import './App.css';
import FormName from './components/FormName/FormName';
import FormBirthDate from './components/FormBirthDate/FormBirthDate';
import FormContact from './components/FormContact/FormContact.jsx'
function App() {
  return (
    <div className="App">
      <FormName/>
      <FormBirthDate/>
      <FormContact/>
    </div>
  );
}

export default App;
