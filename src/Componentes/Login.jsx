
import '../assets/stylesheets/position.css'
import Principal  from "../pages/principal";
import NavLog from './Login/NavLog';


import { useState } from 'react'
import Footer from './Footer';





function Login(){

   
  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin@gmail.com" && pas==="211228"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }
    return(

        <>
      
         
      <form id="form_login">
        <NavLog/>
       
          <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.etsystatic.com/21587922/r/il/50d7e6/2627797137/il_794xN.2627797137_3rgk.jpg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          
          </div>

          <div>
      
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setUsu(e.target.value) }  required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setPas(e.target.value) }  required/>
        </div><br/>
        <input type="submit"  className="button is-primary" value="Login" onClick={ iniciarSesion }/>

            </div>
           
           </div>
               </div>
     
               <div>
                 <div class="mt-10">
                
                   <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                     <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                       <div class="flex items-center space-x-6 lg:space-x-8">
                         <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                           <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                             <img src="https://carreras.com.co/wp-content/uploads/2019/05/veterinaria.jpg" alt="" class="h-full w-full object-cover object-center"/>
                           </div>
                           <div class="h-64 w-44 overflow-hidden rounded-lg">
                             <img src="https://www.universia.net/content/dam/universia/imagenes/2020/04/clinica_veterinaria/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                           </div>
                         </div>
                         <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                           <div class="h-64 w-44 overflow-hidden rounded-lg">
                             
                           </div>
                           <div class="h-64 w-44 overflow-hidden rounded-lg">
                             <img src="https://tse1.mm.bing.net/th?id=OIP.6CGDgxvN-MhUDdhti7qxuAHaGo&pid=Api&P=0" alt="" class="h-full w-full object-cover object-center"/>
                           </div>
                           <div class="h-64 w-44 overflow-hidden rounded-lg">
                           </div>
                         </div>
                         <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                           <div class="h-64 w-44 overflow-hidden rounded-lg">
                             <img src="https://tse3.mm.bing.net/th?id=OIP.mGkaOClT17K7miTO8vNOsgHaEl&pid=Api&P=0" alt="" class="h-full w-full object-cover object-center"/>
                           </div>
                           <div class="h-64 w-44 overflow-hidden rounded-lg">
                             <img src="https://tse1.mm.bing.net/th?id=OIP.YmmuOSns5UouPUibv6sRAQHaCx&pid=Api&P=0" alt="" class="h-full w-full object-cover object-center"/>
                           </div>
                        
                         </div>
                       </div>
                     </div>
                   </div>
     
                 </div>
               </div>
             </div>
           </div>
         </div>
        
           <Footer/>  
</form>




        
             
              {miLogin === "true" && <Principal usu={usu}/>}

       
        </>
    )
}

export default Login