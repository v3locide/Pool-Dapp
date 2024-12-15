"use client";

import { Flex, Text, Button, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { abi, contractAddress } from "@/constants";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";
import { WithdrawProps } from "@/types";

const WithdrawComponent = ({
  getDatas,
  end,
  goal,
  totalCollected,
}: WithdrawProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  // Fetch the owner's address

  const handleWithdraw = async () => {
    try {
      setIsLoading(true);

      // Prepare the transaction for the withdraw function
      const { request } = await prepareWriteContract({
        address: contractAddress,
        abi,
        functionName: "withdraw",
      });

      // Send the transaction
      const { hash } = await writeContract(request);

      // Wait for the transaction to be mined
      await waitForTransaction({ hash });

      // Update UI with the latest data
      await getDatas();

      // Show success toast notification
      toast({
        title: "Success",
        description: "Funds have been withdrawn successfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      // Show error toast notification
      // TODO: write error interfaces with proper messages.
      toast({
        title: "Error",
        description: `An error occurred: ${error || "Unknown error"}`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const parseDate = (date: string) => {
    const d = date.split("/");

    return new Date(d[2] + "/" + d[1] + "/" + d[0]);
  };
  // for testing you need to delete && Date.now() > parseDate(end).getTime() from the condition
  return (
    <>
      <Heading mt="2rem">Withdraw</Heading>
      <Flex mt="1rem">
        {totalCollected !== undefined && end !== undefined ? (
          parseInt(totalCollected) >= parseInt(goal) &&
          Date.now() > parseDate(end).getTime() ? (
            <Button
              colorScheme="blue"
              size="lg"
              width="100%"
              onClick={handleWithdraw}
              isLoading={isLoading}
              loadingText="Withdrawing"
              isDisabled={isLoading}
            >
              Withdraw
            </Button>
          ) : (
            <Text color="red">No withdraw available right now.</Text>
          )
        ) : (
          <Text color="red">No withdraw available right now.</Text>
        )}
      </Flex>
    </>
  );
};

export default WithdrawComponent;
