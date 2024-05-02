/* eslint-disable react/prop-types */
import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bg={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={!inverted ? "p.purple" : "white"}
        borderRadius={"full"}
      >
        {tagText}
      </Tag>
      <Text
        mt={3}
        color={!inverted ? "black" : "white"}
        fontWeight={"medium"}
        textStyle={"h5"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
