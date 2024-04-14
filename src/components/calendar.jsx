import Navbar from "./ui/navbar";

function Calendar() {
    return (
    
    <div> 
    <Navbar />
      
    <div class="max-w-2xl mx-auto mt-14">
     
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
          <div class="grid grid-cols-7 border-l">
             
              <div class="p-2 border-t border-r"></div>
              <div class="p-2 border-t border-r">1</div>
              <div class="p-2 border-t border-r">2</div>
              <div class="p-2 border-t border-r">3</div>
              <div class="p-2 border-t border-r">4</div>
              <div class="p-2 border-t border-r">5</div>
              <div class="p-2 border-t border-r">6</div>
              <div class="p-2 border-t border-r">7</div>
              <div class="p-2 border-t border-r">8</div>
              <div class="p-2 border-t border-r">9</div>
              <div class="p-2 border-t border-r">10</div>
              <div class="p-2 border-t border-r">11</div>
              <div class="p-2 border-t border-r">12</div>
              <div class="p-2 border-t border-r">13</div>
              <div class="p-2 border-t border-r">14</div>
              <div class="p-2 border-t border-r">15</div>
              <div class="p-2 border-t border-r">16</div>
              <div class="p-2 border-t border-r">17</div>
              <div class="p-2 border-t border-r">18</div>
              <div class="p-2 border-t border-r">19</div>
              <div class="p-2 border-t border-r">20</div>
              <div class="p-2 border-t border-r">21</div>
              <div class="p-2 border-t border-r">22</div>
              <div class="p-2 border-t border-r">23</div>
              <div class="p-2 border-t border-r">24</div>
              <div class="p-2 border-t border-r">25</div>
              <div class="p-2 border-t border-r">26</div>
              <div class="p-2 border-t border-r">27</div>
              <div class="p-2 border-t border-r">28</div>
              <div class="p-2 border-t border-r">29</div>
              <div class="p-2 border-t border-r">30</div>
          </div>
      </div>
  </div>
  </div>
        
    );
}

export default Calendar;