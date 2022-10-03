import * as yup from 'yup';

const formSchema = yup.object().shape({
   name: yup.string()
      .min(2, 'name must be at least 2 characters')
      .required(),

   size: yup.string().required(),

   pepperoni: yup.boolean(),

   ham: yup.boolean(),

   mushrooms: yup.boolean(),

   pineapple: yup.boolean(),

   spinach: yup.boolean(),

   olives: yup.boolean(),

   garlic: yup.boolean(),

   onion: yup.boolean(),

   bellPepper: yup.boolean(),

   tomato: yup.boolean(),

   special: yup.string().max(300, 'you exceeded 300 characters')
})

export default formSchema