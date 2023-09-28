import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

function DummyData(props) {
    const [dummyData, setDummyData] = useState([]);
    const runEffectRef = useRef(true);

    const getDummyData = async () => {
        try {
            const url = process.env.REACT_APP_API_DOMAIN + "category-faq/";
            // const response = await axios.get('https://cat-fact.herokuapp.com/facts/');
            const response = await axios.get(url);
            if(response.status === 200){
                return response;
            }
            else{
                console.log("Err");
            }
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.status, error.response.statusText);
            } else if (error.request) {
                console.error('Network Error:', error.message);
            } else {
                console.error('Error:', error.message);
            }
        }
    }
    useEffect(() => {
        if(runEffectRef.current){
            getDummyData().then((data)=> {
                if(data != undefined)
                        setDummyData(data.data);
            });
            runEffectRef.current = false;
        }
    }, []);
    return (
        <div>
            <ul>
                {
                    dummyData && dummyData != undefined && dummyData.map((data)=>{
                        return(
                            <li key={data._id}>{data.text}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default DummyData;

// I'm still getting the error as uAxiosError: Network Error\n   at XMLHttpRequest.handleError (http://localhost:3000/static/js/bundle.
