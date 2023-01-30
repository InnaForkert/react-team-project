import { useState, useEffect } from 'react';
import fetchCurrency from 'services/CurrencyAPI';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Th,
} from './Currency.styled';

export default function Currency() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await fetchCurrency();
        setCurrency(data.data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
  }, []);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <Th>Currency</Th>
              <Th>Purchase</Th>
              <Th>Sale</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray &&
              currency.map((el, key) => (
                <TableRow key={key}>
                  <Td>{el.ccy}</Td>
                  <Td>{Math.floor(el.buy * 100) / 100}</Td>
                  <Td>{Math.floor(el.sale * 100) / 100}</Td>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
