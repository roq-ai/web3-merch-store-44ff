import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  web3_currency: yup.string().required(),
  account_id: yup.string().nullable(),
});
