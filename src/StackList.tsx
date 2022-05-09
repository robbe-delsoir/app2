import * as React from 'react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import { uPrinceTheme } from './Theme';

// Styles definition
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
    height: 40,
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: uPrinceTheme.palette.themePrimary,
    color: uPrinceTheme.palette.white,
    display: 'flex',
    justifyContent: 'left',
    padding: 10

  },
};

// Tokens definition
const outerStackTokens: IStackTokens = { childrenGap: 3 };
const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0,
};

export const VerticalStackList: React.FunctionComponent = () => {
  return (
    <Stack tokens={outerStackTokens}>
      <Stack styles={stackStyles} tokens={innerStackTokens}>
        <Stack.Item grow={2} styles={stackItemStyles} >
            List of textboxes
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default VerticalStackList;