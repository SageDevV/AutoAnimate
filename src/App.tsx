import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './App.css'

function App() {
  const [animationParent]  = useAutoAnimate({
    duration: 300
  })
  const [items, setItems] = useState(['One', 'Two', 'Tree', 'Four'])

  function onRemoveItem(itemToBeRemoved: string) {
    setItems((previousItem) => previousItem.filter((item) => item !== itemToBeRemoved))
  }

  function handleForm(event: any) {
    event.preventDefault();
    setItems((previousItem) => [...previousItem, event.target.newItem.value])
  }


  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="newItem" />
      </form>
      <ul ref={animationParent}>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => onRemoveItem(item)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App


