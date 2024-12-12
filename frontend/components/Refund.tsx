"use client";

// ChakraUI
import { Flex, Text, Input, Button, Heading, useToast } from "@chakra-ui/react";

// ReactJs
import { useState } from "react";

// Constants and Types
import { contractAddress, abi } from "@/constants";
import { RefundProps } from "@/types";

// Viem
import { parseEther } from "viem";

// Wagmi
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";

const Refund = ({ getDatas, end, goal, totalCollected }: RefundProps) => {
  const toast = useToast();

  const refund = async () => {
    try {
      const { request } = await prepareWriteContract({
        address: contractAddress,
        abi: abi,
        functionName: "refund",
      });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        hash: hash,
      });
      await getDatas();
      toast({
        title: "Congratulations",
        description: "You have been refunded.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (e: any) {
      toast({
        title: "Error",
        description: `An error occured: ${e.message}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  let parseDate = (date: string) => {
    let d = date.split("/");

    return new Date(d[2] + "/" + d[1] + "/" + d[0]);
  };

  return (
    <>
      <Heading mt="2rem">Refund</Heading>
      <Flex mt="1rem">
        {totalCollected !== undefined && end !== undefined ? (
          parseInt(totalCollected) < parseInt(goal) &&
            Date.now() > parseDate(end).getTime() ? (
            <Button
              colorScheme="red"
              size="lg"
              width="100%"
              onClick={() => refund()}
            >
              Refund
            </Button>
          ) : (
            <Text color="red">No refund available right now.</Text>
          )
        ) : (
          <Text color="red">No refund available right now.</Text>
        )}
      </Flex>
    </>
  );
};

export default Refund;
