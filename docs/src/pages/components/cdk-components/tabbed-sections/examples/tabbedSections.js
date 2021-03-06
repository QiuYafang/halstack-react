import { DxcTabsForSections } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
      <DxcTabsForSections
        sections={[
          {
            tabLabel: "S1",
            section: () => ( <div style={{height:"200px"}}> Section 1 </div> )
          },
          {
            tabLabel: "S2",
            section: () => ( <div style={{height:"200px"}}> Section 2 </div> )
          },
          {
            tabLabel: "S3",
            section: () => ( <div style={{height:"200px"}}> Section 3 </div> )
          },
        ]}
      ></DxcTabsForSections>
  );
}`;

const scope = {
  DxcTabsForSections
};

export default { code, scope };
