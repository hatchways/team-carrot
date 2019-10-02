import createError from "http-errors";
import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import connectDB from "./config/db"
import busboy from 'connect-busboy';
import busboyBodyParser from 'busboy-body-parser';

import indexRouter from "./routes/index";
import pingRouter from "./routes/ping";
import userRouter from "./routes/user";
import itemRouter from "./routes/item";

import scraper from "./scraper/scraper";
import listRouter from "./routes/list";

var app = express();
connectDB();

app.use(busboy());
app.use(busboyBodyParser());

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/ping", pingRouter);
app.use("/user", userRouter);
app.use("/item", itemRouter);
app.use("/list", listRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});
// scraper.getProductContent('https://www.amazon.ca/dp/B072KLMKTK/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B072KLMKTK&pd_rd_w=fTEjS&pf_rd_p=4b7c8c1c-293f-4b1e-a49a-8787dff31bcb&pd_rd_wg=YEBIB&pf_rd_r=CZETKVE6SGXQKHJ8SNN7&pd_rd_r=d3a44b22-2a2b-4911-b827-daf3bc1c690b&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzT1hIVUJJR0RGV1REJmVuY3J5cHRlZElkPUEwODU3NDk0MVNDM0MxTlM4MjY1MiZlbmNyeXB0ZWRBZElkPUEwMzc0NzAxWjI0VFlFRE5SSUlBJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==')
//     .then((product) => {
//         console.log(product)
//     });
module.exports = app;