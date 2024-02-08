import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Username must be at least 2 characters')
    .max(50, 'Username must be 50 characters or less')
    .required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one number and one special character.'
    )
    .required('A password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirming password is required'),
})
