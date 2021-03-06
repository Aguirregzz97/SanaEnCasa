import * as React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'

type State = {
}

type Props = {
}

export default class ComoAyudar extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    redirectDonar = () => {
        window.location.replace('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LC2UM7J6DUZBJ&source=url')
    }

    render() {
        return (
            <div style={{ border: '4px dashed white' }} id='comoAyudar' className='comoAyudar'>
                <h1 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>COMO AYUDAR</h1>
                <div className='row text-center'>
                    <div className='col-md-3'>
                        <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-money-bill text-center'></i>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Donativo de efectivo</h2>
                        <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.5' }} className='text-center'>
                            Dona el valor de una o varias camas, de una o varias grúas o de una cantidad en efectivo. Nuestra cuenta es: Cuenta Sana en casa, A.B.P. BANORTE 0264208497, CLABE 072580002642084972 (te entregaremos un CFDI deducible de impuestos)
                        </h4>
                    </div>
                    <div className='col-md-3'>
                        <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-hands-helping text-center'></i>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Donativo de equipo</h2>
                        <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                            Si tienes un equipo usado,  guardado, ¡hay muchas familias que pueden usarlo! Te mantendremos informado del destino final de tu donativo. Puedes acompañar al personal de Sana en casa
                            a entregarlo a la familia que lo recibirá
                        </h4>
                    </div>
                    <div className='col-md-3'>
                        <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-building text-center'></i>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Empresas</h2>
                        <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                            Si tu empresa desea ser Socialmente responsable, Sana En Casa es ¡tu mejor opción! Te damos recibo deducible de impuestos y puedes estar seguro de que tu donativo será utilizado con total trasparencia
                        </h4>
                    </div>
                    <div className='col-md-3'>
                        <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='far fa-credit-card'></i>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Tarjeta de credito</h2>
                        <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4', paddingBottom: '15px' }} className='text-center'>
                            Haz un donativo unico o dona mensualemente
                        </h4>
                        <AwesomeButton onPress={ this.redirectDonar } size='large' type='secondary'><h4 style={{ color: '#009ce0', fontSize: '30px' }} className='text-center'>Donar!</h4></AwesomeButton>
                    </div>
                </div>
            </div>
        )
    }
}