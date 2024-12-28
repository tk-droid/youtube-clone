import React from "react"
import { useDispatch } from "react-redux"
import { toogleMenu } from "../utils/appSlice"

const Head =()=>{
    
    const dispatch = useDispatch()
    const toggleMenuHandler = ()=>{
          dispatch(toogleMenu())
    }
    
    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                onClick={()=> toggleMenuHandler()} 
                className="h-10 cursor-pointer" alt="menu" src="https://cdn-icons-png.flaticon.com/512/10613/10613675.png"/>
                <a href="/">
                <img className="h-10 mx-2"alt="youtube-logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
                </a>
            </div>
            <div className="col-span-10 px-10">
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search"/>
                <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-9" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"/>
            </div>
        </div>
    )
}

export default Head