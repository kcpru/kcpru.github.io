import React from "react";
import styled from "styled-components";

import { Color } from "../assets/Color";
import { FaTools } from "react-icons/fa";
import { IconContext } from "react-icons";
import { repositories } from "../data/data";

const Container = styled.div`
  width: 260px;
  height: 110px;
  padding: 20px;
  background-color: ${Color.light};
  border-radius: 20px;
`;

const Head = styled.div`
  height: 50px;
`;

const Rect = styled.div`
  width: 20px;
  height: 20px;
  padding: 15px;
  background-color: ${Color.primary};
  border-radius: 20px;
  box-shadow: 0 3px 10px ${Color.primary}72;
  float: left;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin: 12px 0 0 20px;
  display: inline-block;
`;

const Description = styled.div`
  clear: both;
  margin-top: 20px;
  color: ${Color.text};
  font-size: 15px;
`;

const Box = (props: any) => {
  const { title, description }: any = props;
  return (
    <Container>
      <Head>
        <Rect>
          <IconContext.Provider
            value={{ style: { color: Color.light, fontSize: 20 } }}
          >
            <FaTools />
          </IconContext.Provider>
        </Rect>
        <Title>{title}</Title>
      </Head>
      <Description>{description}</Description>
    </Container>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0;
  width: 620px;
`;

function Index() {
  return (
    <Grid>
      {repositories.map((el: any) => (
        <Box key={el.title} title={el.title} description={el.description}></Box>
      ))}
    </Grid>
  );
}
export default Index;
