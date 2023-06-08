import React, { useState } from 'react';
import { useWeb3Contract, useMoralis } from "react-moralis";
import abi from "../../artifacts-zk/contracts/BuyMeCoffee.sol/BuyMeCoffee.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Main () {

    // const [message , setmessage] = useState("");
    // const [success, setsuccess] = useState(false);
    const {enableWeb3 , isWeb3Enabled, Moralis} = useMoralis();

    const Abi = abi;
    const Address = "0xc99632aA6D711421eB5997eaD592aEc1d6827D5a"

    // const { name , setName}= useState();
    // const { message, setMessage}= useState();

    const name = "moses";
    const message = "good job"
    

    const {
        data: contractData,
        error,
        runContractFunction: buy,
        isFetching,
        isLoading,
      } = useWeb3Contract({
        abi: Abi,
        contractAddress: Address,
        functionName: "buyCoffee",
        params: {
          _name: name ,
          _message: message
        },
        msgValue: Moralis.Units.ETH("0.001"),
      });



      const buyCoffee = async () => {
        if ( isWeb3Enabled) {
          await buy({
            onSuccess: handleSuccess,
            onError: (error) => {
               console.log(error),
              setisTxnLoading(false);
            },
          });
          console.log(
            "hey"
          )
        } else {
          toast.error("something went wrong", {
            theme: "dark",
          });
        }
      };



  return (
    <div className='main'>
          <h1 className='main-text'>Buy Xyz a Coffee</h1>
          <form>
            <label>Send a message</label>
            <textarea
              type="text"
              placeholder="Enjoy your coffee!"
              id="message"
              required
            ></textarea>
            <button
              type='button'
              className='form-button'
              onClick={buyCoffee}
            >
              Buy
            </button>
          </form>
    </div>
  );
  
}

export default Main;