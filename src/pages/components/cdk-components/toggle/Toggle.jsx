import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";

import TogglePropsTable from "./api.jsx";

import defaultToggle from "././examples/default";
import disabledToggle from "././examples/disableToggle";
import toggleWithIcons from "././examples/toggleWithIcons";
import toggleDarkTheme from "././examples/toggleDarkTheme";

function Dropdown() {
  return (
    <ComponentDoc>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <TogglePropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Elements</DocTitle>
                <Example
                  title="Default toggle"
                  example={defaultToggle}
                ></Example>
                <Example
                  title="Disabled toggle"
                  example={disabledToggle}
                ></Example>
                <Example
                  title="Toggle with Icons"
                  example={toggleWithIcons}
                ></Example>
                <Example
                  title="Toggle themed"
                  example={toggleDarkTheme}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Dropdown;
