import React from "react";
import styled from "styled-components";
export const Form = ({}) => {
  return (
    <MaskGroupRoot>
      <Desktop>
        <FlexRow>
          <RateMyLandlord4>
            Rate{" "}
            {[
              {
                childText: "M",
                fontSize: "120px",
              },
              {
                childText: "y ",
                fontSize: "110px",
              },
              {
                childText: "L",
                fontSize: "120px",
              },
              {
                childText: "andlord",
                fontSize: "110px",
              },
            ].map((data) => (
              <RateMyLandlord fontSize={data.fontSize}>
                {data.childText}
              </RateMyLandlord>
            ))}
          </RateMyLandlord4>
          <Homex src={"https://file.rendit.io/n/oP4BRdSiMj0OipJoprT8.png"} />
        </FlexRow>
        <Element1>
          <Image1 src={"https://file.rendit.io/n/j0RdWNEWm2a1fclhSuRT.svg"} />
          <Text1>Reviewing: John Doe</Text1>
        </Element1>
        <WhiteFlexColumn>
          <FlexRow1>
            <Element2>
              <Text2>Cost of rent, relative to area:</Text2>
              <WhiteText>High or Low</WhiteText>
              <LandlordOptional2>
                Landlord<LandlordOptional> </LandlordOptional>
                <LandlordOptional1>(Optional)</LandlordOptional1>
              </LandlordOptional2>
              <Squircle
                src={"https://file.rendit.io/n/VLVuqOuWI0Gtw9Nuord1.svg"}
              />
            </Element2>
            <Squircle1
              src={"https://file.rendit.io/n/uvOhA5J4nRzGo9dmOjnc.svg"}
            />
            <Squircle4
              src={"https://file.rendit.io/n/H4U847lCcdyPfNFH7EU1.svg"}
            />
          </FlexRow1>
          <Element3>
            <Text3>
              Tenant & Property<LandlordOptional> </LandlordOptional>
              <LandlordOptional1>(Optional)</LandlordOptional1>
            </Text3>
            <Text6>Location:</Text6>
            <Text7>Duration of lease:</Text7>
            <WhiteRectangle />
            <Image2 src={"https://file.rendit.io/n/Vq38KEj0Ev5EzOi6KEzI.svg"} />
            <Text8>Landlord typically responds:</Text8>
            <WhiteText1>Fast or Slow</WhiteText1>
            <Image3 src={"https://file.rendit.io/n/HV97hY5GiB9H5OTGn3av.svg"} />
            <Squircle2
              src={"https://file.rendit.io/n/wcTRZ4c70ZaX7mjmo1XF.svg"}
            />
            <Squircle3
              src={"https://file.rendit.io/n/AGH1H1EooEiP01rwUChs.svg"}
            />
            <Text9>Student friendly?</Text9>
            <WhiteText2>Yes or No</WhiteText2>
            <WouldYouLeaseAgain1>
              Would you lease again?<WouldYouLeaseAgain>*</WouldYouLeaseAgain>
            </WouldYouLeaseAgain1>
            <Text10>Comments:</Text10>
            <WhiteFlexRow>
              <Text11>Overall</Text11>
            </WhiteFlexRow>
            <WhiteRectangle1 />
            <Text12>Maintenance</Text12>
            <WhiteFlexRow1>
              <Text13>Friendliness</Text13>
            </WhiteFlexRow1>
          </Element3>
        </WhiteFlexColumn>
        <Element4>
          <WhiteRectangle2 />
          <Text14>drop down menu</Text14>
          <AsparagusFlexRow>
            <Text15>Submit</Text15>
          </AsparagusFlexRow>
        </Element4>
      </Desktop>
    </MaskGroupRoot>
  );
};
const MaskGroupRoot = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: start;
  margin: auto;
  min-width: 2775px;
`;
const Desktop = styled.div`
  height: 1533px;
  background-color: #2f4345;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 42px 592px 42px 202px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 234px 94px 0px;
`;
const RateMyLandlord4 = styled.div`
  height: 142px;
  font-size: 110px;
  font-family: Calistoga;
  font-weight: 400;
  color: #ffffff;
  white-space: pre-wrap;
`;
const Homex = styled.img`
  width: 150px;
  height: 128px;
  align-self: flex-start;
`;
const Element1 = styled.div`
  align-self: stretch;
  height: 112px;
  position: relative;
  min-width: 1981px;
  margin: 0px 0px 11px 0px;
`;
const Image1 = styled.img`
  width: 1591px;
  height: 96px;
  position: absolute;
  left: 390px;
`;
const Text1 = styled.div`
  width: 792px;
  height: 97px;
  font-size: 48px;
  font-family: Roboto Slab;
  font-weight: 700;
  color: #2f4345;
  position: absolute;
  top: 15px;
  left: 429px;
`;
const WhiteFlexColumn = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 38px;
  padding: 47px 57px 41px 43px;
  margin: 0px 0px 36px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Element2 = styled.div`
  align-self: stretch;
  width: 728px;
  height: 198px;
  position: relative;
  flex-grow: 1;
  align-items: center;
  margin: 0px 168px 0px 0px;
`;
const Text2 = styled.div`
  width: 619px;
  height: 34px;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 72px;
  left: 4px;
