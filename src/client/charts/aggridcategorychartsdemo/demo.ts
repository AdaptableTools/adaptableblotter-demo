import * as Helper from '../../../Helpers/Helper';
import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import '@adaptabletools/adaptableblotter/themes/dark.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';
import json from '../../../../DataSets/Json/worldstats.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getWorldStatsSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'Country',
    userName: 'Demo User',
    blotterId: 'Category Charts Demo',

    chartOptions: {
      displayOnStartUp: true,
      showModal: false,
      pieChartMaxItems: 50,
    },
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = AdaptableBlotter.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
