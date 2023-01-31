import css from './CustomSwitch.module.css';

export const CustomSwitch = ({ toggleTransactionType }) => (
  <>
    <input
      defaultChecked
      className={css.inputSwitch}
      type="checkbox"
      name="transactionType"
      id="transactionType"
      onChange={toggleTransactionType}
    ></input>
    <label className={css.labelSwitch} htmlFor="transactionType"></label>
  </>
);
