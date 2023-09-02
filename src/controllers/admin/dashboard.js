import moment from "moment/moment";
import { OrderModel } from "../../models";

export const getDahsboardData = async (req, res) => {
  try {
    // seven days
    const fromDate = moment().subtract(7, "d").startOf("day").toDate();
    let sevenDays = {
      labels: [],
      data: [],
    };
    Array(7)
      .fill(null)
      .forEach((_, i) => {
        sevenDays.labels.push(
          moment()
            .subtract(i + 1, "d")
            .format("ddd")
        );
        sevenDays.data.push(0);
      });

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
            // year: { $year: "$dateField" },
            // month: { $month: "$dateField" },
            // day: {
            //   $dayOfMonth: "$createdAt",
            // },
            day: {
              $dateToString: {
                format: '%Y-%m-%d',
                date: "$createdAt",
              },
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);
    result.forEach(({ _id, count }) => {
      const dayOfweek = moment(_id.day).format('ddd')
      const findIdx = sevenDays.labels.findIndex((item) => item === dayOfweek);
      sevenDays.data[findIdx] = count;
    });
    return res.status(200).json({ success: true, result: sevenDays });
  } catch (error) {
    console.log(error);
    return res
      .status(402)
      .json({ success: false, msg: "Something went worng!" });
  }
};
