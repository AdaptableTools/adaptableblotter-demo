import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var PriceBlotterBond: IDataSetConfiguration = {
    name: "Price Blotter Bond",
    primaryKey: "InstrumentId",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                schema.push({ name: p, header: Helper.capitalize(p) });
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {
        let behavior = grid.behavior;

        //For all columns except primarykey we enable the editor
        behavior.dataModel.getCellEditorAt = function (columnIndex: any, rowIndex: any, declaredEditorName: any, options: any) {
            let editorName = declaredEditorName;
            if (options.column.name !== "InstrumentId") {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }
    },
    tickData: (grid: any) => {
        let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
        //pick a random trade in the first 30
        let row = Helper.getRandomItem(grid.behavior.getData(), 30);
        let columnName = "Price";
        let initialNewValue = row[columnName];
        let newValue = Helper.roundTo4Dp(initialNewValue + numberToAdd);
        row[columnName] = newValue;

        grid.repaint()
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    }
}