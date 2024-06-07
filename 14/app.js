import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './src/pages/common/Navbar/navbar.js';
import "./globalstyles.css";
import HomePage from './src/pages/HomePage/homepage.js';
import ImageGenerator from './src/pages/ImageGenerator/imagegenerator.js';
import History from './src/pages/History/history.js'
import NewHistory from './src/pages/History/newhistory.js'
import HistoryInformationPage from './src/pages/History/HistoryInformationPage.js'
// import PointsContext from './src/context/pointsContext.js';
import PointsContext from './src/context/pointsContext.js'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Signup from "./src/pages/signup/signup.js";
import Login from "./src/pages/login/login.js";

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
// const Heading = React.createElement('h1',{},"hello React");
const App = ()=>{
    const [userPoints, setUserPoints]=useState(20);
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        if(localStorage.getItem('authorization')){
            // Data stored in localStorage persists across browser sessions, so the user remains logged in even if they close and reopen the browser.
            return true;
        }
        else return false;
    });
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        localStorage.removeItem('authorization');
        setIsLoggedIn(false);
    }

    const router = createBrowserRouter([//takes an arry of objects
        {
            path:"/",
            element:<HomePage userPoints={userPoints} setUserPoints={setUserPoints}/>,
        },
        {
            path:"/image-generator",
            element: isLoggedIn ?<ImageGenerator userPoints={userPoints} setUserPoints={setUserPoints}/>:<Navigate to = '/login'/>
    
        },
        {
            path:"/history",
            element:<History userPoints={userPoints} setUserPoints={setUserPoints}/>
    
        }
        ,{
            path:"/newhistory",
            element:<NewHistory userPoints={userPoints} setUserPoints={setUserPoints}/>
        },
        {
            path:"/newhistory/:historyId", // beacuse of this we used params.historyId
            element:<HistoryInformationPage userPoints={userPoints} setUserPoints={setUserPoints}/>
        },
        {
            path:"/signup",
            element: <Signup/>
        },

        {
            path:"/login",
            element: <Login/>
        }
    ]);

//andr bahar?
// const val  = {hello:'world'};
return (        
    <PointsContext.Provider value={{
        userPoints: userPoints, 
        setUserPoints: setUserPoints,
        isLoggedIn:isLoggedIn,
        login,
        logout
    }}>
        <RouterProvider router={router} />
    </PointsContext.Provider>
);
}

root.render(<App />);
//<Title/>=Title()
// root.render(Heading);