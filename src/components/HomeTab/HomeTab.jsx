import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from 'redux/transactions/transactionsSlice';
import { filteredValue } from 'redux/transactions/transactionsSlice';
import { selectFilteredTransactions } from 'redux/transactions/selectors';

import {
  TransactionDetails,
  TransactionDetailsItem,
  TransactionDetailsItemTitle,
  SumText,
  TableHead,
  TableHeader,
  TableBody,
  Table,
  TableRow,
  Balance,
  Sum,
} from './HomeTab.styled';
import { formatMoney } from 'utils/formatMoney';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
];

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

export default function HomeTab() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectFilteredTransactions);
  const all = [...transactions].reverse();
  const categories = useSelector(selectCategories);
  const { transactionDate, amount, comment, type, categoryId } = useSelector(
    state => state.transactions.filteredValue
  );

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(filteredValue({ [name]: value }));
  };

  return (
    <>
      <MediaQuery deviceName={'mobileAll'}>
        {all.length > 0 && categories.length > 0
          ? all.map((el, i) => (
              <TransactionDetails key={el.id}>
                <TransactionDetailsItem color={colors[i < 9 ? i : i % 9]}>
                  <TransactionDetailsItemTitle>
                    Date
                  </TransactionDetailsItemTitle>
                  {new Date(el.transactionDate)
                    .toLocaleDateString()
                    .replace(/\//g, '.')}
                </TransactionDetailsItem>
                <TransactionDetailsItem color={colors[i < 9 ? i : i % 9]}>
                  <TransactionDetailsItemTitle>
                    Type
                  </TransactionDetailsItemTitle>
                  {el.type[0] + el.type.slice(1).toLowerCase()}
                </TransactionDetailsItem>
                <TransactionDetailsItem color={colors[i < 9 ? i : i % 9]}>
                  <TransactionDetailsItemTitle>
                    Category
                  </TransactionDetailsItemTitle>
                  {categories.find(e => e.id === el.categoryId).name}
                </TransactionDetailsItem>
                <TransactionDetailsItem color={colors[i < 9 ? i : i % 9]}>
                  <TransactionDetailsItemTitle>
                    Comment
                  </TransactionDetailsItemTitle>
                  {el.comment}
                </TransactionDetailsItem>
                <TransactionDetailsItem color={colors[i < 9 ? i : i % 9]}>
                  <TransactionDetailsItemTitle>Sum</TransactionDetailsItemTitle>
                  <SumText color={colors[i < 9 ? i : i % 9]}>
                    {formatMoney(el.amount).replace('-', '')}
                  </SumText>
                </TransactionDetailsItem>
                <TransactionDetailsItem color={colors[i < 9 ? i : i % 9]}>
                  <TransactionDetailsItemTitle>
                    Balance
                  </TransactionDetailsItemTitle>
                  {formatMoney(el.balanceAfter).replace('-', '')}
                </TransactionDetailsItem>
              </TransactionDetails>
            ))
          : ''}
      </MediaQuery>
      <MediaQuery deviceName={'tabletFrom'}>
        <Table>
          <TableBody>
            <TableHead>
              <TableHeader>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: 80,
                  }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Date
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="transactionDate"
                    name="transactionDate"
                    value={transactionDate}
                    onChange={handleChange}
                    label="Date"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {months.map((month, ind) => (
                      <MenuItem key={month} value={ind}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableHeader>
              <TableHeader>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="type"
                    name="type"
                    value={type}
                    onChange={handleChange}
                    label="Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="INCOME">Income</MenuItem>
                    <MenuItem value="EXPENSE">Expense</MenuItem>
                  </Select>
                </FormControl>
              </TableHeader>
              <TableHeader>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="categoryId"
                    name="categoryId"
                    value={categoryId}
                    onChange={handleChange}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableHeader>
              <TableHeader>
                <TextField
                  id="standard-basic"
                  label="Comment"
                  variant="standard"
                  name="comment"
                  value={comment}
                  onChange={handleChange}
                  sx={{
                    marginTop: '8px',
                  }}
                />
              </TableHeader>
              <TableHeader className="alignRight">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Sum
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                    label="Amount"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="low">To low</MenuItem>
                    <MenuItem value="high">To high</MenuItem>
                  </Select>
                </FormControl>
              </TableHeader>
              <TableHeader
                className="alignRight"
                style={{ paddingTop: '30px', textAlign: 'center' }}
              >
                Balance
              </TableHeader>
            </TableHead>
            {all.length > 0 && categories.length > 0
              ? all.map(el => (
                  <TableRow key={el.id}>
                    <td>
                      {new Date(el.transactionDate)
                        .toLocaleDateString()
                        .replace(/\//g, '.')}
                    </td>
                    <td>{el.amount > 0 ? '+' : '-'}</td>
                    <td>{categories.find(e => e.id === el.categoryId).name}</td>
                    <td>{el.comment}</td>
                    <Sum color={el.amount < 0 ? '#FF6596' : '#24CCA7'}>
                      {formatMoney(el.amount).replace('-', '')}
                    </Sum>
                    <Balance>
                      {formatMoney(el.balanceAfter).replace('-', '')}
                    </Balance>
                  </TableRow>
                ))
              : ''}
          </TableBody>
        </Table>
      </MediaQuery>
    </>
  );
}
