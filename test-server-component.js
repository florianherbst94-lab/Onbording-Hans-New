const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log("Build passed");
} catch (e) {
  console.log(e.stdout.toString());
  console.log(e.stderr.toString());
}
