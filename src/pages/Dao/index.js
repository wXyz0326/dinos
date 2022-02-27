import React from 'react';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopDao from './DesktopDao';
import IPadDao from './IPadDao';

export default function Dao() {
  return (
    <>
      <MHidden width="mdDown">
        <DesktopDao />
      </MHidden>
      <MHidden width="mdUp">
        <IPadDao />
      </MHidden>
    </>
  );
}