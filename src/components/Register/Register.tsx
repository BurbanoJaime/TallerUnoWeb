import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/Register/Register.scss';


interface Props {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    register:any;
    handleChangeName:any;
    handleChangeEmail:any;
    handleChangePassword:any;
    handleChangeConfirmPassword:any;
    goToLogin:any;
}



const Register = (props: Props) => {
    return (
        <section className="register">
            <div className="register__contenedor">

                <div className="register__contenedor__image__logo">
                    <img src="./assets/img/Logo.png" />
                </div>

                <article className="register__contenedor__formcontenedor">
                    <form className="register__contenedor__formcontenedor__form" onSubmit={props.register}>
                        <label className="register__contenedor__formcontenedor__form__label" htmlFor="#">Nombre Completo</label>
                        <input className="register__contenedor__formcontenedor__form__input" type="text" name="fullname" placeholder="Nombre Completo" onChange={props.handleChangeName} />
                        <label className="register__contenedor__formcontenedor__form__label" htmlFor="#">Correo Electrónico</label>
                        <input className="register__contenedor__formcontenedor__form__input" type="email" name="email" placeholder="Correo Electrónico" onChange={props.handleChangeEmail} />
                        <label className="register__contenedor__formcontenedor__form__label" htmlFor="#">Contraseña</label>
                        <input className="register__contenedor__formcontenedor__form__input" type="password" name="password" placeholder="Contraseña" onChange={props.handleChangePassword} />
                        <label className="register__contenedor__formcontenedor__form__label" htmlFor="#">Confirmar Contraseña</label>
                        <input className="register__contenedor__formcontenedor__form__input" type="password" name="confirm_Password" placeholder="Confirma Contraseña" onChange={props.handleChangeConfirmPassword} />
                        <button className="register__contenedor__formcontenedor__form__button" type="submit">Registrar</button>
                        <h3 className="register__contenedor__formcontenedor__form__register" onClick={props.goToLogin}> ¿Ya tienes cuenta? ¡Ingresa!</h3>

                    </form>
                </article>
            </div>
        </section>
    )
};


export default Register;