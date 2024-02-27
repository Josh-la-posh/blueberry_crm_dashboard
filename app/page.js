
import Image from "next/image";
import ActiveUsers from "./components/ActiveUsers";
import Card from "./components/Card";
import LineChart from "./components/Chart";
import Date from "./components/Date";
import ProgressChart from "./components/ProgressChart";
import Tables from "./components/Tables";
import PopularCategories from "./components/sidebar/PopularCategories";
import UpcomingEvents from "./components/sidebar/UpcomingEvents";
import { Datas } from "./data/Data";

export default function Home() {
  return (
    <div
      className="
        mx-auto lg:px-10 md:px-4 px-2 bg-[#D1EAF0] py-4
      "
    >
      <div
        className="flex items-center justify-between mb-9"
      >
        <div
          className="font-bold lg:text-[24px] md:text-[20px] text-[18px]"
        >
          Overview
        </div>
        <div className="flex items-center justify-between gap-3">
          <Date children={'22 Jun 2020'}/>
          <div className="text-[#454545]">-</div>
          <Date children={'22 Jun 2020'}/>
        </div>
      </div>

      {/* CARD */}

      <div className="md:flex justify-between gap-4 mb-7">
        <div className="md:w-[57%]">
          <div className="flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <Card title='Total Profit' price='95,595' discount='3.55' sign='+'></Card>
              <Card title='Total Expenses' price='12,789' discount='2.67' sign='+'></Card>
              <Card title='Total profit' price='1,984' discount='9.89' sign='-'></Card>
            </div>

            {/* CHART */}

            <LineChart />
          </div>
        </div>

        <div className="bg-white xl:gap-7 lg:p-5 md:px-2 p-6 md:py-2 md:w-[40%] md:mt-0 mt-[30px]">
          <div className="flex flex-col xl:gap-8 lg:gap-5 md:gap-3 gap-4 h-full">
            <div className="font-bold lg:text-[20px] md:text-[14px]">Top Selling Product</div>
            <div className="flex flex-col md:justify-between md:gap-0 gap-[15px] flex-1">
              {
                Datas.map(data => {
                  return (
                    <div key={data.id} className="flex items-center justify-between">
                      <div className="flex items-center lg:gap-4 gap-2">
                        <div className="h-[30px] w-[30px] rounded-[5px] bg-black">
                          <Image
                            height={30}
                            width={30}
                            alt="product"
                            src={data.img}
                          />
                        </div>
                        <div className="text-[#808080] xl:text-[16px] lg:text-[12px] md:text-[9px] text-[12px]">{data.name}</div>
                      </div>
                      <div className="font-bold xl:text-[14px] lg:text-[10px] md:text-[10px] text-[12px]">${data.price}</div>
                    </div>                
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>


      <div className="md:flex justify-between gap-4">
        <div className="md:w-[57%] md:flex gap-3">
          <div className="flex-1 md:flex flex-col justify-between md:mb-0 mb-7 md:gap-3 h-full">
            <div className="flex-1 md:mb-0 mb-7 md:h-[65%] bg-white">
              <ActiveUsers />
            </div>
            <div className="">
              <ProgressChart />
            </div>
          </div>
          <div className="flex-1">
            <UpcomingEvents />
          </div>
        </div>
        <div className="bg-white xl:gap-7 lg:p-5 md:px-2 p-6 md:py-2 md:w-[40%] md:mt-0 mt-[30px]">
          <PopularCategories />
        </div>
      </div>

      {/* RECENT ORDERS */}


      <div className="md:flex justify-between gap-4 mt-7">
        <div className="md:w-[57%] bg-white p-4">
          <div className="flex flex-col xl:gap-8 lg:gap-5 md:gap-3 gap-4 h-full">
            <div className="font-bold lg:text-[20px] md:text-[14px]">Recent Orders</div>
            <Tables />
          </div>
        </div>

        <div className="bg-white xl:gap-7 lg:p-5 md:px-2 p-6 md:py-2 md:w-[40%] md:mt-0 mt-[30px]">
          <div className="flex flex-col xl:gap-8 lg:gap-5 md:gap-3 gap-4 h-full">
            <div className="font-bold lg:text-[20px] md:text-[14px]">City Orders Statistics</div>
            <div className="flex flex-col md:justify-between md:gap-0 gap-[15px] flex-1">
              
            </div>
          </div>
        </div>
      </div>





    </div>
  );
}
