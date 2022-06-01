import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { CommandBarButton, IButtonProps, IButtonStyles } from '@fluentui/react/lib/Button';
import { DirectionalHint } from '@fluentui/react/lib/Callout';
import {
  IContextualMenuItemProps,
  ContextualMenuItem,
  IContextualMenuItemStyles,
  IContextualMenuStyles,
} from '@fluentui/react/lib/ContextualMenu';
import { getTheme, concatStyleSets } from '@fluentui/react/lib/Styling';
import { memoizeFunction } from '@fluentui/react/lib/Utilities';
import { PanelComp } from '../Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { IIconProps, IStackStyles, Stack } from '@fluentui/react';
import VerticalStackGrowExample from '../Stack';


const theme = getTheme();
// Styles for both command bar and overflow/menu items
const itemStyles: Partial<IContextualMenuItemStyles> = {
  label: { fontSize: 18 },
  icon: { color: theme.palette.red },
  iconHovered: { color: theme.palette.redDark },
};
// For passing the styles through to the context menus
const menuStyles: Partial<IContextualMenuStyles> = {
  subComponentStyles: { menuItem: itemStyles, callout: {} },
};

const getCommandBarButtonStyles = memoizeFunction(
  (originalStyles: IButtonStyles | undefined): Partial<IContextualMenuItemStyles> => {
    if (!originalStyles) {
      return itemStyles;
    }

    return concatStyleSets(originalStyles, itemStyles);
  },
);

const stackStyles: Partial<IStackStyles> = { root: { height: 44 ,padding:'0px 30px'} };


export const CommandBarButtonAsExample: React.FunctionComponent = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);



  const _items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      text: 'Create',
      iconProps: { iconName: 'Add' },
    },
    {
      key: 'upload',
      text: 'Read',
      iconProps: { iconName: 'Read' },
      href: 'https://developer.microsoft.com/en-us/fluentui',
    },
    { key: 'share', text: 'Update', iconProps: { iconName: 'Share' } },
    { key: 'download', text: 'Create', iconProps: { iconName: 'Download' } },
  ];

  // Custom renderer for main command bar items
const CustomButton: React.FunctionComponent<IButtonProps> = props => {
  const buttonOnMouseClick = () => alert(`${props.text} clicked`);
  // eslint-disable-next-line react/jsx-no-bind
  return <CommandBarButton {...props} onClick={openPanel} styles={getCommandBarButtonStyles(props.styles)} />;
};

// Custom renderer for menu items (these must have a separate custom renderer because it's unlikely
// that the same component could be rendered properly as both a command bar item and menu item).
// It's also okay to custom render only the command bar items without changing the menu items.
const CustomMenuItem: React.FunctionComponent<IContextualMenuItemProps> = props => {
  // Due to ContextualMenu implementation quirks, passing styles or onClick here doesn't work.
  // The onClick handler must be on the ICommandBarItemProps item instead (_overflowItems in this example).
  return <ContextualMenuItem {...props} />;
};

const overflowProps: IButtonProps = {
  ariaLabel: 'More commands',
  menuProps: {
    contextualMenuItemAs: CustomMenuItem,
    // Styles are passed through to menu items here
    styles: menuStyles,
    items: [], // CommandBar will determine items rendered in overflow
    isBeakVisible: true,
    beakWidth: 20,
    gapSpace: 10,
    directionalHint: DirectionalHint.topCenter,
  },
};
const textIcon: IIconProps = { iconName: 'Chat' };
const powerIcon: IIconProps = { iconName: 'PowerButton' };

  return (
    <>
    <Stack horizontal styles={stackStyles}>
      <CommandBarButton
        iconProps={textIcon}
        text="Textbox"
      />
      <CommandBarButton iconProps={powerIcon} text="Button"  />
    </Stack>
    <VerticalStackGrowExample text="List of Textbox" />
    <CommandBar
      overflowButtonProps={overflowProps}
      // Custom render all buttons
      buttonAs={CustomButton}
      items={_items}
      ariaLabel="Use left and right arrow keys to navigate between commands"
    />
    <PanelComp open={isOpen} dismissPanel={dismissPanel} />
    </>
  );
};




export default CommandBarButtonAsExample;