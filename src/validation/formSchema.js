import * as yup from 'yup';

const formSchema = yup.object().shape({
   name: yup.string()
      .min(2, 'name must be at least 2 characters')
      .required('name is required'),

   size: yup.string().required('you must pick a size'),

   special: yup.string().max(300, 'you exceeded 300 characters')
})

export default formSchema