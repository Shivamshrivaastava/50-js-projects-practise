import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { BsArrowUpRight } from "react-icons/bs";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import { CustomCard } from "../../../chakra/CustomCard";

const PriceSection = () => {
  const timeStamp = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

  return (
    <CustomCard>
      <Flex justifyContent={"space-between"}>
        <Stack>
          <Text color={"black.80"} fontSize={"sm"} fontWeight={"medium"}>
            Current Price
          </Text>

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
                ₹26,670.25
              </Text>
              <HStack fontSize={"sm"} fontWeight={"medium"} color={"green.500"}>
                <Icon as={BsArrowUpRight} />
                <Text>0.04%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack marginTop={{ xl: "4" }}>
          <Button leftIcon={<Icon as={AiOutlinePlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sel</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green" mt={"16px"}>
        <Flex justify={"end"}>
          <TabList bg={"black.5"} p={"3px"}>
            {["1H", "1D", "1W", "1M"].map((tab) => {
              return (
                <Tab
                  _selected={{
                    bg: "white",
                  }}
                  key={tab}
                  fontSize={"sm"}
                  borderRadius={"4"}
                  p={"6px"}
                >
                  {tab}
                </Tab>
              );
            })}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="Graph.png" w={"100%"} mt={"48px"} />
            <HStack justifyContent={"space-between"}>
              {timeStamp.map((time) => {
                return (
                  <Text key={time} fontSize={"sm"} color={"black.60"}>
                    {time}
                  </Text>
                );
              })}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
