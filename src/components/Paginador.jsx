import React from 'react'
import { Button } from 'react-bootstrap';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Paginador = ({ totalPaginas, paginaActual, cambiarPagina }) => {

    const irAPagina = (numeroPagina) => {
        if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
            cambiarPagina(numeroPagina);
        }
    };
    return (
        <div className='d-flex justify-content-center mt-4 flex-wrap'>
            <Button
                variant='outline-secondary'
                className='mx-1 mb-2'
                disabled={paginaActual === 1}
                onClick={() => irAPagina(paginaActual - 1)}
            >
                <ArrowBackIosIcon />
            </Button>
            {Array.from({ length: totalPaginas }, (_, indice) => (
                <Button
                    key={indice + 1}
                    variant={paginaActual === indice + 1 ? ' _active' : 'outline-secondary'}
                    className="mx-1 mb-2 number-page"
                    onClick={() => irAPagina(indice + 1)}
                >
                    {indice + 1}
                </Button>
            ))}
            <Button
                variant='outline-secondary'
                className='mx-1 mb-2'
                disabled={paginaActual === totalPaginas}
                onClick={() => irAPagina(paginaActual + 1)}
            >
                <ArrowForwardIosIcon />
            </Button>

        </div>
    )
}
