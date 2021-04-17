import { Meta, Story } from "@storybook/angular";
import { ButtonComponent, ButtonModule } from "./button.component";

export default {
  title: "Example/Button",
} as Meta;

export const Primary: Story = () => ({
  component: ButtonComponent,
  moduleMetadata: {
    imports: [ButtonModule]
  },
});
