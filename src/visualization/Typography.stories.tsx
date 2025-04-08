import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Visualization/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: 'Typography component following TU Graz guidelines. Includes headings, body text, captions, links, lists, and emphasis styles.',
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "body1",
        "body2",
        "caption",
        "link",
        "list",
        "listItem",
        "emphasis",
      ],
      description: "Typography variant to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1 - Arial, 20pt, 24pt line height",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2 - Arial Bold, 14pt, 17pt line height",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3 - Arial Bold, 12pt, 15pt line height",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4 - Arial Bold, 10pt, 15pt line height",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "Body 1 - Arial, 10pt, 15pt line height. This is the standard body text style for general content.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children: "Body 2 - Cambria, 11pt, 15pt line height. This is the alternative serif font style for scientific works.",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption - Arial, 7.5pt, 10pt line height. Used for footnotes and image captions.",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children:
      "Link - Arial, 10pt, 15pt line height, blue and underlined. Example: https://tu4u.tugraz.at/",
  },
};

export const List: Story = {
  args: {
    variant: "list",
    children: [
      "First list item with bullet point",
      "Second list item with bullet point",
      "Third list item with bullet point",
    ],
  },
};

export const Emphasis: Story = {
  args: {
    variant: "emphasis",
    children: "Emphasis - Arial Black, 10pt, 15pt line height. Used to highlight specific content.",
  },
};

export const TypographyShowcase: Story = {
  render: () => (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h1">TU Graz Typography Guidelines</Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        This showcase demonstrates the typography styles according to TU Graz
        guidelines.
      </Typography>

      <Typography variant="h2">Headings</Typography>
      <Typography variant="h1">Heading 1 - Arial, 20pt</Typography>
      <Typography variant="h2">Heading 2 - Arial Bold, 14pt</Typography>
      <Typography variant="h3">Heading 3 - Arial Bold, 12pt</Typography>
      <Typography variant="h4">Heading 4 - Arial Bold, 10pt</Typography>

      <Typography variant="h2" style={{ marginTop: "20px" }}>
        Body Text
      </Typography>
      <Typography variant="body1">
        This is the standard body text style using Arial font at 10pt with 15pt
        line height. It is suitable for general content and provides good
        readability for most documents.
      </Typography>

      <Typography variant="body2">
        This is the alternative serif font style using Cambria at 11pt with 15pt
        line height. It is recommended for scientific works and provides a more
        formal appearance.
      </Typography>

      <Typography variant="h2" style={{ marginTop: "20px" }}>
        Lists
      </Typography>
      <Typography variant="list">
        <Typography variant="body1">
          First list item with bullet point
        </Typography>
        <Typography variant="body1">
          Second list item with bullet point
        </Typography>
        <Typography variant="body1">
          Third list item with bullet point
        </Typography>
      </Typography>

      <Typography variant="h2" style={{ marginTop: "20px" }}>
        Links and Emphasis
      </Typography>
      <Typography variant="link">https://tu4u.tugraz.at/</Typography>
      <Typography
        variant="emphasis"
        style={{ display: "block", marginTop: "10px" }}
      >
        This text is emphasized using Arial Black to highlight important
        information.
      </Typography>

      <Typography variant="h2" style={{ marginTop: "20px" }}>
        Caption
      </Typography>
      <Typography variant="caption">
        This is a caption or footnote using Arial at 7.5pt with 10pt line
        height.
      </Typography>
    </div>
  ),
};
