import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  due_date: yup.date(),
  user_id: yup.string().nullable(),
});
