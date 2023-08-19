import { useState } from "react"

const FAQ = [
    {
    question:"Is this a good product?",
    answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
},
    {
        question: "How much does it cost?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        question: "When can I get it?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
]

export default function App() {
    return(
        <> 
        <Accordian/>
        </>
    )
}

function Accordian() {
  return(
      <div className="accordian">
          <h2>Frequently Asked Questions</h2>
          {FAQ.map(item => <Item item={item} key={item.question}/>)}
    </div>
  )
}

function Item({item}) {
    const [isOpen,setIsOpen] = useState(false)

    function handleQuestion() {
        setIsOpen(!isOpen)
    }
    return (
        <div className="item">
             <div className="Question">
                <h3>{item.question}</h3>
                <p onClick={handleQuestion}>{isOpen ? '-':'+'}</p>
             </div>
             <p>
                {isOpen && item.answer}
             </p>
        </div>
    )
}