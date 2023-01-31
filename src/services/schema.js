import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(1, 'Too Short!').max(12, 'Too Long!').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(12, 'Too Long!').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
});

export const LoginSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(12, 'Too Long!').required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
});
