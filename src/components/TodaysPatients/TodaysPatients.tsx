import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/TodaysPatients/TodaysPatients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    appointmentToday: any;
}


const TodaysPatients = (props: Props) => {
    return (
        <section className="TodaysPatients">
            <div className="TodaysPatients__title">
                <h3> CITAS DE HOY </h3>
            </div>
            {props.appointmentToday.map((date: any) => {
                return <div className="TodaysPatients__items">
                    <div className="TodaysPatients__items__user">
                        <div className="TodaysPatients__items__user__name">{date.patient}</div>
                        <div className="TodaysPatients__items__user__service">{date.type}</div>
                    </div>
                    <div className="TodaysPatients__items__hour">{date.hour}
                    </div>
                </div>
            })}

        </section>
    )
};


export default TodaysPatients;