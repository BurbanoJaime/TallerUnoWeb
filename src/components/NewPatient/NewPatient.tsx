import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/NewPatient/NewPatient.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    createPatient:any;
    deletePatient: any;
    
    name:string;
    birthdate:string;
    number:number;
    
    handleChangeName:any;
    handleChangeBirthdate:any;    
    handleChangeNumber:any;    
    
}

const NewPatient = (props: Props) => {
    return (
        <section className="NewPatient">
            <div className="NewPatient__form">

                <form onSubmit={props.createPatient} className="NewPatient__form__items">
                    <label className="NewPatient__form__items__child">Nombre</label>
                    <input className="NewPatient__form__items__child" type="text" onChange={props.handleChangeName}></input>

                    <label className="NewPatient__form__items__child">Fecha de Nacimiento</label>
                    <input className="NewPatient__form__items__child" type="date"onChange={props.handleChangeBirthdate} />
                   
                    <label className="NewPatient__form__items__child">Número de celular</label>
                    <input className="NewPatient__form__items__child" type="number" onChange={props.handleChangeNumber}></input>

                    <div className="NewPatient__form__items__child NewDate__form__items__child__btns">
                        <button className="NewPatient__form__items__child" type="submit"> CREAR </button>
                        <button className="NewPatient__form__items__child" type="button" onClick={props.deletePatient} >CANCELAR </button>

                    </div>
                </form>
            </div>
        </section>
    )
};

export default NewPatient;