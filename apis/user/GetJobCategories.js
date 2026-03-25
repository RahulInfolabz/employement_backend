const connectDB = require("../../db/dbConnect");

async function GetJobCategories(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("job_categories");

    const categories = await collection
      .find({ status: true })
      .sort({ category_name: 1 })
      .toArray();

    return res.status(200).json({
      success: true,
      message: "Job categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    console.error("GetJobCategories.js: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { GetJobCategories };
