import React, {useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import Navbar from "../../Componentes/Navbar";
import {Link} from "react-router-dom";



function Eliminar_Citas(){

    const [idcita, setIdcita] = useState(0);

    const eliminar = async() => (
        fetch('http://localhost:8080/Cita/del/'+idcita)
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado la Cita con el ID:"+idcita)})
            .catch((err) => console.error(err))
    )


    return(
        <React.Fragment>
             <Navbar/>
           <br/>
           <br/>
           <br/>
           <br/>
   <div className="IDdueño_Delete ">
   <h1 className="h1 text-center title is-4">Eliminar Cita</h1>
   <br/>
   <br/>
   
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdcita(event.target.value)}} placeholder="ID Cita"/>
                        <button className="Eliminar1 btn btn-outline-danger" onClick={eliminar} type="button" id="button-addon1">Eliminar</button>
                        <div class="d-grid gap-2 col-6 mx-auto">
       <Link to="/Principal"  className="button is-primary">Regresar</Link>
          </div>
            </div>
   
            <br/>
           <br/>
           <br/>
           <br/>

   
   
         
      
     
        </React.Fragment>
    )
}
export default Eliminar_Citas;