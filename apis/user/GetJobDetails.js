const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetJobDetails(req, res) {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Job ID",
      });
    }

    const db = await connectDB();
    const jobsCollection = db.collection("job_listings");

    const pipeline = [
      { $match: { _id: new ObjectId(id), status: true } },
      {
        $lookup: {
          from: "job_categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "job_types",
          localField: "job_type_id",
          foreignField: "_id",
          as: "job_type",
        },
      },
      { $unwind: { path: "$job_type", preserveNullAndEmptyArrays: true } },
    ];

    const result = await jobsCollection.aggregate(pipeline).toArray();

    if (!result.length) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job details fetched successfully",
      data: result[0],
    });
  } catch (error) {
    console.error("GetJobDetails.js: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { GetJobDetails };
