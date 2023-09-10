import React from "react";
import Day1 from "./svgs/Day1Icon.svg";
import Day2 from "./svgs/Day2Icon.svg";
import Day3 from "./svgs/Day3Icon.svg";
import secondCurve from "./svgs/SecondCurve.svg";
import topcurve from "./svgs/TopCurve.svg";
import cakeIcon from "./svgs/cakeIcon.svg";
import "./timelineA.css";
const TimelineA = (props) => {
  return (
    <section className="py-32">
      <div className="text-white mt-[1.5rem] md:mt-[4rem] text-[50px] md:text-[72px] font-roboto text-center font-medium ">
        Timeline
      </div>
      <div className="xl:pl-[30%]">
        <div id="tFirstElement" className="flex  ">
          <div className="w-1/12 flex flex-col justify-center">
            <img
              className="topcurve relative "
              src={topcurve}
              width="437"
              height="637"
              alt=""
              style={{ maxWidth: "inherit" }}
            />
            <div>
              <img src={cakeIcon} alt="" className="mx-auto my-5" />
            </div>
            <div
              className="h-[300px] w-[3px] mx-auto mt-5
          
            bg-gradient-to-t from-green-500 via-green-500 to-[#919097]
          "
            ></div>
          </div>
          <div className="w-11/12 pt-[320px] mt-[320px]">
            <div className="flex flex-col justify-start text-white">
              <div>
                <div className="font-light text-md text-white">
                  {" "}
                  11th September
                </div>
                <div className="font-medium text-5xl font-roboto text-RoyalPurple">
                  Registrations beign
                </div>
              </div>
              <div className="font-fira glassmorphic p-5 md:max-w-[60%] mr-10 mt-4">
                Explore the exciting world of technology and innovation. Unleash
                your creative potential and build something extraordinary. Join
                us on September 11th for a hackathon like no other!"
              </div>
            </div>
          </div>
        </div>
        <div id="tSecondElement" className="flex">
          <div className="w-1/12 flex flex-col items-center relative">
            {" "}
            <div className="h-[300px] w-[3px] bg-NeonGreen mx-auto "></div>
            <img
              className="hidden md:block absolute bottom-1 secondcurve"
              src={secondCurve}
              alt=""
            />
          </div>
          <div className="w-11/12">
            <div className="flex flex-col md:ml-10 xl:ml-5 justify-start text-white">
              <div className="">
                <div className="font-light md:mt-[-15px] text-md text-white">
                  {" "}
                  12th October
                </div>
                <div className="font-medium text-4xl font-roboto text-RoyalPurple">
                  Announcement of the Selected 50 Teams
                </div>
              </div>

              <div className="font-fira glassmorphic p-5 md:max-w-[60%] mr-10 mt-4">
                Stay tuned for October 12th! In one month, we'll reveal the top
                50 teams joining our offline 36-hour hackathon. Get ready for
                their creative innovations!
              </div>
            </div>
          </div>
        </div>
        <div id="tThirdElement" className="flex">
          <div className="w-1/12 flex flex-col ">
            <div>
              <div
                className="h-[100px] w-[3px] mx-auto 
            
            bg-gradient-to-b from-NeonGreen via-green-200 to-[#b1b0b5]
            "
              ></div>
              <img src={Day1} alt="" className="mx-auto mt-5" />
            </div>
            <div className="h-[100%] w-[3px]  bg-TerraCotta mx-auto mt-5"></div>
          </div>
          <div className="w-11/12 pt-[100px] ">
            <div className="flex flex-col justify-start text-white">
              <div>
                <div className="font-light text-md text-white">
                  {" "}
                  2nd November 2023
                </div>
                <div className="font-medium text-5xl font-roboto text-TerraCotta">
                  Day 1: Let The Hack Begin
                </div>
              </div>
              <div className="font-fira  md:w-[70%] xl:ml-[11%] mr-10 mt-4 rounded-[16px]">
                <table className="table-glassmorphic">
                  <thead>
                    <tr>
                      <th>Timings</th>
                      <th>Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 9:30am - 12:30pm</td>
                      <td>Pre-hackathon Speaker session </td>
                    </tr>
                    <tr>
                      <td>4:00pm</td>
                      <td>Ribbon Cutting and Address </td>
                    </tr>
                    <tr>
                      <td> 6:00pm</td>
                      <td>Hackathon Begins </td>
                    </tr>
                    <tr>
                      <td> 11:00pm - 12:30pm</td>
                      <td>First Round of evaluation </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="tFourthElement" className="flex">
          <div className="w-1/12 flex flex-col ">
            <div>
              <div
                className="h-[100px] w-[3px]
             bg-gradient-to-b from-TerraCotta via-orange-200 to-[#b1b0b5]
              mx-auto "
              ></div>
              <img src={Day2} alt="" className="mx-auto my-5" />
            </div>
            <div className="h-[100%] w-[3px] bg-NeonViolet mx-auto mt-5"></div>
          </div>
          <div className="w-11/12 pt-[100px] ">
            <div className="flex flex-col justify-start text-white">
              <div>
                <div className="font-light text-md text-white">
                  {" "}
                  2nd October 2023
                </div>
                <div className="font-medium text-5xl font-roboto text-NeonViolet">
                  Day 2: The Hack Continues
                </div>
              </div>
              <div className="font-fira xl:ml-[11%] md:w-[70%] mr-10 mt-4 rounded-[16px]">
                <table className="table-glassmorphic">
                  <thead>
                    <tr>
                      <th className="bg-TerraCotta">Timings</th>
                      <th className="bg-TerraCotta">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 9:30am - 10:30am</td>
                      <td>Second Round Of Evaluation </td>
                    </tr>
                    <tr>
                      <td>4:00pm </td>
                      <td>Ice Breaking & Networking sessions </td>
                    </tr>
                    <tr>
                      <td> 6:00pm-8:00pm</td>
                      <td>third round of Evaluation </td>
                    </tr>
                    <tr>
                      <td> 10:00pm </td>
                      <td>Kahoot and Jam sessions </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="tFifthElement" className="flex">
          <div className="w-1/12 flex flex-col ">
            <div>
              <div
                className="h-[100px] w-[3px]
            bg-gradient-to-b from-NeonViolet via-violet-200 to-[#b1b0b5]
            mx-auto "
              ></div>
              <img src={Day3} alt="" className="mx-auto my-5" />
            </div>
            <div className="h-[350px] md:h-[250px] w-[3px] bg-gradient-to-t from-NeonGreen via-NeonGreen to-[#b1b0b5] mx-auto mt-5"></div>
          </div>
          <div className="w-11/12 pt-[100px] ">
            <div className="flex flex-col justify-start text-white">
              <div>
                <div className="font-light text-md text-white">
                  {" "}
                  2nd October 2023
                </div>
                <div className="font-medium text-5xl font-roboto text-NeonGreen">
                  Day 3: The Hack Ends
                </div>
              </div>
              <div className="font-fira xl:ml-[11%] md:max-w-[70%] mr-10 mt-4 rounded-[16px]">
                <table className="table-glassmorphic">
                  <thead>
                    <tr>
                      <th className="bg-NeonViolet">Timings</th>
                      <th className="bg-NeonViolet">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 6:00am</td>
                      <td>Hackathon Stops </td>
                    </tr>
                    <tr>
                      <td>9:00am-11:30pm </td>
                      <td>Final Round of Evaluation </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineA;