import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcalendardemo')}
      pageTitle={'Calendar Demo'}
      description={
        <div>
          <p>
            Some functionality in AdapTable (e.g. Filters or Queries) requires
            knowledge of the user's when calculating Next or Previous Working
            Day.
          </p>
          <p>
            To do this a Holiday Calendar is used. The default is 'United
            States' but you can change that through Predefined Config or at
            run-time through the Calendars Function.
          </p>
          <p>
            This example we have set the 'Current Calendar' in Config to be
            France which is what AdapTable will now use when working out if a
            particular Date is a holiday or not.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_calendarstate_.calendarstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_calendarapi_.calendarapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002179338-Calendars-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754438-UI-Elements"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
