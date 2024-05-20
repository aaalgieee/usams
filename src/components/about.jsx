import Navbar from "./ui/navbar";
import gab from './img/gab.png';
import fred from './img/fred.png';
import micah from './img/micah.png';
import tan from './img/tan.png';


function About() {
    return (
        <div>
        <Navbar />

        <br/>
        <br/> 
        <h1 className="ml-11 text-5xl font-bold">Our Team</h1>
        <h3  className="ml-11 text-gray-500">
        The University Student Attendance Monitoring System (USAMS) was implemented at the University of the Immaculate Conception. This innovative system has significantly transformed the way we manage and <br/> track student attendance, bringing about notable improvements in efficiency and accuracy.
        The system's user-friendly interface and seamless integration into our existing infrastructure  have made it a valuable asset  <br/>for both faculty and administrative staff. The real-time attendance tracking feature ensures 
        that we can promptly address any concerns related to student attendance and engagement.  <br/>This has not only streamlined administrative processes but has also enhanced the overall learning experience for our students.
        </h3>

        <div>
        <div style={{ position: "relative" }}>
            <h3 style={{ position: "absolute", top: "420px", left: "140px" }} className="max-w-xs">Al Gabriel Orig</h3>
            <h1 style={{ position: "absolute", top: "400px", left: "110px" }} className="text-1xl font-bold">Programmer Backend</h1>
            <h3 style={{ position: "absolute", top: "420px", left: "522px" }} className="max-w-xs">Wilfredo G. Marinay Jr</h3>
            <h1 style={{ position: "absolute", top: "400px", left: "510px" }} className="text-1xl font-bold">Backend/Frontend/Test</h1>
            <h3 style={{ position: "absolute", top: "420px", left: "922px" }} className="max-w-xs">Princess Micah Espinosa</h3>
            <h1 style={{ position: "absolute", top: "400px", left: "910px" }} className="text-1xl font-bold">FrontEnd/Documentation</h1>
            <h3 style={{ position: "absolute", top: "420px", left: "1372px" }} className="max-w-xs">Kyle Tan</h3>
            <h1 style={{ position: "absolute", top: "400px", left: "1360px" }} className="text-1xl font-bold">Lead Tester</h1>
          
         </div>


         <div className="flex justify-start">
            <img
               className="max-w-xs sm:max-w-xs rounded-lg mx-10 mt-16"
               src={gab}
               alt="Team Member"
            />
            <img
               className="max-w-xs sm:max-w-xs rounded-lg mx-10 mt-16"
               src={fred}
               alt="Team Member"
            />
            <img
               className="max-w-xs sm:max-w-xs rounded-lg mx-10 mt-16"
               src={micah}
               alt="Team Member"
            />
            <img
               className="max-w-xs sm:max-w-xs rounded-lg mx-10 mt-16"
               src={tan}
               alt="Team Member"
            />
         </div>


         </div>
     </div>
    );
}

export default About;