import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

export default function App() {
    const [img, setImg] = useState('');
    useEffect(() => {
        callApi();
    console.log( 'message from local' );
    console.log( 'message from remote' );
    console.log( 'message from local2' );
    }, [])
    const callApi = () => {
        axios.get(" https://api.thecatapi.com/v1/images/search").then(
            (response) => {
                setImg(response.data[0].url);
            }
        ).catch((error) => console.log(error))
    }
    return ( <
        div >
        <
        img src = { img }
        alt = ""
        width = "300"
        height = "300" / >
        <
        /div>
    )
}
