import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/AdministrationPanel/AdministrationPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    showDateAdm: boolean;
    showDate: any;

    showPatientAdm: boolean;
    showPatient: any;

}

const AdministrationPanel = (props: Props) => {
    return (
        <section className="AdministrationPanel">
            <div id="Today" className="AdministrationPanel__btn AdministrationPanel__btn_active"> <h2>CITAS DE HOY</h2></div>
            <div id="newDate" className="AdministrationPanel__btn" onClick={props.showDate}> <h2>NUEVA CITA</h2></div>
            <div id="newPatient" className="AdministrationPanel__btn" onClick={props.showPatient}> <h2>NUEVO PACIENTE</h2></div>

            <script>
                
            </script>

        </section>

    )
};


export default AdministrationPanel;