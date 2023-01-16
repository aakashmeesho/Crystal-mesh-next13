/* eslint-disable react/jsx-key */
/* eslint-disable max-lines */
// @ts-nocheck
import { Carousel } from "@meesho/crystal/Carousel";
import React from "react";

const WithCrystal = (props: { widgets: any[] }) => (
  <Carousel
    afterChange={function noRefCheck() {}}
    autoplaySpeed={1000}
    beforeChange={function noRefCheck() {}}
    centerMode
    centerPadding="21px"
    infinite
    scale
    slidesToShow={1}
  >
    {props?.widgets?.map((widget, idx) => (
      <h1>data</h1>
    ))}
  </Carousel>
);

export async function getServerSideProps(context) {
  return {
    props: { widgets: [1, 2, 3] }, // will be passed to the page component as props
  };
}

export default WithCrystal;
