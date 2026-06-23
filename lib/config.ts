import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Tell me about ADUs",
    prompt: "What ADU plans does Ennis Builders offer?",
    icon: "lightbulb",
  },
  {
    label: "Build on my lot",
    prompt: "I want to build a home on my own lot — how does that work?",
    icon: "write",
  },
  {
    label: "Buy or sell a home",
    prompt: "I'm interested in buying or selling a home with Ennis Builders.",
    icon: "search",
  },
  {
    label: "Talk to an agent",
    prompt: "How can I get in touch with an Ennis Builders agent?",
    icon: "lifesaver",
  },
];

export const PLACEHOLDER_INPUT = "Ask Ennis Builders...";

export const GREETING = "Hi! How can we help with your build, ADU, or home search?";

export const getThemeConfig = (_theme: ColorScheme): ThemeOption => ({
  colorScheme: "light",
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: -4,
    },
    accent: {
      primary: "#77be43",
      level: 1,
    },
  },
  radius: "round",
  typography: {
    fontFamily: "'Proxima Nova', 'Futura PT', sans-serif",
  },
  // chatkit.studio/playground to explore config options
});
