// import Navbar from "../common/Navbar/navbar.js"

// import "./imagegenerator.css"
// import {useState} from "react";
// const ImageGenerator = ()=>{
    
//     const [image,setImage]=useState("")
//     const getImage = async()=>{
//         const query = document.getElementById('query').value;
//         // if(!query) return
//         const ig = await fetch(`https://source.unsplash.com/random/400x400/?${query}`);
          
//         setImage(ig.url)
//     }
//     // let name = "ABHYA ";
//     const [name, changeName] = useState("aakash");
//     const funct=(x)=>{
//         // name= x.target.value;
//         changeName(x.target.value)
//         console.log(name);
//         // console.log('done...')
//     }

// const handleClick = async()=>{
//     const res = await fetch(`https://localhost:1400/api/v1/images`,{
//         method:"POST",
//         body: JSON. stringify({
//             searchText: searchText,
//         }),
//         headers:{
//             "Content-Type":"application/json",
//         }
//     });
//     const data = await res.json();
//     if(data?.status==='success'){
//         setImgSrc(data.data.imageUrl);
//     }
// }





//     return(<div><Navbar page = "image-generator"/>
//         <div className="image-generator-main-container"><br/>hello from css page<br/><br/>
//         <img src={image} />
//         <div>
//             <input type="text" id="query" placeholder="Enter something.." onChange={(e)=>{funct(e)}}>
//                 </input><br/><br/>
//                 <button onClick={getImage}>Search</button><br/><br/>
//         {name}
//         </div>
       
//         </div>

//         </div>
//     )
// }

// export default ImageGenerator;


// _____________________________________________________________________________________________

import Navbar from "../common/Navbar/navbar";
import PointsContext from "../../context/pointsContext";
import "./imagegenerator.css"
import {useState, useContext} from "react";

const ImageGenerator = (props) => {
    const {userPoints, setUserPoints} = props;
const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;
    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        cValue.setUserPoints(cValue.userPoints-1);

    if(!searchText) return;
    
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/images`, {
          method: "POST",
          body: JSON.stringify({
            searchText: searchText,
            userId
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        if (data?.status === "success") {
          setImgSrc(data.data.imageUrl);
        }
      } catch (err) {
        console.log(err);
      }
    };
                                return (
                                    <div>
            <Navbar page="imageGenerator" userPoints={userPoints} setUserPoints={setUserPoints}/>
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <br/>
                    <img className="imageidk" src={imageSrc} /><br/><br/>
                    <input onChange={(e)=>{func(e)}}/><br/><br/>
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
};

export default ImageGenerator;