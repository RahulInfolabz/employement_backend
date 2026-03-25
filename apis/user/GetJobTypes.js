const connectDB = require("../../db/dbConnect");

async function GetJobTypes(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("job_types");

    const jobTypes = await collection
      .find({ status: true })
      .sort({ job_type_name: 1 })
      .toArray();

    return res.status(200).json({
      success: true,
      message: "Job types fetched successfully",
      data: jobTypes,
    });
  } catch (error) {
    console.error("GetJobTypes.js: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { GetJobTypes };
