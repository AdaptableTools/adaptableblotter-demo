import * as Helper from './Helper';
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'
import { getSchema, setNorthwindHyperGridProperties } from './HelperHypergrid';

export class HypergridChartingDemo {
    private adaptableblotter: IAdaptableBlotter
    private grid: any
    constructor() {

        let data: any[]
        Helper.getDataFromJson("NorthwindOrders.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                //create the Hypergrid
                let schema: any = getSchema(data);
                this.grid = new (<any>window).fin.Hypergrid('#' + "grid", { data: data, schema: schema });

                //Set to `true` to render `0` and `false`. Otherwise these value appear as blank cells.

                //Make the data to tick every 0.5s
                //     setInterval(() =>                     selectedConfig.tickData(this.grid), 500)

                //set all the properties such as editor etc....
                setNorthwindHyperGridProperties(this.grid)

                this.grid.addEventListener("fin-after-cell-edit", (e: any) => {
                    let row = this.grid.behavior.dataModel.getRow(e.detail.input.event.visibleRow.rowIndex);
                    this.grid.repaint()
                });

                //create Adaptable Blotter
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: "OrderId",
                    vendorGrid: this.grid,
                    userName: "Jonathan",
                    blotterId: "Charting Demo",
                    licenceKey: Helper.getdemolicencekey(),
                    predefinedConfig: json,
                    chartOptions: {
                        displayOnStartUp: true,
                        showModal: false,
                    },
                }

                this.adaptableblotter = new (<any>window).adaptableblotterhypergrid.AdaptableBlotter(blotterOptions);
                //alternate rows
                var origgetCell = this.grid.behavior.dataModel.getCell;
                this.grid.behavior.dataModel.getCell = function (config: any, declaredRendererName: any) {
                    if (config.isDataRow) {
                        var y = config.dataCell.y;
                        if (y % 2) {
                            config.backgroundColor = config.altbackground;
                        }
                    }
                    return origgetCell.call(this.grid.behavior.dataModel, config, declaredRendererName)
                };
            })



        let json = {
            "Dashboard": {
                "VisibleToolbars": [
                    "SmartEdit",
                    "Export",
                    "Chart",
                    "Theme"
                ],
                "VisibleButtons": [
                    "About",
                    "Dashboard",
                    "QuickSearch",
                    "ColumnChooser",
                    "AdvancedSearch"
                ],
                "Zoom": "0.9"
            },
            "Chart": {
                "CurrentChartName": "Employee Sales",
                "ChartDefinitions": [
                    {
                        "Description": "",
                        "Name": "Employee Sales",
                        "XAxisColumnId": "Employee",
                        "XAxisExpression": {
                            "ColumnValueExpressions": [{}],
                            "FilterExpressions": [{}],
                            "RangeExpressions": [{}]
                        },
                        "YAxisColumnIds": [
                            "InvoicedCost",
                            "OrderCost"
                        ],
                        "YAxisTotal": "Sum",
                        "ChartProperties": {
                            "CalloutsInterval": 1,
                            "CalloutsType": "None",
                            "ChartType": "Column",
                            "CrosshairAnnotationEnabled": false,
                            "CrosshairDisplayMode": "None",
                            "CrosshairSnapToData": false,
                            "EnableCategoryHighlighting": false,
                            "EnableFinalValueAnnotations": false,
                            "EnableItemHighlighting": false,
                            "EnableSeriesHighlighting": false,
                            "EnableTransitions": false,
                            "MarkerType": "Default",
                            "SeriesThickness": 1,
                            "SubTitleAlignment": "Center",
                            "TitleAlignment": "Center",
                            "ToolTipType": "Item",
                            "XAxisAngle": "Horizontal",
                            "XAxisGap": 0.5,
                            "XAxisInverted": true,
                            "XAxisLabelColor": "",
                            "XAxisLabelLocation": "OutsideBottom",
                            "XAxisLabelVisibility": "visible",
                            "XAxisOverlap": 1,
                            "XAxisTitle": "",
                            "XAxisTitleColor": "",
                            "YAxisInverted": false,
                            "YAxisIsLogarithmic": false,
                            "YAxisLabelColor": "",
                            "YAxisLabelLocation": "OutsideRight",
                            "YAxisLabelScale": "Linear",
                            "YAxisLabelVisibility": "visible",
                            "YAxisTitle": "",
                            "YAxisTitleColor": ""
                        }
                    }
                ]
            }
        }
    }
}