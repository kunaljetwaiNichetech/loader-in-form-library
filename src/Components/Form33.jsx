import {useState} from 'react';
 
export default function Form33 ()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};
    const handelsubmit=(e)=>{
        setInputValue(e.target.value)
        alert("form submited")
    }

return  (
    <div>
<form onSubmit={handelsubmit} >
    <div>
        
	<label>Input Value </label>    
	<input  type="text"  value={inputValue} onChange={handleChange} />
    </div>
    <div>
        <button type='submit' > submit</button>
    </div>
	<p>Input Value: {inputValue}</p>
    </form>
</div>
)};