module.exports = {
  getAllCmds: function() {
    const cmdlist = [
      {
        shortcut: "all",
        command: "alias:list",
        desc: "list username aliases for the Salesforce CLI"
      },
      {
        shortcut: "als",
        command: "alias:set",
        desc: "set username aliases for the Salesforce CLI"
      },
      {
        shortcut: "apcc",
        command: "apex:class:create",
        desc: "create an Apex class"
      },
      {
        shortcut: "ape",
        command: "apex:execute",
        desc: "execute anonymous Apex code"
      },
      {
        shortcut: "aplg",
        command: "apex:log:get",
        desc: "fetch the last debug log"
      },
      { shortcut: "apll", command: "apex:log:list", desc: "list debug logs" },
      {
        shortcut: "aplt",
        command: "apex:log:tail",
        desc: "start debug logging and display logs"
      },
      {
        shortcut: "aptc",
        command: "apex:trigger:create",
        desc: "create an Apex trigger"
      },
      {
        shortcut: "aptre",
        command: "apex:test:report",
        desc: "display test results"
      },
      {
        shortcut: "aptru",
        command: "apex:test:run",
        desc: "invoke Apex tests"
      },
      {
        shortcut: "aud",
        command: "auth:device:login",
        desc: "authorize an org using a device code"
      },
      {
        shortcut: "auj",
        command: "auth:jwt:grant",
        desc: "authorize an org using the JWT flow"
      },
      {
        shortcut: "auli",
        command: "auth:list",
        desc: "list auth connection information"
      },
      {
        shortcut: "aulo",
        command: "auth:logout",
        desc: "log out from authorized orgs"
      },
      {
        shortcut: "aus",
        command: "auth:sfdxurl:store",
        desc: "authorize an org using an SFDX auth URL"
      },
      {
        shortcut: "auw",
        command: "auth:web:login",
        desc: "authorize an org using the web login flow"
      },
      {
        shortcut: "cg",
        command: "config:get",
        desc: "get config var values for given names"
      },
      {
        shortcut: "cl",
        command: "config:list",
        desc: "list config vars for the Salesforce CLI"
      },
      {
        shortcut: "cs",
        command: "config:set",
        desc: "set config vars for the Salesforce CLI"
      },
      {
        shortcut: "dabd",
        command: "data:bulk:delete",
        desc: "bulk delete records from a csv file"
      },
      {
        shortcut: "dabs",
        command: "data:bulk:status",
        desc: "view the status of a bulk data load job or batch"
      },
      {
        shortcut: "dabu",
        command: "data:bulk:upsert",
        desc: "bulk upsert records from a CSV file"
      },
      {
        shortcut: "darc",
        command: "data:record:create",
        desc: "create a record"
      },
      {
        shortcut: "dard",
        command: "data:record:delete",
        desc: "delete a record"
      },
      { shortcut: "darg", command: "data:record:get", desc: "view a record" },
      {
        shortcut: "daru",
        command: "data:record:update",
        desc: "update a record"
      },
      {
        shortcut: "dasq",
        command: "data:soql:query",
        desc: "execute a SOQL query"
      },
      {
        shortcut: "date",
        command: "data:tree:export",
        desc:
          "export data from an org into sObject tree format for force:data:tree:import consumption"
      },
      {
        shortcut: "dati",
        command: "data:tree:import",
        desc: "import data into an org using SObject Tree Save API"
      },
      {
        shortcut: "docd",
        command: "doc:commands:display",
        desc: "display help for force commands"
      },
      {
        shortcut: "docl",
        command: "doc:commands:list",
        desc: "list the force commands"
      },
      {
        shortcut: "lgac",
        command: "lightning:app:create",
        desc: "create a Lightning app"
      },
      {
        shortcut: "lgcc",
        command: "lightning:component:create",
        desc:
          "create a bundle for an Aura component or a Lightning web component"
      },
      {
        shortcut: "lgec",
        command: "lightning:event:create",
        desc: "create a Lightning event"
      },
      {
        shortcut: "lgic",
        command: "lightning:interface:create",
        desc: "create a Lightning interface"
      },
      {
        shortcut: "lgl",
        command: "lightning:lint",
        desc: "analyze (lint) Aura component code"
      },
      {
        shortcut: "lgls",
        command: "lightning:lwc:start",
        desc:
          "Develop Lightning Web Component modules and see live changes without publishing your components to an org."
      },
      {
        shortcut: "lgtc",
        command: "lightning:test:create",
        desc: "create a Lightning test"
      },
      {
        shortcut: "lgti",
        command: "lightning:test:install",
        desc: "install Lightning Testing Service unmanaged package in your org"
      },
      {
        shortcut: "lgtr",
        command: "lightning:test:run",
        desc: "invoke Aura component tests"
      },
      {
        shortcut: "lmad",
        command: "limits:api:display",
        desc: "display current org’s limits"
      },
      {
        shortcut: "mc",
        command: "mdapi:convert",
        desc:
          "convert metadata from the Metadata API format into the source format"
      },
      {
        shortcut: "md",
        command: "mdapi:deploy",
        desc: "deploy metadata to an org using Metadata API"
      },
      {
        shortcut: "mdc",
        command: "mdapi:deploy:cancel",
        desc: "cancel a metadata deployment"
      },
      {
        shortcut: "mdm",
        command: "mdapi:describemetadata",
        desc: "display the metadata types enabled for your org"
      },
      {
        shortcut: "mdr",
        command: "mdapi:deploy:report",
        desc: "check the status of a metadata deployment"
      },
      {
        shortcut: "ml",
        command: "mdapi:listmetadata",
        desc: "display properties of metadata components of a specified type"
      },
      {
        shortcut: "mr",
        command: "mdapi:retrieve",
        desc: "retrieve metadata from an org using Metadata API"
      },
      {
        shortcut: "mrr",
        command: "mdapi:retrieve:report",
        desc: "check the status of a metadata retrieval"
      },
      { shortcut: "ocl", command: "org:clone", desc: "clone a sandbox org" },
      {
        shortcut: "ocr",
        command: "org:create",
        desc: "create a scratch or sandbox org"
      },
      {
        shortcut: "ode",
        command: "org:delete",
        desc: "mark a scratch or sandbox org for deletion"
      },
      { shortcut: "odi", command: "org:display", desc: "get org description" },
      {
        shortcut: "ol",
        command: "org:list",
        desc: "list all orgs you’ve created or authenticated to"
      },
      {
        shortcut: "oo",
        command: "org:open",
        desc: "open an org in your browser"
      },
      {
        shortcut: "oshc",
        command: "org:shape:create",
        desc: "create a snapshot of org edition"
      },
      {
        shortcut: "oshd",
        command: "org:shape:delete",
        desc: "delete all org shapes for a target org"
      },
      {
        shortcut: "oshl",
        command: "org:shape:list",
        desc: "list all org shapes you’ve created"
      },
      {
        shortcut: "osnc",
        command: "org:snapshot:create",
        desc: "snapshot a scratch org"
      },
      {
        shortcut: "osnd",
        command: "org:snapshot:delete",
        desc: "delete a scratch org snapshot"
      },
      {
        shortcut: "osng",
        command: "org:snapshot:get",
        desc: "get details about a scratch org snapshot"
      },
      {
        shortcut: "osnl",
        command: "org:snapshot:list",
        desc: "list scratch org snapshots"
      },
      {
        shortcut: "ost",
        command: "org:status",
        desc: "report sandbox org creation status and authenticate to org"
      },
      {
        shortcut: "p1vc",
        command: "package1:version:create",
        desc: "create a first-generation package version in the release org"
      },
      {
        shortcut: "p1vcg",
        command: "package1:version:create:get",
        desc: "retrieve the status of a package version creation request"
      },
      {
        shortcut: "p1vd",
        command: "package1:version:display",
        desc: "display details about a first-generation package version"
      },
      {
        shortcut: "p1vl",
        command: "package1:version:list",
        desc:
          "list package versions for the specified first-generation package or for the org"
      },
      { shortcut: "pac", command: "package:create", desc: "create a package" },
      {
        shortcut: "pahl",
        command: "package:hammertest:list",
        desc: "list the statuses of running and completed ISV Hammer tests"
      },
      {
        shortcut: "pahre",
        command: "package:hammertest:report",
        desc: "display the status or results of a ISV Hammer test"
      },
      {
        shortcut: "pahru",
        command: "package:hammertest:run",
        desc: "run ISV Hammer"
      },
      {
        shortcut: "pai",
        command: "package:install",
        desc: "install a package in the target org"
      },
      {
        shortcut: "pail",
        command: "package:installed:list",
        desc: "list the org’s installed packages"
      },
      {
        shortcut: "pair",
        command: "package:install:report",
        desc: "retrieve the status of a package installation request"
      },
      {
        shortcut: "pal",
        command: "package:list",
        desc: "list all packages in the Dev Hub org"
      },
      {
        shortcut: "pau",
        command: "package:uninstall",
        desc: "uninstall a second-generation package from the target org"
      },
      {
        shortcut: "paup",
        command: "package:update",
        desc: "update package details"
      },
      {
        shortcut: "paur",
        command: "package:uninstall:report",
        desc: "retrieve status of package uninstall request"
      },
      {
        shortcut: "pavc",
        command: "package:version:create",
        desc: "create a package version"
      },
      {
        shortcut: "pavcl",
        command: "package:version:create:list",
        desc: "list package version creation requests"
      },
      {
        shortcut: "pavcr",
        command: "package:version:create:report",
        desc: "retrieve details about a package version creation request"
      },
      {
        shortcut: "pavl",
        command: "package:version:list",
        desc: "list all package versions in the Dev Hub org"
      },
      {
        shortcut: "pavp",
        command: "package:version:promote",
        desc: "promote a package version to released"
      },
      {
        shortcut: "pavr",
        command: "package:version:report",
        desc: "retrieve details about a package version in the Dev Hub org"
      },
      {
        shortcut: "pavu",
        command: "package:version:update",
        desc: "update a package version"
      },
      {
        shortcut: "prc",
        command: "project:create",
        desc: "create a Salesforce DX project"
      },
      {
        shortcut: "pru",
        command: "project:upgrade",
        desc: "update project config files to the latest format"
      },
      {
        shortcut: "scsd",
        command: "schema:sobject:describe",
        desc: "describe an object"
      },
      {
        shortcut: "scsl",
        command: "schema:sobject:list",
        desc: "list all objects of a specified category"
      },
      {
        shortcut: "soc",
        command: "source:convert",
        desc: "convert source into Metadata API format"
      },
      {
        shortcut: "sodl",
        command: "source:delete",
        desc:
          "delete source from your project and from a non-source-tracked org"
      },
      {
        shortcut: "sodp",
        command: "source:deploy",
        desc: "deploy source to an org"
      },
      {
        shortcut: "sodpc",
        command: "source:deploy:cancel",
        desc: "cancel a source deployment"
      },
      {
        shortcut: "sodpr",
        command: "source:deploy:report",
        desc: "check the status of a metadata deployment"
      },
      {
        shortcut: "soo",
        command: "source:open",
        desc: "edit a Lightning Page with Lightning App Builder"
      },
      {
        shortcut: "sopl",
        command: "source:pull",
        desc: "pull source from the scratch org to the project"
      },
      {
        shortcut: "sopu",
        command: "source:push",
        desc: "push source to a scratch org from the project"
      },
      {
        shortcut: "sor",
        command: "source:retrieve",
        desc: "retrieve source from an org"
      },
      {
        shortcut: "sost",
        command: "source:status",
        desc: "list local changes and/or changes in a scratch org"
      },
      {
        shortcut: "uc",
        command: "user:create",
        desc: "create a user for a scratch org"
      },
      {
        shortcut: "ud",
        command: "user:display",
        desc: "displays information about a user of a scratch org"
      },
      {
        shortcut: "ul",
        command: "user:list",
        desc: "lists all users of a scratch org"
      },
      {
        shortcut: "upa",
        command: "user:permset:assign",
        desc: "assign a permission set to one or more users of an org"
      },
      {
        shortcut: "upg",
        command: "user:password:generate",
        desc: "generate a password for scratch org users"
      },
      {
        shortcut: "vcc",
        command: "visualforce:component:create",
        desc: "create a Visualforce component"
      },
      {
        shortcut: "vpc",
        command: "visualforce:page:create",
        desc: "create a Visualforce page"
      }
    ];
    return cmdlist;
  }
};
