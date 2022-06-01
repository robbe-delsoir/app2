import * as React from 'react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import { uPrinceTheme } from '../Theme';

// Styles definition
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.black,
    height: 60,
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: uPrinceTheme.palette.black,
    color: uPrinceTheme.palette.white,
    display: 'flex',
    justifyContent: 'left',
    padding: '0px 10px'
  },
};

// Tokens definition
const outerStackTokens: IStackTokens = { childrenGap: 3 };
const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0,
};

interface IProps {
  text:string
}

export const VerticalStackGrowExample = ({text}:IProps) => {
  return (
    <Stack tokens={outerStackTokens}>
      <Stack styles={stackStyles} tokens={innerStackTokens}>
        <Stack.Item grow={2} styles={stackItemStyles} >
            {text}
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default VerticalStackGrowExample;