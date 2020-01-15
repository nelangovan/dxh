# Saleforce SFDX command helper:

This app helps to browse and run any sfdx commands with few key entries.

### Installation:

Still in alpha. Tested only in Linux machine. Assumed you have installed salesforce_cli and SFDX already in your system.

npm i -g dxh

### Examples:

\$ dxh

\$ ? Enter Shortcut or Topic **u**

| SHORTCUT |        COMMAND         |                          DESC                          |
| :------: | :--------------------: | :----------------------------------------------------: |
|    uc    |      user:create       |            create a user for a scratch org             |
|    ud    |      user:display      |   displays information about a user of a scratch org   |
|    ul    |       user:list        |            lists all users of a scratch org            |
|   upa    |  user:permset:assign   | assign a permission set to one or more users of an org |
|   upg    | user:password:generate |       generate a password for scratch org users        |

? Enter Shortcut or Topic **ul**
SHORTCUT COMMAND DESC  
ul user:list lists all users of a scratch org
user:list
lists all users of a scratch org

USAGE
\$ sfdx force:user:list [-v <string>][-u <string>] [--apiversion <string>][--json] [--loglevel
trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
-u, --targetusername=targetusername
username or alias for the target org; overrides default target org

-v, --targetdevhubusername=targetdevhubusername
username or alias for the dev hub org; overrides default dev hub org

--apiversion=apiversion
override the api version used for api requests made by this command

--json
format output as json

--loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATA
L)
[default: warn] logging level for this command invocation

DESCRIPTION
The original scratch org admin is marked with "(A)"
Examples:
$ sfdx force:user:list
      $ sfdx force:user:list -u me@my.org --json
\$ sfdx force:user:list --json > tmp/MyUserList.json

? Enter your options for sfdx force:user:list

---

Enter full shortcut takes to help output of that command before proceed to run the command and ask for options
