import React, {useState,useEffect} from 'react';

function FetchAPI() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      const fetchData = async() => {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setData(data)
      }
      fetchData();
    }, []);
  return (
    <div>
        {data?.content}
    </div>
  )
}

export default FetchAPI