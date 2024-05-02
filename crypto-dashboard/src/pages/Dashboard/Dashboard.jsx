import { Grid, GridItem } from "@chakra-ui/react";
import DashBoardLayout from "../../components/DashBoardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashBoardLayout title={"DashBoard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={"6"}
      >
        <GridItem
          colSpan={{
            base: "1",
            xl: "2",
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem>
          <PriceSection colSpan={1} />
        </GridItem>
        <GridItem>
          <Transactions colSpan={1} />
        </GridItem>
        <GridItem>
          <InfoCard
            colSpan={1}
            imgUrl={"dot_bg.png"}
            tagText={"Info"}
            text={
              "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            }
            inverted={false}
          />
        </GridItem>
        <GridItem>
          <InfoCard
            colSpan={1}
            imgUrl={"grid_bg.png"}
            tagText={"Contact"}
            text={
              "Learn more about our real estate, mortgage, and  corporate account services"
            }
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default Dashboard;
