module.exports = {
  getAllCmds: function() {
    const cmdlist = [
      {
        shortcut: "all",
        command: "alias:list",
        desc: "list username aliases for the Salesforce CLI",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "als",
        command: "alias:set",
        desc: "set username aliases for the Salesforce CLI",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "apc",
        command: "apex:class:create",
        desc: "create an Apex class",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ape",
        command: "apex:execute",
        desc: "execute anonymous Apex code",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aplg",
        command: "apex:log:get",
        desc: "fetch the last debug log",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "apll",
        command: "apex:log:list",
        desc: "list debug logs",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aplt",
        command: "apex:log:tail",
        desc: "start debug logging and display logs",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aptere",
        command: "apex:test:report",
        desc: "display test results",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "apteru",
        command: "apex:test:run",
        desc: "invoke Apex tests",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aptr",
        command: "apex:trigger:create",
        desc: "create an Apex trigger",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aud",
        command: "auth:device:login",
        desc: "authorize an org using a device code",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "auj",
        command: "auth:jwt:grant",
        desc: "authorize an org using the JWT flow",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "auli",
        command: "auth:list",
        desc: "list auth connection information",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aulo",
        command: "auth:logout",
        desc: "log out from authorized orgs",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "aus",
        command: "auth:sfdxurl:store",
        desc: "authorize an org using an SFDX auth URL",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "auw",
        command: "auth:web:login",
        desc: "authorize an org using the web login flow",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "cg",
        command: "config:get",
        desc: "get config var values for given names",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "cl",
        command: "config:list",
        desc: "list config vars for the Salesforce CLI",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "cs",
        command: "config:set",
        desc: "set config vars for the Salesforce CLI",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "dabd",
        command: "data:bulk:delete",
        desc: "bulk delete records from a csv file",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "dabs",
        command: "data:bulk:status",
        desc: "view the status of a bulk data load job or batch",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "dabu",
        command: "data:bulk:upsert",
        desc: "bulk upsert records from a CSV file",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "darc",
        command: "data:record:create",
        desc: "create a record",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "dard",
        command: "data:record:delete",
        desc: "delete a record",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "darg",
        command: "data:record:get",
        desc: "view a record",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "daru",
        command: "data:record:update",
        desc: "update a record",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "das",
        command: "data:soql:query",
        desc: "execute a SOQL query",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "date",
        command: "data:tree:export",
        desc:
          "export data from an org into sObject tree format for force:data:tree:import consumption",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "dati",
        command: "data:tree:import",
        desc: "import data into an org using SObject Tree Save API",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "docd",
        command: "doc:commands:display",
        desc: "display help for force commands",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "docl",
        command: "doc:commands:list",
        desc: "list the force commands",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lga",
        command: "lightning:app:create",
        desc: "create a Lightning app",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lgc",
        command: "lightning:component:create",
        desc:
          "create a bundle for an Aura component or a Lightning web component",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lge",
        command: "lightning:event:create",
        desc: "create a Lightning event",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lgi",
        command: "lightning:interface:create",
        desc: "create a Lightning interface",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lgli",
        command: "lightning:lint",
        desc: "analyze (lint) Aura component code",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lglw",
        command: "lightning:lwc:start",
        desc:
          "Develop Lightning Web Component modules and see live changes without publishing your components to an org.",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lgtc",
        command: "lightning:test:create",
        desc: "create a Lightning test",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lgti",
        command: "lightning:test:install",
        desc: "install Lightning Testing Service unmanaged package in your org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lgtr",
        command: "lightning:test:run",
        desc: "invoke Aura component tests",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "lm",
        command: "limits:api:display",
        desc: "display current org’s limits",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mc",
        command: "mdapi:convert",
        desc:
          "convert metadata from the Metadata API format into the source format",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mdp$",
        command: "mdapi:deploy",
        desc: "deploy metadata to an org using Metadata API",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mdpc",
        command: "mdapi:deploy:cancel",
        desc: "cancel a metadata deployment",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mdpr",
        command: "mdapi:deploy:report",
        desc: "check the status of a metadata deployment",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mds",
        command: "mdapi:describemetadata",
        desc: "display the metadata types enabled for your org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ml",
        command: "mdapi:listmetadata",
        desc: "display properties of metadata components of a specified type",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mr$",
        command: "mdapi:retrieve",
        desc: "retrieve metadata from an org using Metadata API",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "mrr",
        command: "mdapi:retrieve:report",
        desc: "check the status of a metadata retrieval",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ocl",
        command: "org:clone",
        desc: "clone a sandbox org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ocr",
        command: "org:create",
        desc: "create a scratch or sandbox org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ode",
        command: "org:delete",
        desc: "mark a scratch or sandbox org for deletion",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "odi",
        command: "org:display",
        desc: "get org description",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ol",
        command: "org:list",
        desc: "list all orgs you’ve created or authenticated to",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "oo",
        command: "org:open",
        desc: "open an org in your browser",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "oshc",
        command: "org:shape:create",
        desc: "create a snapshot of org edition",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "oshd",
        command: "org:shape:delete",
        desc: "delete all org shapes for a target org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "oshl",
        command: "org:shape:list",
        desc: "list all org shapes you’ve created",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "osnc",
        command: "org:snapshot:create",
        desc: "snapshot a scratch org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "osnd",
        command: "org:snapshot:delete",
        desc: "delete a scratch org snapshot",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "osng",
        command: "org:snapshot:get",
        desc: "get details about a scratch org snapshot",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "osnl",
        command: "org:snapshot:list",
        desc: "list scratch org snapshots",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ost",
        command: "org:status",
        desc: "report sandbox org creation status and authenticate to org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$c",
        command: "package:create",
        desc: "create a package",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$hl",
        command: "package:hammertest:list",
        desc: "list the statuses of running and completed ISV Hammer tests",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$hre",
        command: "package:hammertest:report",
        desc: "display the status or results of a ISV Hammer test",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$hru",
        command: "package:hammertest:run",
        desc: "run ISV Hammer",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$i$",
        command: "package:install",
        desc: "install a package in the target org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$ir",
        command: "package:install:report",
        desc: "retrieve the status of a package installation request",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$ie",
        command: "package:installed:list",
        desc: "list the org’s installed packages",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$l",
        command: "package:list",
        desc: "list all packages in the Dev Hub org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$un$",
        command: "package:uninstall",
        desc: "uninstall a second-generation package from the target org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$unr",
        command: "package:uninstall:report",
        desc: "retrieve status of package uninstall request",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$up",
        command: "package:update",
        desc: "update package details",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vc$",
        command: "package:version:create",
        desc: "create a package version",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vcl",
        command: "package:version:create:list",
        desc: "list package version creation requests",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vcr",
        command: "package:version:create:report",
        desc: "retrieve details about a package version creation request",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vl",
        command: "package:version:list",
        desc: "list all package versions in the Dev Hub org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vp",
        command: "package:version:promote",
        desc: "promote a package version to released",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vr",
        command: "package:version:report",
        desc: "retrieve details about a package version in the Dev Hub org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p$vu",
        command: "package:version:update",
        desc: "update a package version",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p1vc$",
        command: "package1:version:create",
        desc: "create a first-generation package version in the release org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p1vcg",
        command: "package1:version:create:get",
        desc: "retrieve the status of a package version creation request",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p1vd",
        command: "package1:version:display",
        desc: "display details about a first-generation package version",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "p1vl",
        command: "package1:version:list",
        desc:
          "list package versions for the specified first-generation package or for the org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "prc",
        command: "project:create",
        desc: "create a Salesforce DX project",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "pru",
        command: "project:upgrade",
        desc: "update project config files to the latest format",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "scsd",
        command: "schema:sobject:describe",
        desc: "describe an object",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "scsl",
        command: "schema:sobject:list",
        desc: "list all objects of a specified category",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "soc",
        command: "source:convert",
        desc: "convert source into Metadata API format",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sodl",
        command: "source:delete",
        desc:
          "delete source from your project and from a non-source-tracked org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sodp$",
        command: "source:deploy",
        desc: "deploy source to an org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sodpc",
        command: "source:deploy:cancel",
        desc: "cancel a source deployment",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sodpr",
        command: "source:deploy:report",
        desc: "check the status of a metadata deployment",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "soo",
        command: "source:open",
        desc: "edit a Lightning Page with Lightning App Builder",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sopl",
        command: "source:pull",
        desc: "pull source from the scratch org to the project",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sops",
        command: "source:push",
        desc: "push source to a scratch org from the project",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sor",
        command: "source:retrieve",
        desc: "retrieve source from an org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "sos",
        command: "source:status",
        desc: "list local changes and/or changes in a scratch org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "uc",
        command: "user:create",
        desc: "create a user for a scratch org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ud",
        command: "user:display",
        desc: "displays information about a user of a scratch org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "ul",
        command: "user:list",
        desc: "lists all users of a scratch org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "upa",
        command: "user:password:generate",
        desc: "generate a password for scratch org users",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "upe",
        command: "user:permset:assign",
        desc: "assign a permission set to one or more users of an org",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "vc",
        command: "visualforce:component:create",
        desc: "create a Visualforce component",
        workspace: "force",
        executor: "sfdx"
      },
      {
        shortcut: "vp",
        command: "visualforce:page:create",
        desc: "create a Visualforce page",
        workspace: "force",
        executor: "sfdx"
      }
    ];
    return cmdlist;
  }
};
