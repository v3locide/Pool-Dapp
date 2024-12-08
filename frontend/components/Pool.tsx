"use client";
// React
import { useState, useEffect } from "react";

//Wagi get wallet informations (adresse,is connected or not)
import { useAccount, usePublicClient } from "wagmi";
import { readContract, watchContractEvent } from "@wagmi/core";
//viem
import { Log, parseAbiItem } from "viem";

// chakraUI
import { Alert, AlertIcon } from "@chakra-ui/react";

// types & coonstants
import { abi, contractAddress } from "@/constants";
import { Contributor } from "@/types";

//components
import Progression from "./Progression";
import Contribute from "./Contribute";
import Contributors from "./Contributors";
import Refund from "./Refund";

const Pool = () => {
  // access client viem to get info
  const client = usePublicClient();

  const { address, isConnected } = useAccount();
  const [end, setEnd] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [TotalCollected, setTotalCollected] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<Contributor[]>([]);
  // get all data
  const getDatas = async () => {
    if (isConnected) {
      setIsLoading(true);

      // Get End date of the Pool from the blockchain
      let data: any = await readContract({
        address: contractAddress,
        abi: abi,
        functionName: "end",
      });
      // Date formating
      let date = new Date(parseInt(data) * 1000);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let endDate: string = day + "/" + month + "/" + year;
      setEnd(endDate);
      //get Goal //format bigInt
      data = await readContract({
        address: contractAddress,
        abi: abi,
        functionName: "goal",
      });
      setGoal(data.toString());
      //get TotalCollected //format bigInt
      data = await readContract({
        address: contractAddress,
        abi: abi,
        functionName: "totalCollected",
      });
      setTotalCollected(data.toString());
      // Get events
      // Get Events
      const ContributeLogs = await client.getLogs({
        address: contractAddress,
        //get events Contribute
        event: parseAbiItem(
          "event Contribute(address indexed contributor, uint256 amount)"
        ),
        fromBlock: 0n,
        toBlock: "latest",
      });
      //tri logs (contributor + amount)
      setEvents(
        ContributeLogs.map((log) => ({
          contributor: log.args.contributor as string,
          amount: (log.args.amount as bigint).toString(),
        }))
      );

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDatas(); // if adress changed
  }, [address]);

  return (
    <>
      {isConnected ? (
        <>
          <Progression
            isLoading={isLoading}
            end={end}
            goal={goal}
            totalCollected={TotalCollected}
          />
          <Contribute getDatas={getDatas} />
          <Refund
            getDatas={getDatas}
            end={end}
            goal={goal}
            totalCollected={TotalCollected}
          />
          <Contributors events={events} />
        </>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Please connect your wallet to our DApp.
        </Alert>
      )}
    </>
  );
};

export default Pool;
