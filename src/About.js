

const About = () => {

    return(
        <>
         <nav className="nav">
        <h1>Look The Collection of Shoes</h1>
        <i class="fa-solid fa-shoe-prints"></i>
    </nav>
    <br />
    <div className="abt">
          <div>
            <img src="images/shoecoolection.jpg" alt="" />
            </div>
          <div className="wp">
            <h1>We Provide </h1>
            <p>Welcome to our shoe paradise, where every step is a style statement! Our shoe shop is a haven for shoe enthusiasts, offering a vast collection of trendy footwear from all the top brands. <br />
            Step into our store and explore a world of fashion-forward shoes, carefully curated to cater to every taste and occasion. Whether you're looking for casual kicks, elegant heels, or sporty sneakers, we have it all in a range of sizes to ensure the perfect fit for everyone.  <br />
            Our shelves are adorned with the latest designs and timeless classics, showcasing the finest craftsmanship and attention to detail. From luxurious leather to durable fabrics, our shoes are not just about looks but also about comfort and durability.</p>
            <br />
            <marquee bgcolor="#ccc" loop="-1" style={{fontSize: "xx-large"}}>Create stunning images with as much or as little control as you , thanks to a choice basic and creative modes</marquee>
          </div>
    </div>

    <section>
        <h1>Here We Are</h1>
      <section className="s1">
        <div className="video">
         <video style={{height:"600px" ,width:"90%"}} src="images/video.mp4" autoplay="" voice loop></video><br />
         <audio controls autoplay>
          <source src="images/The Chainsmokers - Self Destruction Mode [64] Kbps-(PagalWorld.Gay).mp3" type="audio/mpeg"/>

         </audio>
        </div>
      </section>

    </section>
        </>
    )
}

export default About;