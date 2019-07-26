import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridflashingcelldemo')}
      pageTitle={'Flashing Cell Demo'}
      description={
        <div>
          <h4>Flashing Cells Demo</h4>
          <p>Flashing cells briefly appear when cell values' change.</p>
          <p>
            By default they flash for half a second, with a green flash for a
            positive change and a red flash for a negative change but this can
            be amended by you.
          </p>
          <p>
            This (very contrived!) example has 4 Flashing cell columns: The
            'Item Cost', 'Order Cost', 'Change Last Order' columns use the
            default flashing values while (for no particularly good reason) the
            'Invoiced' column has different colours and a longer duration.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168151-Flashing-Cell"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_runtimestate_flashingcellstate_.flashingcellstate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_iflashingcellapi_.iflashingcellapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742952-Flashing-Cell-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030944531-Flashing-Cells-Videos "
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};