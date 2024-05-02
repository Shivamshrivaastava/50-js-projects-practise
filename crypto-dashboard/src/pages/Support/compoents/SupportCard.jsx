/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"24rem"}>
        <Icon as={icon} boxSize={8} color={"p.purple"} />
        <Text as={"h1"} fontWeight={"medium"} textStyle="h1">
          {" "}
          {title}
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
          {" "}
          {text}
          us.
        </Text>
      </Stack>
      <Box
        maxW={{
          base: "full",
          xl: "550px",
        }}
        w={"full"}
      >
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
