import { useReducer, useEffect } from "react"
import Glasses from "./components/Glasses"
import Header from "./components/Header"
import { carReducer, initialState } from "./reducers/car-reducer"

function App() {

  const [state, dispatch] = useReducer(carReducer, initialState)

  useEffect(() => {
    localStorage.setItem('car', JSON.stringify(state.car))
  }, [state.car]) 
        
  
  return (
    <>
      
      <Header 
        car={state.car}
        dispatch={dispatch}
      />     
      
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
            {state.data.map((glasses) => (
                <Glasses
                  key={glasses.id} 
                  glasses={glasses}
                  dispatch={dispatch}
                /> 
              ))}            
            
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GlassesLA - Todos los derechos Reservados</p>
          </div>
      </footer>
     
    </>
  )
}

export default App
