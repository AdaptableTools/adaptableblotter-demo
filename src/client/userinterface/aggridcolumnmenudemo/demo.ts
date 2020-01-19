import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import {
  AdaptableMenuItem,
  MenuInfo,
} from '@adaptabletools/adaptable/src/PredefinedConfig/Common/Menu';
var adaptableApi: AdaptableApi;

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Column Menu Demo',
    userInterfaceOptions: {
      showAdaptableColumnMenu: (
        menuItem: AdaptableMenuItem,
        menuInfo: MenuInfo
      ) => {
        if (
          menuInfo.Column.ColumnId === 'Employee' &&
          (menuItem.FunctionName === 'ColumnChooser' ||
            menuItem.FunctionName === 'PieChart')
        ) {
          return false;
        } else if (menuInfo.Column.ColumnId === 'ContactName') {
          return false;
        }
        return true;
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: gridOptions,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  adaptableApi = Adaptable.init(adaptableOptions);

  return {
    demoConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};

let demoConfig: PredefinedConfig = {
  Dashboard: {
    VisibleToolbars: ['QuickSearch', 'SystemStatus'],
  },
  SystemStatus: {
    ShowAlert: false,
  },
  UserInterface: {
    ColumnMenuItems: [
      {
        Label: 'Mimise Dashboard',
        UserMenuItemClickedFunction: () => {
          adaptableApi.dashboardApi.minimise();
        },
      },
      {
        Label: 'Set System Status',
        SubMenuItems: [
          {
            Label: 'Set Error',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setErrorSystemStatus('System Down');
            },
          },
          {
            Label: 'Set Warning',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setWarningSystemStatus(
                'System Slow'
              );
            },
          },
          {
            Label: 'Set Success',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setSuccessSystemStatus(
                'System Fine'
              );
            },
          },
          {
            Label: 'Set Info',
            UserMenuItemClickedFunction: () => {
              adaptableApi.systemStatusApi.setInfoSystemStatus(
                'Demos working fine'
              );
            },
          },
        ],
      },
    ],
  },
} as PredefinedConfig;