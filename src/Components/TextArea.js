import React, {useState} from 'react'

export default function TextArea(props) {
  const handleupClick = ()=>{
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handlelowerClick = ()=>{
    let newText= text.toLowerCase();
    setText(newText)
  }
  const Cleartext = ()=>{
    let newText= "";
    setText(newText)
  }
  const handleonchange = (event)=>{
   // console.log("handle on change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here below');

  const[mystyle, setMystyle]  = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btntext, setBtnText] = useState("Enable Dark Mode")
  
  const toggleStyle = ()=>{
    if(mystyle.color === 'black'){
       setMystyle({
        color: 'White',
        backgroundColor: 'black'
       })
       setBtnText("Enable Light Mode")
    }
      else{
        setMystyle({
          color: 'black',
          backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode")
      }
    
  }




  return (
    <>
    <div className='container' style = {mystyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3" style = {mystyle}>
            <textarea className="form-control" value = {text} onChange= {handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick = {handleupClick}> 
          Convert to Uppercase</button>
          <button className="btn btn-primary mx-2"  onClick = {handlelowerClick}> 
          Convert to Lowercase</button>
          <button className="btn btn-primary mx-2"  onClick = {Cleartext}> 
          Clear</button>
          <button className="btn btn-primary mx-2"  onClick = {toggleStyle}> 
          {btntext} </button>
    </div >
    <div className='container' my-4 style = {mystyle} >
        <h1> Your Text Summary</h1>
        <p> {text.split (" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split (" ").length} Minutes to Read</p>
        <h2> Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
