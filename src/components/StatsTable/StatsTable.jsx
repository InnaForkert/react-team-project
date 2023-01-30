import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsSummary } from 'redux/transactions/operations';
import {
  SelectDate,
  SelectInput,
  SelectContainer,
  ColorRect,
} from './StatsTable.styled';
import { selectSummary } from 'redux/transactions/transactionsSlice';
import { nanoid } from 'nanoid';

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
  '#FED057',
  '#FFD8D0',
  '#FD9498',
];

function StatsTable() {
  const summary = useSelector(selectSummary);
  const dispatch = useDispatch();
  const colored = useRef(summary);

  useEffect(() => {
    colored.current = summary.map((el, i) => ({
      ...el,
      color: colors[i],
    }));
    console.log(colored.current);
  }, [summary, dispatch]);

  const [monthDropdownShown, setMonthDropdownShown] = useState(false);
  const [yearDropdownShown, setYearDropdownShown] = useState(false);

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  useEffect(() => {
    dispatch(fetchTransactionsSummary({ month: +month + 1, year }));
  }, [dispatch, month, year]);

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
      <SelectContainer className={monthDropdownShown ? 'dropdownShown' : ''}>
        <SelectInput onClick={toggleMonthDropdown}>{months[month]}</SelectInput>
        <SelectDate name="month" onClick={handleMonthChange}>
          <li data-value="0">January</li>
          <li data-value="1">February</li>
          <li data-value="2">March</li>
          <li data-value="3">April</li>
          <li data-value="4">May</li>
          <li data-value="5">June</li>
          <li data-value="6">July</li>
          <li data-value="7">August</li>
          <li data-value="8">September</li>
          <li data-value="9">October</li>
          <li data-value="10">November</li>
          <li data-value="11">December</li>
        </SelectDate>
      </SelectContainer>
      <SelectContainer className={yearDropdownShown ? 'dropdownShown' : ''}>
        <SelectInput onClick={toggleYearDropdown}>{year}</SelectInput>
        <SelectDate name="year" onClick={handleYearChange}>
          <li data-value="2019">2019</li>
          <li data-value="2020">2020</li>
          <li data-value="2021">2021</li>
          <li data-value="2022">2022</li>
          <li data-value="2023">2023</li>
        </SelectDate>
      </SelectContainer>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        {colored.current.length > 0 ? (
          <tbody>
            {colored.current.map(el => (
              <tr key={nanoid()}>
                <ColorRect color={el.color}>{el.name}</ColorRect>
                <td>{el.total}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          ''
        )}
      </table>
    </>
  );
}

export default StatsTable;
