import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import $ from "jquery";
import "./styles.css";
require("../react-gridstack/gs");

import { GridStack, GridStackItem } from "../react-gridstack";

class MyGrid extends React.Component {
  onClick = () => {
    if (this.refs.highCharts) {
      this.refs.highCharts.chart.series[0].update({
        type: "line"
      });
    } else {
      console.log("not working");
    }
  };
  onClickBar = () => {
    this.refs.highCharts.chart.series[0].update({
      type: "column"
    });
  };
  onClickLine = () => {
    this.refs.highCharts.chart.series[0].update({
      type: "line"
    });
  };
  // useEffect() {
  //   $(".newWidget").draggable({
  //     revert: "invalid",
  //     scroll: false,
  //     appendTo: "body",
  //     helper: "clone"
  //   });
  // }

  render() {
    const options = {
      title: {
        text: "Test"
      },
      xAxis: {
        categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "John",
          data: [5, 3, 4, 7, 2],
          type: "line"
        },
        {
          name: "Jane",
          data: [2, 4, 2, 2, 1],
          type: "column"
        },
        {
          name: "Joe",
          data: [3, 4, 4, 2, 5],
          type: "column"
        }
      ],
      exporting: {
        showTable: true,
        allowHTML: true
      }
    };
    return (
      <div>
        <div>
          <button onClick={this.onClickLine}>Line</button>
        </div>

        <GridStack
          cellHeight={80}
          minWidth={200}
          minHeight={300}
          verticalMargin={10}
          acceptWidgets=".newWidget"
          // removable={true}
        >
          {/* <button onClick={this.onClickBar}>Bar</button> */}

          <GridStackItem id="item_3" x={0} y={0} minHeight={2} minWidth={2}>
            <div></div>
          </GridStackItem>
          <GridStackItem id="item_4" x={0} y={0} minHeight={2} minWidth={2}>
            <div
              style={{ height: "100%", width: 200, background: "red" }}
            ></div>
          </GridStackItem>
          <GridStackItem id="item_5" x={0} y={0} minHeight={2} minWidth={2}>
            <div
              style={{ height: "100%", width: 200, background: "red" }}
            ></div>
          </GridStackItem>

          <GridStackItem id="item_7" x={0} y={0} minHeight={2} minWidth={2}>
            <GridStack
              cellHeight={80}
              minWidth={200}
              minHeight={300}
              verticalMargin={10}
              acceptWidgets=".newWidget"
              // removable={true}
            >
              <GridStackItem id="item_1" x={0} y={0} minHeight={2} minWidth={2}>
                <div
                  style={{ height: "100%", width: 200, background: "red" }}
                ></div>
              </GridStackItem>
            </GridStack>
          </GridStackItem>
        </GridStack>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MyGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
