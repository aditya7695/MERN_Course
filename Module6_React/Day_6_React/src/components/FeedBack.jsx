import { useState } from "react"



const FeedBack = () => {

    const [student , setStudent] = useState({course : "" , feedback : ""})

    function handleFeedBack(e){
        setStudent((prev) => ({...prev , feedback : e.target.value}))
    }

    function handleSelect(e){
        setStudent((prev) => ({...prev , course : e.target.value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(student)
    }
  return (
    <div>
      <form>
        <select onChange={handleSelect}>
            <option>Select Course</option>
            <option value="react">React</option>
            <option value="js">JS</option>
            <option value="css">CSS</option>
        </select>
        <textarea placeholder="Write your feedback" onChange={handleFeedBack}></textarea>
        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default FeedBack
