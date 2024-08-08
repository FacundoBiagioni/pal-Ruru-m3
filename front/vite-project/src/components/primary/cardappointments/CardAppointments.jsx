import React from 'react';


function CardAppointment({
    id,
    date,
    time,
    userId,
    status,
    description,
    handleAppointmentCancel
}) {

    const appointmentDate = new Date(date);

    const formatDate = `${appointmentDate.getDate()} / ${
        appointmentDate.getMonth() + 1
    } / ${appointmentDate.getFullYear()}`;

    function handleClick() {
        if (window.confirm(`Desea cancelar el turno del día ${formatDate} a las ${time}?`)) {
            handleAppointmentCancel(id);
        }
    }

    return (
        <div>
            <span>{formatDate}</span>
            <span>{time}</span>
            <span>{description}</span>
            {status === "active" ? (
                <span onClick={handleClick}>Activo</span>
            ) : (
                <span>Cancelado</span>
            )}
        </div>
    );
}

export default CardAppointment;
