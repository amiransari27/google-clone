import { useEffect, useState } from 'react'

const CONTEXT_KEY = '####' //put google context key
const API_KEY = '####' // and api key 

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res=>res.json())
            .then(result=>{
                setData(result)
            })
        }

        fetchData()

    }, [term])

    return { data }
}

export default useGoogleSearch
