import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";

import {  Link, Outlet } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";




function Agregar_Citas (){

  const [medicamentoId, setMedicamentoid] = useState(0);
  const [motivo, setMotivo] = useState('');
  const [servicio, setServicio] = useState('');
  const [fecha, setFecha] = useState('');
  const [nombredeldueno,setnombredeldueno] = useState('');
  const [telefono,settelefono] = useState('');
  const [mascota,setmascota] = useState('');

  const peticion = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(

          {
              "servicio": servicio,
              "fecha": fecha,
              "motivo": motivo,
              "medicamentoId": medicamentoId,
              "nombredeldueno":nombredeldueno,
              "telefono":telefono,
              "mascota":mascota
          }

      )
  }

  const agregar =async () => {
      const data = await fetch("http://localhost:8080/Cita/add", peticion)
          .then(res => res.json)
          .then(res => {alert("Registro Exitoso")})
          .then((data) => console.log(data))
          .catch((err) => console.error(err))
  }



    return(
        <>
        <Navbar/>
        <br/>
           <br/>
        <br/>
     <br/>
   
     <div class="d-grid gap-2 col-7 mx-auto text-center">
     
     <div class="col-12">
    <label for="inputAddress" class="form-label">Nombre del tutor de la mascota</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""   onChange={(event) => {setnombredeldueno(event.target.value)}} htmlFor="exampleFormControlInput1"/>
 
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Nombre de la mascota</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(event) => {setmascota(event.target.value)}} htmlFor="exampleFormControlInput1"/>
   
  </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">Tipo de Servicio</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(event) => {setServicio(event.target.value)}} htmlFor="exampleFormControlInput1"/>
   
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Motivo de la cita</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(event) => {setMotivo(event.target.value)}} htmlFor="exampleFormControlInput1"/>
   
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Fecha de la cita</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="01/01/2022" onChange={(event) => {setFecha(event.target.value)}} htmlFor="exampleFormControlInput1"/>
  </div>
 < div class="col-12">
    <label for="inputAddress2" class="form-label">ID del Medicamento</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="0,1,2,3"  onChange={(event) => {setMedicamentoid(event.target.value)}}  htmlFor="exampleFormControlInput1"/>
  
  </div>
  <br/>
  < div class="col-12">
    <label for="inputAddress2" class="form-label">Numero Telefonico</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" onChange={(event)=>{settelefono(event.target.value)}}  htmlFor="exampleFormControlInput1"/>
  
  </div>
  <br/>
  
         <button className=" button is-info" onClick={agregar} type="button" id="button-addon1">Enviar</button>
     <div class="d-grid gap-2 col-6 mx-auto">

       <Link to="/Principal"  className="button is-primary">Regresar</Link>
      
     </div>
  
</div>
        
        </>
    )
}
    export default Agregar_Citas;