
export const validateEmail=(email:string):string | undefined =>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)?undefined:'Invalid Email'
};

export const validatePassword=(password:string):string | undefined =>{
    const passwordRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password)?undefined:'Password must be atleast 8 characters and include numbers and special characters (!@#$%^&*)';
};
