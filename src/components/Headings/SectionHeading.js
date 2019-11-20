import React from "react";
import styled from "styled-components";

export default function SectionHeading({
  topHeading,
  mainHeading,
  subHeading
}) {
  return (
    <Container className="section-head section-head-s3 wide-auto-sm text-center">
      <h6 className="title title-xs title-xs-s3 tc-primary">{topHeading}</h6>
      <h2 className="title">{mainHeading}</h2>
      <p>{subHeading}</p>
    </Container>
  );
}

const Container = styled.div`
  h6,
  h2 {
    text-transform: capitalize;
  }
`;