`;
const WhiteText = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 242px;
  height: 50px;
  background-color: #f9f9f9;
  position: absolute;
  top: 130px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 29px 13px 29px;
`;
const LandlordOptional2 = styled.div`
  height: 60px;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  color: #2f4345;
  position: absolute;
  top: 3px;
  left: 4px;
`;
const Squircle = styled.img`
  width: 209px;
  height: 195px;
  position: absolute;
  left: 519px;
`;
const Squircle1 = styled.img`
  width: 209px;
  height: 195px;
  margin: 0px 169px 0px 0px;
`;
const Squircle4 = styled.img`
  width: 209px;
  height: 195px;
`;
const Element3 = styled.div`
  height: 619px;
  position: relative;
  min-width: 1491px;
  align-items: center;
`;
const Text3 = styled.div`
  height: 64px;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  color: #2f4345;
  position: absolute;
  top: 314px;
  left: 1px;
`;
const Text6 = styled.div`
  width: 451px;
  height: 50px;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 380px;
  left: 4px;
`;
const Text7 = styled.div`
  width: 313px;
  height: 42px;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 508px;
  left: 4px;
`;
const WhiteRectangle = styled.div`
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 378px;
  height: 47px;
  background-color: #f9f9f9;
  position: absolute;
  top: 425px;
`;
const Image2 = styled.img`
  width: 386px;
  height: 47px;
  position: absolute;
  top: 553px;
  left: 4px;
`;
const Text8 = styled.div`
  width: 614px;
  height: 100px;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  left: 7px;
`;
const WhiteText1 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 242px;
  height: 50px;
  background-color: #f9f9f9;
  position: absolute;
  top: 50px;
  left: 2px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 31px 13px 31px;
`;
const Image3 = styled.img`
  width: 964px;
  height: 372px;
  position: absolute;
  top: 231px;
  left: 519px;
`;
const Squircle2 = styled.img`
  width: 118px;
  height: 62px;
  position: absolute;
  top: 100px;
  left: 1127px;
`;
const Squircle3 = styled.img`
  width: 109px;
  height: 62px;
  position: absolute;
  top: 100px;
  left: 953px;
`;
const Text9 = styled.div`
  width: 614px;
  height: 100px;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 149px;
  left: 8px;
`;
const WhiteText2 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Inter;
  font-weight: 400;
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 242px;
  height: 50px;
  background-color: #f9f9f9;
  position: absolute;
  top: 199px;
  left: 3px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 31px 13px 31px;
`;
const WouldYouLeaseAgain1 = styled.div`
  height: 58px;
  font-size: 36px;
  font-family: Roboto;
  font-weight: 700;
  color: #2f4345;
  position: absolute;
  top: 108px;
  left: 519px;
`;
const WouldYouLeaseAgain = styled.div`
  font-size: 36px;
  font-family: Roboto;
  font-weight: 400;
  color: #d17070;
  display: contents;
`;
const Text10 = styled.div`
  width: 652px;
  height: 58px;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 181px;
  left: 519px;
`;
const WhiteFlexRow = styled.div`
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 174px;
  background-color: #f9f9f9;
  display: flex;
  position: absolute;
  top: 7px;
  left: 517px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 9px 4px 9px;
`;
const Text11 = styled.div`
  width: 106px;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
`;
const WhiteRectangle1 = styled.div`
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 192px;
  height: 35px;
  background-color: #f9f9f9;
  position: absolute;
  top: 3px;
  left: 897px;
`;
const Text12 = styled.div`
  width: 187px;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
  position: absolute;
  top: 14px;
  left: 914px;
`;
const WhiteFlexRow1 = styled.div`
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  background-color: #f9f9f9;
  display: flex;
  position: absolute;
  top: 3px;
  left: 1277px;
  flex-direction: row;
  align-items: center;
  padding: 3px 8px 4px 9px;
`;
const Text13 = styled.div`
  width: 175px;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;
`;
const Element4 = styled.div`
  align-self: stretch;
  height: 78px;
  position: relative;
  min-width: 1981px;
`;
const WhiteRectangle2 = styled.div`
  border-width: 4px;
  border-color: #c4c4c4;
  border-style: solid;
  width: 378px;
  height: 52px;
  background-color: #f9f9f9;
  position: absolute;
  top: 525px;
  left: -206px;
`;
const Text14 = styled.div`
  font-size: 32px;
  font-family: Inter;
  font-weight: 400;
  position: absolute;
  top: 599px;
  left: -202px;
`;
const AsparagusFlexRow = styled.div`
  border-width: 4px;
  border-style: solid;
  background-color: #81a663;
  display: flex;
  position: absolute;
  left: 1016px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 14px 34px 4px 30px;
`;
const Text15 = styled.div`
  text-align: center;
  width: 262px;
  height: 60px;
  font-size: 40px;
  font-family: Inter;
  font-weight: 700;
  color: #f9f9f9;
`;
const RateMyLandlord = styled.div`
  font-family: Calistoga;
  font-weight: 400;
  color: #ffffff;
  display: contents;
  font-size: ${(props) => props.fontSize};
`;
const LandlordOptional = styled.div`
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  color: #2f4345;
  display: contents;
  white-space: pre-wrap;
`;
const LandlordOptional1 = styled.div`
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  color: #5a5a5a;
  display: contents;
`;
