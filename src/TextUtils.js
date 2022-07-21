import React,{ useState } from 'react'



const TextUtils = () => {
    const [text,setText] = useState("")
    const [word,setWord] = useState(1)
   
    // setWord(
    //     text.split().length
    // )

    const handleInput = (event) =>{
        setText(event.target.value)
    }
    const upperCase = () =>{
        setText(text.toUpperCase())
    }
    const lowerCase = ()=>{
        setText(text.toLowerCase())
    }
  return (
    <div className='textUtils'>
        <textarea type='text' id='text' placeholder='Enter Text' value={text} onChange={handleInput} rows={4} cols={50}></textarea>
        <br />
        <button onClick={upperCase}>UPPER CASE</button>
        <button onClick={lowerCase}>LOWER CASE</button>
        <h4>Summary</h4>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
    </div>
  )
}

export default TextUtils