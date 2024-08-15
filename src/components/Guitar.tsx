import type { TGuitar } from '../types';

// Asigna los types a las variables en el componente GUITAR
type GuitarProps = {
    // El prop guitar tiene los types de TGuitar
    guitar: TGuitar;
    // La funcion como prop addToCart toma el item de TGuitar pero no devuelve nada
    addToCart: (item: TGuitar) => void;
};

// Asigna los types a los props en el componente GUITARPROPS
export const Guitar = ({ guitar, addToCart }: GuitarProps) => {
    const { name, image, description, price } = guitar;

    return (
        <>
            <div className='col-md-6 col-lg-4 my-4 row align-items-center'>
                <div className='col-4'>
                    <img className='img-fluid' src={`/img/${image}.jpg`} alt='imagen guitarra' />
                </div>
                <div className='col-8'>
                    <h3 className='text-black fs-4 fw-bold text-uppercase'>{name}</h3>
                    <p>{description}</p>
                    <p className='fw-black text-primary fs-3'>${price}</p>
                    <button type='button' className='btn btn-dark w-100' onClick={() => addToCart(guitar)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </>
    );
};
