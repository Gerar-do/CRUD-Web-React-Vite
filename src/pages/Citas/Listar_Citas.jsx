import React, { useEffect, useState } from "react";
import "../../assets/stylesheets/Listar_Mascotas.css";
import Filas_Listar from "../../Componentes/Citas/Filas_Listar_Citas";
import Navbar from "../../Componentes/Navbar";
import {  Link, Outlet } from "react-router-dom";

function Listar_Duenio() {
    const [listar, setListar] = useState([]);


    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };

    //   fetch("http://localhost:8080/Cita/list", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));


    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:8080/Cita/list');
        const Citas = await data.json()
        setListar(Citas);
    }


    useEffect(() => {
        obtenerDatos()
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
<br />
            <br />
            <p class="text-center fs-1 title is-1">Citas Agregadas Recientemente</p>
            <div className="Table">
                <table className="table" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Citas ID</th>
                            <th scope="col">Tipo de Servicio</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Motivo de Cita</th>
                            <th scope="col">ID Medicamento</th>
                            <th scope="col">Nombre del Dueño</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Mascota</th>


                            <div class="d-grid gap-2 col-6 mx-auto">
                             <Link to="/Principal"  className="button is-primary">Regresar</Link>
                             </div>
                        </tr>
                    </thead>

                    
                    <tbody>
                        {listar.map((select) => (

                            <tr key={select.citaId}>
                                <td scope="row">{select.citaId}</td>
                                <td> {select.servicio} </td>
                                <td> {select.fecha} </td>
                                <td> {select.motivo} </td>
                                <td> {select.medicamentoId} </td>
                                <td> {select.nombredeldueno} </td>
                                <td> {select.telefono} </td>
                                <td> {select.mascota} </td>
                            </tr>))}

                    </tbody>
                </table>

            </div>
 
 
<br/>

        </React.Fragment>
   
       
    )
}
export default Listar_Duenio;