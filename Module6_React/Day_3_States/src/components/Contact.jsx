import Button from "./Button";


const Contact = () => {
    const handleContactEvent = () =>{
        alert("Alert from contacts")
    }
  return (
    <div>
      <Button text={"From contact"} clickEvent={handleContactEvent}/>
    </div>
  )
}

export default Contact
