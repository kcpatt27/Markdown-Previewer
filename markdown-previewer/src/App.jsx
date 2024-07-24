import { useState } from 'react'
import Markdown from 'react-markdown'
import './App.css'

function App() {

  const [input, setInput] = useState('# Welcome! \n\n ## This is a test of functionality! \n\n `console.log("This is inline code")` \n\n * Wow! \n\n * it \n\n * works! \n\n ~~~js\n\nconsole.log("I cannot believe it is not butter!")\n\n~~~ \n\n >"Respect my authoritah!" - Cartman, ("*South Park*") \n\n ![galaxy stock photo, presumably an illustration](https://imgs.search.brave.com/rp8nAMZPx6CqrlpR7Dn0DYbhNZnx_q_bSnx4gcap-5s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/NTY3NjI1Ni9waG90/by9iYWNrZ3JvdW5k/LW9mLWdhbGF4eS1h/bmQtc3RhcnMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRo/N2VXSjZvdnFuUVo5/UXdRUWxxMnd4cW1B/UjdtZ1JsUVRnYUl5/bGdCd2M9) \n\n made by [**Kalen Patterson**](https://github.com/kcpatt27)');

  return (
    <>
      <div id='container'>

        <textarea 
        id='editor'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        >
        </textarea>

        <div id='preview'>
          <Markdown>
            {input}
          </Markdown>
        </div>

      </div>
    </>
  )
}

export default App
