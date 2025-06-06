const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  const query = req.body.queryResult.queryText || "No input";
  const responseText = `You said: ${query}`;
  
  res.json({
    fulfillmentText: responseText
  });
});

app.get("/", (req, res) => {
  res.send("Webhook is live!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
