import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

function DummyData(props) {
    const [dummyData, setDummyData] = useState([]);
    const runEffectRef = useRef(true);

    const getDummyData = async () => {
        try {
            const url = process.env.REACT_APP_API_DOMAIN + "category-faq/";
            const response = await axios.get('https://cat-fact.herokuapp.com/facts/');
            // const response = await axios.get(url);
            return response;
        } catch (error) {
            console.log("There was an error while fetching the data: ", error);
            throw error;
        }
    }
    useEffect(() => {
        if(runEffectRef.current){
            getDummyData().then((data)=> {
                console.log(data.data);
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