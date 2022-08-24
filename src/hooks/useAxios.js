import React, { useEffect, useState } from 'react';
import axios from "axios";
import {v4 as uuid} from "uuid";
const useAxios = (url) => {

const [responses, setResponses] = useState([]);



    const getAxios = async (url, ext) => {

            if(ext) url = url+ext;
    
            const res = await axios.get(url);
            
            setResponses([...responses, {...res.data, id: uuid()}]);
    
    }
    

return [responses, getAxios]
};

export default useAxios;