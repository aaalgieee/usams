import Navbar from "./ui/navbar";
import Hero from "./ui/hero";
import Table from "./ui/table";

function Dashboard() {
    return (
        <div>
            <Navbar />
            <br/>
            <Hero/>
            <br/>
            <Table />
        </div>
    );
}

export default Dashboard;