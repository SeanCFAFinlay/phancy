import cron from "node-cron";
import { exec } from "child_process";

console.log("Automation Engine Running");

cron.schedule("0 3 * * 1", ()=>{

 console.log("Running weekly automation");

 exec("node automation/engines/amazon-harvester.js");
 exec("node automation/engines/review-generator.js");
 exec("node automation/engines/seo-page-generator.js");
 exec("node automation/engines/trending-engine.js");

});
