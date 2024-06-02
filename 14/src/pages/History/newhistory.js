import Navbar from "../common/Navbar/navbar.js"
import {Link} from "react-router-dom";
import HistoryCard from "./historycard.js"
import "./newhistory.css"
import { useState } from "react"
import { useEffect } from "react"


const HistoryPage= (props)=>{
    // let data = [{'id':'1', title:'hello'},{'id':'2', title:'hell'}];
    
    
    const {userPoints, setUserPoints} = props;

    const [data,setData] = useState([{'id':'1', title:'hello'},{'id':'2', title:'hell'}])
    const [searchText,setSearchText] = useState("");
    const getData = async()=>{
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        // data = obj.products;
        setData(obj.products);
console.log(data);
    }



useEffect(()=>{
    getData();
},[searchText])
    // getData();

    console.log('normal rendering flow',data)
return(<div><Navbar userPoints={userPoints} setUserPoints={setUserPoints}/>
<input onChange={(e)=>{
    setSearchText(e.target.value);
}}/>
<br/><br/>

        <div className = "newhistory-main-container">
            {
                data.map((item)=>{
                    return(
                    <HistoryCard item = {item}/>)
                    // <div key={item.id}><br/><h3>{item.title}</h3>{item.description}<br/><br/>
                    // <img src = {item.thumbnail}></img><br/>
                    // <Link to ={ `/newhistory/${item.id}`}>More</Link>
                    // </div>)
                })
            }
            </div></div>)
}
        export default HistoryPage;