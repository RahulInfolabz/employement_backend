// ============================================================
//   EMPLOYMENT PORTAL - MongoDB Seed Data
//   Database: employment_portal_db
//   Run this file using: node seed.js
// ============================================================

const { MongoClient, ObjectId } = require("mongodb");

const MONGO_URI =
  "mongodb+srv://infolabztester:infolabztester@infolabz.nzobwfj.mongodb.net/employment_portal_db";

// ── Pre-defined ObjectIds for relational linking ─────────────

// Job Category IDs
const catIT         = new ObjectId();
const catFinance    = new ObjectId();
const catMarketing  = new ObjectId();
const catOperations = new ObjectId();
const catHR         = new ObjectId();
const catDesign     = new ObjectId();

// Job Type IDs
const typeFullTime  = new ObjectId();
const typePartTime  = new ObjectId();
const typeContract  = new ObjectId();
const typeRemote    = new ObjectId();

// User IDs
const user1 = new ObjectId();
const user2 = new ObjectId();
const user3 = new ObjectId();

// Job IDs
const job1  = new ObjectId();
const job2  = new ObjectId();
const job3  = new ObjectId();
const job4  = new ObjectId();
const job5  = new ObjectId();
const job6  = new ObjectId();
const job7  = new ObjectId();
const job8  = new ObjectId();
const job9  = new ObjectId();
const job10 = new ObjectId();

// ─────────────────────────────────────────────────────────────

const job_categories = [
  {
    _id: catIT,
    category_name: "Information Technology",
    category_description:
      "Roles related to software development, system administration, cybersecurity, data science, and IT support.",
    category_image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    status: true,
  },
  {
    _id: catFinance,
    category_name: "Finance & Accounting",
    category_description:
      "Roles in banking, financial planning, accounting, auditing, and investment management.",
    category_image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    status: true,
  },
  {
    _id: catMarketing,
    category_name: "Marketing & Sales",
    category_description:
      "Roles covering digital marketing, brand management, sales, SEO, and content strategy.",
    category_image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    status: true,
  },
  {
    _id: catOperations,
    category_name: "Operations & Logistics",
    category_description:
      "Roles in supply chain management, warehouse operations, procurement, and business operations.",
    category_image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    status: true,
  },
  {
    _id: catHR,
    category_name: "Human Resources",
    category_description:
      "Roles in talent acquisition, employee relations, payroll management, and organizational development.",
    category_image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    status: true,
  },
  {
    _id: catDesign,
    category_name: "Design & Creative",
    category_description:
      "Roles in UI/UX design, graphic design, product design, and creative content production.",
    category_image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
    status: true,
  },
];

// ─────────────────────────────────────────────────────────────

const job_types = [
  {
    _id: typeFullTime,
    job_type_name: "Full-Time",
    description: "Permanent position with full working hours (40 hrs/week) and complete benefits.",
    status: true,
  },
  {
    _id: typePartTime,
    job_type_name: "Part-Time",
    description: "Flexible position with reduced working hours, suitable for students or freelancers.",
    status: true,
  },
  {
    _id: typeContract,
    job_type_name: "Contract",
    description: "Fixed-term project-based engagement with defined scope and duration.",
    status: true,
  },
  {
    _id: typeRemote,
    job_type_name: "Remote",
    description: "Work from anywhere position with full flexibility on location.",
    status: true,
  },
];

// ─────────────────────────────────────────────────────────────

const users = [
  {
    _id: user1,
    full_name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    password: "rahul1234",
    mobile_no: "9876543210",
    city: "Ahmedabad",
    profile_image:
      "https://randomuser.me/api/portraits/men/11.jpg",
    role: "User",
    status: "Active",
    created_at: new Date("2025-01-10"),
  },
  {
    _id: user2,
    full_name: "Priya Patel",
    email: "priya.patel@gmail.com",
    password: "priya1234",
    mobile_no: "9823456789",
    city: "Surat",
    profile_image:
      "https://randomuser.me/api/portraits/women/21.jpg",
    role: "User",
    status: "Active",
    created_at: new Date("2025-02-05"),
  },
  {
    _id: user3,
    full_name: "Arjun Mehta",
    email: "arjun.mehta@gmail.com",
    password: "arjun1234",
    mobile_no: "9765432100",
    city: "Vadodara",
    profile_image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    role: "User",
    status: "Active",
    created_at: new Date("2025-03-01"),
  },
];

