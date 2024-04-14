import Navbar from "./ui/navbar";


function About() {
    return (
        <div>
        <Navbar />

        <br/> <br/> 
        <h1 className="text-5xl font-bold">Our Team</h1>
        <p className="py-6">
        The University Student Attendance Monitoring System (USAMS) has significantly improved the academic experience for Computer Science 
        students, with its intuitive interface and real-time attendance tracking. <br/>feature enhancing the overall learning experience. This system streamlines administrative processes and improves student engagement.
       </p>

       <div className=" hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg mr-18 mt-5"
        />

        </div>

        <p className="text-center">Al Gabriel Orig</p>

       </div>


 
      
        
    );
}

export default About;