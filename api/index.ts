/**
 * Main Application File
 */
"use strict"

/**
 * Module dependencies.
 */
import express from "express"
import router from "./routes/v1"
import configure from "./lib/configure"
import header from "./lib/header"
// import config from "./config"
// const dd_options = {
//   'response_code': true,
//   'tags': [process.env.DD_SERVICE],
//   base_url: process.env.DD_TRACE_AGENT_URL
// }
// const connect_datadog = require('connect-datadog')(dd_options)
// import newrelic from "newrelic"

const app = express()

/**
 * Configure Express Server.
 */
configure(app)

/**
 * header dependencies.
 */
header(app)

// app.use(connect_datadog)

// app.all("/*", function (req, res, next) {
//   newrelic.setTransactionName(req.originalUrl.slice(1))
//   next() // pass control to the next handler
// })

/**
 * API Routing.
 */
app.use("/v1", router)

/**
 * Test API.
 */
app.get("/header", (req, res) => {
  res.json({
    username: "test successful!"
  })
})

/**
 * Start Server.
 */
// export const path = '/api'
// export const handler = app
module.exports = {
  path: "/api",
  handler: app
}
