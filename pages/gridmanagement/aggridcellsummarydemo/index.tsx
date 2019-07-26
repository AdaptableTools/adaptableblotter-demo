import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcellsummarydemo')}
      pageTitle={'Cell Summary Demo'}
      description={
        <div>
          <h4>Cell Summary Demo</h4>
          <p>
            Use Cell Summary to see summary information about a group of
            selected cells using a variety of mathematical operations.
          </p>
          <p>
            You can create your own operations or use the ones shippped with the
            Blotter (most of which work only on numeric columns).
          </p>
          <p>
            Try it: highlight a group of cells and see the value change in the
            Cell Summmary toolbar. Click the 'info' button to see results of all
            operations or change the selected one by using the dropdown.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113312-Cell-Summary"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028900931-Cell-Summaries-Config"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
          </p>
        </div>
      }
    />
  );
};