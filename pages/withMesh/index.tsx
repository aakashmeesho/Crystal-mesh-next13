/* eslint-disable react/jsx-key */
/* eslint-disable max-lines */
/* eslint-disable max-lines */
// @ts-nocheck
import { CustomThemeProvider } from "@meesho/mesh-ui";
import { Carousel } from "@meesho/mesh-ui/dist/components/Carousel";
import React from "react";

const responsive = [
  { breakPoint: 1280, cardsToShow: 1 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 700, cardsToShow: 1 },
  { breakPoint: 550, cardsToShow: 1 },
  { breakPoint: 0, cardsToShow: 1 },
];

// CarouselProps
const slidProps = (phone: boolean) => ({
  responsive,
  controls: !phone,
  indicators: true,
  infinite: false,
  vertical: false,
  initialWidth: 100,
});

const WithMesh = (props: { widgets: any[] }) => {
  const isPhone = true;

  return (
    <CustomThemeProvider theme={{ isMobile: isPhone }}>
      <Carousel {...slidProps(true)} autoSlide>
        {props?.widgets?.map((widget, idx) => (
          <h1>test</h1>
        ))}
      </Carousel>
    </CustomThemeProvider>
  );
};

export async function getServerSideProps(context) {
  return {
    props: { widgets: [1, 2, 3] }, // will be passed to the page component as props
  };
}

export default WithMesh;
