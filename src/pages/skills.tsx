import React from "react";
import styled from "styled-components";

import { Color } from "../assets/Color";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import { technologies } from "../data/data";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin: 0;
  width: 620px;
`;

const Container = styled.div`
  display: flex;
  min-height: 100px;
  padding: 20px;
  background-color: ${Color.light};
  border-radius: 20px;
`;

const Head = styled.div`
  vertical-align: top;
  height: 100px;
  width: 50%;
`;

const StatusWrapper = styled.div`
  width: 95px;
  height: 95px;
  position: relative;
  float: left;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin: 40px 0 0 20px;
  display: inline-block;
`;

const Description = styled.div`
  display: inline-block;
  width: 45%;
  color: ${Color.text};
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  ul {
    list-style: none;
    li:before {
      content: "+";
      margin-right: 5px;
    }
  }
`;

const Circle = (props: any) => {
  const { radius, progress, filterId }: any = props;

  const normalizedRadius: number = radius - 6 * 2;
  const circumference: number = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset: number =
    circumference - (progress / 100) * circumference;

  const statusColor = (prg: any): any => {
    if (prg < 25) return Color.danger;
    else if (prg < 50) return Color.warning;
    else if (prg < 75) return Color.primary;
    else return Color.success;
  };

  const color: string = statusColor(progress);

  return (
    <svg height={radius * 2} width={radius * 2}>
      <defs>
        <filter id={filterId} x="-1" y="-1" width="300%" height="300%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="5"
            floodColor={`${color}72`}
          />
        </filter>
      </defs>
      <circle
        stroke={color}
        strokeLinecap="round"
        fill="transparent"
        strokeWidth={6}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        filter={`url(#${filterId})`}
      />
    </svg>
  );
};

const Box = (props: any) => {
  const { title, lvl, list }: any = props;
  return (
    <Container>
      <Head>
        <StatusWrapper>
          <Circle radius={50} progress={lvl} filterId={title} />
          <IconContext.Provider
            value={{
              style: {
                color: Color.dark,
                fontSize: 30,
                position: "absolute",
                top: 35,
                left: 35
              }
            }}
          >
            <FaCode />
          </IconContext.Provider>
        </StatusWrapper>
        <Title>{title}</Title>
      </Head>
      <Description>
        <ul>
          {list.map((el: Array<String>) => (
            <li key={`${title}-${el}`}>{el}</li>
          ))}
        </ul>
      </Description>
    </Container>
  );
};

function Skills() {
  return (
    <Grid>
      {technologies.map((el: any) => (
        <Box key={el.title} title={el.title} lvl={el.lvl} list={el.list}></Box>
      ))}
    </Grid>
  );
}
export default Skills;
