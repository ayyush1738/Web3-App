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
  const [isOpen, setIsOpen] = useState(false);

  function handleSlippageChange()
  {
    setSlippage(e.target.value);
  }

  function changeAmount(e){
    setTokenOneAmount(e.target.value);
  }

  function switchTokens(){
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  }

  function openModal(asset) {
    setChangeToken(asset);
    SkeletonImage(true);
  }

  function modiyToken(i){
    if(changeToken === 1)
      {
        setTokenOne(tokenList[i]);
      } else{
        setTokenTwo(tokenList[i]);
      }
      setIsOpen(false);
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
    <Modal
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      title="Select a token"
    >
      <div className="modalContent">
        {tokenList?.map((e,i)=>{
          return(
            <div
              className="tokenChoice"
              key={i}
              onClick={() => modifyToken(i)}
            >
              <img src={e.img} alt={e.ticker} className="tokenLogo"/>
              <div className="tokenChoiceNames">
                <div className="tokenName">{e.name}</div>
                <div className="tokenTicker">{e.ticker}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Modal>
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
        <div className="switchButton rounded-3xl w-8 h-8 bg-gray-800 cursor-pointer absolute ml-44 my-24" onClick={switchTokens}>
          <ArrowDownOutlined className="switchArraow text-white ml-2 mt-2"/>
        </div>
        <div className="h-28 mt-10 ml-4 rounded-2xl  bg-purple-300 border-none w-11/12 ">
          <Input placeholder="0" className="text-4xl bg-purple-300 w-1/2 bg-transparent border-none mt-8" value={tokenOneAmount} onchange={changeAmount}/>
          <div className="assetOne w-auto h-10 bg-gray-800 rounded-3xl float-right mr-4 mt-9 flex justify-between p-auto" onClick={() => openModal(1)}>
          <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo h-6 ml-1 mt-2" />
          <span className="ml-2 mt-2 font-bold text-white">{tokenOne.ticker}</span>            
          <DownOutlined className="ml-1 mr-2"/>
          </div>
        </div>

        <div className="h-28 mt-2 ml-4 rounded-2xl  bg-purple-300 border-none w-11/12 p-auto">
          <Input placeholder="0" className="text-4xl bg-purple-300 w-1/2 bg-transparent border-none mt-8" value={tokenTwoAmount}  />
          <div className="assetTwo w-auto h-10 bg-gray-800 rounded-3xl float-right mr-4 mt-9 flex justify-between p-auto" onClick={() => openModal(2)}>
          <img src={tokenTwo.img} alt="assetTwoLogo" className="assetLogo h-6 ml-1 mt-2" />
          <span className="ml-2 mt-2 font-bold text-white">{tokenTwo.ticker}</span>            
          <DownOutlined className="ml-1 mr-2"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Swap;
