import { Triangle } from 'react-loader-spinner';
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
  Title,
} from './Currency.styled';
import { useNavigate } from 'react-router';

export default function Currency() {
  const [currency, setCurrency] = useState([]);
  const navigate = useNavigate();
  
  
  
  function currencySave(currencyData) {
    const currentDate = new Date().getTime();
    localStorage.setItem('currency', JSON.stringify({ currencyData, currentDate })
    );
  }
  
  useEffect(() => {
    async function fetch() {
      try {
        const one_hour = 3600000;
        let currencyData = [];
         if (localStorage.getItem('currency')) {
          const parseDate = JSON.parse(
            localStorage.getItem('currency')
          ).currentDate;
          const newDate = new Date().getTime();
          

          if (newDate - parseDate > one_hour) {
            currencyData = await fetchCurrency();
            setCurrency(currencyData);
            currencySave(currencyData);
            return;
           }
           
          const lsCurrencyData = localStorage.getItem('currency');
          const lsCurrencyParsedData = JSON.parse(lsCurrencyData).currencyData;

          setCurrency(lsCurrencyParsedData);
          return;
        }

        currencyData = await fetchCurrency();

        currencySave(currencyData);
        setCurrency(currencyData);
      } catch (error) {
        throw error;
      }
    }
    fetch();
  }, []);
  
  const windowListener = () => {
    if (window.screen.availWidth > 768) {
      if (document.location.pathname.indexOf("/currency") > -1) { 
        navigate('/home', { replace: true });
      }
    }
  };
  useEffect(() => {
    window.addEventListener('resize', windowListener);
    return () => {
      window.removeEventListener('resize', windowListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.screen.availWidth]);

  return (
    <>
      <Title>Currency</Title>
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
            {!!currency.length ? (
              Array.isArray &&
              currency.map(el => (
                <TableRow key={el._id}>
                  <Td>{el.code}</Td>
                  <Td>{Math.floor(el.buy * 100) / 100}</Td>
                  <Td>{Math.floor(el.sell * 100) / 100}</Td>
                </TableRow>
              ))
            ) : (
              <tr>
                <td>
                  <Triangle
                    type="TailSpin"
                    color="#fff"
                    height={80}
                    width={80}
                    wrapperStyle={{
                      position: 'absolute',
                      top: '40%',
                      left: '50%',
                      transform: 'translate(-50%)',
                    }}
                  />
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
