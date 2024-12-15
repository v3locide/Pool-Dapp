import { exec } from 'child_process';

// Run the TypeScript compiler (tsc)
exec('tsc', (error, stdout, stderr) => {
  if (error) {
    // If there's an error, print the error message and exit
    console.error(`❌ Compilation failed: \n${stderr}`);
    process.exit(1); // Exit with a non-zero status code to indicate failure
  } else {
    // If compilation is successful, print the success message
    console.log('✅ Compilation Successful!');
    console.log(stdout); // Optionally print the stdout of tsc
  }
});
