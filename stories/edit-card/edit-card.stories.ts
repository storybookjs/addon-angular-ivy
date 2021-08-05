import { moduleMetadata } from "@storybook/angular";

import { EditCardModule } from "./edit-card.module";

export default {
  title: "UI BRIDGE / Card / edit",

  decorators: [
    moduleMetadata({
      imports: [EditCardModule],
    }),
  ],
};

export const Readonly = () => ({
  template: `
      <lf-edit-card>
        <lf-edit-card-readonly>readonly</lf-edit-card-readonly>
        <lf-edit-card-edition>edition</lf-edit-card-edition>
      </lf-edit-card>
    `,
});
