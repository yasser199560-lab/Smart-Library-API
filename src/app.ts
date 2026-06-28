import express from "express";

import borrowRoutes from "./routes/borrow.routes";
import bookRoutes from "./routes/book.routes";
import authorRoutes from "./routes/author.routes";
import memberRoutes from "./routes/member.routes";
import publisherRoutes from "./routes/publisher.routes";
import courseRoutes from "./routes/course.routes";
import enrollmentRoutes from "./routes/enrol.routes";
import membershipCardRoutes from "./routes/card.routes";

import errorHandler from "./middlewares/error.middleware";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/borrows", borrowRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/publishers", publisherRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/membership-cards", membershipCardRoutes);

// Error handler (MUST be last)
app.use(errorHandler);

export default app;