import * as yup from "yup"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,12}$/;


export const registerFormValidationSchema = yup.object({
    username: yup
    .string()
    .required("Username is required.")
    .min(3,"Username required atleast 3 character")
    .max(25,"Username cannot exceed 25 character"),

    email:yup
    .string()
    .email('Invalid email')
    .required("Email is required"),

    password:yup
    .string()
    .required("Password is required")
    .matches(passwordRegex,"Weak password"),

    confirm_password: yup
    .string()
    .oneOf([yup.ref("password")],"password does not match")
    .required("Confirm password is required")

})

