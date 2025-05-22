import Training from "./actions/training";
import Focus from "./actions/focus";
import Motivate from "./actions/motivate";

export const routes = [
  {
    path: "training",
    text: /hi|hello|hey|hola/i,
    action: Training,
    childRoutes: [
      {
        path: "focus",
        payload: "focus",
        action: Focus,
      },
      {
        path: "motivate",
        payload: "motivate",
        action: Motivate,
      },
    ],
  },
];
