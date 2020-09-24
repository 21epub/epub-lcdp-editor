import React, { useState } from "react";
// sotre相关
import { Dispatch, RootState, store } from "../store";
import { FormeditorRootState } from "../models";
import { Provider, useDispatch, useSelector } from "react-redux";
// antd组件
import { Button, Layout, Menu, message, Modal, Space, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
// 组件
import FormPanel from "../FormPanel";
import FormRender from "../FormRender";
import FormConfigBuilder from "../FormCongigBuilder";
// 样式
import styles from "./imdex.module.less";

// interface
interface SiderLayoutProps {
  collapsed?: boolean;
}

const SiderLayout: React.FC<SiderLayoutProps> = ({
  collapsed = false,
  children,
}) => {
  const [$collapsed, setCollapsed] = useState(collapsed);

  return (
    <Sider
      width={300}
      collapsible={true}
      collapsed={$collapsed}
      collapsedWidth={0}
      zeroWidthTriggerStyle={{ display: "none" }}
      theme={"light"}
      className={styles.sider}
    >
      {children}
    </Sider>
  );
};

const FormEditor = () => {
  return (
    <Provider store={store}>
      <Layout style={{ height: "100%" }}>
        <Header className={styles.header}>
          <Space>
            <Button ghost type={"primary"}>
              预览
            </Button>
          </Space>
        </Header>
        <Layout>
          <SiderLayout>
            <FormPanel />
          </SiderLayout>
          <Content className={styles.content}>
            <FormRender.Canvas />
          </Content>
          <FormConfigBuilder />
        </Layout>
      </Layout>
    </Provider>
  );
};

export default FormEditor;
