import React from "react";


function Filas_Listar({ Fecha, cita, servicio,Motivo,medicamentoID }) {
    return (

        <tr>
            <td scope="row">{Fecha}</td>
            <td> {cita} </td>
            <td> {servicio} </td>
            <td> {Motivo} </td>
            <td> {medicamentoID} </td>
        </tr>

    );
}



export default Filas_Listar;