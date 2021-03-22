import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import stylesObj from './components.styles';

function Vegetables() {
    // setting up styles
    const styles= stylesObj();
    const dispatch = useDispatch();
    const [vegetable, setVegetable] = useState("");
    // data from the reducer
    const vegetablesInfo = useSelector((state) => state.vegetablesData);

    
  return (
  <div className={styles.cell}>
      <div className={styles.header}>Vegetables</div>
            <input type="text" value={vegetable}  placeholder="Add a vegetable" onChange={e => setVegetable(e.target.value)}  />
            <button onClick={() => { dispatch({type: 'ADD_VEGETABLES', payload: vegetable})}}>Save</button>
            <button onClick={() => {setVegetable('')}}>clear</button>

        <ul>{vegetablesInfo.vegetablesList.map((veg, index) =>
        <li className={styles.row} key={index}> <span>{veg}</span></li>)}
       </ul>
</div>
  );
}

export default Vegetables;
