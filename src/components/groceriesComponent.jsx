import { useSelector } from 'react-redux';
import stylesObj from './components.styles';
function Groceries() {

    const fruitsInfo = useSelector((state) => state.fruitsData);
    const vegetablesInfo = useSelector((state) => state.vegetablesData);

    
    const styles= stylesObj();
    return (
     <div>
       <div className={styles.header}>Groceries</div>
          <div className={styles.container}>
             <div className={styles.block}>
                <div className={styles.header}>Fruits</div>
               {fruitsInfo.fruitsList.length === 0 ? 'No fruits found': null}
             <ul>
               {fruitsInfo.fruitsList.map((fruits, index) =>
                 <li className={styles.row} key={index}><span>{fruits}</span></li>
               )}
             </ul>
        </div>
            <div className={styles.block}>
               <div className={styles.header}>Vegetables</div>
                 {vegetablesInfo.vegetablesList.length === 0 ? 'No vegetables found': null}
             <ul>
               {vegetablesInfo.vegetablesList.map((veg, index) =>
                 <li className={styles.row} key={index}><span>{veg}</span></li>
               )}
             </ul>
            </div>
       </div>
    </div>
    );
  }
  
  export default Groceries;
  