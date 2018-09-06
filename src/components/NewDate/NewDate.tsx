import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/NewDate/NewDate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
    
    deleteDate: any;
    createDate: any;
    
    patient: string;
    date: string;
    hour: string;
    type: string;
    title: string;
    description: string;

    handleChangePatient: any;
    handleChangeDate: any;
    handleChangeHour: any;
    handleChangeType: any;
    handleChangeTitle: any;
    handleChangeDescription: any;

    patientsNew: any;
}

const NewDate = (props: Props) => {
    return (
        <section className="NewDate">
            <div className="NewDate__form">

                <form onSubmit={props.createDate} className="NewDate__form__items">
                    <label className="NewDate__form__items__child">Paciente</label>
                    <select className="NewDate__form__items__child" name="users" id="users" onChange={props.handleChangePatient}>
                        {props.patientsNew.map((pat: any) => {
                            return <option value={pat.name} selected> {pat.name} </option>
                            {console.log("Nombre: "+ pat.name)}
                        })}
                    </select>
                    <label className="NewDate__form__items__child">Fecha</label>
                    <input className="NewDate__form__items__child" type="date" onChange={props.handleChangeDate} />
                    <label className="NewDate__form__items__child">Hora</label>
                    <input className="NewDate__form__items__child" type="time" onChange={props.handleChangeHour} />
                    <label className="NewDate__form__items__child">Tipo</label>
                    <select className="NewDate__form__items__child" name="users" id="users" onChange={props.handleChangeType}>
                        <option value="Funcional"> FUNCIONAL </option>
                        <option value="Estetica"> ESTÉTICA </option>
                        <option value="Mecanica"> MECÁNICA </option>
                        <option value="Valoracion" defaultChecked> VALORACIÓN </option>
                    </select>
                    <label className="NewDate__form__items__child"> Titulo </label>
                    <input className="NewDate__form__items__child" type="text" onChange={props.handleChangeTitle}></input>
                    <label className="NewDate__form__items__child"> Descripción </label>
                    <input className="NewDate__form__items__child NewDate__form__items__child__description" type="text" onChange={props.handleChangeDescription}></input>
                    <div className="NewDate__form__items__child NewDate__form__items__child__btns">
                        <button className="NewDate__form__items__child" type="submit" onClick={props.createDate}> CREAR </button>
                        <button className="NewDate__form__items__child" type="button" onClick={props.deleteDate} > CANCELAR </button>

                    </div>
                </form>
            </div>
        </section>
    )
};

export default NewDate;