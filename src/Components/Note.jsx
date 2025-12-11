import { useState } from "react";
export default function Note(){
const [note,setNote]=useState(0);
function handleChange(event){
    setNote(event.target.value);
}
    return(
        <>
        <div className="bg-gray-300 h-screen w-screen mx-auto">
                 <h1 className="text-black text-4xl  mx-180 p-5">Typeing...</h1>
                    <input type="text" name="" id="" className="bg-transparent rounded mx-120 mt-50 w-160 p-5 rounded-lg boder boder-5 " placeholder="Type Here !" onChange={handleChange} />
                    <p className="bg-white w-screen h-50 p-10 mx-auto mx-60 rounded rounded-2xl boder-10"  >{note}</p>
        </div>
        
        
        </>
    );

}