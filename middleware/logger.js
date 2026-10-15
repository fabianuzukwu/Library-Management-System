const { savelogsToDB } = require("../controller/book");

const logger = async (req, res, next) => {
    const date = new Date();
    const convertedDate = date.toLocaleString();
    const data = `\nAPI with endpoint: "${req.url}" and method: "${req.method}" was called at: ${convertedDate}`;

     await savelogsToDB(data);
   console.log(data);
    next();
};

module.exports = logger;