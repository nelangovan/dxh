#!/usr/bin/env node
const trieSearch = require("trie-search");
const inquirer = require("inquirer");
const columnify = require("columnify");
const shell = require("shelljs");
const { red, green, blue, bold } = require("kleur");
const ora = require("ora");
const spinner = ora();
const sfcommands = require("./conf.js");
//const fs = require("fs");
var ts = new trieSearch(["shortcut", "command"]);
ts.addAll(sfcommands.getAllCmds());

const questions = {
  type: "input",
  name: "cmd",
  message: "Enter Shortcut or Topic"
};
const copt = {
  type: "input",
  name: "options",
  message: bold().blue("Enter your options for " + this.finalcmd)
};

//let finalcmd = "sfdx force:doc:list";
function ask() {
  inquirer.prompt(questions).then(answers => {
    let out = ts.get(answers.cmd);

    console.log(columnify(out));
    if (out.length > 1) {
      ask();
    } else if (out.length == 1) {
      console.log(out[0].command);
      finalcmd = "sfdx force:" + out[0].command;
      shell.exec(finalcmd + " --help");
      inquirer
        .prompt(copt)
        .then(ans2 => {
          const finalcmdwoption = finalcmd + " " + ans2.options;
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
              // fs.writeFileSync("stout.txt", stdout);
              console.log(stdout);
            }
            if (code === 1) {
              spinner.fail();
              console.log(bold().red(finalcmdwoption + " Failed: " + stderr));
            }
          });
        })
        .catch(error => console.log(error));
    }
  });
}
ask();
