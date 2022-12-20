import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TableExchange from '../components/tableExchange'
import http from "../utils/http";
import { hourInMilliseconds } from "../utils/constants";

const HomePage = () => {
  const [tableData, setTableData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (localStorage.length === 0) {
		  loadExchangeData()
    }
    const intervalCall = setInterval(() => {
		  loadExchangeData();
    }, hourInMilliseconds);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  const loadExchangeData = () => {
    http.get().then(response => {
      setTableData(response.data)
      localStorage.setItem('tableData', JSON.stringify(response.data));
      setErrorMessage('')
    }).catch(error => {
      setErrorMessage(error.message)
    })
  };

  return (
	  <div style={{display: "flex", justifyContent: 'center', flexDirection: 'column'}}>
      <TableExchange tableData={tableData}/>
      <Button 
        onClick={loadExchangeData} 
        variant="contained" 
        style={{margin: '0 auto'}}
        >
          Refresh table
      </Button>
	    {errorMessage}
    </div>
  );
}

export default HomePage;
