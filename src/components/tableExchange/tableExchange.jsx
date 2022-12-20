import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import helpers from "../../utils/helpers";

const TableExchange = ({ tableData }) => {
  const tableDataStorage = JSON.parse(localStorage.getItem("tableData"))

  let dataExchange = localStorage.length === 0 ? tableData : tableDataStorage
  
  const rows = [
    helpers.createTableData('USD', dataExchange.rates?.USD, 1),
    helpers.createTableData('CAD', dataExchange.rates?.CAD, 2),
    helpers.createTableData('CZK', dataExchange.rates?.CZK, 3),
    helpers.createTableData('GBP', dataExchange.rates?.GBP, 4),
    helpers.createTableData('PLN', dataExchange.rates?.PLN, 5),
  ];

  return (
    <TableContainer style={{ width: '100%', marginBottom: '50px' }}>
      <Table style={{ width: 400, margin: 'auto' }}>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">{dataExchange.base}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.currency}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableExchange
