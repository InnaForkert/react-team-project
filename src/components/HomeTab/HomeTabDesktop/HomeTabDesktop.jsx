import s from './HomeTabDesktop.module.css';
import { HomeTabContainer } from './HomeTabDesktop.styled';

import { useSelector } from 'react-redux';
import { normalizeFormatDate, normalizeNum } from 'services/normalizeService';

export default function HomeTabDesktop() {
<<<<<<< Updated upstream
  const transactions = useSelector((state) => (state.transactions.allTransactions))
  let filterTrans = [...transactions].sort((a, b) => (a.date > b.date ? -1 : 1))
  
  console.log(transactions);
=======
  const transactions = useSelector((state) => getAllTransactions(state))
  let filterTrans = [...transactions].sort((a, b) => (a.date > b.date ? -1 : 1));
  console.log(filterTrans);
>>>>>>> Stashed changes
  return (
   <HomeTabContainer>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.border__start}>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          (
            <tr key={1} className={s.tr}>
              <td>Дата транзакції</td>
              <td>+</td>
              <td>Категорія</td>
              <td>Комментар</td>
              <td>0</td>
              <td>0</td>
          </tr>)
          {filterTrans?.map((item) => {
            console.log(item)
            const text = item.income === false ? '-' : '+'
            const colorTxt = item.income === false ? s.lose : s.profit

            return (
              <tr key={item.id} className={s.tr}>
                <td>{normalizeFormatDate(item.date)}</td>
                <td>{text}</td>
                <td>{item.category}</td>
                <td>{item.comment}</td>
                <td className={colorTxt}>{normalizeNum(item.sum)}</td>
                <td>{normalizeNum(item.balance)}</td>
              </tr>
            )
          })}
            </tbody>
            </table>
            </HomeTabContainer>
          );
}
