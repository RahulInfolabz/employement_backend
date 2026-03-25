const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddJobInquiry(req, res) {
  try {
    const user = req.session.user;
    if (!user || user.session.role !== "User") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access!",
      });
    }

    const { job_id, inquiry_message } = req.body;

    if (!job_id || !inquiry_message) {
      return res.status(400).json({
        success: false,
        message: "Job ID and inquiry message are required",
      });
    }

    if (!ObjectId.isValid(job_id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Job ID",
      });
    }

    const db = await connectDB();
    const jobsCollection = db.collection("job_listings");
    const inquiryCollection = db.collection("job_inquiries");

    // Verify job exists
    const jobExists = await jobsCollection.findOne({
      _id: new ObjectId(job_id),
    });

    if (!jobExists) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    await inquiryCollection.insertOne({
      user_id: new ObjectId(user.session._id),
      job_id: new ObjectId(job_id),
      inquiry_message,
      inquiry_status: "Pending",
      inquiry_date: new Date(),
      response_message: "",
      response_date: null,
    });

    return res.status(201).json({
      success: true,
      message: "Job inquiry submitted successfully",
    });
  } catch (error) {
    console.error("AddJobInquiry.js: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = { AddJobInquiry };
