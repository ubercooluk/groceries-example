
import Fruits from './components/fruitsComponent';
import Vegetables from './components/vegetablesComponent';
import Groceries from './components/groceriesComponent';
import stylesObj from './App.style.js';

function App() {
  const styles= stylesObj();
  return (
    <div className={styles.container}>
    <div className={styles.block}>
     <Fruits />
     </div>
     <div className={styles.block}>
     <Vegetables />
     </div>
     <div className={styles.block}>
     <Groceries />
     </div>
    </div>
  );
}

export default App;
