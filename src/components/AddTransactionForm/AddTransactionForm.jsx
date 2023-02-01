import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { addTransaction } from 'redux/transactions/operations';
import { selectCategories } from 'redux/transactions/transactionsSlice';
import Button from 'components/Button/Button';

import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import {
  FormTitle,
  Wrapper,
  ModalWrap,
  FormBox,
  InputLabel,
  Input,
  DateWrapper,
  ToggleLabel,
  ToggleBox,
  InputComment,
  InputAmount,
  ErrorMessageBox,
} from './AddTransactionForm.styled';
import { Container } from 'components/Container/Container.styled';
import { CustomSwitch } from 'components/CustomSwitch/CustomSwitch';

const setCurrentDate = () => {
  const d = new Date();
  let day = d.getDate();
  if (day < 10) day = '0' + day;
  let month = d.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

const initialValues = {
  transactionDate: setCurrentDate(),
  comment: '',
  amount: '',
};

const schema = yup.object().shape({
  amount: yup.number().required().positive(),
  comment: yup.string().min(2).max(1000),
  transactionDate: yup
    .date()
    .required()
    .max(setCurrentDate(), 'Forbidden. Please choose a date in past'),
});

export const AddTransactionForm = () => {
  const categories = useSelector(selectCategories);
  const expenseCategories = categories.filter(el => el.type !== 'INCOME');
  const incomeCategories = categories.filter(el => el.type === 'INCOME');
  const incomeCategoriesId = incomeCategories.map(el => {
    return el.id;
  });
  const dispatch = useDispatch();
  const [isIncomeTransaction, setIsIncomeTransaction] = useState(false);
  const [categoryIdFromDropdown, SetCategoryIdFromDropdown] = useState('');

  const toggleTransactionType = () => {
    setIsIncomeTransaction(isIncomeTransaction => !isIncomeTransaction);
  };

  const handleSubmit = (values, actions) => {
    if (isIncomeTransaction) {
      values.type = 'INCOME';
      values.categoryId = incomeCategoriesId[0];
    } else {
      values.amount = -values.amount;
      values.type = 'EXPENSE';
      categoryIdFromDropdown
        ? (values.categoryId = categoryIdFromDropdown)
        : (values.categoryId = expenseCategories[8].id);
    }

    dispatch(addTransaction(values));
    dispatch(toggleModalAddTransactionOpen());
    actions.resetForm();
  };

  const handleDropDown = categoryId => {
    SetCategoryIdFromDropdown(categoryId);
  };

  return (
    <Wrapper>
      <Container>
        <ModalWrap>
          <FormTitle>Add transaction</FormTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <FormBox>
              <ToggleBox>
                <ToggleLabel className={isIncomeTransaction ? 'income' : ''}>
                  Income
                </ToggleLabel>
                <ChakraProvider>
                  <CustomSwitch toggleTransactionType={toggleTransactionType} />
                </ChakraProvider>

                <ToggleLabel className={!isIncomeTransaction ? 'expense' : ''}>
                  Expense
                </ToggleLabel>
              </ToggleBox>

              {!isIncomeTransaction && (
                <DropdownMenu
                  expenseCategories={expenseCategories}
                  handleDropDown={handleDropDown}
                />
              )}
              <DateWrapper>
                <InputLabel>
                  <InputAmount
                    type="number"
                    step="0.01"
                    min="0"
                    name="amount"
                    placeholder="0.00"
                  />
                  <ErrorMessageBox name="amount" component="div" />
                </InputLabel>
                <InputLabel>
                  <Input
                    type="date"
                    name="transactionDate"
                    id="transactionDate"
                  />
                  <ErrorMessageBox name="transactionDate" component="div" />
                </InputLabel>
              </DateWrapper>
              <InputLabel>
                <InputComment
                  type="text"
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessageBox name="comment" component="div" />
              </InputLabel>

              <Button type="submit" content={'add'} hasAccent={true} />
            </FormBox>
          </Formik>

          <Button
            type="button"
            content={'cancel'}
            onClick={() => {
              dispatch(toggleModalAddTransactionOpen());
            }}
          />
        </ModalWrap>
      </Container>
    </Wrapper>
  );
};
