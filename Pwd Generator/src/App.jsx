import { useState, useCallback,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [pwd, setPwd] = useState("")

  const gen_pwd = useCallback(() => {
    let p = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) str += "0123456789"
    if (charactersAllowed) str += "@#!$%^&*()+={}[]:"

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)
      p += str.charAt(index)
    }

    setPwd(p)
  }, [length, numbersAllowed, charactersAllowed,setPwd])

  useEffect(()=>{gen_pwd()},[length, numbersAllowed, charactersAllowed,gen_pwd])
  const pwdRef =useRef(null);

  const copypwd = useCallback(() => {
  if (pwdRef.current) {
    pwdRef.current.select()
    navigator.clipboard.writeText(pwd)
  }
}, [pwd])

  return (
    <>
      <h1>Password Generator</h1>
      <div>
      <input type="text"value={pwd}
      ref={pwdRef}
readOnly
 />
      <button onClick={copypwd}>Copy</button>
      </div>
      <div>
      <input type="range"
  min={4}
  max={20}
  value={length}
  onChange={(e) => setLength(e.target.value)}
 />
      <label htmlFor="">
        Length({length})
      </label>
      <label>
  <input type="checkbox"
  checked={numbersAllowed}
    onChange={() => setNumbersAllowed(prev => !prev)}/>
  Numbers
</label>
<label>
  <input type="checkbox"
  checked={charactersAllowed}
    onChange={() => setCharactersAllowed(prev => !prev)}/>
  Characters
</label>
</div>

    </>
  )
}

export default App
