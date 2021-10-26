import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
      //   console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("Converted to upper case","success")
    }
    const handleLowClick=()=>{
          let newText=text.toLowerCase();
          setText(newText)
          props.showalert("Converted to lower case","success")
      }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }



    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");
    // text="new text"  cant change like this
    //setText("new text here");//correct way
    return (
        <>
        <div className="container"  style={{color:(props.mode==='dark'?'white':'black')}} >
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:"#cabb9a"}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color:(props.mode==='dark'?'white':'black')}} >
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} is the avg time required to read this</p>
        </div>
        </>
        
    )
}
