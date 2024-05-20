import "../css/card.css"
import { useCallback, useState, useEffect, useRef } from "react"
const Password = () => {
    const [length, setLength] = useState(8)
    const [charAllowed, setCharAllowed] = useState(false)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)

        }

        setPassword(pass)

    }, [
        length, charAllowed, numberAllowed
    ])
    useEffect(() => {
        passwordGenerator()
    }, [passwordGenerator, numberAllowed, charAllowed, length])

    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
        setIsCopied(true)
    }, [password])

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }

    }, [isCopied])

    return <>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Card Image" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <input type="text" className="form-control mb-3" placeholder="Enter your value" value={password} ref={passwordRef} readOnly />
                <button type="button" className="btn btn-primary mt-3" onClick={copyPasswordToClipboard} >{!isCopied ? "Copy" : "Copied !"}</button>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={numberAllowed} id="checkbox1" onChange={() => { setNumberAllowed((prev) => !prev) }} />
                    <label className="form-check-label" htmlFor="checkbox1">Numbers</label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" checked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} id="checkbox2" />
                    <label className="form-check-label" htmlFor="checkbox2" >Characters</label>
                </div>
                <div className="mt-3">
                    <input type="range" value={length} className="form-range" min="0" max="100" onChange={(e) => setLength(e.target.value)} /> Length({length})
                </div>
            </div>
        </div>



    </>
}

export default Password;