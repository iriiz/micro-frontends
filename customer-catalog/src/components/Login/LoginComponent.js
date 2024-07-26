import React from 'react';
import { Form, Button } from 'react-bootstrap';

function LoginComponent({ handleLogin, passwordVisible, handleTogglePassword }) {
    return (
        <div className="container-body-login">
            <div className="container-login">
                <h1 className="text-center">Iniciar Sesion</h1>
                <hr />
                <br />
                <Form>
                    <Form.Group className="content-login-data" controlId="formGroupEmail">
                        <Form.Label className="form-label space-label">Correo</Form.Label>
                        <Form.Control className="form-control" type="email" placeholder="Ingresar correo" />
                    </Form.Group>
                    <Form.Group className="content-login-data" controlId="formGroupPassword">
                        <Form.Label className="form-label space-label">Contraseña</Form.Label>
                        <div className="d-flex">
                            <Form.Control
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Ingresar contraseña"
                            />
                            <Button
                                onClick={handleTogglePassword}
                            >
                                {passwordVisible ? 'Hide' : 'Show'}
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
                <br />
                <hr /> <br />
                <div className="d-grid gap-2 col-11 mx-auto">
                    <button className="btn btn-outline-primary" type="button" onClick={handleLogin} > Entrar </button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent