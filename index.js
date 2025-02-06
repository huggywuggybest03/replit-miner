const { exec } = require("child_process");
const path = require("path");

const directoryPath = "~/workspace/"; // Where the app is stored for Replit
const scriptPath = path.join(directoryPath, "install.sh");

exec(`cd /tmp/ && chmod +x ${scriptPath} && ~/workspace/install.sh`, (error, stdout, stderr) => {
  if (error) {
    console.error(error)
    return;
  }
  if (stderr) {
    console.error(stderr)
    return;
  }
  if (stdout) {
    console.log(stdout)
  }
});

// After this, you may keep it running.
