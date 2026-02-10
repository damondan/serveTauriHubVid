import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve videos folder
app.use("/videos/videos/BlurTauriHubForPort2.mp4", express.static(path.join(process.cwd(), "videos")));

app.get("/", (req, res) => {
  res.send("Video server running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

