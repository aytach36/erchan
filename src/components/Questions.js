import "./Questions.css"
import { useState } from "react"


export default function Questions() {
    const [selected, setSelected] = useState(null)

    const handleClick = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="questions">
            {data.map((item, i) => (
                <div className="question-box" key={i}>
                    <p className={ selected === i ? "question selected" : "question"} onClick={() => { handleClick(i) }}>{item.question}<span>{selected === i ? "-" : "+"}</span></p>
                    <p className={selected === i ? "answer selected" : "answer"}>{item.answer}</p>
                </div>
            ))}
        </div>

    )
}


const data = [{
    question: `Πότε wqdqsdasd και πότε δεν χειρουργείται η χολολιθίαση (πέτρες στην
    χοληδόχο κύστη`,
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus!"
},
{
    question: `Πότε wqdqsdasd και πότε δεν χειρουργείται η χολολιθίαση (πέτρες στην
        χοληδόχο κύστη`,
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure ipsum labore dolorum saepe mollitia tenetur consequuntur soluta, odio cum? Ratione quidem incidunt optio aliquam vitae facere nobis repudiandae cupiditate facilis pariatur illum consectetur qui nemo, porro tenetur modi cumque!"
},
{
    question: `Πότε wqdqsdasd και πότε δεν χειρουργείται η χολολιθίαση (πέτρες στην
        χοληδόχο κύστη`,
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus!"
},
{
    question: `Πότε wqdqsdasd και πότε δεν χειρουργείται η χολολιθίαση (πέτρες στην
        χοληδόχο κύστη`,
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus!"
},
{
    question: `Πότε wqdqsdasd και πότε δεν χειρουργείται η χολολιθίαση (πέτρες στην
        χοληδόχο κύστη`,
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus!"
},
{
    question: `Πότε wqdqsdasd και πότε δεν χειρουργείται η χολολιθίαση (πέτρες στην
        χοληδόχο κύστη`,
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus!"
},
]