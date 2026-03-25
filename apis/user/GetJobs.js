const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetJobs(req, res) {
  try {
    const { category_id, job_type_id, min_salary, max_salary } = req.query;

    const db = await connectDB();
    const jobsCollection = db.collection("job_listings");

    // Build match stage
    const matchStage = { status: true };

    if (category_id && ObjectId.isValid(category_id)) {
      matchStage.category_id = new ObjectId(category_id);
    }

    if (job_type_id && ObjectId.isValid(job_type_id)) {
      matchStage.job_type_id = new ObjectId(job_type_id);
    }

    if (min_salary || max_salary) {
      matchStage.salary_min = {};
      if (min_salary) matchStage.salary_min.$gte = parseFloat(min_salary);
      if (max_salary) matchStage.salary_min.$lte = parseFloat(max_salary);
    }

    const pipeline = [
      { $match: matchStage },
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
      { $sort: { created_at: -1 } },
    ];

    const jobs = await jobsCollection.aggregate(pipeline).toArray();

    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    console.error("GetJobs.js: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { GetJobs };
