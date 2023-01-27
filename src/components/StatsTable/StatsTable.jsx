import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsSummary } from 'redux/transactions/operations';
import { SelectDate } from './StatsTable.styled';
import { selectSummary } from 'redux/transactions/transactionsSlice';
import { nanoid } from 'nanoid';

function StatsTable() {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);

  useEffect(() => {
    dispatch(fetchTransactionsSummary());
  }, [dispatch]);

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  function handleMonthChange(e) {
    setMonth(e.value);
    dispatch(fetchTransactionsSummary({ month, year }));
  }

  function handleYearChange(e) {
    setYear(e.value);
    dispatch(fetchTransactionsSummary({ month, year }));
  }

  return (
    <>
      <SelectDate name="month" value={month} onChange={handleMonthChange}>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </SelectDate>
      <SelectDate name="year" value={year} onChange={handleYearChange}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </SelectDate>
      {/* <TableHeader>Category, Sum</TableHeader> */}
      <ul>
        {summary.length > 0
          ? summary.map(el => (
              <li key={nanoid()}>
                {el.name}: {el.total}
              </li>
            ))
          : ''}
      </ul>
    </>
  );
}

export default StatsTable;
