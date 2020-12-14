import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";


const Usuarios = () => {

    const [people, setPeople] = useState([]);
    const [hasError, setErrors] = useState(false); //hook con errores

    async function fetchData() {
        //const url = 'https://swapi.dev/api/people/';
        const root_url = process.env.REACT_APP_API_ROOT_URL; //del post

        const res = await fetch(url);
        // primero nos conectamos a la db y despues seteamos las variables de estados
        res
            .json()
            .then((res) => setPeople(res.results))
            .catch((err) => setErrors(err));
            //console.log(people);
    }

    useEffect(() => { //hook para hacer llamdasa a la db
        fetchData();
    }, []); //el vacio es para que se ejecute solo una vez, y no multiple veces una vez que se ejecute

    return (
        <div>
            <h1>Lista Usuarios</h1>
            <hr/>
            <ul>
                {
                    people.map((item,index)=>( //si no uso () el resultado deberia ir en un return
                        <li key={index}> 
                        <Link to={`/user/${index}`}>
                            {item.name}
                            {item.active} 
                            </Link>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}

export default Usuarios;