// ─────────────────────────────────────────────────────────────

const job_listings = [
  {
    _id: job1,
    category_id: catIT,
    job_type_id: typeFullTime,
    job_title: "Full Stack Developer",
    company_name: "TechNova Solutions",
    job_description:
      "We are looking for a skilled Full Stack Developer to join our growing engineering team. You will be responsible for developing and maintaining web applications using React and Node.js. You will collaborate with designers, product managers, and other engineers to deliver high-quality software solutions.",
    required_skills: "React.js, Node.js, MongoDB, Express.js, REST APIs, Git",
    salary_min: 50000,
    salary_max: 90000,
    job_location: "Ahmedabad, Gujarat",
    created_at: new Date("2025-06-01"),
    status: true,
  },
  {
    _id: job2,
    category_id: catIT,
    job_type_id: typeRemote,
    job_title: "Data Scientist",
    company_name: "DataMind Analytics",
    job_description:
      "Join our data science team to analyze large datasets, build machine learning models, and generate actionable insights. You will work closely with business stakeholders to solve complex problems using data-driven approaches.",
    required_skills: "Python, Machine Learning, TensorFlow, Pandas, SQL, Data Visualization",
    salary_min: 70000,
    salary_max: 120000,
    job_location: "Remote",
    created_at: new Date("2025-06-03"),
    status: true,
  },
  {
    _id: job3,
    category_id: catIT,
    job_type_id: typeContract,
    job_title: "DevOps Engineer",
    company_name: "CloudSprint Pvt Ltd",
    job_description:
      "We need an experienced DevOps Engineer to manage our CI/CD pipelines, cloud infrastructure, and deployment processes. You will ensure high availability and reliability of our systems and help the development team ship faster.",
    required_skills: "AWS, Docker, Kubernetes, Jenkins, Linux, Terraform, CI/CD",
    salary_min: 65000,
    salary_max: 105000,
    job_location: "Bengaluru, Karnataka",
    created_at: new Date("2025-06-05"),
    status: true,
  },
  {
    _id: job4,
    category_id: catFinance,
    job_type_id: typeFullTime,
    job_title: "Financial Analyst",
    company_name: "Apex Capital Group",
    job_description:
      "As a Financial Analyst, you will prepare financial reports, forecast revenue, analyze market trends, and assist senior management in making informed investment decisions. Strong analytical skills and attention to detail are a must.",
    required_skills: "Financial Modeling, Excel, Power BI, Accounting, Tally, Data Analysis",
    salary_min: 40000,
    salary_max: 70000,
    job_location: "Mumbai, Maharashtra",
    created_at: new Date("2025-06-07"),
    status: true,
  },
  {
    _id: job5,
    category_id: catMarketing,
    job_type_id: typeFullTime,
    job_title: "Digital Marketing Manager",
    company_name: "BrandReach Media",
    job_description:
      "We are seeking a results-driven Digital Marketing Manager to lead our online marketing efforts. You will manage campaigns across Google Ads, social media platforms, and email marketing channels to drive brand awareness and lead generation.",
    required_skills: "SEO, Google Ads, Social Media Marketing, Email Marketing, Analytics, Content Strategy",
    salary_min: 45000,
    salary_max: 80000,
    job_location: "Pune, Maharashtra",
    created_at: new Date("2025-06-08"),
    status: true,
  },
  {
    _id: job6,
    category_id: catMarketing,
    job_type_id: typePartTime,
    job_title: "Content Writer",
    company_name: "InkLogic Studios",
    job_description:
      "We are looking for a creative and detail-oriented Content Writer to produce engaging blog posts, articles, product descriptions, and social media content. You should have a flair for writing and a good understanding of SEO principles.",
    required_skills: "Content Writing, SEO Copywriting, Blog Writing, Research, Grammarly, WordPress",
    salary_min: 15000,
    salary_max: 30000,
    job_location: "Ahmedabad, Gujarat",
    created_at: new Date("2025-06-10"),
    status: true,
  },
  {
    _id: job7,
    category_id: catHR,
    job_type_id: typeFullTime,
    job_title: "HR Recruiter",
    company_name: "PeopleFirst HR Solutions",
    job_description:
      "As an HR Recruiter, you will be responsible for sourcing, screening, and onboarding candidates across various departments. You will work closely with hiring managers to understand job requirements and build a strong talent pipeline.",
    required_skills: "Talent Acquisition, Interviewing, Job Portals, HR Software, Communication, ATS",
    salary_min: 30000,
    salary_max: 55000,
    job_location: "Surat, Gujarat",
    created_at: new Date("2025-06-11"),
    status: true,
  },
  {
    _id: job8,
    category_id: catDesign,
    job_type_id: typeFullTime,
    job_title: "UI/UX Designer",
    company_name: "PixelCraft Design Co.",
    job_description:
      "We are hiring a talented UI/UX Designer to create visually stunning and user-friendly digital experiences. You will conduct user research, create wireframes and prototypes, and collaborate with developers to implement designs.",
    required_skills: "Figma, Adobe XD, Wireframing, Prototyping, User Research, Interaction Design",
    salary_min: 40000,
    salary_max: 75000,
    job_location: "Ahmedabad, Gujarat",
    created_at: new Date("2025-06-12"),
    status: true,
  },
  {
    _id: job9,
    category_id: catOperations,
    job_type_id: typeFullTime,
    job_title: "Supply Chain Manager",
    company_name: "LogiFlow Enterprises",
    job_description:
      "We are looking for an experienced Supply Chain Manager to oversee end-to-end logistics, vendor management, and inventory control. You will optimize supply chain operations to reduce costs and improve delivery timelines.",
    required_skills: "Supply Chain Management, Inventory Control, Vendor Management, ERP, Logistics, Procurement",
    salary_min: 55000,
    salary_max: 95000,
    job_location: "Vadodara, Gujarat",
    created_at: new Date("2025-06-14"),
    status: true,
  },
  {
    _id: job10,
    category_id: catIT,
    job_type_id: typeRemote,
    job_title: "Mobile App Developer (React Native)",
    company_name: "AppVertex Technologies",
    job_description:
      "We need a skilled React Native Developer to build cross-platform mobile applications for iOS and Android. You will work with a remote team to design, develop, and maintain high-performance mobile apps with clean and efficient code.",
    required_skills: "React Native, JavaScript, REST APIs, Redux, Firebase, Git, iOS & Android",
    salary_min: 55000,
    salary_max: 95000,
    job_location: "Remote",
    created_at: new Date("2025-06-15"),
    status: true,
  },
];

