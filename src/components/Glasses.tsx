import type { Glasses } from '../types' 

type GlassesProps = {
    glasses : Glasses, 
    addToCar : (item: Glasses) => void
}

export default function Glasses({glasses, addToCar} : GlassesProps) {

    const {name, image, description, price} = glasses
    
    return(
        <div className="col-md-6 col-lg-4 my-4 row flex-column align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen gafas" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase"> {name} </h3>
                <p> {description} </p>
                <p className="fw-black text-primary fs-3">$ {price} </p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCar(glasses) }
                    >Agregar al Carrito</button>
            </div>
        </div>
    )
}