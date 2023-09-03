import moment from "moment/moment";
import { OrderModel } from "../../models";
import { formatQuary } from "../../helpers";

export const getDahsboardSellingData = async (req, res) => {
  const { type } = req.query;
  try {
    // seven days
    const { chartData, fromDate, dateFormate } = formatQuary(type);
    const result = await OrderModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: fromDate,
            $lte: moment().toDate(),
          },
        },
      },
      {
        $group: {
          _id: {
            $dateTrunc: {
              // format: "%Y-%m-%d",
              date: "$createdAt",
              unit: type
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);
    result.forEach(({ _id, count }) => {
      const findDate = moment(_id).format(dateFormate);
      const findIdx = chartData.labels.findIndex((item) => item === findDate);
      chartData.data[findIdx] = count;
    });
    return res.status(200).json({ success: true, result: chartData });
  } catch (error) {
    console.log(error);
    return res
      .status(402)
      .json({ success: false, msg: "Something went worng!" });
  }
};

export const getCategorySellingData = (req, res)=>{
  try {
    
  } catch (error) {
    return res
    .status(402)
    .json({ success: false, msg: "Something went worng!" });
    console.log(error)
  }
}