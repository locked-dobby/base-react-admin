import { Typography } from "@mui/material";
import { RouteObject } from "react-router-dom";

export const commonRoutes: ReadonlyArray<RouteObject> = [
  {
    path: "/",
    element: (
      <main>
        <Typography
          align="center"
          sx={{
            color: "text.primary",
          }}
          variant="body1">
          Root
        </Typography>
      </main>
    ),
  },
];
