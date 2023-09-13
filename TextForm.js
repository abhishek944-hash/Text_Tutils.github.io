import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick =()=>{
        //console.log("uper case clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handelLoClick =()=>{
        //console.log("uper case clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handelClearClick =()=>{
        //console.log("uper case clicked"+ text);
        let newText="";
        setText(newText);
    }
    const handelCapitalClick =()=>{
        let newText=text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }
    const handelOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("Enter text here");
    //setText("new Text");
    
       return (
        <>
        <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
            <h1 style={{color: props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8" style={{background: props.mode==="light"?"white":"grey",color: props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handelUpClick}>convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handelLoClick}>convert to lower case</button>
            <button className="btn btn-primary mx-2" onClick={handelClearClick}>clear the text</button>
            <button className="btn btn-primary mx-2" onClick={handelCapitalClick}>Capitalize</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1 style={{color: props.mode==="dark"?"white":"black"}}>Text summury</h1>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{text.split(" ").length} word and {text.length} character</p>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{0.008 * text.split(" ").length} minutes read</p>
            <h2 style={{color: props.mode==="dark"?"white":"black"}}>Previwe</h2>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{text}</p>
        </div>
        </>
    )
}
