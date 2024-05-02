import DashBoardLayout from "../../components/DashBoardLayout";
import ContactCard from "./compoents/ContactCard";
import SupportCard from "./compoents/SupportCard";

import InfoCard from "../Dashboard/components/InfoCard";

import { HiMail } from "react-icons/hi";
import { BsFillChatFill } from "react-icons/bs";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashBoardLayout title={"Support"}>
      <Stack spacing={"2rem"}>
        <SupportCard
          leftComponent={<ContactCard />}
          title={"Contact Us"}
          icon={HiMail}
          text={
            "Have a question or just want to know more? Feel free to reach out to us."
          }
        />
        <SupportCard
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.png"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title={"Live Chat"}
          icon={BsFillChatFill}
          text={"Don’t have time to wait for the answer? Chat with us now."}
        />
      </Stack>
    </DashBoardLayout>
  );
};

export default Support;
