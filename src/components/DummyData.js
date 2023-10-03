import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

function DummyData(props) {
    const [dummyData, setDummyData] = useState([]);
    const runEffectRef = useRef(true);

    const getDummyData = async () => {
        try {
            const url = process.env.REACT_APP_API_DOMAIN + "category-faq";
            // const response = await axios.get('https://cat-fact.herokuapp.com/facts/');
            const response = await axios.get (url,{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 200){
                console.log("res: ",response);
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
                if(data !== undefined){
                    if(data?.data && data?.data?.categories)
                        setDummyData(data.data.categories);
                }
            });
            runEffectRef.current = false;
        }
    }, []);
    return (
        <div>
            <ul>
                {
                    dummyData && dummyData !== undefined && dummyData.length !== 0 && dummyData.map((data)=>{
                        return(
                            <li key={data.id}>{data.name}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default DummyData;