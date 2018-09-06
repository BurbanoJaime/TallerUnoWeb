import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/TodaysPatients/TodaysPatients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    appointment: any;
}


const TodaysPatients = (props: Props) => {
    return (
        <section className="TodaysPatients">
            <div className="TodaysPatients__title">
                <h3> PACIENTES DE HOY </h3>
            </div>
            {props.appointment.map((juandis: any) => {
                return <div className="TodaysPatients__items">
                    <div className="TodaysPatients__items__user">
                        <div className="TodaysPatients__items__user__name">{juandis.patient}</div>
                        <div className="TodaysPatients__items__user__service">{juandis.type}</div>
                    </div>
                    <div className="TodaysPatients__items__hour">{juandis.hour}
                    </div>
                </div>
            })}

        </section>
    )
};


export default TodaysPatients;