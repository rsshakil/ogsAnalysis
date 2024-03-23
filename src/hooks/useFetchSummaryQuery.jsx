import { useState, useEffect } from "react";
import http from "../utils/httpService";

const initialValue = {
    data:{
        table:{},
        chart:{}
    }
}
export default function useFetchSummaryQuery(startDate,endDate,refetch = true) {
    const url = `/summary?startDate=${startDate}&endDate=${endDate}`;

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
            setIsLoading(false);
            console.log("API ERROR FOUND",e)
        }
        
    };

    useEffect(() => {
        if (refetch) {
            fetchApi();
        }
    }, [refetch]);

    const refetchApi = () => {
        fetchApi();
    }

    return {
        dataSource: records,
        isLoading,
        refetchApi
    }
}