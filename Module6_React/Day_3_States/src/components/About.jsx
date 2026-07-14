import Button from "./Button"

const About = () => {
    const handleAboutEvent = ()=>{
        alert("Alert from About")
    }
  return (
    <div>
      <Button text={"From About"} clickEvent={handleAboutEvent}/>
    </div>
  )
}

export default About
