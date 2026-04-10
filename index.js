const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./db/dbConnect");
require("dotenv").config();

// ── Common APIs ───────────────────────────────────────────────────────────────
const Logout = require("./apis/common/logout");
const Session = require("./apis/common/session");
const { Login } = require("./apis/common/login");
const { Signup } = require("./apis/common/signup");
const { ChangePassword } = require("./apis/common/changePassword");

// ── Public APIs ───────────────────────────────────────────────────────────────
const { GetJobCategories } = require("./apis/user/GetJobCategories");
const { GetJobTypes } = require("./apis/user/GetJobTypes");
const { GetJobs } = require("./apis/user/GetJobs");
const { GetJobDetails } = require("./apis/user/GetJobDetails");

// ── User APIs ─────────────────────────────────────────────────────────────────
const { UpdateProfile } = require("./apis/user/UpdateProfile");
const { AddJobInquiry } = require("./apis/user/AddJobInquiry");
const { MyJobInquiries } = require("./apis/user/MyJobInquiries");
const { AddGeneralInquiry } = require("./apis/user/AddGeneralInquiry");
const { MyGeneralInquiries } = require("./apis/user/MyGeneralInquiries");
const { AddFeedback } = require("./apis/user/AddFeedback");
const MongoStore = require("connect-mongo").default;

// ─────────────────────────────────────────────────────────────────────────────


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: "none"
    }
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ── DB Connect ────────────────────────────────────────────────────────────────
connectDB();

// ─────────────────────────────────────────────────────────────────────────────
//  COMMON APIs
// ─────────────────────────────────────────────────────────────────────────────
app.post("/signup", Signup);
app.post("/login", Login);
app.get("/logout", Logout);
app.get("/session", Session);
app.post("/changePassword", ChangePassword);

// ─────────────────────────────────────────────────────────────────────────────
//  PUBLIC APIs (no auth required)
// ─────────────────────────────────────────────────────────────────────────────

// Job Categories
app.get("/jobCategories", GetJobCategories);

// Job Types
app.get("/jobTypes", GetJobTypes);

// Jobs (filters: ?category_id= / ?job_type_id= / ?min_salary= / ?max_salary=)
app.get("/jobs", GetJobs);
app.get("/jobs/:id", GetJobDetails);

// ─────────────────────────────────────────────────────────────────────────────
//  USER APIs (session required)
// ─────────────────────────────────────────────────────────────────────────────

// Profile
app.post("/user/updateProfile", UpdateProfile);

// Job Inquiries
app.post("/user/addJobInquiry", AddJobInquiry);
app.get("/user/myJobInquiries", MyJobInquiries);

// General Inquiries
app.post("/user/addGeneralInquiry", AddGeneralInquiry);
app.get("/user/myGeneralInquiries", MyGeneralInquiries);

// Feedback
app.post("/user/addFeedback", AddFeedback);

app.get("/", (req, res) => {
  return res.status(201).json({
    success: true,
    message: "Job Employment Server Started Successfully",
  });

});

// ─────────────────────────────────────────────────────────────────────────────
app.listen(PORT, () =>
  console.log(`✅ Employment Portal server started on PORT ${PORT}!`)
);
