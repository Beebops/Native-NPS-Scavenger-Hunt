import * as Yup from 'yup'

export const createHuntSchema = Yup.object().shape({
  huntTitle: Yup.string()
    .max(75, 'Title must be 75 characters or less')
    .required('A title is required'),
})
