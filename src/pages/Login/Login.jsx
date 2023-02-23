import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { FormLogin } from "./Verification";


const Login = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, error } = useSelector((state) => state.auth);

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
    <Container className="card-body-form">
        <Form className="" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <Form.Group className="my-3">
                <label className="labelLogin">Email</label>
                <Form.Control type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mt-3">
                <label className="labelLogin">Password</label>
                <Form.Control type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <p className="sign-up text-right link-login">
            Don't have an Account? <Link as={Link} to="/register" className="link">Sign Up?</Link>
            </p>
            <Button type="submit" className="col-12 border-0 signIn mt-3">
            Sign in
            </Button>
        </Form>
        <p className="text-center mt-2">
            <Link as={Link} to="/" className="back-home">Back To Home</Link>
         </p>
</Container>
</>
);
};

export default Login;