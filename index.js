#!/usr/bin/env node
const trieSearch = require("trie-search");
const inquirer = require("inquirer");
const columnify = require("columnify");
const shell = require("shelljs");
const { red, green, blue, cyan, bold } = require("kleur");
const ora = require("ora");
const spinner = ora();
const sfcommands = require("./conf.js");
const ts = new trieSearch(["shortcut", "command"]);
ts.addAll(sfcommands.getAllCmds());
let loopMode = false;
const commander = require("commander");
const program = new commander.Command();
program
  .version("1.1.0")
  .description("sfdx command helper")
  .option("-l, --loop", "Enable loop mode")
  .usage("[options] [shortcuts or topics]")
  .parse(process.argv);
let inputargs = program.args;
if (program.loop) {
  console.log(bold().blue("------Loop mode enabled---------"));
  loopMode = true;
}
const collectInputs = async () => {
  const prompts = {
    type: "input",
    name: "cmd",
    message: bold().blue("Enter Shortcut or Topic: ")
  };
  const answer = await inquirer.prompt(prompts);
  return answer.cmd;
};
const collectOptions = async finalcmd => {
  const prompts = {
    type: "input",
    name: "options",
    message: bold().blue("Enter your options for ") + bold().green(finalcmd)
  };
  const answer = await inquirer.prompt(prompts);
  return answer.options;
};
const getCmdsList = key => {
  const cmdsList = ts.get(key);
  return cmdsList;
};
const init = inputargs => {
  inputargs.forEach(element => {
    console.log(columnify(getCmdsList(element)));
  });
};
const runCmd = async finalcmdwoption => {
  spinner.text = "Running : " + bold().cyan(finalcmdwoption) + "\n";
  spinner.start();
  shell.exec(finalcmdwoption, { silent: true, async: true }, function(
    code,
    stdout,
    stderr
  ) {
    if (code === 0) {
      spinner.succeed(
        bold().green(
          "Done : " + finalcmdwoption + " was completed successfully"
        )
      );
      console.log(stdout);
    }
    if (code === 1) {
      spinner.fail();
      console.log(bold().red(finalcmdwoption + " Failed: " + stderr));
    }
    if (loopMode) {
      main();
    }
  });
};
const main = async () => {
  const inputs = await collectInputs();
  if (inputs === "quit" || inputs === "q") {
    return console.log(bold().red("------Quitting------------"));
  }
  const cmds = getCmdsList(inputs);
  if (cmds.length > 1) {
    console.log(columnify(cmds));
    main();
  } else if (cmds.length == 1) {
    const finalcmd = "sfdx force:" + cmds[0].command;
    shell.exec(finalcmd + " --help");
    const options = await collectOptions(finalcmd);
    const finalcmdwoption = finalcmd + " " + options;
    await runCmd(finalcmdwoption);
  } else {
    console.log("Not valid key. Enter valid key OR");
    console.log(" To quit enter 'quit'");
    if (loopMode) {
      main();
    }
  }
};
init(inputargs);
main();
