import React from "react";
import Honcho from "./../img/portfolio/honcho.png";
import Minearc from "./../img/portfolio/minearc.png";
import Growfree from "./../img/portfolio/growfree.png";
import Myprofiling from "./../img/portfolio/myprofiling.png";
import StoreShopify from "./../img/portfolio/store-shopify.png";
import EqualsResults from "./../img/portfolio/equals-results.png";
import Triggerhappy from "./../img/portfolio/triggerhappy-plugin.png";

import {
  SkillsTitle,
  PortfolioWrapper,
  PortfolioImgWrapper,
  PortfolioContentWrapper,
  PortfolioRow,
  PortfolioDesc,
  PortfolioDescTitle,
  PortfolioDescText,
  PortfolioDescList,
} from "./../styles/home-styles";

export default function Portfolio() {
  return (
    <PortfolioContentWrapper>
      <SkillsTitle>Portfolio</SkillsTitle>
      <PortfolioWrapper>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={Honcho} alt="honcho website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>honcho.com.au</PortfolioDescTitle>

            <PortfolioDescText>
              Helping people start their business
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Projects:</li>
              <li>- Business search engine</li>
              <li>- Business name / number registration</li>
              <li>- Invoices</li>
              <li>- Gmail and GDrive integration</li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={Growfree} alt="growfree website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>growfree.io</PortfolioDescTitle>

            <PortfolioDescText>
              Online therapy video calls and booking system
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Projects:</li>
              <li>- Booking system</li>
              <li>- Twilio Peer to Peer video calls</li>
              <li>- React and Redux Sign up steps process</li>
              <li>- Client and Therapy Profiles</li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={Myprofiling} alt="myprofiling website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>app.mytrainingplan.com.au</PortfolioDescTitle>

            <PortfolioDescText>
              Vocational Trade education system
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Projects:</li>
              <li>- Mobile app for students and supervisors</li>
              <li>- Assessments</li>
              <li>- Event organiser - trainer visits, etc</li>
              <li>- Activity Entries</li>
              <li>- Profiling - each role has their own profiles</li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={Triggerhappy} alt="triggerhappy website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>
              Trigger Happy - Wordpress plugin
            </PortfolioDescTitle>

            <PortfolioDescText>
              Built in React as a plugin to trigger events in Wordpress
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Tasks:</li>
              <li>- React and State Management to record what user is doing</li>
              <li>- Data triggers depending on user's choices</li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={StoreShopify} alt="storeShopify website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>Store Shopify</PortfolioDescTitle>

            <PortfolioDescText>
              Ecommerce store using Shopify backend
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Tasks:</li>
              <li>- React and State Management for Cart system</li>
              <li>- Shopify backend and checkout</li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={EqualsResults} alt="equalsresults website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>equalsresults.co.uk</PortfolioDescTitle>

            <PortfolioDescText>
              Gym studio ecommerce using Mindbody API
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Tasks:</li>
              <li>- Built using Gatsby and Netlify</li>
              <li>- React and State Management for Cart system</li>
              <li>- Progressive Web Apps</li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
        <PortfolioRow>
          <PortfolioImgWrapper>
            <img src={Minearc} alt="minearc website work" />
          </PortfolioImgWrapper>
          <PortfolioDesc>
            <PortfolioDescTitle>minearcapp.com</PortfolioDescTitle>

            <PortfolioDescText>
              Scheduling and Custom Build Stages app
            </PortfolioDescText>

            <PortfolioDescList>
              <li>Tasks:</li>
              <li>
                - React and Redux for creating a feature for completing stages
                of building a mine chamber
              </li>
              <li>- Used FullCalendar.io for scheduling app</li>
              <li>
                - Custom edit and add booking with api calls to Laravel apis
              </li>
            </PortfolioDescList>
          </PortfolioDesc>
        </PortfolioRow>
      </PortfolioWrapper>
    </PortfolioContentWrapper>
  );
}
