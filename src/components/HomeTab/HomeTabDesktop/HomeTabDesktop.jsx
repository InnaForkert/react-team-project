import s from './HomeTabDesktop.module.css';
import { HomeTabContainer } from './HomeTabDesktop.styled';

export default function HomeTabDesktop() {
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
            </tbody>
            </table>
            </HomeTabContainer>
          );
}
