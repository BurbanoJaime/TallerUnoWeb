import * as React from 'react';
import swal from 'sweetalert2'
import '../../components/HeaderDashboard/HeaderDashboard.scss';


interface Props {

}

const HeaderDashboard = (props: Props) => {
    return (
        <section className="HeaderDashboard">

            <div className="HeaderDashboard__logo">
                <img src="./assets/img/invested_logo.png" />

            </div>

            <div className="HeaderDashboard__user">

                <div className="HeaderDashboard__user__profile__name">
                </div>
                <div className="HeaderDashboard__user__profile__picture"></div>

            </div>
        </section>
    )
};


export default HeaderDashboard;