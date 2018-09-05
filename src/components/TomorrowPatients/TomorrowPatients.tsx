import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/TomorrowPatients/TomorrowPatients.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {

}

const TomorrowPatients = (props: Props) => {
    return (
        <section className="TomorrowPatients">
            <div className="TomorrowPatients__title">
                <h3> PACIENTES DE MAÑANA </h3>
            </div>
            <div className="TomorrowPatients__items"> 
                <div className="TomorrowPatients__items__user">
                    <div className="TomorrowPatients__items__user__name">NOMBRE APELLIDO</div>
                    <div className="TomorrowPatients__items__user__service">SERVICIO</div>
                </div>
                <div className="TomorrowPatients__items__hour"> 6 am </div>
            </div>

            <div className="TomorrowPatients__items"> 
                <div className="TomorrowPatients__items__user">
                    <div className="TomorrowPatients__items__user__name">NOMBRE APELLIDO</div>
                    <div className="TomorrowPatients__items__user__service">SERVICIO</div>
                </div>
                <div className="TomorrowPatients__items__hour"> 6 am </div>
            </div>

            <div className="TomorrowPatients__items"> 
                <div className="TomorrowPatients__items__user">
                    <div className="TomorrowPatients__items__user__name">NOMBRE APELLIDO</div>
                    <div className="TomorrowPatients__items__user__service">SERVICIO</div>
                </div>
                <div className="TomorrowPatients__items__hour"> 6 am </div>
            </div>

            <div className="TomorrowPatients__items"> 
                <div className="TomorrowPatientser">
                    <div className="TomorrowPatients__items__user__name">NOMBRE APELLIDO</div>
                    <div className="TomorrowPatients__items__user__service">SERVICIO</div>
                </div>
                <div className="TomorrowPatients__items__hour"> 6 am </div>
            </div>

             <div className="TomorrowPatients__items"> 
                <div className="TomorrowPatientser">
                    <div className="TomorrowPatients__items__user__name">NOMBRE APELLIDO</div>
                    <div className="TomorrowPatients__items__user__service">SERVICIO</div>
                </div>
                <div className="TomorrowPatients__items__hour"> 6 am </div>
            </div>

        </section>
    )
};


export default TomorrowPatients;