import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Switch } from '@chakra-ui/react';

// import { Icons } from 'components/Icons/Icons';

import { addTransaction } from 'redux/transactions/operations';

import css from './AddTransactionForm.module.css';
import Button from 'components/Button/Button';

const INITIAL_STATE = {
  transactionDate: '',
  type: '',
  categoryId: '',
  comment: '',
  amount: '',
};

export const AddTransactionForm = () => {
  const [newTransaction, setNewTransaction] = useState(INITIAL_STATE);
  const { type, categoryId, amount, transactionDate, comment } = newTransaction;
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setNewTransaction({ ...newTransaction, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addTransaction({
        transactionDate,
        type,
        categoryId,
        comment,
        amount,
      })
    );
    setNewTransaction(INITIAL_STATE);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.formTitle}>Add transaction</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <label>Income</label>
          <Switch
            id="transactionType"
            isChecked
            size="lg"
            colorScheme="green"
          />
          <label>Expense</label>
        </div>
        <label className={css.inputLabel}>
          <input
            className={css.formInput}
            type="select"
            name="categoryId"
            onChange={handleChange}
            value={categoryId}
            placeholder="Select a category"
            required
          />
        </label>
        <div>
          <label className={css.inputLabel}>
            <input
              className={css.formInput}
              type="text"
              name="amount"
              onChange={handleChange}
              value={amount}
              placeholder="0.00"
              required
            />
          </label>
          <label className={css.inputLabel}>
            <input
              className={css.formInput}
              type="date"
              name="transactionDate"
              onChange={handleChange}
              value={transactionDate}
              required
            />
          </label>
        </div>
        <label className={css.inputLabel}>
          <input
            className={css.formInput}
            type="text"
            name="comment"
            onChange={handleChange}
            value={comment}
            placeholder="Comment"
          />
        </label>

        <Button type="submit" content={'add'} hasAccent={true} />
      </form>
      <NavLink to="/home">
        <Button type="button" content={'cancel'} />
      </NavLink>
    </div>
  );
};
