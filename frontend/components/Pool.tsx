"use client";
// React
import { useState,useEffect } from "react";
import { isAddress } from "viem";
//Wagi get wallet informations (adresse,is connected or not) 
import { useAccount } from "wagmi";
// chakraUI
import { Alert, AlertIcon } from "@chakra-ui/react";
import Contribute from "./Contribute";

const Pool = () => {
  const {address,isConnected} = useAccount()
  return(
    <>
    {isConnected ? (
      <>
      <Contribute/>
      </>
    ):(
<Alert status="warning">
  <AlertIcon/>
  Please connect your wallet to our DApp.
</Alert>

    )
    
    
    }
    
    </>
  )

};

export default Pool;
