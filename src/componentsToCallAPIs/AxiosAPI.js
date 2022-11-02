import React,{useState,useEffect} from 'react'
import axios from 'axios'

function AxiosAPI() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      const fetchData = async() => {
        const res = await axios.get('https://api.quotable.io/random');
        setData(res.data)
      }
      fetchData();
    }, []);


  return (
    <div>
        {data?.content}
    </div>
  )
}

export default AxiosAPI