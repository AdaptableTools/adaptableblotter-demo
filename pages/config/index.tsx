import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  return (
    <MainPage
      pageTitle={'Config demos'}
      description={
        <div>
          <h4>Predefined Configuration</h4>
          <p>
            Typically you will ship your AdapTable instance with Predefined
            Configuration so that your users open their application at first use
            and see it pre-loaded with Searches, Styles, Edit Rules, Reports etc
            that match their needs.
          </p>
          <p>
            Additionally Predefined Configuration will include 'Entitlements' -
            stipulating which AdapTable functions they are allowed to access.
          </p>
          <p>This section contains 2 grids: </p>
          <p>
            One is loaded with NO Predfined Configuration so it shows how
            AdapTable looks straight out of the box with all the defaults
            chosen.
          </p>
          <p>
            And the second grid contains an AdapTable instance which does have
            Predefined Configuration so its pre-loaded with styles, reports,
            layouts etc.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/config/aggridnoconfigdemo">
          No Predefined Config demo
        </DemoBox>
        <DemoBox href="/config/aggridpredefinedconfigdemo">
          Predefined Config demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
