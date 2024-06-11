// import Navbar from "../common/Navbar/navbar.js"
// import "./history.css"
// import { useState } from "react"
// import { useEffect } from "react"
// const dummydata = [{
//     id:'1',
//     title:'Flower',
//     date:'21-10-02'
// },
// {
//     id:'2',
//     title:'Fish', 
//     date:'21-11-02'
// },{
//     id:'3',
//     title:'Fan',
//     date:'21-01-02'
// },{
//     id:'4',
//     title:'Florist',
//     date:'21-12-02'
// }
// ]

// const changeTitle = ()=>{
//     console.log("title changed");


// }

// const changeDescription = ()=>{
//     console.log("desc changed");


// }

// const History= (props)=>{
//     const {userPoints, setUserPoints} = props;

//     const[title, setTitle] = useState("name");
//     const[description, setDescription] = useState("these are images");

//     useEffect(()=>{
//         console.log("title changed")
//     },[title])
    
//     useEffect(()=>{
//         console.log("description changed")
//     },[description])
    
//     useEffect(()=>{
//         console.log("either title or description changed")
//     })//on every render or by multiple params in dep array


// return(<div><Navbar page = "history" userPoints={userPoints} setUserPoints={setUserPoints}/>
// <br/><br/>
// <button onClick={changeTitle}>Change title</button><br/><br/>
// <button onClick={()=>{
//     changeDescription();
//     changeTitle();
// }}>change title and desc</button><br/><br/>
// <button onClick={changeDescription}>chnge desc</button><br/><br/><br/>

// <input value={title} onChange = {(e)=>{
//     setTitle(e.target.value);
// }}/><br/>
// <input value={description} onChange = {(e)=>{
//     setDescription(e.target.value)
// }}/><br/><br/><br/>
// <h3>Title:{title}</h3>
// <h3>Description:{description}</h3><br/><br/>
// <div className="history-main-container">hello from history page
//         </div>
//         <div>
//             {dummydata.map((elem)=>{
//                 return(
//                 <div key = {elem.id}>
//                     {/* error in console gone because of key */}
//                 <h3>{elem.title} hello</h3>
//                 <p>{elem.date}</p>
//                 </div>
//                 )
//             }
//             )}
            
//             </div></div>)
// }
//         export default History;

import React, { useEffect, useState } from 'react';
import './history.css';
import Navbar from "../common/Navbar/navbar.js"

const History = (props) => {
    const { userPoints, setUserPoints } = props;
    const API_ENDPOINT = `${process.env.BACKEND_URL}/api/v1/images`;

    const [userHistory, setUserHistory] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?._id;
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUserHistory = async () => {
            try {
                const response = await fetch(`${API_ENDPOINT}?userId=${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                setUserHistory(data);
            } catch (error) {
                console.error('Error fetching user history:', error);
            }
        };

        if (userId && token) {
            fetchUserHistory();
        }
    }, [API_ENDPOINT, userId, token]);

    return (
        <div>
            <Navbar page='history' />
            <div className="history-container">
                {userHistory.length > 0 ? (
                    userHistory.map((item, index) => (
                        <div key={index} className="history-item">
                            <img src={item.imageUrl} alt="History item" />
                            <p>{item.searchText}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-history">No history available</p>
                )}
            </div>
        </div>
    );
};

export default History;
