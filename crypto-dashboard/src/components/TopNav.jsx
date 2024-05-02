/* eslint-disable react/prop-types */
import { Box, HStack, Heading, Icon } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box bg={"white"} px={3}>
      <HStack
        h={16}
        justifyContent={"space-between"}
        mx={"auto"}
        maxW={"70rem"}
      >
        <Icon
          as={RiMenu2Fill}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
          cursor={"pointer"}
          fontSize={"24px"}
        />
        <Heading fontWeight={"medium"} fontSize={"28px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} fontSize={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
