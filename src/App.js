import { createElement } from 'react'
import './style.scss'

function App() {
  const todos = ['todo1', 'todo2', 'todo3', 'todo4']
  /*
  //---------JSX Olamasaydı aşağıdaki yapıyı bu şekilde yazmamız gerekecekti-------------
  const h1 = createElement('h1', null, 'Samet Akkaya')
  const ul = createElement(
    'ul',
    null,
    todos.map((todo) => createElement('li', null, todo))
  )
  return createElement("main",{
    className:"test",
    id: "main"
  },h1,ul)
  //--------------JSX---------------
  
     <main id='main' className='test'>
      <h1>Samet Akkaya</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
*/

  return (
    <main id='main' className='test'>
      <h1>Samet Akkaya</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
