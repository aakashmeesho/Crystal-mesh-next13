/* eslint-disable react/jsx-key */
/* eslint-disable max-lines */
// @ts-nocheck
import { Card } from "@meesho/crystal/Card";
import React from "react";

const WithCrystal = (props: { widgets: any[] }) => <Card>Test</Card>;

export async function getServerSideProps(context) {
  return {
    props: { widgets: [1, 2, 3] }, // will be passed to the page component as props
  };
}

export default WithCrystal;
