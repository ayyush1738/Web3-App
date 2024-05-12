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
        <Input placeholder="0" value={tokenOneAmount} onchange={changeAmount}/>
        <Input placeholder="0" value={tokenTwoAmount} disabled={true} />
      </div>
    </div>
    </>
  )
}

export default Swap;
