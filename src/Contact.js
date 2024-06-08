

const Contact = () => {
    return(
        <>
         <center> <div className="conbg" > 
        <center><h1>Contact Us</h1> </center>
        <center>
            <br />
            <div>
                <div className="head" style={{backgroundColor:"#124076",width:"50%",color:"white",padding:"10px"}}>
                    connect with us
                </div>  
                  <div className="message" >
                    <h1 style={{fontStyle:"italic",color:"#124076"}}>Contact Us</h1>
                    <input type="text" placeholder="Name" /> <br />
                    <input type="email" placeholder="Email" /> <br />
                    Message <br /><input type="text"  style={{height:"80px"}} />  <br />
                    <button>Send Message</button>
                  </div>
            </div>
        </center>
        </div>
        </center>
        </>
    )
}

export default Contact;