
export default function Validation(values) {

    const errors={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    //Errors if no name is passed
    if (values.username === '') {
        console.log(values.name)
        errors.name = "Name is Required!"
    }

    //Errors if no email is passed
    if (values.email === '') {
        errors.email = "email is required!"
    }else if (!email_pattern.test(values.email)) {
        errors.email = "Email is is not correct!"
    }

    //Errors if no password is passed
    if (values.password === '') {
        errors.password = "Password is required!"
    }else if (!password_pattern.test(values.password)) {
        errors.password = "password is is not correct!"
    }


  return (errors)
}
