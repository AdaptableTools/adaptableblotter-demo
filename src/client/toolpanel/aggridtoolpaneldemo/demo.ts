import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData, false);
  gridOptions.sideBar = true;
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Tool Panel Demo',
    userInterfaceOptions: {
      showAdaptableToolPanel: true,
    },
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);
  gridOptions.api!.openToolPanel('AdaptableToolPanel');

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};