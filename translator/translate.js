
const express = require("express");
const TextTranslationClient = require("@azure-rest/ai-translation-text").default
require('dotenv').config();
const cors = require('cors');




const app = express();
const port = 3002;

const apiKey = "";
const endpoint = "https://api.cognitive.microsofttranslator.com/";
const region = "centralindia";

app.use(cors());
const translateCredential = {
  key: process.env.API_KEY,
  region,
};
const translationClient = new TextTranslationClient(endpoint, translateCredential);

app.use(express.json());

app.post("/translate", async (req, res) => {
  try {
    const inputText = [{ text: req.body.text }];
    const translateResponse = await translationClient.path("/translate").post({
      body: inputText,
      queryParameters: {
        to: "kn",
        from: "en",
      },
    });

    const translations = translateResponse.body;
    const translatedText = translations[0]?.translations[0]?.text;

    res.json({ translatedText });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "An error occurred while translating the text." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
