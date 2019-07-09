import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/AdaptableBlotter.png';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img src={logo} style={{ maxWidth: '80%' }} />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Blotter Option demos'}
      description={
        <div>
          <h4>Blotter Option Demos</h4>
          <p>
            When you create an instance of the Adaptable Blotter you will create
            an <b>AdaptableBlotterOptions</b> object.
          </p>
          <p>
            This has a very large number of properties which allow you complete
            control over how you set up your Adaptable Blotter, and we have used
            many of them in the demos above (e.g. the Audit Log demo in the
            Admin section).
          </p>
          <p>
            This section contains a series of demos each of which highlights a
            different property in AdaptableBlotterOptions.
          </p>
          <p>These include:</p>
          <ul>
            <li>
              <b>Ignore Case Demo:</b> By default case is ignored when running
              queries against string columns but you can change this behaviour.
            </li>
          </ul>
          Click on the buttons below to see the Blotter Options demos.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/blotteroptions/aggridignorecasequeriesdemo">
          Queries Ignore Case demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
