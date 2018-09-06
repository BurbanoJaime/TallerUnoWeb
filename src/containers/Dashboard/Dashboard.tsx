import * as React from 'react';
import '../Dashboard/Dashboard.scss';

import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import AdministrationPanel from '../../components/AdministrationPanel/AdministrationPanel';
import Calendar from '../../components/Calendar/Calendar';
import TodayPatients from '../../components/TodaysPatients/TodaysPatients';
import TomorrowPatients from '../../components/TomorrowPatients/TomorrowPatients';

import NewDate from '../../components/NewDate/NewDate';
import NewPatient from '../../components/NewPatient/NewPatient';
import { isDate } from 'util';
import { parseTwoDigitYear } from '../../../node_modules/moment';

interface Props {
}

interface State {
    showDateAdm: boolean,
    showPatientAdm: boolean,

    today: Date;

    /* Data of "New Patient" */
    name: string;
    birthdate: string;
    number: number;

    /* Data of "New Date" */
    patient: string;
    date: string;
    hour: string;
    type: string;
    title: string;
    description: string;

    appointment: any;
    patients: any;

}

export class Dashboard extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            appointment: [],
            patients: [],
            today: null,

            /* Data of "New Date" */
            showDateAdm: false,
            patient: '',
            date: '',
            hour: '',
            type: '',
            title: '',
            description: '',

            /* Data of "New Patient" */
            showPatientAdm: false,
            name: '',
            birthdate: '',
            number: 0,
        }

    }

    onChangeDate = (date: Date) => {
        this.setState({
            today: new Date(),
        });
    }

    /* SHOW BY GIVING CLICK ON THE CONTROL PANEL */
    showPatient = (event: any) => {
        event.preventDefault();
        this.setState({
            showPatientAdm: true
        });

    }

    /* DOESN'T SHOW BY GIVING CLICK ON THE CANCEL BUTTON*/
    deletePatient = (event: any) => {
        event.preventDefault();
        this.setState({
            showPatientAdm: false
        });
        //console.log(this.state.showPatientAdm);
    }

    handleChangeName = (event: any) => {
        this.setState({ name: event.target.value })
    };

    handleChangeBirthdate = (event: any) => {
        this.setState({ birthdate: event.target.value })
    };

    handleChangeNumber = (event: any) => {
        this.setState({ number: event.target.value })
    };

    createPatient = (event: any) => {
        event.preventDefault();

        this.state.patients.push({
            name: this.state.name,
            birthdate: this.state.birthdate,
            number: this.state.number
        })

        //console.log(this.state.patients);

        this.setState({
            showPatientAdm: false
        });
    }

    /* Methods of "New Day"*/

    showDate = (event: any) => {
        event.preventDefault();
        this.setState({
            showDateAdm: true
        });

        //console.log(this.state.showPatientAdm);


    }

    deleteDate = (event: any) => {
        event.preventDefault();
        this.setState({
            showDateAdm: false
        });

        //console.log(this.state.showPatientAdm);

    }

    handleChangePatient = (event: any) => {
        this.setState({ patient: event.target.value })
    };

    handleChangeDate = (event: any) => {
        this.setState({ date: event.target.value })
    };

    handleChangeHour = (event: any) => {
        this.setState({ hour: event.target.value })
    };

    handleChangeType = (event: any) => {
        this.setState({ type: event.target.value })
    };

    handleChangeTitle = (event: any) => {
        this.setState({ title: event.target.value })
    };

    handleChangeDescription = (event: any) => {
        this.setState({ description: event.target.value })
    };

    createDate = (event: any) => {
        event.preventDefault();

       
        this.state.appointment.push({
            patient: this.state.patient,
            date: this.state.date,
            hour: this.state.hour,
            type: this.state.type,
            title: this.state.title,
            description: this.state.description
        })

        this.setState({
            showDateAdm: false
        });
    }



    render() {
        return (
            <section>
                <HeaderDashboard />
                <AdministrationPanel
                    showDateAdm={this.state.showDateAdm}
                    showDate={this.showDate}

                    showPatientAdm={this.state.showPatientAdm}
                    showPatient={this.showPatient}
                />
                <Calendar />
                <TodayPatients
                    appointment={this.state.appointment}
                />
                <TomorrowPatients />

                {
                    this.state.showDateAdm &&
                    <NewDate
                        patient={this.state.patient}
                        date={this.state.date}
                        hour={this.state.hour}
                        type={this.state.type}
                        title={this.state.title}
                        description={this.state.description}
                        patientsNew={this.state.patients}

                        createDate={this.createDate}
                        deleteDate={this.deleteDate}

                        handleChangePatient={this.handleChangePatient}
                        handleChangeDate={this.handleChangeDate}
                        handleChangeHour={this.handleChangeHour}
                        handleChangeType={this.handleChangeType}
                        handleChangeTitle={this.handleChangeTitle}
                        handleChangeDescription={this.handleChangeDescription}
                    />
                }
                {
                    this.state.showPatientAdm &&
                    <NewPatient
                        name={this.state.name}
                        birthdate={this.state.birthdate}
                        number={this.state.number}

                        createPatient={this.createPatient}
                        deletePatient={this.deletePatient}

                        handleChangeName={this.handleChangeName}
                        handleChangeBirthdate={this.handleChangeBirthdate}
                        handleChangeNumber={this.handleChangeNumber}

                    />
                }
            </section>
        )
    }


}

export default Dashboard;