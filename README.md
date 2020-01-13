# Saleforce SFDX command helper:

This app helps to browse and run any sfdx commands with few key entries.

### Installation:

Still in alpha. Tested only in Linux machine. Assumed you have installed salesforce_cli and SFDX already in your system.

npm i -g dxh

### Examples:

\$ dxh

\$ ? Enter Shortcut or Topic **a**

| SHORTCUT |  COMMAND   |                     DESC                     |
| :------: | :--------: | :------------------------------------------: |
|   all    | alias:list | list username aliases for the Salesforce CLI |

|als alias:set set username aliases for the Salesforce CLI
apcc apex:class:create create an Apex class  
ape apex:execute execute anonymous Apex code  
aplg apex:log:get fetch the last debug log  
apll apex:log:list list debug logs  
aplt apex:log:tail start debug logging and display logs  
aptc apex:trigger:create create an Apex trigger  
aptre apex:test:report display test results  
aptru apex:test:run invoke Apex tests  
aud auth:device:login authorize an org using a device code  
auj auth:jwt:grant authorize an org using the JWT flow  
auli auth:list list auth connection information  
aulo auth:logout log out from authorized orgs  
aus auth:sfdxurl:store authorize an org using an SFDX auth URL  
auw auth:web:login authorize an org using the web login flow  
? Enter Shortcut or Topic\* **al**
SHORTCUT COMMAND DESC  
all alias:list list username aliases for the Salesforce CLI
als alias:set set username aliases for the Salesforce CLI\_

Enter full shortcut takes to help output of that command before proceed to run the command and ask for options
