import classes from './App.module.css';
import ListOfEmployees from "../src/Components/ListOfEmployees"
import AddEmployee from './Components/AddEmployee';
import Error from './Components/Error';

function App() {

  return (
    <div className={`${classes.App}`}>
       <div>
           <div className={`${classes.Title}`}>List of employees</div>
       </div>
       <div>
           <ListOfEmployees />
           <AddEmployee />
       </div>
    </div>
  );
}

export default App;
