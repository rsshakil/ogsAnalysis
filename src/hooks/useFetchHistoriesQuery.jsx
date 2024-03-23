import { useState, useEffect } from "react";
import http from "../utils/httpService";

const initialValue = {
    data:{
        chart:{},
        service:""
    }
}
export default function useFetchHistoriesQuery(serviceId, refetch = true) {
    const url = `/histories/${serviceId}`;
    const [records, setRecords] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchApi = async () => {
        setIsLoading(true);
        try{
            const res = await http.get(url);

            setRecords(res);
            setIsLoading(false);
        }catch(e){
            console.log("API ERROR>>>",e);
            setIsLoading(false);
        }
       
    };

    useEffect(() => {
        if (refetch) fetchApi();
    }, [serviceId, refetch]);

    const refetchApi = () => {
        fetchApi();
    }

    return {
        data: records,
        isLoading,
        refetchApi
    }
}