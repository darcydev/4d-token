import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import ImageCard from "../ImageCards/ImageCard";

export default function FlexWrapCardsContainer({ flexWidth, content }) {
  const MARKUP = content.map((item) => (
    <div style={{ flex: `0 0 ${flexWidth}%` }}>
      <ImageCard image={item.image} heading={item.heading} text={item.text} />
    </div>
  ));

  return <Cards>{MARKUP}</Cards>;
}

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${media.lessThan("large")`
    flex-direction: column;
    max-width: 70%;
    margin: auto;
  `}
`;