// ─────────────────────────────────────────────────────────────

const job_inquiries = [
  {
    user_id: user1,
    job_id: job1,
    inquiry_message:
      "I am very interested in the Full Stack Developer role. Could you please let me know the interview process and expected joining date?",
    inquiry_status: "Responded",
    inquiry_date: new Date("2025-06-16"),
    response_message:
      "Thank you for your interest! Our interview process involves a technical round followed by an HR discussion. Expected joining is within 30 days of selection.",
    response_date: new Date("2025-06-17"),
  },
  {
    user_id: user1,
    job_id: job10,
    inquiry_message:
      "I have 3 years of React Native experience. Is this position open for candidates from Ahmedabad working remotely?",
    inquiry_status: "Pending",
    inquiry_date: new Date("2025-06-18"),
    response_message: "",
    response_date: null,
  },
  {
    user_id: user2,
    job_id: job5,
    inquiry_message:
      "I have 4 years of digital marketing experience. Can you share more details about the team size and growth opportunities?",
    inquiry_status: "Responded",
    inquiry_date: new Date("2025-06-17"),
    response_message:
      "Great to hear from you! The marketing team has 8 members. We offer strong growth opportunities including team lead roles within 12-18 months.",
    response_date: new Date("2025-06-18"),
  },
  {
    user_id: user3,
    job_id: job9,
    inquiry_message:
      "I have experience in supply chain management across FMCG. Is there flexibility for hybrid work in this role?",
    inquiry_status: "Pending",
    inquiry_date: new Date("2025-06-19"),
    response_message: "",
    response_date: null,
  },
];

