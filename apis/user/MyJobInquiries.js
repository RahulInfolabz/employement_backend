const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function MyJobInquiries(req, res) {
  try {
    const user = req.session.user;
    if (!user || user.session.role !== "User") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access!",
      });
    }

    const db = await connectDB();
    const inquiryCollection = db.collection("job_inquiries");

    const inquiries = await inquiryCollection
      .aggregate([
        { $match: { user_id: new ObjectId(user.session._id) } },
        {
          $lookup: {
            from: "job_listings",
            localField: "job_id",
            foreignField: "_id",
            as: "job",
          },
        },
        { $unwind: { path: "$job", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "job_categories",
            localField: "job.category_id",
            foreignField: "_id",
            as: "job.category",
          },
        },
        {
          $unwind: {
            path: "$job.category",
            preserveNullAndEmptyArrays: true,
          },
        },
        { $sort: { inquiry_date: -1 } },
      ])
      .toArray();

    return res.status(200).json({
      success: true,
      message: "Job inquiries fetched successfully",
      data: inquiries,
    });
  } catch (error) {
    console.error("MyJobInquiries.js: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { MyJobInquiries };
