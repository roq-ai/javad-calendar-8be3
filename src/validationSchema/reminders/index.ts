import * as yup from 'yup';

export const reminderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  reminder_date: yup.date(),
  user_id: yup.string().nullable(),
});
