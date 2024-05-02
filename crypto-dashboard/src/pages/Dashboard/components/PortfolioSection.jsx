import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack
      bg={"white"}
      justifyContent={"space-between"}
      borderRadius={"xl"}
      p={"6"}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "4",
          md: "16",
        }}
        align={{
          base: "0",
          xl: "16",
        }}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"} fontWeight={"medium"}>
              Total Portfolio Value{" "}
            </Text>
            <Icon as={HiOutlineInformationCircle}></Icon>
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"} fontWeight={"medium"}>
              Wallet Balances
            </Text>
          </HStack>
          <HStack
            spacing={{
              base: "6",
              md: "8",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack marginTop={{ xl: "4" }}>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
