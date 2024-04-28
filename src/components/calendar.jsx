import Navbar from "./ui/navbar";

function Calendar() {
  return (
    <div>
      <Navbar />

      <div class="max-w-6xl mx-auto mt-40">

        <div class="bg-white rounded-lg shadow-md">
          <div class="flex items-center justify-between bg-blue-500 text-white py-2 px-4 rounded-t-lg">
            <span class="font-bold text-lg">April 2024</span>
          </div>
          <div class="px-4 py-2 grid grid-cols-7 text-center border-t border-l">
            <div class="py-2">Sun</div>
            <div class="py-2">Mon</div>
            <div class="py-2">Tue</div>
            <div class="py-2">Wed</div>
            <div class="py-2">Thu</div>
            <div class="py-2">Fri</div>
            <div class="py-2">Sat</div>
          </div>
          <div class="grid grid-cols-7 border-l gap-2">
            {[...Array(30).keys()].map((day) => (
              <div class="p-2 border-t border-r">{day + 1}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
