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

  useEffect(() => {
    async function fetch() {
      try {
        const data = await fetchCurrency();
        setCurrency(data);
      } catch (error) {
        throw error;
      }
    }
    fetch();
  }, []);

  const windowListener = () => {
    if (window.screen.availWidth > 768) {
      navigate('/home', { replace: true });
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
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
