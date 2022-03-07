import React,{useState} from "react"


export default function TextFrom(props) {
    const handleOnClick = ()=>{
        // console.log("on change" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success");
    }
    const handleloClick = ()=> {
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("converted to lower case","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handleClear= ()=> {
       setText('');
       props.showAlert("text has been clear","success")
    }
    const [text,setText] = useState("");
    return (
        <>
        <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder="enter text"></textarea>
            </div>
            <button disabled={text.length===0} style={{margin:"10px"}} className='btn btn-primary' onClick={handleOnClick} > Convert to Uppercase </button>
            
            <button disabled={text.length===0}className='btn btn-primary' onClick={handleloClick} > Convert to Lowercase </button>
            <button disabled={text.length===0}className="btn btn-primary mx-3" onClick={handleClear}>Text Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\n+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:'Nothing to preview...'}</p>
        </div>
        </>
    )
}