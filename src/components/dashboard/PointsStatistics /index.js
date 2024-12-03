"use client"; // This tells Next.js that this is a Client Component

import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Optional for styling
import {
  calculatePercentage,
  epochPointsWithHeight,
  latestEntry,
  maxTotal,
  realTimeDataHeightCalc,
} from "./common";

const BarChart = ({ type, barValue, total }) => {
  return (
    <>
      {barValue !== undefined &&
      total !== undefined &&
      calculatePercentage(barValue, total) !== 0 ? (
        <div
          className={`point-bx ${type}point-box`}
          style={{
            height: `${calculatePercentage(barValue, total)}rem`,
          }}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

const PointsStatistics = ({ data, realTimeData }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth", // Optional for smooth scrolling
      });
    }
  }, [data, realTimeData]);
  if (!data) {
    return;
  }
  // const [getLatestEntry, setGetLatestEntry] = useState(null);
  // useEffect(() => {
  //   setGetLatestEntry(latestEntry(data));
  // }, [data]);
  const getMaxTotal = maxTotal(data, realTimeData);
  const pointsHeightData = epochPointsWithHeight(data, getMaxTotal);
  const pointsHeight = pointsHeightData.sort((a, b) =>
    dayjs(a.date).diff(dayjs(b.date))
  );
  const getLatestEntry = latestEntry(data);
  // Realtime data function for chart
  const realTimeDataHeight = realTimeDataHeightCalc(realTimeData, getMaxTotal);

  const generateEntries = (dateString, dataLength) => {
    const today = new Date();
    const date = new Date(dateString);
    const startDate = !dateString ? today : date;

    const entries = [];
    const formattedDate = dayjs(today).format("YYYY-MM-DD");

    for (let i = 1; i < 30 - dataLength; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() - i);
      const formattedDatecurrentDate = dayjs(currentDate).format("YYYY-MM-DD");

      if (formattedDatecurrentDate !== formattedDate) {
        entries.push({
          dummy: 0,
          date: currentDate, // Format: YYYY-MM-DD
          total: 0, // Ensure precision
          chartHeight: "10rem",
        });
      }
    }

    return entries;
  };

  const generateEntryDate =
    data.length > 0 ? getLatestEntry : realTimeData.date;

  const entries = generateEntries(generateEntryDate, data.length);

  return (
    <div className="statiticschart-card border border-[#E7E7E9] dark:border-[#3E3E3E] h-full flex flex-col justify-between">
      <div className="card-title">
        <h2 className="m-0 text-base font-medium text-[#343437] dark:text-white">
          Earnings Statistics
        </h2>
      </div>
      {realTimeDataHeight ? (
        <>
          <div className="chart-box" ref={scrollRef}>
            <div className="flex flex-row-reverse gap-[1rem]">
              {entries?.map((items, index) => {
                return (
                  <div className={`chart-view`} key={index}>
                    <div
                      className="chart-card"
                      style={{
                        height: `${items.chartHeight}`,
                      }}
                    >
                      <div
                        className={`point-bx dummypoint-box`}
                        style={{
                          height: `${items.chartHeight}`,
                        }}
                      ></div>
                    </div>
                    <h6 className="date text-[#68686F] dark:text-[#9F9FA5]">
                      {dayjs(items.date).format("MMM D")}
                    </h6>
                  </div>
                );
              })}
            </div>
            {pointsHeight.length > 0 && (
              <div className="flex flex-row gap-[1rem]">
                {pointsHeight?.map((items, index) => {
                  return (
                    <Tippy
                      interactive={true}
                      interactiveBorder={20}
                      delay={100}
                      content={
                        <div className="tooltip-info-statitics">
                          <h6 className="date">
                            {dayjs(items.date).format("MMM D")}
                          </h6>
                          <ul>
                            <li>
                              <span>Heart Beat :</span>{" "}
                              <span>
                                {items?.details?.heartbeat
                                  ? items?.details?.heartbeat
                                  : 0}
                              </span>
                            </li>
                            <li>
                              <span>Referral :</span>{" "}
                              <span>
                                {items?.details?.referral
                                  ? items?.details?.referral
                                  : 0}
                              </span>
                            </li>
                            <li>
                              <span>Total :</span> <span>{items?.points}</span>
                            </li>
                          </ul>
                        </div>
                      }
                      placement="right"
                      key={`statitics_${index}`}
                    >
                      <div className={`chart-view`} key={index}>
                        <h6 className="txt-bx bg-[#1b1b1d] text-[#f2f3f9] dark:bg-white dark:text-[#161618]">
                          {items?.points}
                        </h6>

                        <div
                          className="chart-card"
                          style={{
                            height: `${items.chartHeight}`,
                          }}
                        >
                          <BarChart
                            type="heartbest"
                            barValue={items?.details?.heartbeat}
                            total={items?.points}
                          />
                          <BarChart
                            type="referral"
                            barValue={items?.details?.referral}
                            total={items?.points}
                          />
                        </div>
                        <h6 className="date text-[#68686F] dark:text-[#9F9FA5]">
                          {dayjs(items.date).format("MMM D")}
                        </h6>
                      </div>
                    </Tippy>
                  );
                })}
              </div>
            )}
            {realTimeDataHeight && (
              <>
                <Tippy
                  interactive={true}
                  interactiveBorder={20}
                  delay={100}
                  content={
                    <div className="tooltip-info-statitics">
                      <h6 className="date">
                        {dayjs(realTimeDataHeight.date).format("MMM D")}
                      </h6>
                      <ul>
                        {realTimeDataHeight?.total_heartbeats && (
                          <li>
                            <span>Heart Beat :</span>{" "}
                            <span>{realTimeDataHeight?.total_heartbeats}</span>
                          </li>
                        )}
                        {realTimeDataHeight?.referral && (
                          <li>
                            <span>Referral :</span>{" "}
                            <span>{realTimeDataHeight?.referral}</span>
                          </li>
                        )}
                        {realTimeDataHeight?.bonus && (
                          <li>
                            <span>Bonus :</span>{" "}
                            <span>{realTimeDataHeight?.bonus}</span>
                          </li>
                        )}
                        {realTimeDataHeight?.total && (
                          <li>
                            <span>Total :</span>{" "}
                            <span>{realTimeDataHeight?.total}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  }
                  placement="right"
                  key={`key_${realTimeDataHeight?.total}`}
                >
                  <div
                    className={`chart-view latest-chart`}
                    key={realTimeDataHeight?.total}
                  >
                    <h6 className="txt-bx bg-[#1b1b1d] text-[#f2f3f9] dark:bg-white dark:text-[#161618]">
                      {realTimeDataHeight?.total}
                    </h6>

                    <div
                      className="chart-card"
                      style={{
                        height: `${realTimeDataHeight.chartHeight}`,
                      }}
                    >
                      {realTimeDataHeight?.total_heartbeats && (
                        <BarChart
                          type="heartbest"
                          barValue={realTimeDataHeight?.total_heartbeats}
                          total={realTimeDataHeight?.total}
                        />
                      )}

                      {realTimeDataHeight?.referral && (
                        <BarChart
                          type="referral"
                          barValue={realTimeDataHeight?.referral}
                          total={realTimeDataHeight?.total}
                        />
                      )}
                      {realTimeDataHeight?.bonus && (
                        <BarChart
                          type="bonus"
                          barValue={realTimeDataHeight?.bonus}
                          total={realTimeDataHeight?.total}
                        />
                      )}
                    </div>
                    <h6 className="date text-[#68686F] dark:text-[#9F9FA5]">
                      {dayjs(realTimeDataHeight?.date).format("MMM D")}
                    </h6>
                  </div>
                </Tippy>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center p-4 h-full w-full">
          <p className="m-0 text-black dark:text-white text-base font-medium">
            Earnings not available
          </p>
        </div>
      )}
    </div>
  );
};

export default PointsStatistics;
