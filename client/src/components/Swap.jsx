import React, { useState, useEffect } from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from "../tokenList.json"
import axios from "axios";
import { useSendTransaction, useWaitForTransaction } from "wagmi";


function Swap(props) {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  function handleSlippageChange()
  {
    setSlippage(e.target.value);
  }

  function changeAmount(e){
    setTokenOneAmount(e.target.value);
  }

  const settings=(
    <>
    <div>Slippage Tolerance</div>
    <div>
      <Radio.Group value={slippage} onChange={handleSlippageChange}>
        <Radio.Button value={0.5}>0.5%</Radio.Button>
        <Radio.Button value={0.5}>2.5%</Radio.Button>
        <Radio.Button value={5}>5.0%</Radio.Button>
      </Radio.Group>
    </div>
    </>
  )

  return(
    <>
    <div className="tradeBox w-96 h-96 m-auto bg-purple-600 rounded-2xl">
      <div className="tradeBoxHeader flex justify-between">
        <h4 className="m-2 text-white">Swap</h4>
        <Popover
          content={settings}
          title="Settings"
          trigger="click"
          className="m-2 text-white"
        >
          <SettingOutlined className="cog" />
        </Popover>
      </div>
      <div className="inputs">
        <div className="h-28 mt-10 ml-4 rounded-2xl  bg-purple-300 border-none w-11/12 ">
          <Input placeholder="0" className="text-4xl bg-purple-300 w-1/2 bg-transparent border-none mt-8" value={tokenOneAmount} onchange={changeAmount}/>
          <div className="w-28 h-10 bg-white rounded-3xl float-right mr-4 mt-9 flex justify-between p-auto">
          <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo h-6 m-auto" />
          <span className="m-auto">{tokenOne.ticker}</span>            
          <DownOutlined className="m-auto"/>
          </div>
        </div>
        <div className="h-28 mt-2 ml-4 rounded-2xl  bg-purple-300 border-none w-11/12 p-auto">
          <Input placeholder="0" className="text-4xl bg-purple-300 w-1/2 bg-transparent border-none mt-8" value={tokenTwoAmount}  />
          <div className="w-28 h-10 bg-white rounded-3xl float-right mr-4 mt-9 flex justify-between p-auto">
          <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo h-6 m-auto" />
          <span className="m-auto">{tokenOne.ticker}</span>            
          <DownOutlined className="m-auto"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Swap;
