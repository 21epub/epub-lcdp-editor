import { init, RematchDispatch } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import * as models from "./models";
import { RematchRootState, RematchRootDispatch } from "../model";

export const store = init({
  plugins: [immerPlugin()],
  models,
});

export type RootState = RematchRootState<typeof models>;

export type Dispatch = RematchRootDispatch<typeof models>;
