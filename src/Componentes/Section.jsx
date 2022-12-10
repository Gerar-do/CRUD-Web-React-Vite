import { Link } from 'react-router-dom';
import '../assets/stylesheets/Section.css';
import '../assets/stylesheets/Modal.css';
import '../assets/stylesheets/Nav.css';
import '../Componentes/Footer';


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Section(){

 
  
    return(
<>

      <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
          <h1 class="font text-6xl font-bold tracking-tight text-gray-900 sm:textx1">Veterinaria<br/><br/></h1>

          <h1 class="font text-2xl font-bold tracking-tight text-gray-900 sm:textx1">Somos</h1>
            <h1 class="font text-4xl font-bold tracking-tight text-indigo-400 sm:text-7xl">"Confianza"</h1>
            
            <p class="mt-3 text-x-1 text-gray-400">Nota: Si bien el Consejo cuenta con un servicio de consulta sobre problemáticas legales a cargo del Dr. Leandro Ferreyra.<br></br></p>
            <Menu as="div" className="relative inline-block text-left">

     
    
      <Menu.Button className="inline-flex w-full justify-center rounded-md border border-indigo-500 bg-white px-8 py-2 text-sm font-medium text-purple-700 shadow-sm hover:bg-purple-90 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-300">
          Options
          <ChevronDownIcon className="-mr-1 ml-8  h-5 w-9" aria-hidden="true" />
        </Menu.Button>
       
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Agregar_Citas"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Agregar Cita
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Modificar_Citas"
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                    
                  )}
                >
            
              Modificar
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Listar_Citas"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Listado de Citas
                </Link>
              )}
            </Menu.Item>
      
           
              <Menu.Item>
                {({ active }) => (
                <Link
                to="/Eliminar_Citas"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Eliminar Cita
                    </Link>
                )}
              </Menu.Item>
          
          </div>
        </Menu.Items>
      </Transition>
      <br></br>
    </Menu>
    <br/>
      
          </div>

<br/>

          <div>
            <div class="mt-10">
           
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="https://4.bp.blogspot.com/-D5FVKaSFXL8/USQXs694m1I/AAAAAAABqgQ/8tILiLE_5Lw/s1600/fotos-de-perritos-cocker-spaniel-puppies-mascotas-5.jpg" alt="" class="h-full w-full object-cover object-center"/>
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://imagenesnoticias.com/wp-content/uploads/2017/11/PerrosGraciosos22.jpg" alt="" class="h-full w-full object-cover object-center"/>
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.e0hLouWJJRaga3WGadxaegHaKV&pid=Api&P=0" alt="" class="h-full w-full object-cover object-center"/>
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://imagenesactual.com/wp-content/uploads/2017/02/pe-45.jpg" alt="" class="h-full w-full object-cover object-center"/>
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.W0UqRV-75w4rpTRsWXSSOQHaNJ&pid=Api&P=0" alt="" class="h-full w-full object-cover object-center"/>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
  <br/>
  
            </div>
          </div>
        </div>
      </div>
    </div>

</>
    
    

    )
}

export default Section;

