import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/TodaysPatients/TodaysPatients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    appointment: any;
    patients: any;
}


const TodaysPatients = (props: Props) => {
    console.log("today patients " + props.appointment);
    return (
        <section className="TodaysPatients">
            <div className="TodaysPatients__title">
                <h3> PACIENTES DE HOY </h3>
            </div>
            <div className="TodaysPatients__items">
                <div className="TodaysPatients__items__user">
                    <div className="TodaysPatients__items__user__name">
                        {props.patients.map((date: any) => {
                            date.name
                        })}
                    </div>
                    <div className="TodaysPatients__items__user__service">
                        {props.appointment.map((date: any) => {
                            date.type
                        })}
                    </div>
                </div>
                <div className="TodaysPatients__items__hour">
                    {props.appointment.map((date: any) => {
                        date.hour
                    })}
                </div>
            </div>
        </section>
    )
};


export default TodaysPatients;