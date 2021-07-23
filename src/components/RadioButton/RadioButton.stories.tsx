import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { Card } from "components/Card/Card";

const RadioButtonConfig = {
  component: RadioButton,
  title: "RadioButton",
  decorators: [
    (story: () => React.ReactNode) => (
      <Card heading="RadioButton">{story()}</Card>
    ),
  ],
} as ComponentMeta<typeof RadioButton>;

export default RadioButtonConfig;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Unchecked = Template.bind({});

Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

/***********/

// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Header } from './Header';

// export default {
//   title: 'Example/Header',
//   component: Header,
// } as ComponentMeta<typeof Header>;

// const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
