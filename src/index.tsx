import React from "react";
import ReactDOM from "react-dom";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// 导入全局样式文件
import "./index.less";
// 导入各页面组件
import FormEditor from "./form/FormEditor";
import WorksheetPreview from "./form/WorksheetPreview";
import PageEditor from "./page/PageEditor";
import PagePreview from "./page/PagePreview";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path={"./"} exact>
        <Redirect to={"./page"} />
      </Route>
      <Route path={"./page"}>
        <PageEditor />
      </Route>
      <Route path={"./preview"}>
        <PagePreview />
      </Route>
      <Route path={"./form"}>
        <FormEditor />
      </Route>
      <Route path={"./worksheet"}>
        <WorksheetPreview />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
