import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { FormLogin } from "./Verification";


const Login = () => {
    const dispatch = useDispatch();
    // const { isAuthenticated, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "") {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Mohon Masukan Email',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (password === "") {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Password tidak boleh kosong',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (email !== "" && password !== "") {
            dispatch(FormLogin({ email, password }));
        }
    };
return (
    <>
    
    </>
);
};

export default Login;