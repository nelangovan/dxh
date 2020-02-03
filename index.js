#!/usr/bin/env node
const trieSearch = require("trie-search");
const inquirer = require("inquirer");
const columnify = require("columnify");
const shell = require("shelljs");
const { red, green, blue, cyan, bold } = require("kleur");
const spinner = require("ora")();
const sfcommands = require("./conf.js");
const ts = new trieSearch(["shortcut", "command", "executor", "workspace"]);
ts.addAll(sfcommands.getAllCmds());
let loopMode = false;
const commander = require("commander");
const program = new commander.Command();
program
  .version("1.1.3")
  .description("sfdx command helper")
  .option("-l, --loop", "Enable loop mode")
  .usage("[options] [shortcuts or topics]")
  .parse(process.argv);
let inputargs = program.args;
if (program.loop) {
  console.log("------Loop mode enabled---------");
  loopMode = true;
}
const collectInputs = async () => {
  const prompts = {
    type: "input",
    name: "cmd",
    message: green("Enter Shortcut or Topic: ")
  };
  const answer = await inquirer.prompt(prompts);
  return answer.cmd;
};
const collectOptions = async finalcmd => {
  const prompts = {
    type: "input",
    name: "options",
    message: blue("Enter your options for ") + bold().green(finalcmd)
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
    console.log(
      columnify(getCmdsList(element), {
        columns: ["shortcut", "command", "desc"]
      })
    );
  });
};
const runCmd = async (finalcmdwoption, inputs) => {
  spinner.text = "Running : " + cyan(finalcmdwoption) + "\n";
  spinner.start();
  shell.exec(
    finalcmdwoption,
    { silent: false, async: true },
    (code, stdout, stderr) => {
      if (code === 0) {
        spinner.succeed(
          green(`Done :  ${finalcmdwoption} was completed successfully`)
        );
        // console.log(stdout);
      }
      if (code === 1) {
        spinner.fail(
          red(`${finalcmdwoption}   
        Failed: ${stderr}
        Shortcut used was: ${inputs}`)
        );
      }
      if (loopMode) {
        main();
      }
    }
  );
};
const main = async () => {
  const inputs = await collectInputs();
  if (inputs === "quit" || inputs === "q") {
    return console.log(green("------Quitting - Done ---------"));
  }
  const cmds = getCmdsList(inputs);
  if (cmds.length > 1) {
    console.log(columnify(cmds, { columns: ["shortcut", "command", "desc"] }));
    main();
  } else if (cmds.length == 1) {
    const { shortcut, command, desc, workspace, executor } = cmds[0];
    const finalcmd =
      executor === "sfdx"
        ? `${executor} ${workspace}:${command}`
        : `${executor} ${command}`;
    shell.exec(finalcmd + " --help");
    const options = await collectOptions(finalcmd);
    const finalcmdwoption = finalcmd + " " + options;
    await runCmd(finalcmdwoption, inputs);
  } else {
    if (loopMode) {
      console.log(
        red("Not valid key. Enter valid key OR To quit enter 'quit'")
      );

      main();
    }
  }
};
init(inputargs);
main();
