const anyfunction = () =>{
    return(((Math.floor(Math.random() * 10)) %2 ) ===0) ? true : false
  }
  const resolvefuntion = () =>{console.log("success")}
  const rejectfuction = () => {console.log("failure")}
  
  const result = new Promise((resolve,reject)=>{
    setTimeout(()=>(anyfunction() ? resolve() : reject() ),2000)
  })