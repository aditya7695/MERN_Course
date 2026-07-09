

const Test = () => {
    const names = ['aditya','prajwal','ashish','pritesss','jahfgsbdnv','jgfhernds','eraiguadfsuygh'];
    // const dogUrl = "https://images.unsplash.com/photo-1617531653635-4b0e357c091b?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div>
      <ol>
        {names.map((item)=>(<li>{item}</li>))}
      </ol>
      {/* <img src={dogUrl} /> */}

      <div style={{
        height : "200px",
        width : "300px",
        backgroundColor : "orange",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
      }
      }>

      </div>
    </div>
  )
}

export default Test
