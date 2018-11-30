import * as React from 'react'
const logo = require('./../assets/img/logo.png')
const mision = require('./../assets/img/mision.png')


type State = {
}

type Props = {
}

export default class Nosotros extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='nosotros' className='nostros text-center'>
                <h1 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '20px' }} className='text-center'>NOSOTROS</h1>
                <div className='row'>
                    <div className='col-md-5'>
                        <img id='imgLogoNosotros' src={logo} alt='' />
                    </div>
                    <div className='col-md-7'>
                        <h3 className='text-center' style={{ paddingLeft: '40px', paddingRight: '40px', color: 'white', lineHeight: '1.5', paddingBottom: '30px' }}>
                            Sana en casa es una asociación de beneficencia privada que surge a principios del 2015, con el objetivo de apoyar a familias que tienen un enfermo en casa y que por su situación económica no tienen los medios para comprar o rentar equipo médico
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <h3 className='text-center' style={{ paddingLeft: '40px', paddingRight: '40px', color: 'white', lineHeight: '1.5', paddingBottom: '30px', paddingTop: '20px' }}>
                            Principalmente prestamos: camas de hospital, sillas de ruedas, grúas eleva pacientes, aspiradores de secreciones y algunos otros equipos
                        </h3>
                    </div>
                    <div className='col-md-4'>
                        <a target='_blank' href='https://www.youtube.com/watch?v=XlokHSeEGKs'><span style={{ color: 'white', fontSize: '100px', paddingTop: '10px' }} className='fab fa-youtube'></span></a>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: 'white', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-hand-holding-heart'></span>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Misión</h2>
                        <h5 className='text-center' style={{ color: 'white', lineHeight: '1.4' }}>
                            Ofrecer apoyo a las familias que tienen un enfermo en casa y que por su situación económica o social no cuentan con los medios necesarios para atenderlos
                        </h5>
                    </div>
                    <div className='col-md-4 text-center'>
                        <img style={{ width: '65px', paddingLeft: '10px', paddingBottom: '10px' }} className='text-center' src={mision} alt=''/>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Visión</h2>
                        <h5 className='text-center' style={{ color: 'white', lineHeight: '1.4' }}>
                            Llegar a ser una asociación con una sólida estructura organizacional que se mantenga en constante crecimiento y que proporcione apoyo cada vez a un mayor numero de familias
                        </h5>
                    </div>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: 'white', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-cross'></span>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Valores</h2>
                        <h5 className='text-center' style={{ color: 'white', lineHeight: '1.4' }}>
                            CARIDAD para los más necesitados, SOLIDARIO ante las difíciles situaciones, IGUALDAD para brindar apoyo a quien más lo necesite y buscando siempre la TRASPARENCIA en sus actividades
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}