import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridlayoutdemo')}
      pageTitle={'Layout Demo'}
      description={
        <div>
          <h4>Layouts (Views) Demo</h4>
          <p>
            Use Layouts to manage sets of column visibility, order, sorting and
            grouping.
          </p>
          <p>
            Whereas the search columns filter which rows are visible, layouts
            filter which columns are visible. They can include all grid state
            (e.g. grouping) and save automatially when changed.
          </p>
          <p>
            This example has 2 layouts: 'Orders View' and 'Shipping View'. You
            can alternate between them in the Layout toolbar. And you can create
            your own layout and group by a column and you will see that the
            layout, including the grouping, persists automatically. (Note that
            the Shipping View Layout sorts on 'Ship Name' column which uses a
            Custom Sort).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028900971-Layout-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585432-Layout-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819092-Layouts-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755197-Grid-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
