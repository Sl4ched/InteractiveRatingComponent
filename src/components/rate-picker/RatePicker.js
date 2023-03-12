import React, {useState} from "react";
import "../Styles/global.css"
import LastScreen from "../last-screen/LastScreen";

const RatePicker = () => {

    const [backgroundColor1, setBackgroundColor1] = useState("hsl(210, 19%, 18%)")
    const [backgroundColor2, setBackgroundColor2] = useState("hsl(210, 19%, 18%)")
    const [backgroundColor3, setBackgroundColor3] = useState("hsl(210, 19%, 18%)")
    const [backgroundColor4, setBackgroundColor4] = useState("hsl(210, 19%, 18%)")
    const [backgroundColor5, setBackgroundColor5] = useState("hsl(210, 19%, 18%)")

    const [completed, setCompleted] = useState(false)
    const [selectedValue, setSelectedValue] = useState(-1)
    const textH1 = "How did we do?"
    const textDiv = "Please let us know how we did with your" +
        " support request. All feedback is appreciated to help us" +
        " improve our offering!"

    function trigger(e) {

        switch (e.target.id) {
            case "1":
                setSelectedValue(1)
                setBackgroundColor1("hsl(216, 12%, 54%)")
                setBackgroundColor2("hsl(210, 19%, 18%)")
                setBackgroundColor3("hsl(210, 19%, 18%)")
                setBackgroundColor4("hsl(210, 19%, 18%)")
                setBackgroundColor5("hsl(210, 19%, 18%)")
                break
            case "2":
                setSelectedValue(2)
                setBackgroundColor1("hsl(210, 19%, 18%)")
                setBackgroundColor2("hsl(216, 12%, 54%)")
                setBackgroundColor3("hsl(210, 19%, 18%)")
                setBackgroundColor4("hsl(210, 19%, 18%)")
                setBackgroundColor5("hsl(210, 19%, 18%)")
                break
            case "3":
                setSelectedValue(3)
                setBackgroundColor1("hsl(210, 19%, 18%)")
                setBackgroundColor2("hsl(210, 19%, 18%)")
                setBackgroundColor3("hsl(216, 12%, 54%)")
                setBackgroundColor4("hsl(210, 19%, 18%)")
                setBackgroundColor5("hsl(210, 19%, 18%)")
                break
            case "4":
                setSelectedValue(4)
                setBackgroundColor1("hsl(210, 19%, 18%)")
                setBackgroundColor2("hsl(210, 19%, 18%)")
                setBackgroundColor3("hsl(210, 19%, 18%)")
                setBackgroundColor4("hsl(216, 12%, 54%)")
                setBackgroundColor5("hsl(210, 19%, 18%)")
                break
            case "5":
                setSelectedValue(5)
                setBackgroundColor1("hsl(210, 19%, 18%)")
                setBackgroundColor2("hsl(210, 19%, 18%)")
                setBackgroundColor3("hsl(210, 19%, 18%)")
                setBackgroundColor4("hsl(210, 19%, 18%)")
                setBackgroundColor5("hsl(216, 12%, 54%)")
                break
        }

    }

    function hvIn(e) {

        switch (e.target.id) {
            case "1":
                setBackgroundColor1("hsl(25, 97%, 53%)")
                break
            case "2":
                setBackgroundColor2("hsl(25, 97%, 53%)")
                break
            case "3":
                setBackgroundColor3("hsl(25, 97%, 53%)")
                break
            case "4":
               setBackgroundColor4("hsl(25, 97%, 53%)")
                break
            case "5":
                setBackgroundColor5("hsl(25, 97%, 53%)")
                break
        }
    }

    function hvOut(e) {

        switch (e.target.id) {
            case "1":
                if (selectedValue === 1) setBackgroundColor1("hsl(216, 12%, 54%)")
                else setBackgroundColor1("hsl(210, 19%, 18%)")
                break
            case "2":
                if (selectedValue === 2) setBackgroundColor2("hsl(216, 12%, 54%)")
                else setBackgroundColor2("hsl(210, 19%, 18%)")
                break
            case "3":
                if (selectedValue === 3) setBackgroundColor3("hsl(216, 12%, 54%)")
                else setBackgroundColor3("hsl(210, 19%, 18%)")
                break
            case "4":
                if (selectedValue === 4) setBackgroundColor4("hsl(216, 12%, 54%)")
                else setBackgroundColor4("hsl(210, 19%, 18%)")
                break
            case "5":
                if (selectedValue === 5) setBackgroundColor5("hsl(216, 12%, 54%)")
                else setBackgroundColor5("hsl(210, 19%, 18%)")
                break
        }
    }

    function isClicked() {
        if (selectedValue !== -1) setCompleted(true)
    }

    const style1 = {backgroundColor: backgroundColor1}
    const style2 = {backgroundColor: backgroundColor2}
    const style3 = {backgroundColor: backgroundColor3}
    const style4 = {backgroundColor: backgroundColor4}
    const style5 = {backgroundColor: backgroundColor5}

    return (
        <div>
            {completed ? <LastScreen result={selectedValue}/> : <div className={"flexContainer font"}>
                <div className={"first circle"}><img className={"star"} alt={"img"}
                                                     src={require("../photos/icon-star.png")}/></div>
                <h1>{textH1}</h1>
                <div className={"text"}>{textDiv}</div>
                <div className={"flexContainer2"}>
                    <button onMouseOver={hvIn} onMouseLeave={hvOut} style={style1} id={"1"} onClick={trigger}
                         className={"circle bt extraFont"}>1
                    </button>
                    <button onMouseOver={hvIn} onMouseLeave={hvOut} style={style2} id={"2"} onClick={trigger}
                         className={"circle bt extraFont"}>2
                    </button>
                    <button onMouseOver={hvIn} onMouseLeave={hvOut} style={style3} id={"3"} onClick={trigger}
                         className={"circle bt extraFont"}>3
                    </button>
                    <button onMouseOver={hvIn} onMouseLeave={hvOut} style={style4} id={"4"} onClick={trigger}
                         className={"circle bt extraFont"}>4
                    </button>
                    <button onMouseOver={hvIn} onMouseLeave={hvOut} style={style5} id={"5"} onClick={trigger}
                         className={"circle bt extraFont"}>5
                    </button>
                </div>
                <button onClick={isClicked} className={"font button"}>SUBMIT</button>
            </div>}

        </div>
    )

}

export default RatePicker