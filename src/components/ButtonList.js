import Button from "./Button";
import React from "react";

const ButtonList = ()=>{
    return (
        <div className="flex">
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Live"/>
            <Button name="FootBall"/>
            <Button name="Cricket"/>
            <Button name="News"/>
            <Button name="Cooking"/>
        </div>
    )
}

export default ButtonList