import React from 'react';
import './main-page.css'
import { Typography } from "@mui/material";
export type MainPageProps = {}

export default function MainPage({}: MainPageProps) {
  return (
    <div className="main-page section" id={"main-page"}>
      <Typography variant={'h1'} className={'bar-title'}>Welcome to the Bar</Typography>
    </div>
  );
}
