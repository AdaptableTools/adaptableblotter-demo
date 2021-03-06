import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/dashboard/aggriddashboardvisibilitydemo'
      )}
      pageTitle={'Dashboard Visibility Demo'}
      description={
        <div>
          <p>The Dashboard allows you to cycle between 3 states:</p>
          <ul>
            <li>
              {' '}
              <b>Full</b>: the Dashboard Header is above the grid and one of the
              tabs is open
            </li>
            <li>
              <b>Collapsed</b>: the Dashboard Header is above the grid but none
              of the tabs are open{' '}
            </li>
            <li>
              {' '}
              <b>Floating</b>: the Dashboard appears as a small control which
              you can drag where you want.{' '}
            </li>
          </ul>
          <p>
            But you can, additionally, hide the Dashboard altogether by setting
            the 'Dashboard' to be 'Hidden'in Entitlements; this is what we have
            done in this example
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/dashboard"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config"
            target="_blank"
          >
            Dashboard Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/dashboard-api"
            target="_blank"
          >
            Dashboard Api
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/KrahnLFYHjs" target="_blank">
            Dashboard Video
          </a>
        </div>
      }
    />
  );
};
