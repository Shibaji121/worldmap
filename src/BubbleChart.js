import React from "react";

const BubbleChart = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-9 pt-2.5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f0cc6b28d4b7958fd296d28108d0b7868248f65b502042606792380a3f9fd9?"
              className="self-stretch w-10 aspect-square"
              alt=""
            />
            <div className="flex-auto self-stretch my-auto text-xl text-black">
              WASSERSTOFF
            </div>
            <div className="flex flex-col flex-1 justify-center items-end self-stretch py-1 pl-16 my-auto bg-indigo-50 rounded-lg max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ff94c149c8b0e2b4e56fcbcd3507236e4dc11d718df9257090ace533e6eadf?"
                className="w-6 aspect-square"
                alt=""
              />
            </div>
            <div className="flex gap-5 justify-between self-stretch my-auto text-base font-light tracking-wide leading-6 whitespace-nowrap text-slate-500 max-md:flex-wrap max-md:max-w-full">
              <div>Statistics</div>
              <div className="text-black">Overview</div>
              <div>Dashboard</div>
              <div>Analytics</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f8ba8f8dc684fb750441a56f4d50f7c2e53b814d178410d3449f1be3431f2f?"
              className="w-6 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c82dc6a5095943626c9b88626c2ecf5cbd150f747de006c3b2e97dbdc14b5d2d?"
              className="w-6 aspect-square"
              alt=""
            />
          </div>
        </div>
        <div className="self-center mt-2 ml-64 bg-indigo-700 h-[3px] w-[106px]" />
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10">
              <div className="text-4xl tracking-tight leading-10 text-black">
                Design faster
              </div>
              <div className="flex flex-col py-5 mt-8 whitespace-nowrap bg-white rounded-xl shadow">
                <div className="flex flex-col px-8 w-full text-center bg-white rounded-xl max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/182e34f63b096daee700a4f54969a6ea7552f8a64530d028311098d21c053746?"
                    className="self-center max-w-full aspect-square w-[146px]"
                    alt=""
                  />
                  <div className="mt-4 text-xl tracking-wide leading-8 text-indigo-900">
                    Total earning
                  </div>
                  <div className="flex gap-1.5 self-center">
                    <div className="grow text-2xl font-semibold leading-9 text-indigo-900">
                      $12,875
                    </div>
                    <div className="flex gap-0 self-start mt-2.5 text-sm tracking-wide leading-5 text-green-600">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6327fcef30b2479c095416f257073b7dfed2be7b2ffbd0794bb79c859c3df43?"
                        className="self-start w-3.5 aspect-[0.58]"
                        alt=""
                      />
                      <div className="grow">2%</div>
                    </div>
                  </div>
                  <div className="text-xs tracking-wide leading-4 text-indigo-900">
                    Compared to $21,504 last year
                  </div>
                </div>
                <div className="flex flex-col px-8 mt-8 w-full text-sm tracking-wide leading-5 text-indigo-900 bg-white rounded-xl max-md:px-5">
                  <div className="flex gap-4 pr-2">
                    <div className="grow">Presentation</div>
                    <div>862</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d46bf654910ec221400b46888a0c56cb111dfcfa76c80cb8b8cad9ff251337a7?"
                      className="aspect-[3.23] w-[68px]"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-4 pr-2 mt-3">
                    <div className="grow">Development</div>
                    <div>753</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7f945d3410005bff4ef8804c997f7ada7afc85bf9fe54834640c9971e6b9dd1?"
                      className="aspect-[3.23] w-[68px]"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-4 pr-2 mt-3">
                    <div className="grow">Research</div>
                    <div>553</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6097cfbf2424cc93ca01467e54bfcb3eff4887f3543426603c7834e11c47de12?"
                      className="aspect-[3.23] w-[68px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-8 py-5 mt-7 w-full bg-indigo-400 rounded-xl shadow max-md:px-5">
                <div className="text-base font-light tracking-wide leading-6 text-white">
                  Total earning
                </div>
                <div className="flex gap-1.5 justify-between whitespace-nowrap">
                  <div className="flex-auto text-4xl tracking-tight leading-10 text-white">
                    $12,875
                  </div>
                  <div className="flex gap-0 self-start mt-5 text-sm tracking-wide leading-5 text-green-400">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cafef042f2ff4a047e83d315516d399828d43a80c27b017d469adc22748b657b?"
                      className="self-start w-3.5 aspect-[0.58]"
                      alt=""
                    />
                    <div className="grow">10%</div>
                  </div>
                </div>
                <div className="text-xs tracking-wide leading-4 text-white whitespace-nowrap">
                  Compared to $21,490 last year
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bfa42f69e52e700c1e7c34213b2126580463f0227f6bf61fc7b1e8c1fa52456?"
                  className="mt-5 w-full stroke-[1px] stroke-indigo-500"
                  alt=""
                />
                <div className="mt-4 text-base font-light tracking-wide leading-6 text-white">
                  Sales
                </div>
                <div className="flex gap-1.5 justify-between whitespace-nowrap">
                  <div className="flex-auto text-4xl tracking-tight leading-10 text-white">
                    $43,123
                  </div>
                  <div className="flex gap-0 self-start mt-5 text-sm tracking-wide leading-5 text-green-400">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cafef042f2ff4a047e83d315516d399828d43a80c27b017d469adc22748b657b?"
                      className="self-start w-3.5 aspect-[0.58]"
                      alt=""
                    />
                    <div className="grow">12%</div>
                  </div>
                </div>
                <div className="text-xs tracking-wide leading-4 text-white whitespace-nowrap">
                  Compared to $21,490 last year
                </div>
              </div>
              <div className="flex flex-col px-8 py-5 mt-7 w-full text-sm tracking-wide leading-5 text-indigo-900 whitespace-nowrap bg-white rounded-xl shadow max-md:px-5">
                <div className="flex gap-1.5 justify-between">
                  <div className="flex gap-1.5">
                    <div className="grow">Travel</div>
                    <div className="text-slate-400">760</div>
                    <div className="grow">2,540</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb82a54ca4959659ccbe090bfa506f1dbfc305ce222363dc19a5d7d02932683?"
                    className="w-3.5 aspect-[0.7]"
                    alt=""
                  />
                </div>
                <div className="flex gap-1.5 justify-between mt-3.5">
                  <div className="flex gap-1.5">
                    <div className="grow">Presentation</div>
                    <div className="text-slate-400">650</div>
                    <div className="grow">2,304</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/21cd0eea0ee57f3d0b9b860ccfa43a0d1491686db6674f270ef03393d4b150c8?"
                    className="w-3.5 aspect-[0.7]"
                    alt=""
                  />
                </div>
                <div className="flex gap-1.5 justify-between mt-3.5">
                  <div className="flex gap-1.5">
                    <div className="grow">Business</div>
                    <div className="text-slate-400">612</div>
                    <div className="grow">2,140</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb82a54ca4959659ccbe090bfa506f1dbfc305ce222363dc19a5d7d02932683?"
                    className="w-3.5 aspect-[0.7]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-11 pl-20 w-full bg-slate-100 rounded-[73px_0px_0px_73px] max-md:mt-10 max-md:max-w-full">
              <div className="self-end max-w-full w-[1285px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-xs font-bold leading-4 uppercase whitespace-nowrap text-slate-700 tracking-[5px] max-md:mt-10 max-md:max-w-full">
                      <div className="self-center">Timeline</div>
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="mt-5 w-full rounded-full border-solid aspect-[1.15] border-[20px] border-white border-opacity-30 max-md:max-w-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="mt-72 max-w-full aspect-[0.39] w-[186px] max-md:mt-10"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between items-start self-center pr-6 mt-1.5 max-w-full text-center text-indigo-900 whitespace-nowrap w-[703px] max-md:flex-wrap max-md:pr-5">
                <div className="flex flex-col">
                  <div className="text-xs font-bold tracking-widest leading-4 uppercase">
                    Trend goods
                  </div>
                  <div className="mt-2.5 text-6xl font-light tracking-tighter leading-[79.8px] max-md:text-4xl">
                    204
                  </div>
                </div>
                <div className="flex flex-col self-stretch">
                  <div className="self-center text-xs font-bold tracking-widest leading-4 uppercase">
                    Shopping views
                  </div>
                  <div className="mt-2.5 text-6xl font-light tracking-tighter leading-[79.8px] max-md:text-4xl">
                    65,540
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-bold tracking-widest leading-4 uppercase">
                    Store dynamics
                  </div>
                  <div className="mt-2.5 text-6xl font-light tracking-tighter leading-[79.8px] max-md:text-4xl">
                    324
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-16 py-4 w-full text-xs font-bold tracking-widest leading-4 uppercase bg-white text-slate-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto">Orion data visualisation</div>
        <div className="text-right">2022</div>
      </div>
    </div>
  );
};

export default BubbleChart;
