import { useState } from "react";
import { NavLink } from "react-router-dom";

function CreatePage(){
    const [data,setData]=useState({name:"",surename:""});

    function changeHandler(e){
        setData(prev=>(
            {...prev,
                [e.target.name]:e.target.value
            }
        )
    )
    console.log(data);
}

    async function submitHandler(){
        const response=fetch(`${process.env.REACT_APP_BASE_URL}/createUser`,
            {method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({...data})
            }
        );

        console.log(response);
    }

    return(
        <div>
            <NavLink to="/">PREVIOUS</NavLink>

            <div>
            <label htmlFor="fn">First Name</label>
            <input type="text" 
             name="name"
             value={data.name}
             id="fn"
             onChange={changeHandler}
            />

            <label htmlFor="ln">Last Name</label>
            <input type="text" 
            name="surename"
            value={data.surename}
            id="ln"
            onChange={changeHandler}/>

            <button onClick={submitHandler}>SUBMIT</button>
        </div>
        </div>
    )
}


export default CreatePage;