'use client'

//chakraUi
import { Flex,Text,Input,Button,Heading,useToast } from "@chakra-ui/react"
//React 
import { useState } from "react"
//info de contrat
//Constants and Types
import { contractAddress,abi } from "@/constants"
import { parseEther } from "viem"
import { prepareWriteContract,writeContract,waitForTransaction} from "@wagmi/core"

const Contribute = () => {
const [amount,setAmount ] = useState<string>('')
const contribute = () => {
 

}

  return (
    <>
    <Heading mt="2rem">
Contribute
    </Heading>

    <Flex  mt="1rem">

<Input placeholder="Your amount in ETH" 
size="lg" 
value={amount} 
onChange={(e)=>setAmount(e.target.value )}
/>
<Button 
colorScheme="purple"
size='lg'
onClick={()=>Contribute()}
>
   Contribute 
</Button>
    </Flex>
     </>
  )
}

export default Contribute