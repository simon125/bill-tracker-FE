import React from "react";
import { TileRadioButton } from "./TileRadioButton";

const TileRadioButtonConfig = {
  component: TileRadioButton,
  title: "TileRadioButton",
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ padding: "3rem" }}>{story()}</div>
    ),
  ],
};

export default TileRadioButtonConfig;

const Template = (args: any) => <TileRadioButton {...args} />;

export const Default = Template.bind({});
