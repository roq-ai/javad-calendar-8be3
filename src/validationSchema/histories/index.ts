import * as yup from 'yup';

export const historyValidationSchema = yup.object().shape({
  completed_date: yup.date(),
  task_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
