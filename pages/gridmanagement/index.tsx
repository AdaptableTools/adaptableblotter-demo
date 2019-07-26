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
      pageTitle={'Grid Management demos'}
      description={
        <div>
          <h4>Grid Management Functions</h4>
          <p>
            There are a many functions in the Adaptable Blotter which let you
            set up the Grid and columns exactly how you want:
          </p>
          <ul>
            <li>
              <b>Custom Sort:</b> Create your own sort orders for columns (e.g.
              Ratings, Tenors, Sectors) where the default alphabetical sort
              doesnt make sense.
            </li>
            <li>
              <b>Export:</b> Send grid data to a number of destinations using
              System or Custom reports and schedule them if you would like.
            </li>
            <li>
              <b>Layout:</b> Create views (column grouping, visibility, order,
              sorts) so you can see the subset of columns you need at the click
              of a button.
            </li>
            <li>
              <b>Cell Summary:</b> See the summarised contents of groups of
              numeric cells using many different mathematical operations.
            </li>
            <li>
              <b>Grid Info:</b> Click in the 'info' button in the Home Toolbar
              to see summary information about the grid, your licence and the
              Options you have set.
            </li>
            <li>
              <b>Calendar:</b> Select which Holiday Calendar you wish the
              Adaptable Blotter to use when calculating Working Days (in
              Filters, Queries etc).
            </li>
          </ul>
          Click on the buttons below to see a demo for our Grid Management
          functions.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/gridmanagement/aggridcustomsortdemo">
          Custom Sort demo
        </DemoBox>
        <DemoBox href="/gridmanagement/aggridexportdemo">Export demo</DemoBox>
        <DemoBox href="/gridmanagement/aggridlayoutdemo">Layout demo</DemoBox>
        <DemoBox href="/gridmanagement/aggridcellsummarydemo">
          Cell Summary demo
        </DemoBox>
        <DemoBox href="/gridmanagement/aggridgridinfodemo">
          Grid Info demo
        </DemoBox>
        <DemoBox href="/gridmanagement/aggridcalendardemo">
          Calendar demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};