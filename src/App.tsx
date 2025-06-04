import Glasses from "./components/Glasses"
import Header from "./components/Header"
import { useCar } from './hooks/useCar'

function App() {

  const { 
    data,car, addToCar, removeFromCar, decreaseQuantity, increaseQuantity, clearCar, isEmpty, carTotal
  } = useCar()  

  
  return (
    <>
      
      <Header 
        car={car}
        removeFromCar={removeFromCar}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCar={clearCar}
        isEmpty={isEmpty}
        carTotal={carTotal}
      />     
      
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
            {data.map((glasses) => (
                <Glasses
                  key={glasses.id} 
                  glasses={glasses}
                  addToCar={addToCar}
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
