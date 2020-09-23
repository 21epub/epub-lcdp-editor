/// <reference types="react-scripts" />
/// <reference types="node" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
  }
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-sortablejs" {
  import React from "react";
  import Sortable from "sortablejs";

  export interface SortableProps<ItemData, ListProps> {
    options?: Sortable.Options;
    onChange?: (
      list: ItemData[],
      sortable: Sortable,
      event: Sortable.SortableEvent
    ) => void;
    tag?: string | React.ComponentType<ListProps>;
    style?: React.CSSProperties;
    className?: string;
  }
  export default class SortableComponent<
    ItemData,
    ListProps
  > extends React.Component<SortableProps<ItemData, ListProps>> {}
}

declare interface AnyObject {
  [key: string]: any;
}

declare interface Enum {
  [key: string]: string | number;
}
