import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {

  const {status, checkAuthToken} = useAuthStore();
  // const authStatus = 'not-authenticated';

  useEffect(() => {
    checkAuthToken();   
  }, [])
  

  if(status === 'checking'){
    return(
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      
      {
        // si no estoy autenticado
        (status === 'not-authenticated')
        // {/* Cualquier pagina que no exista después del auth ira al login */}
        ? (
          <>
            <Route path="/auth/*" element={<LoginPage/>} />
            {/* Si no existe la ruta solicitada */}
            <Route path="/*"  element={ <Navigate to="/auth/login" /> }/>
          </>          
        )
        // {/* Cualquier otra ruta que no exista nos mandara a el CalendarPage */}
        // si estoy autenticado
        : (
          <>
            <Route path="/" element={<CalendarPage/>} />  
            <Route path="/*"  element={ <Navigate to="/" /> }/>

          </>
        )       
         
      }   

      


    </Routes>
  )
}
