const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const rfs = require("rotating-file-stream");

const defineLogByEnvironment = (app) => {
    if (process.env.NODE_ENV === "production") {
        const logPath = path.join(process.cwd(), "logs");

        if (!fs.existsSync(logPath)) {
            fs.mkdirSync(logPath);
        }

        const accessLogStream = rfs.createStream("access.log", {
            size: "100M",
            path: path.join(process.cwd(), "logs"),
        });
        return app.use(morgan("combined", { stream: accessLogStream }));
    } else {
        return app.use(morgan("dev"));
    }
};

module.exports = defineLogByEnvironment;
