import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/TomorrowPatients/TomorrowPatients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    patients: any,
}

const TomorrowPatients = (props: Props) => {
    return (
        <section className="TomorrowPatients">
            <div className="TomorrowPatients__title">
                <h3> PACIENTES </h3>
            </div>
            {props.patients.map((date: any) => {
                return <div className="TomorrowPatients__items">
                    <div className="TomorrowPatients__items__user">
                        <div className="TomorrowPatients__items__user__name">{date.name}</div>
                        <div className="TomorrowPatients__items__user__service">{date.number}</div>
                    </div>
                    <div className="TomorrowPatients__items__hour">{date.birthdate} </div>
                </div>
            })}
        </section>
    )
};


export default TomorrowPatients;