// ─────────────────────────────────────────────────────────────

const general_inquiries = [
  {
    user_id: user1,
    inquiry_subject: "How to Apply for a Job",
    inquiry_message:
      "I wanted to understand the process to formally apply for a job listing. Is there a direct apply button or do I need to raise an inquiry?",
    inquiry_date: new Date("2025-06-15"),
    status: "Closed",
  },
  {
    user_id: user2,
    inquiry_subject: "Profile Visibility to Employers",
    inquiry_message:
      "Will my profile details be visible to the companies when I submit a job inquiry? I want to know how my data is used.",
    inquiry_date: new Date("2025-06-16"),
    status: "Pending",
  },
  {
    user_id: user3,
    inquiry_subject: "Job Alert Notifications",
    inquiry_message:
      "Is there a way to receive email notifications when new jobs matching my skills are posted on the platform?",
    inquiry_date: new Date("2025-06-18"),
    status: "Pending",
  },
];

// ─────────────────────────────────────────────────────────────

const feedbacks = [
  {
    user_id: user1,
    feedback_message:
      "The portal is very well designed and easy to navigate. Finding jobs by category saves a lot of time. Highly recommend it!",
    rating: 5,
    feedback_date: new Date("2025-06-20"),
  },
  {
    user_id: user2,
    feedback_message:
      "Good platform overall. The job details are comprehensive. It would be great if salary filters were more refined.",
    rating: 4,
    feedback_date: new Date("2025-06-21"),
  },
  {
    user_id: user3,
    feedback_message:
      "Decent experience. The inquiry system is smooth. Would love to see a resume upload feature in the future.",
    rating: 3,
    feedback_date: new Date("2025-06-22"),
  },
];

// ─────────────────────────────────────────────────────────────
//  SEED FUNCTION
// ─────────────────────────────────────────────────────────────

async function seedDatabase() {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db();

  console.log("✅ Connected to MongoDB Atlas");

  // Clear existing data
  await db.collection("job_categories").deleteMany({});
  await db.collection("job_types").deleteMany({});
  await db.collection("users").deleteMany({});
  await db.collection("job_listings").deleteMany({});
  await db.collection("job_inquiries").deleteMany({});
  await db.collection("general_inquiries").deleteMany({});
  await db.collection("feedbacks").deleteMany({});

  console.log("🗑️  Cleared existing collections");

  // Insert seed data
  await db.collection("job_categories").insertMany(job_categories);
  console.log(`📁 Inserted ${job_categories.length} job categories`);

  await db.collection("job_types").insertMany(job_types);
  console.log(`📁 Inserted ${job_types.length} job types`);

  await db.collection("users").insertMany(users);
  console.log(`👤 Inserted ${users.length} users`);

  await db.collection("job_listings").insertMany(job_listings);
  console.log(`💼 Inserted ${job_listings.length} job listings`);

  await db.collection("job_inquiries").insertMany(job_inquiries);
  console.log(`📩 Inserted ${job_inquiries.length} job inquiries`);

  await db.collection("general_inquiries").insertMany(general_inquiries);
  console.log(`📨 Inserted ${general_inquiries.length} general inquiries`);

  await db.collection("feedbacks").insertMany(feedbacks);
  console.log(`⭐ Inserted ${feedbacks.length} feedbacks`);

  console.log("\n🎉 Database seeded successfully!");
  console.log("─────────────────────────────────────");
  console.log("  Test User Logins:");
  console.log("  Email    : rahul.sharma@gmail.com");
  console.log("  Password : rahul1234");
  console.log("  Role     : User");
  console.log("─────────────────────────────────────");

  await client.close();
}

seedDatabase().catch((err) => {
  console.error("❌ Seeding failed: ", err);
  process.exit(1);
});
