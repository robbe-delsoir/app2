import * as React from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Panel } from "@fluentui/react/lib/Panel";
import CommandBarButtonAsExample from "../Commandbar";
import {
  ChoiceGroup,
  Dropdown,
  DropdownMenuItemType,
  IChoiceGroupOption,
  IDropdownOption,
  IDropdownStyles,
  IStackTokens,
  Stack,
  TextField,
  Toggle,
} from "@fluentui/react";

const buttonStyles = { root: { marginRight: 8 } };
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

const options: IDropdownOption[] = [
  {
    key: "date",
    text: "Date",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "time", text: "Time" },
  { key: "dateTime", text: "Date & Time" },
];

const choices: IChoiceGroupOption[] = [
  { key: "A", text: "Option A" },
  { key: "B", text: "Option B" },
];

const stackTokens: IStackTokens = { childrenGap: 10 };

export const PanelComp = ({ open, dismissPanel }: any) => {
  const onRenderFooterContent = React.useCallback(
    () => (
      <div>
        <PrimaryButton onClick={dismissPanel} styles={buttonStyles}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
      </div>
    ),
    [dismissPanel]
  );
  return (
    <div>
      <Panel
        headerText="PMOL-2252-WF-2078"
        isOpen={open}
        hasCloseButton={false} // 3. H
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
        onRenderFooterContent={onRenderFooterContent}
        // Stretch panel content to fill the available height so the footer is positioned
        // at the bottom of the page
        isFooterAtBottom={true}
      >
        <Stack tokens={{childrenGap:20}}>
        <Dropdown
          placeholder="Select an option"
          label="DataType"
          options={options}
          styles={dropdownStyles}
          defaultValue="dateTime"
        />
        <Stack horizontal tokens={{childrenGap:80}}>
          <Stack tokens={stackTokens}>
            <Toggle label="Editable" onText="On" offText="Off" />
            <Toggle defaultChecked onText="On" offText="Off" />
          </Stack>
          <Stack>
            <ChoiceGroup
              defaultSelectedKey="B"
              options={choices}
              label="Computed"
            />
          </Stack>
        </Stack>
        <TextField label="Comments" multiline rows={3} />
        </Stack>
      </Panel>
    </div>
  );
};
