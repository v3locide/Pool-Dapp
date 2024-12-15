"use client";

//chakraUi
import { Flex, Input, Button, Heading, useToast } from "@chakra-ui/react";

//React
import { useState } from "react";

//Constants and Types
import { contractAddress, abi } from "@/constants";
import { parseEther } from "viem";
import { ContributeProps } from "@/types";

//info de contrat
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";


const Contribute = ({ getDatas }: ContributeProps) => {
  const toast = useToast();
  const [amount, setAmount] = useState<string>("");
  const contribute = async () => {
    try {
      //convert ehter on wei
      const money = parseEther(amount);
      //preparation to write contract
      const { request } = await prepareWriteContract({
        address: contractAddress,
        abi,
        functionName: "contribute",
        value: money,
      });
      // get transaction hash
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash,
      });

      console.log("Received data: ", data);

      setAmount(""); // default value  after submit
      await getDatas(); // refresh the value
      toast({
        title: "Congratulations",
        description: "Your contribution has been added.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (e) {
      // TODO: write custom error interfaces with proper messages.
      toast({
        title: "Error",
        description: `An error accured: ${e}.`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Heading mt="2rem">Contribute</Heading>

      <Flex mt="1rem">
        <Input
          placeholder="Your amount in ETH"
          size="lg"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button colorScheme="purple" size="lg" onClick={() => contribute()}>
          Contribute
        </Button>
      </Flex>
    </>
  );
};

export default Contribute;
