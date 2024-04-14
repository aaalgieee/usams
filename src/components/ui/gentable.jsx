function GenTable() {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email Add</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Time-in</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>

            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>pespinosa_220000000989@uic.edu.ph</td>
              <td>Princess Micah</td>
              <td>Espinosa</td>
              <td>CCS</td>
              <td>7:30</td>
              <td>Bonifacio</td>
            </tr>


            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>aorig_200000000296@uic.edu.ph</td>
              <td>Al Gabriel</td>
              <td>Orig</td>
              <td>CCS</td>
              <td>5:30</td>
              <td>Bangke</td>
            </tr>


            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>wmarinay_220000001044@uic.edu.ph</td>
              <td>Wilfredo</td>
              <td>Marinay</td>
              <td>CSS</td>
              <td>10:00</td>
              <td>Bonifacio</td>
            </tr>

             {/* row 4 */}
             <tr>
              <th>4</th>
              <td>ktan_220000002154@uic.edu.ph</td>
              <td>Kyle Clancy</td>
              <td>Tan</td>
              <td>CPC</td>
              <td>1:00</td>
              <td>Bangke</td>
            </tr>



          </tbody>
        </table>
      </div>
    );
  }
  export default GenTable;
  