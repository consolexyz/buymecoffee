import React, { useState } from "react";
import {
  useWeb3Contract,
  useMoralis,
  useWeb3ExecuteFunction,
} from "react-moralis";

function Main() {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { enableWeb3, isWeb3Enabled, Moralis } = useMoralis();

  const { data, error, isFetching, isLoading, fetch } =
    useWeb3ExecuteFunction();
  const options = {
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        name: "NewMemo",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_message",
            type: "string",
          },
        ],
        name: "buyCoffee",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "getMemos",
        outputs: [
          {
            components: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "message",
                type: "string",
              },
            ],
            internalType: "struct BuyMeCoffee.Memo[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "withdrawTips",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    contractAddress: "0xc99632aA6D711421eB5997eaD592aEc1d6827D5a",
    functionName: "buyCoffee",
    params: {
      _name: "moses",
      _message: "moses",
    },
    msgValue: Moralis.Units.ETH(0.001),
  };

  const buyCoffee = async () => {
    await enableWeb3();
    await fetch({
      params: options,
      onSuccess: handleSuccess,
      onError: (error) => {
        console.log(error);
        setMessage(error?.message);
      },
    });
  };

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      setMessage("check console for success log");
      console.log(tx);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setMessage(error?.message);
      setSuccess(false);
    }
  };

  console.log(isWeb3Enabled);
  return (
    <div className="main">
      <h1 className="main-text">Buy Xyz a Coffee</h1>
      <form>
        <label>Send a message</label>
        <textarea
          type="text"
          placeholder="Enjoy your coffee!"
          id="message"
          required
        ></textarea>
        <button type="button" className="form-button" onClick={buyCoffee}>
          Buy
        </button>
      </form>
    </div>
  );
}

export default Main;