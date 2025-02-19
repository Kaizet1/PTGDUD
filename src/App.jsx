import { useState } from 'react'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'

const pages = [
  <Bai1 key="bai1" />,
  <Bai2 key="bai2" />,
  <Bai3 key="bai3" />,
  <Bai4 key="bai4" />,
]

const pageNames = [
  'Bài 1',
  'Bài 2',
  'Bài 3',
  'Bài 4',
]

const App = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      {pageNames.map((name, index) => (
        <button key={index} onClick={() => setPage(index)}>
          {name}
        </button>
      ))}
      <br />
      {pages[page]}
      
    </>
  )
}

export default App
