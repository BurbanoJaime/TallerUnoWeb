import * as React from 'react';
import swal from 'sweetalert2'

import './Root.scss';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
{/*import Dashboard from '../Dashboard/Dashboard';*/ }

import Dashboard from '../../containers/Dashboard/Dashboard';
import NewDate from '../../components/NewDate/NewDate';
import NewPatient from '../../components/NewPatient/NewPatient';




interface Props {
    //users: [{}];
}

interface State {
    statusScreen: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    errorLogged: boolean;
}

export class Root extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            statusScreen: 2,
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorLogged: false,
        }
    }


    register = (event: any) => {
        event.preventDefault;

        if (this.state.password != '' && this.state.confirmPassword != '' && this.state.name != "" && this.state.email != '') {
            event.preventDefault;



            if (this.state.password === this.state.confirmPassword) {

                /* localStorage.setItem(users[], {
                     this.state.name, this.state.email, this.state.password
                 });*/

                localStorage.setItem('name', this.state.name);
                localStorage.setItem('email', this.state.email);
                localStorage.setItem('password', this.state.password);

                this.setState({
                    statusScreen: 0
                });

                event.preventDefault;

            } else {
                event.preventDefault;

                swal({
                    title: 'Error!',
                    text: 'Las contraseñas no coinciden',
                    type: 'error',
                    confirmButtonText: 'Cool'
                })
                event.preventDefault;

            }
        } else {
            event.preventDefault;

            swal({
                title: 'Error!',
                text: 'Por favor llene los campos requeridos',
                type: 'error',
                confirmButtonText: 'Cool'
            })
            event.preventDefault;

        }
        event.preventDefault;

    };

    handleChangeName = (event: any) => {
        this.setState({ name: event.target.value })
    };

    handleChangeEmail = (event: any) => {
        this.setState({ email: event.target.value })
    };

    handleChangePassword = (event: any) => {
        this.setState({ password: event.target.value })
    };

    handleChangeConfirmPassword = (event: any) => {
        this.setState({ confirmPassword: event.target.value })
    };

    goToRegister = (event: any) => {
        event.preventDefault;
        this.setState({
            statusScreen: 1
        });
    }

    goToLogin = (event: any) => {
        event.preventDefault;
        this.setState({
            statusScreen: 0
        });
    }


    login = (event: any) => {
        event.preventDefault();
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        console.log(this.state.statusScreen);
        if (this.state.email === email && this.state.password === password) {
            this.setState({
                statusScreen: 2
            });
            return;
        }
        this.setState({
            errorLogged: true
        })
    };

    render() {
        return (
            <section>

                {this.state.statusScreen === 0 &&
                    <Login
                        email={this.state.email}
                        password={this.state.password}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        login={this.login}
                        errorLogged={this.state.errorLogged}
                        goToRegister={this.goToRegister}

                    />
                }

                {
                    this.state.statusScreen === 1 &&
                    <Register
                        name={this.state.name}
                        email={this.state.email}
                        password={this.state.password}
                        confirmPassword={this.state.confirmPassword}


                        register={this.register}
                        handleChangeName={this.handleChangeName}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangePassword={this.handleChangePassword}
                        handleChangeConfirmPassword={this.handleChangeConfirmPassword}
                        goToLogin={this.goToLogin}
                    />
                }

                {
                    this.state.statusScreen === 2 &&
                    <Dashboard
                    
                    />
                }

            </section>)

    }
}























