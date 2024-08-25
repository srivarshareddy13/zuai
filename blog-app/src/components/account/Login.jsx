import { useState,useContext } from 'react';

import { Box,TextField,Button, styled, Typography } from '@mui/material';

import { API } from "../../service/api";

import { DataContext  } from '../../context/DataProvider';

import {useNavigate} from "react-router-dom";

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
`
const Text = styled(TextField)`
    margin-top: 20px;
`
const Typo = styled(Typography)`
    margin-top: 20px;
`

const Buttons = styled(Button)`
    margin-top: 20px;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    margin-top: 10px;
    line-height: 0;
    font-weight: 600;
`
const loginInitialValues = {
    username: '',
    password: '',
}

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

const Login = ({ isUserAuthenticated }) => {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');
    const [login, setLogin] = useState(loginInitialValues)

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
        toggleAccount('signup');
    }

    const toggleLogin = () => {
        toggleAccount('login');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
       let response = await API.userSignup(signup); 
       if (response.isSuccess) {
            setError('')
            setSignup(signupInitialValues);
            toggleAccount('login')
       } else {
            setError('something went wrong! please try again later!')
       }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('')
            setLogin(loginInitialValues)
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({ username: response.data.username, name: response.data.name })

            isUserAuthenticated(true);
            
            navigate('/');
        } else {
            setError("something went wrong! please try again later")
        }
    }

    return (
        <Component>
            <Box>
                <Image src="https://tse1.mm.bing.net/th?id=OIP.NAJkPJjVI9EAs9nDUknvngHaEy&pid=Api&P=0&h=180" />
                { account === 'login' ? 
                    <Wrapper>
                        <Text variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name="username" label="Enter Username" />
                        <Text variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                        { error && <Error>{error}</Error>}
                        <Buttons variant='contained' onClick={() => loginUser()}>Login</Buttons>
                        <Typo style={{ textAlign: "center" }}>OR</Typo>
                        <Buttons onClick={() => toggleSignup()}>Create account</Buttons>
                    </Wrapper> 
                    : 
                    <Wrapper>
                        <Text variant="standard" onChange={(e) => onInputChange(e)} label="Enter Name" />
                        <Text variant="standard" onChange={(e) => onInputChange(e)} label="Enter Username" />
                        <Text variant="standard" onChange={(e) => onInputChange(e)} label="Enter Password" />
                        
                        { error && <Error>{error}</Error>}
                        <Buttons variant='contained' onClick={() => signupUser()}>Signup</Buttons>
                        <Typo style={{ textAlign: "center" }}>OR</Typo>
                        <Buttons onClick={() => toggleLogin()}>Already have an account</Buttons>
                    </Wrapper> 
                }
            </Box>
        </Component>
    )
}

export default Login;