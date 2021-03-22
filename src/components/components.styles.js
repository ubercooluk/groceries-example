import {createUseStyles} from 'react-jss'
const styles = createUseStyles({
    container: {
     display: 'flex',
     flexDirection: 'row',
     justifyContents: 'flex-start',
    },
    block: {
        padding: '10px',
    },
    cell: {   
    
    margin: '5px',
    padding:'5px',
    },
    header:{
        fontSize: '18px',
        fontWeight: 'bold',
    },
    row: {
        fontSize: '15x',
        borderBottom:'2px solid #e3e3e3',
    },
  });
  export default styles;