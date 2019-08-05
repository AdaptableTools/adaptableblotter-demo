import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggridcustomthemedemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Custom Theme Demo'}
      description={
        <>
          <h4>Custom Theme Demo</h4>
          <p>
            The Adaptable Blotter ships with 2 themes - Dark or Light. But you
            can create your own yourself.
          </p>
          <p>
            The Adaptable Blotter manages theming through{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              target="_blank"
            >
              CSS variables
            </a>
            . We provide a number of properties that you can set to create your
            own theme.{' '}
          </p>
          <p>
            Most are colour based but you have control also over button shapes
            and sizes for example.
          </p>
          <p>
            In this example we have created a 'Wimbledon Theme' that styles the
            Blotter purple and green (and uses row styles to similarly colour
            the grid).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168191-Theme-Picker"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587452-Theme-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899491-Theme-API"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005211-Theme-Picker-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </>
      }
    />
  );
};