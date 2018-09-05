import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/Login/Login.scss';

interface Props {
    email: string;
    password: string;
    login: any;
    handleChangeEmail: any;
    handleChangePassword: any;
    errorLogged: boolean;
    goToRegister: any;
}

const Login = (props: Props) => {
    return (
        <section className="login">
            <div className="login__contenedor">

                <div className="login__contenedor__image__logo">
                    <img src="./assets/img/Logo.png" />
                </div>

                <article className="login__contenedor__formcontenedor">
                    <form className="login__contenedor__formcontenedor__form" onSubmit={props.login}>
                        <label className="login__contenedor__formcontenedor__form__label" htmlFor="#">Correo Electrónico</label>
                        <input className="login__contenedor__formcontenedor__form__input" type="email" name="email" placeholder="Correo Electrónico" onChange={props.handleChangeEmail} />
                        <label className="login__contenedor__formcontenedor__form__label" htmlFor="#">Contraseña</label>
                        <input className="login__contenedor__formcontenedor__form__input" type="password" name="password" placeholder="Contraseña" onChange={props.handleChangePassword} />
                        <button className="login__contenedor__formcontenedor__form__button" type="submit">Login</button>
                    
                    <h3 className="login__contenedor__formcontenedor__register" onClick={props.goToRegister}> ¿No tienes cuenta? ¡Registrate!</h3>
                    
                    </form>

            </article>
            </div>
            {!props.errorLogged &&
                <div>
                   {/* <h2> Las credenciales no son correctas</h2>*/}
                </div>}

        </section>
    )
};


export default Login;