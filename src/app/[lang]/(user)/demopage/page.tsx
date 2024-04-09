import InforBox from "@/components/common/InforBoxDemo";
import React from "react";
import schema from "./demopage.schema";

export default function DemoPage() {
  return (
    <center>
      <h4>THIS IS DEMO PAGE</h4>
      <div>
        demo api call: 
        <InforBox schema={schema}>

        </InforBox>
      </div>
    </center>
  );
}
