import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

// components
import Hero from "../components/marketing/Hero.jsx";
import TwoCards from "../components/marketing/TwoCards";
import ProcessFlow from "../components/development/ProcessFlow";
import MVP from "../components/common/MVP";
import B2B from "../components/marketing/B2B";
import D2C from "../components/marketing/D2C";
import CaseStudy from "../components/development/CaseStudy";
import MarketingProcess from "../components/marketing/MarketingProcess";
import ProcessFlowThird from "../components/marketing/ProcessFlowThird.jsx";
import ProcessFlowFourth from "../components/marketing/ProcessFlowFourth.jsx";
import Suggestion from "../components/marketing/Suggestion.jsx";
import Form from "../components/marketing/Form.jsx";
import ScrollingWhyUs from "../components/marketing/ScrollingWhyUs.jsx";
import AnimeRocket from "../components/marketing/AnimeRocket.jsx";
import Rocket from "../components/Rocket.jsx";

const Marketing = () => {
  return (
    <>
      <ReactFullpage
        navigation
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <Head>
              <title>
                Marketing Services to Get most out of your Resources
              </title>
              <meta
                name="description"
                content="With over 11 years experience in the Marketing Services field, our team of specialists will help you get an edge on your competition."
              />
            </Head>
            <Hero comp={comp} />
            <TwoCards comp={comp} />
            <ProcessFlowThird />
            <ProcessFlowFourth />
            {/* <MarketingProcess /> */}
            {/* <AnimeRocket /> */}
            <Rocket
              data={{
                title1: "  1. Market research",
                desc1:
                  "First of all, we understand your business and the feasibility of  the business. Then we identify the target market and try to develop potential new markets. Then we decide how, when and   where the product should enter the market.",
                title2: "  2. Competitor Analysis",
                desc2:
                  "We research your competitors, what are their USP’s, pricing, market share, etc. We analyse how your competitor markets their products/services, what marketing tactics they are following and how they are engaging with their customers.",
                title3: "  3. Strategy formulation",
                desc3:
                  "We make custom strategies on the behalf of the information we gathered and take the most appropriate actions to achieve your organisational vision.",
                title4: "4. Execution",
                desc4:
                  "After creating strategies, we will implement all actions in the best possible way, so the product/service can reach the maximum audience.",
                title5: "5. Measure",
                desc5:
                  "After properly executing actions, we gather the data and analyse it to make more improvements in the product/service.",
                title6: "6. Report",
                desc6:
                  "We provide a detailed report sheet to our clients of their campaign’s activity.",
              }}
            />
            <Suggestion />
            {/* <D2C />
                        <B2B /> */}
            <ScrollingWhyUs />
            {/* <Form /> */}
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

Marketing.layout = "default";

export default Marketing;
