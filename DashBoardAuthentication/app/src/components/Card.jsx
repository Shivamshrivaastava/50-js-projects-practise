import { Card as ChakraCard } from "@chakra-ui/react";
import React from "react";

const Card = ({ children, showCard = false, ...props }) => {
  return (
    <ChakraCard
      w={"456px"}
      bg={{
        base: showCard ? "white" : "transparent",
        md: "white",
      }}
      p={{
        base: showCard ? "4" : "0",
        md: "6",
      }}
      borderRadius={{
        base: showCard ? "1rem" : "none",
        md: "1rem",
      }}
      boxShadow={{
        base: showCard ? "0px 4px 20px rgba(0,0,0,0.1)" : "none",
        md: "0px 4px 20px rgba(0,0,0,0.2)",
      }}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
