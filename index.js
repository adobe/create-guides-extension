#!/usr/bin/env node
/*
Copyright 2018 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/
const { exec } = require("child_process");
const { Command } = require("commander");

function guidesExtention() {
  const program = new Command();

  program
    .version("1.0.0")
    .option("-n, --name <name>", "Name of plugin")
    .option("-pm, --pkg <pkg>", "Package manager to be used")
    .parse(process.argv);

  const name = program.opts().name || "guides-extension";
  const pkg = program.opts().pkg || "npm";

  const repoUrl = "https://github.com/adobe/guides-extention";

  exec(`git clone ${repoUrl} ${name}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error cloning repository: ${error.message}`);
      return;
    }
    console.log(`Template cloned to ${name}`);
    exec(`cd ${name} && ${pkg} i`, (error) => {
      if (error) {
        console.log(`Error installing packages: ${error}`);
        return;
      }
      console.log(
        `Packages installed. Take a look at the Readme for furthur instrcutions.\n Run npm build to generate editor extension override file`
      );
    });
  });
}

guidesExtention()
module.exports = guidesExtention;
