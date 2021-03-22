import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import stylesObj from './components.styles';
function Fruits() {
    const dispatch = useDispatch();
    const [fruits, setFruits] = useState("");
    // getting data from reducer
    const fruitsInfo = useSelector((state) => state.fruitsData);
    // setting up styles
    const styles= stylesObj();
    
  return (
   <div className={styles.cell}>
       <div className={styles.header}>Fruits</div>  
          <input type="text" value={fruits}  placeholder="Add a fruit" onChange={e => setFruits(e.target.value)}  />
          <button onClick={() => {dispatch({type: 'ADD_FRUITS',payload: fruits})}}>Save</button>
          <button onClick={() => {setFruits('')}}>clear</button>
        <ul>
          {fruitsInfo.fruitsList.map((fruits, index) =>
             <li className={styles.row} key={index}><span>{fruits}</span></li>
           )}
       </ul>
    </div>
  );
}

export default Fruits;
