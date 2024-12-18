import IconNotif from "./components/iconNotif"
import { Clock8, RotateCw, Clock6, House, Calendar, LogOut, Settings, ClipboardList } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import "./App.css"
// Import Swiper styles
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  return (
    <div className="relative max-w-[500px] ml-auto mr-auto" >
      <div className="flex items-center justify-between p-4">
        <div class="text-lg bg-gradient-to-r font-bold from-[#e63631]  to-[#ca335b] text-transparent bg-clip-text">Kerja Yuk!</div>
        <div onClick={() => navigate('/notification')}>
          <IconNotif />

        </div>
      </div>
      <div className="text-sm text-gray-700 px-4 mb-1">Hi, Good Morning!</div>
      <div className="px-4"> <div className="w-full  bg-gradient-to-r font-bold from-[#e63631]  to-[#ca335b] rounded-lg p-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2">
            <div className="w-10 h-10">
              <img src="https://avatar.iran.liara.run/public/boy?username=Ash" />
            </div>
            <div className="text-white">
              <div className="text-sm font-medium">Tabay</div>
              <div className="text-xs font-thin">UI/UX Designer</div>
            </div>
          </div>
          <div className="text-white">
            <div className="text-xs font-thin text-right">Member Since</div>
            <div className="text-sm font-medium">01 Juni 2021</div>
          </div>
        </div>
        <div className="flex items-end justify-between text-white mt-4">
          <div>
            <div className="text-xs font-thin">Location</div>
            <div className="text-sm font-medium">Kantor Shahid</div>
          </div>
          <div className="text-xs font-thin">ICO</div>
        </div>
      </div></div>

      <div className="mt-4 px-4">
        <div className="font-medium text-sm">Today's activity</div>
        <div className="flex justify-between mt-2 px-4">
          <div >
            <Clock8 color="#e63631" className="ml-auto mr-auto" />
            <div className="text-center mt-3">
              <div className="font-bold text-xs">08:30</div>
              <div className="font-light text-[10px]">Check In</div>
            </div>
          </div>
          <div >
            <RotateCw color="#e63631" className="ml-auto mr-auto" />
            <div className="text-center mt-3">
              <div className=" text-xs bg-gradient-to-r font-bold from-[#e63631]  to-[#ca335b] text-transparent bg-clip-text">03:00:00</div>
              <div className="font-light text-[10px]">Working Hours</div>
            </div>
          </div>
          <div >
            <Clock6 color="#e63631" className="ml-auto mr-auto" />
            <div className="text-center mt-3">
              <div className="font-bold text-xs">--:--</div>
              <div className="font-light text-[10px]">Check Out</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="pl-4 font-medium text-sm">PCS News</div>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={10}
          modules={[Pagination]}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '</span>';
            },
          }}
        >
          <SwiperSlide className="  rounded-lg p-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10">
                  <img src="https://avatar.iran.liara.run/public/boy?username=Ash" />
                </div>
                <div className="text-xs font-semibold bg-gradient-to-r  from-[#e63631]  to-[#ca335b] text-transparent bg-clip-text">Anna Riswati</div>
              </div>
              <div className="text-right text-xs">
                <div>Senin</div>
                <div>30 Mei 2022</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div>
                Kalimat 1 : Lorem Ipsum
              </div>
              <div>
                Kalimat 2 : Lorem Ipsum
              </div>
              <div>
                Kalimat 3 : Lorem Ipsum
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className="  rounded-lg p-2" >
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10">
                  <img src="https://avatar.iran.liara.run/public/boy?username=Ash" />
                </div>
                <div className="text-xs font-semibold bg-gradient-to-r  from-[#e63631]  to-[#ca335b] text-transparent bg-clip-text">Anna Riswati</div>
              </div>
              <div className="text-right text-xs">
                <div>Senin</div>
                <div>30 Mei 2022</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div>
                Kalimat 1 : Lorem Ipsum
              </div>
              <div>
                Kalimat 2 : Lorem Ipsum
              </div>
              <div>
                Kalimat 3 : Lorem Ipsum
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="  rounded-lg p-2"><div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <img src="https://avatar.iran.liara.run/public/boy?username=Ash" />
              </div>
              <div className="text-xs font-semibold bg-gradient-to-r  from-[#e63631]  to-[#ca335b] text-transparent bg-clip-text">Anna Riswati</div>
            </div>
            <div className="text-right text-xs">
              <div>Senin</div>
              <div>30 Mei 2022</div>
            </div>
          </div>
            <div className="mt-2 text-xs">
              <div>
                Kalimat 1 : Lorem Ipsum
              </div>
              <div>
                Kalimat 2 : Lorem Ipsum
              </div>
              <div>
                Kalimat 3 : Lorem Ipsum
              </div>
            </div></SwiperSlide>

        </Swiper>
      </div>
      <div className="px-4">
        <div className="text-sm font-medium mb-2">Online</div>
        <div className="flex p-4 shadow-card rounded-lg">
          {[...Array(8)].map((e, i) => {
            return (
              <div>
                <div key={i} className="w-9 h-9 -ml-1 shadow-avatar rounded-full">
                  <img src="https://avatar.iran.liara.run/public/boy?username=Ash" />
                </div>
                <div className="text-[10px] text-center">name</div>
                <div className="text-[8px] text-center">name</div>
              </div>
            )
          })}
          <div className="w-9 h-9 -ml-1 shadow-avatar rounded-full bg-red-500 text-white text-[8px] p-1 text-center">
            10 more
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 shadow-card w-full  py-4 justify-between h-[60px]">
        <div className="grid grid-cols-5 justify-between relative ">
          <div className="px-2">
            <House className="ml-auto mr-auto" color="#e63631" size={20} />
            <div className="text-[10px] font-bold text-center text-[#e63631]">Home</div>
          </div>
          <div className="px-2">
            <Calendar className="ml-auto mr-auto text-gray-400" size={20} />
            <div className="text-[10px] font-bold text-center text-gray-400">Attendance</div>
          </div>

          <div className="w-full flex justify-center">
            <div className="bg-[#e63631] rounded-full p-2 w-[60px] h-[60px] -translate-y-9 flex justify-center items-center  left-0 right-0">
              <LogOut color="white" size={25} />
            </div>
          </div>

          <div className="px-2">
            <ClipboardList className="ml-auto mr-auto text-gray-400" size={20} />
            <div className="text-[10px] font-bold text-center text-gray-400">Form</div>
          </div>
          <div className="px-2">
            <Settings className="ml-auto mr-auto text-gray-400" size={20} />
            <div className="text-[10px] font-bold text-center text-gray-400">Setting</div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default App
