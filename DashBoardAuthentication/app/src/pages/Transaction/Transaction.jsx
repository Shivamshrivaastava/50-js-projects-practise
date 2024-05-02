import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashBoardLayout from "../../components/DashBoardLayout";
import { FiDownload } from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashBoardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={FiDownload} />}> Export CSV</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"full"}
          >
            <HStack>
              {tabs.map((tab) => {
                return (
                  <Tab key={tab.name} display={"flex"} gap={2} py={4}>
                    {tab.name}{" "}
                    <Tag colorScheme="gray" borderRadius={"full"}>
                      {tab.count}
                    </Tag>
                  </Tab>
                );
              })}
            </HStack>

            <InputGroup mr={3} maxW={"200px"}>
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>Four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashBoardLayout>
  );
};

export default TransactionPage;
