import React from "react";

export default function Secondcount() {
  // const countdown2 = () => {
  //   const countDate2 = new Date("July 11, 2022 00:00:00");
  //   const now2 = new Date().getTime();
  //   const gap2 = countDate2 - now2;

  //   const second2 = 1000;
  //   const minute2 = second2 * 60;
  //   const hour2 = minute2 * 60;
  //   const day2 = hour2 * 24;

  //   const textDay2 = Math.floor(gap2 / day2);
  //   const textHour2 = Math.floor((gap2 % day2) / hour2);
  //   const textMinute2 = Math.floor((gap2 % hour2) / minute2);
  //   const textSecond2 = Math.floor((gap2 % minute2) / second2);

  //   document.querySelector(".day2").innerText = textDay2;
  //   document.querySelector(".hour2").innerText = textHour2;
  //   document.querySelector(".minute2").innerText = textMinute2;
  //   document.querySelector(".second2").innerText = textSecond2;

  //   if (gap2 < 0) {
  //     clearInterval(countdown2);
  //     document.querySelector(".day2").innerText = "😢";
  //     document.querySelector(".hour2").innerText = "😢";
  //     document.querySelector(".minute2").innerText = "😢";
  //     document.querySelector(".second2").innerText = "😢";
  //   }
  // };

  // setInterval(() => {
  //   countdown2();
  // }, 1000);

  return (
    <div>
      <button className="px-8 py-1 text-lg antialiased font-medium tracking-wide text-gray-100">
        <div className="flex justify-center gap-2 countdown md:gap-4">
          <div className="container-day bg-[#193247] rounded-sm py-1 px-2">
            <h3 className="text-3xl day2">Time</h3>
          </div>
          <div className="container-hour bg-[#193247] rounded-sm py-1 px-2">
            <h3 className="text-3xl hour2">Time</h3>
          </div>
          <div className="container-minute bg-[#193247] rounded-sm py-1 px-2">
            <h3 className="text-3xl minute2">Time</h3>
          </div>
          <div className="container-second bg-[#193247] rounded-sm py-1 px-2">
            <h3 className="text-3xl second2">Time</h3>
          </div>
        </div>
      </button>
    </div>
  );
}
