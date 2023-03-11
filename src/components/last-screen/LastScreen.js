import React from "react";
import "../Styles/global.css"

const LastScreen = (props) => {

    const out = `You selected ${props.result} out of 5`
    const thx = "Thank You!"
    const lastText = "We appreciate you taking the time to give a rating." +
        " If you ever need more support, don't hesitate to get in touch!"

    return (
        <div>
            <div className={"flexContainer font"}>
                <div className={"flexContainer2"}>
                    <img className={"completeImg"} alt={"img"} src={require("../photos/illustration-thank-you.png")}/>
                </div>
                <div className={"flexContainer2"}>
                    <div className={"section"}>{out}</div>
                </div>
                <h1 className={"header"}>{thx}</h1>
                <div className={"text2"}>{lastText}</div>

            </div>
        </div>
    )
}

export default LastScreen