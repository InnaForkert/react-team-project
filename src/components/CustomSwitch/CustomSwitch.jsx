import { Input, Label } from './CustomSwitch.styled';

export const CustomSwitch = ({ toggleTransactionType }) => (
  <>
    <Input
      defaultChecked
      type="checkbox"
      name="transactionType"
      id="transactionType"
      onChange={toggleTransactionType}
    ></Input>
    <Label htmlFor="transactionType"></Label>
  </>
);
