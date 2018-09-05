
import * as React from 'react';
import swal from 'sweetalert2';

import * as Calenda from "react-big-calendar";
import * as moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../components/Calendar/Calendar.scss';

interface Props {

}

Calenda.setLocalizer(Calenda.momentLocalizer(moment));

const Calendar = (props: Props) => {
    return (
        <section className="calendar">

            <Calenda
                defaultDate={new Date()}
                defaultView="month"
                events={[]}
                style={{ height: "100vh" }}
            />

        </section>
    )

};


export default Calendar;