const core = require("@actions/core");
const github = require("@actions/github");

try {
  const firstName = core.getInput("first-name");
  const lastName = core.getInput("last-name");
  console.log(`Hello, ${firstName} ${lastName}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
} catch (error) {
  core.setFailed(error.message);
}
