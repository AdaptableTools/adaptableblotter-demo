import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridalertdemo')}
      pageTitle={'Alerts Demo'}
      description={
        <div>
          <p>
            Create Alerts when data changes in your grid in ways you need to
            know about. This can be in response to a wide variety of data
            changes - both user edits and in the data source.
          </p>
          <p>
            When an Alert fires you can choose whether to <b>display a popup</b>
            in your grid, <b>colour the cell</b> where the data changed that
            triggered the Alert and to <b>jump to the cell</b>.
          </p>
          <p>
            Each Alert also has a <b>Message Type </b> with an associated
            colour. Available options are <i>Info</i>, <i>Success</i>,{' '}
            <i>Warning</i> and <i>Error</i>.
          </p>
          <p>This example contains 2 alerts: </p>
          <ul>
            <li>
              One is a <i>warning</i> Alert which dislays a popup and is
              triggered when the <b>Invoiced</b> column value is greater than
              2000 (make this edit and see for yourself).
            </li>
            <li>
              One isn an <i>info</i> Alert and triggers when the{' '}
              <b>Item Count</b> doubles (our dummy ticking data is randomly
              triggering the alert which is updating in the Alert toolbar).
            </li>
          </ul>{' '}
        </div>
      }
      helpResources={
        <div>
          {' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/alert-function.md"
            target="_blank"
          >
            Alert Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_alertstate_.alertstate.html"
            target="_blank"
          >
            Alert Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_alertapi_.alertapi.html"
            target="_blank"
          >
            Alert API
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_events_alertfired_.alertfiredeventargs.html"
            target="_blank"
          >
            AlertFired Event
          </a>
        </div>
      }
    />
  );
};
