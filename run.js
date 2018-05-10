const execa = require('execa');
const fs = require('fs');
const chalk = require('chalk');

async function run() {
  const DLLExists = fs.existsSync('./dll/vendor-manifest.json');

  if (!DLLExists) {
    console.group('dll');
    console.log(chalk.red(`dll's vendor-manifest.json not exist!`));
    console.log(chalk.blue(`building vendor-manifest.json`));
    await execa('npm', ['run', 'dll'], { stdio: 'inherit' }).catch(err => {
      console.group('dll err');
      console.log(`something wrong during building dll`);
      console.log(chalk.red(err));
      console.groupEnd('dll err');
      console.groupEnd('dll');
      throw err;
    });
    console.log(chalk.green(`vendor-manifest.json build finished!`));
    console.groupEnd('dll');
  }

  console.log(chalk.blue(`dev start!`));

  await execa('npm', ['run', 'devserver'], { stdio: 'inherit' }).catch(err => {
    console.log(chalk.red(err));
  });
}

run().catch(err => {
  console.log('');
  console.log(`there's a error happened during run`);
  console.group('dll err');
});
