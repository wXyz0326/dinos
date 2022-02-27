import React from 'react';
import MHidden from '../../components/@mui-extend/MHidden';
import DesktopCharity from './DesktopCharity';
import IPadCharity from './IPadCharity';

export default function Charity() {
  return (
    <>
      <MHidden width="mdDown">
        <DesktopCharity />
      </MHidden>
      <MHidden width="mdUp">
        <IPadCharity />
      </MHidden>
    </>
  );
}