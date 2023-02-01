import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllTransactions,
  selectCategories,
} from 'redux/transactions/transactionsSlice';
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
import { useEffect } from 'react';
import { fetchCategories } from 'redux/transactions/operations';
import { formatMoney } from 'utils/formatMoney';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';

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

export default function HomeTab() {
  const all = useSelector(selectAllTransactions);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
                  {el.transactionDate}
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
              <TableHeader>Date</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Comment</TableHeader>
              <TableHeader className="alignRight">Sum</TableHeader>
              <TableHeader className="alignRight">Balance</TableHeader>
            </TableHead>
          </TableBody>
          {all.length > 0 && categories.length > 0
            ? all.map((el, i) => (
                <TableRow>
                  <td>{el.transactionDate}</td>
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
        </Table>
      </MediaQuery>
    </>
  );
}
