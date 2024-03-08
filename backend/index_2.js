import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"; 
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://tomerza2:393624422Tz@blogtest.bq06yi6.mongodb.net/?retryWrites=true&w=majority&appName=BlogTest",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

