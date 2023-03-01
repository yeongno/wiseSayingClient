// netlify/functions/qotd.js

const { default: quotesInstance } = require("../quotesInstance");

exports.handler = async (event, context) => {
  const apiUrl = "https://favqs.com/api/qotd";
  const response = await quotesInstance.get(apiUrl);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(response.data),
  };
};
