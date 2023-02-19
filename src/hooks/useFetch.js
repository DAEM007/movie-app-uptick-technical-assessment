// All react imports
import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(jsonData => {
                // console.log(jsonData.results);
                setData(jsonData.results);
            })
        
    }, [url])

    return { data };

}
 
export default useFetch;