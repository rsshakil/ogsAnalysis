import { useState, useEffect } from "react";
import http from "../utils/httpService";

export default function useFetchQuery(url, refetch = true) {

    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApi = async () => {
        setIsLoading(true);
        try{
            const res = await http.get(url);
            setRecords(res.data);
            setIsLoading(false);
        }catch(e){
            console.log("API ERROR>>>",e);
            setIsLoading(false);
        }
       
    };

    useEffect(() => {
        if (refetch) fetchApi();
    }, [url, refetch]);

    const refetchApi = () => {
        fetchApi();
    }

    return {
        data: records,
        isLoading,
        refetchApi
    }
}