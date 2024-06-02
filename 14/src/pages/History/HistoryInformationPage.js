import {useState,useEffect } from "react";
import {useParams} from "react-router-dom";


const HistoryInformationPage= (props)=>{
    // const {userPoints, setUserPoints} = props;

const [data,setData] = useState();
const params = useParams();


    const customStyles = {
        color:'white',
        padding: '48px',
    }

getData  = async()=>{
    const res = await fetch(`https://dummyjson.com/products/${params.historyId}`);//earlier in history card we were accessing id item info via the prop item, here we are accessing via link using params
    const obj = await res.json();
    setData(obj);
    // console.log(data);

}

useEffect(()=>{
    getData();

},[])



return(<div style={customStyles}> <h3>info of: {params.historyId}</h3>

<img src = {data?.thumbnail}/>
{/* <img src = {data?.images}/> */}

</div>)



}

export default HistoryInformationPage;