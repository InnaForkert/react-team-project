import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsSummary } from 'redux/transactions/operations';
import {
  SelectDate,
  SelectInput,
  SelectContainer,
  ColorRect,
  TableHeader,
  TableRow,
  Table,
  TableHead,
  TableBody,
  Summary,
  Expense,
  Income,
  Selects,
  THead,
} from './StatsTable.styled';
import {
  selectAllTransactions,
  selectExpenseSum,
  selectIncomeSum,
  selectSummary,
} from 'redux/transactions/transactionsSlice';
import { formatMoney } from 'utils/formatMoney';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#784fca',
];

function StatsTable() {
  const summary = useSelector(selectSummary);
  const expense = useSelector(selectExpenseSum);
  const income = useSelector(selectIncomeSum);
  const dispatch = useDispatch();
  const all = useSelector(selectAllTransactions);
  let expenses = summary.filter(el => el.total < 0);

  if (expenses.length > 0) {
    expenses = expenses.map((el, i) => ({
      ...el,
      color: colors[i],
    }));
  }

  const [monthDropdownShown, setMonthDropdownShown] = useState(false);
  const [yearDropdownShown, setYearDropdownShown] = useState(false);

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  useEffect(() => {
    dispatch(fetchTransactionsSummary({ month: +month + 1, year }));
  }, [dispatch, month, year, all]);

  function handleMonthChange(e) {
    setMonth(e.target.dataset.value);
    toggleMonthDropdown();
  }

  function handleYearChange(e) {
    setYear(e.target.dataset.value);
    toggleYearDropdown();
  }

  function toggleMonthDropdown() {
    setMonthDropdownShown(state => !state);
    setYearDropdownShown(false);
  }

  function toggleYearDropdown() {
    setYearDropdownShown(state => !state);
    setMonthDropdownShown(false);
  }

  return (
    <>
      <Selects>
        <SelectContainer className={monthDropdownShown ? 'dropdownShown' : ''}>
          <SelectInput onClick={toggleMonthDropdown}>
            {months[month]}
          </SelectInput>
          <SelectDate name="month">
            <li data-value="0" onClick={handleMonthChange}>
              January
            </li>
            <li data-value="1" onClick={handleMonthChange}>
              February
            </li>
            <li data-value="2" onClick={handleMonthChange}>
              March
            </li>
            <li data-value="3" onClick={handleMonthChange}>
              April
            </li>
            <li data-value="4" onClick={handleMonthChange}>
              May
            </li>
            <li data-value="5" onClick={handleMonthChange}>
              June
            </li>
            <li data-value="6" onClick={handleMonthChange}>
              July
            </li>
            <li data-value="7" onClick={handleMonthChange}>
              August
            </li>
            <li data-value="8" onClick={handleMonthChange}>
              September
            </li>
            <li data-value="9" onClick={handleMonthChange}>
              October
            </li>
            <li data-value="10" onClick={handleMonthChange}>
              November
            </li>
            <li data-value="11" onClick={handleMonthChange}>
              December
            </li>
          </SelectDate>
        </SelectContainer>
        <SelectContainer className={yearDropdownShown ? 'dropdownShown' : ''}>
          <SelectInput onClick={toggleYearDropdown}>{year}</SelectInput>
          <SelectDate name="year">
            <li data-value="2019" onClick={handleYearChange}>
              2019
            </li>
            <li data-value="2020" onClick={handleYearChange}>
              2020
            </li>
            <li data-value="2021" onClick={handleYearChange}>
              2021
            </li>
            <li data-value="2022" onClick={handleYearChange}>
              2022
            </li>
            <li data-value="2023" onClick={handleYearChange}>
              2023
            </li>
          </SelectDate>
        </SelectContainer>
      </Selects>
      <Table>
        <THead>
          <TableHead>
            <TableHeader>Category</TableHeader>
            <TableHeader>Sum</TableHeader>
          </TableHead>
        </THead>
        {expenses.length > 0 ? (
          <TableBody>
            {expenses.map(el => (
              <TableRow key={el.name}>
                <ColorRect color={el.color}>{el.name}</ColorRect>
                <td>{formatMoney(el.total).replace('-', '')}</td>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          ''
        )}
      </Table>
      <Summary>
        Expenses:<Expense>{formatMoney(expense).replace('-', '')}</Expense>
      </Summary>
      <Summary>
        Income:<Income>{formatMoney(income)}</Income>
      </Summary>
    </>
  );
}

export default StatsTable;
