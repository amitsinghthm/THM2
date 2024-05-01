import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "/client/dist")));

app.post("/send-email", (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;
  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: "Contact Form Submission",
    text: `You have received a message from:
           Name: ${firstname} ${lastname}
           Email: ${email}
           Phone: ${phone}
           Message: ${message}`,
    replyTo: email,
  };
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Failed to send email:", error);
      return res.status(500).send("Error sending email: " + error.message);
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully to " + mailOptions.to);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
