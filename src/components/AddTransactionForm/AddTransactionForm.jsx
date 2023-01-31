import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChakraProvider, Switch } from '@chakra-ui/react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { addTransaction } from 'redux/transactions/operations';
import { selectCategories } from 'redux/transactions/transactionsSlice';
import Button from 'components/Button/Button';

// import css from './AddTransactionForm.module.css';
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
  // categoryId: '',
  comment: '',
  amount: '',
};

const schema = yup.object().shape({
  // categoryId: yup.string().required('Pls select category'),
  amount: yup.number().required().positive().integer(),
  comment: yup.string().min(2),
  transactionDate: yup.date().required(),
});

export const AddTransactionForm = () => {
  const categories = useSelector(selectCategories);
  const expenseCategories = categories.filter(el => el.type !== 'INCOME');
  const incomeCategories = categories.filter(el => el.type === 'INCOME');
  const incomeCategoriesId = incomeCategories.map(el => {
    return el.id;
  });

  // SWITCH TRANSACTION TYPE====================================================
  const [isIncomeTransaction, setIsIncomeTransaction] = useState(true);
  const [categoryIdFromDropdown, SetCategoryIdFromDropdown] = useState('');
  console.log('categoryIdFromDropdown:', categoryIdFromDropdown);

  const toggleTransactionType = () => {
    setIsIncomeTransaction(isIncomeTransaction => !isIncomeTransaction);
  };
  // ====================================================

  const dispatch = useDispatch();

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

    console.log(values);
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
                <ToggleLabel htmlFor="transactionType">Income</ToggleLabel>
                <ChakraProvider>
                  <Switch
                    onChange={toggleTransactionType}
                    id="transactionType"
                    size="lg"
                    colorScheme="green"
                    name="transactionType"
                  />
                </ChakraProvider>

                <ToggleLabel>Expense</ToggleLabel>
              </ToggleBox>
              {!isIncomeTransaction && (
                <DropdownMenu
                  expenseCategories={expenseCategories}
                  handleDropDown={handleDropDown}
                />
              )}
              <DateWrapper>
                <InputLabel>
                  <InputAmount type="text" name="amount" placeholder="0.00" />
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
