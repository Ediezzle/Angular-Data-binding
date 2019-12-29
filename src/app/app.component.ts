import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      name: "Testserver",
      content: "just a test"
    },
    {
      type: "bluePrint",
      name: "TestBluePrintserver",
      content: "just a blueprint test"
    }
  ];

  //serverData of type object with properties serverName and serverContent
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "bluePrint",
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
    console.log("onDestroyFirst");
  }
}
