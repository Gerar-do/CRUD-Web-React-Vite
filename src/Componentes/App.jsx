


import { Routes, Route} from "react-router-dom";



import Listar_Citas from "../pages/Citas/Listar_Citas";
import Eliminar_Citas from "../pages/Citas/Eliminar_Citas";
import Modificar_Citas from "../pages/Citas/Modificar_Citas";
import Agregar_Citas from "../pages/Citas/Agregar_Citas";
import Principal from "../pages/principal";
import Sesion from "../pages/Sesion";
;

function App() {
  return (
    <div className="App">
              <Routes>
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route index element={<Sesion/>}/>}

            {<Route path="/Sesion" element={<Sesion/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
       
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
         
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Principal" element={<Principal/>}/>}

            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Agregar_Citas" element={<Agregar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Listar_Citas" element={<Listar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Eliminar_Citas" element={<Eliminar_Citas/>}/>}
            {/*/!* eslint-disable-next-line react/jsx-pascal-case *!/*/}
            {<Route path="/Modificar_Citas" element={<Modificar_Citas/>}/>}
            </Routes>

      {/*<Mascotas_Principal/>*/}
      {/*<Agregar_Mascotas/>*/}
      {/*  <Modificar_mascotas/>*/}
      {/*  <Eliminar_Mascotas/>*/}
      {/*  <Listar_Mascotas/>*/}
    </div>
  );
}

export default App;
