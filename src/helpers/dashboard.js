import moment from "moment";

export const formatQuary = (type) => {
    let chartData = {
      labels: [],
      data: [],
    };
    let fromDate = "";
    let dateFormate = "";
    if (type === "day") {
      fromDate = moment().subtract(7, "d").startOf("day").toDate();
      dateFormate = "ddd";
      Array(7)
        .fill(null)
        .forEach((_, i) => {
          chartData.labels.push(
            moment()
              .subtract(8-(i+1), "d")
              .format("ddd")
          );
          chartData.data.push(0);
        });
    } else {
      fromDate = moment().subtract(6, "month").startOf("month").toDate();
      dateFormate = "MMM YYYY";
      Array(6)
        .fill(null)
        .forEach((_, i) => {
          chartData.labels.push(
            moment()
              .subtract(7-(i+1), "month")
              .format("MMM YYYY")
          );
          chartData.data.push(0);
        });
    }
  
    return { chartData, fromDate, dateFormate };
  };