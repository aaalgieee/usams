function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Event Name</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Location</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Intramurals</td>
            <td>02-02-2023</td>
            <td>02-05-2023</td>
            <td>UIC - Main, Annex</td>
            <td>USG</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Intro to Firebase</td>
            <td>01-19-2024</td>
            <td>01-20-2024</td>
            <td>UIC - Main</td>
            <td>GDSC - UIC</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>CCS Night</td>
            <td>12-25-2024</td>
            <td>12-25-2024</td>
            <td>UIC - Main</td>
            <td>CCS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
