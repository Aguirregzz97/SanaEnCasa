import * as React from 'react'
import './../assets/scss/App.scss'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import LoginInventario from './Inventario/loginInventario'
import CapturaEquipoMedico from './Inventario/CapturaEquipoMedico'
import CapturaPacientes from './Inventario/CapturaPacientes'



type State = {
  currentSeason: string
}

type Props = {
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/inventario' component={ LoginInventario } />
      <Route path='/equipoMedico' component={ CapturaEquipoMedico } />
      <Route path='/pacientes' component={ CapturaPacientes } />
    </Switch>
  </main>
)

export default class App extends React.Component<Props, State> {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}