// validationSchema.ts
import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  name: Yup.string().required("O Nome é obrigatório"),
  email: Yup.string().required("O Email é obrigatório").email(),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Os e-mails precisam ser iguais")
    .required("A confirmação de e-mail é obrigatória"),
  password: Yup.string().required("A senha é obrigatória").min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas precisam ser iguais")
    .required("A confirmação de senha é obrigatória."),
  age: Yup.number().required("A idade é obrigatória"),
  tel: Yup.number(),
  cpf: Yup.string().required("O CPF é obrigatório."),
});
