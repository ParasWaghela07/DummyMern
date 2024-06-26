import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import User from "../components/User";

function Home(){
    const [users,Setusers]=useState([]);

    async function fetchUser(){
        try{
            const response=await fetch(`${process.env.REACT_APP_BASE_URL}/getAllUser`,
                {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            );

            const data=await response.json();
            Setusers(data);

        }
        catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <div>
        <NavLink to="/create"><button>NEXT</button></NavLink>
        <br />
        <br />
        <div>
            {
                users?.map((user)=>{
                    return <User user={user}/>
                })
            }
        </div>
        </div>

    )
}

export default Home;