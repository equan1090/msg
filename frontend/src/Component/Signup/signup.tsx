import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './signup.css';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actionCreators, State} from '../../state/index';



export default function SignupPage() {

    const dispatch = useDispatch();
    const { login, logout, authenticate, signUp } = bindActionCreators(actionCreators, dispatch)
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let errors: string[] = [];
        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }
        if (!firstName || !lastName || !emailAddress || !password || !confirmPassword) {
            errors.push("Please fill out all fields");
        }

        if (errors.length) {
            setErrors(errors);
            return null;
        }

        await dispatch(signUp(firstName, lastName, emailAddress, password)(dispatch));
    }


    return (
        <div className="signup-wrapper">
            <h1 id='signup-title'>Airmail</h1>
            <Container className="signup-container">
                <Row>
                    <Col>
                        <div className='signup-header'>
                            <h2>Create a new account</h2>
                            <p id="signup-text">It's quick and easy.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="Name" className="mb-3">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="LastName" className="mb-3">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="Email" className="mb-3">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="ConfirmPassword" className="mb-3">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id='signup-disclaimer'>People who use this application do not have to use their real information. This is just a simple application used to display my abilities as a full stack developer.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="signup-button no-hover">
                            Sign Up
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <p id='signup-login'>Already have an account? <a href="/">Login</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
