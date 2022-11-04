import { Title } from './components'
import Bootstrap from './bootstrap'
import Tailwind from './tailwind'
import Test from './test'
import logo from './logo.svg'
import Styles from './app.module.css'

function styles() {
  return (
    <div className='App'>
      <h3>{process.env.NODE_ENV}</h3>
      <p className='env'>
        {process.env.REACT_APP_API_URL}
        <span>Test</span>
      </p>
      {process.env.NODE_ENV === 'production' && (
        <>
          <h3>Bu Başlık Gözükmez</h3>
          <p>Bu Paragraf Gözükmez</p>
          <img src={logo} alt='' />
        </>
      )}
      <h4>Ama bu başlık gözükür</h4>
    </div>
  )
}
export default styles
