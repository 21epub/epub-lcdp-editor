import { Dispatch } from "../store";

export interface Config {
  title: string;
  icon: string;
  description: string;
  content: Content[];
}

export interface Content {
  name: string;
  label: string;
  type?: string;
  props?: AnyObject;
}

export interface Category {
  cateforyId: string;
  categoryLabel: string;
  componentList: Component[];
}

export interface Component {
  id: string;
  label: string;
  type: string;
  icon: string;
  description: string;
  stage: string;
  include: AnyObject | null;
  exclude: AnyObject | null;
  defaultProps: AnyObject;
}

export type FormEditorRootState = {
  controls: Controls;
  configs: Config[];
  formList: Category[];
};

const initialState: FormEditorRootState = {
  controls: {} as Controls,
  configs: [],
  formList: [],
};

export interface Controls {
  id?: string;
  type: string;
  props: AnyObject;
  children: Controls[];
}

export const formEditor = {
  state: initialState,
  reducers: {
    resetEditor(state: FormEditorRootState) {
      Object.entries(initialState).forEach(([key, value]) => {
        Reflect.set(state, key, value);
      });
    },
    setFormList(state: FormEditorRootState, payload: Category[]) {
      state.formList = payload;
    },
    setControls(state: FormEditorRootState, payload: Controls) {
      state.controls = payload;
    },
  },
};
