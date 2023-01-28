import s from './HomeTab.module.css';

export default function HomeTab() {
  return (
   <div className={s.container}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.border__start}>Дата</th>
            <th>Тип</th>
            <th>Категорія</th>
            <th>Комментар</th>
            <th>Сумма</th>
            <th>Баланс</th>
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
            </div>
          );
}
