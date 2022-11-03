import logo from './logo.svg'

function App() {
  return (
    <div className='App'>
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>
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

export default App
