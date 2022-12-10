
import Section from "../Componentes/Section"
import Header from "../Componentes/Header"


function Loyout({children}){


    return(

        <>
     <Header/>
        {children}
       <Section></Section>
        </>

    )
}

export default Loyout;