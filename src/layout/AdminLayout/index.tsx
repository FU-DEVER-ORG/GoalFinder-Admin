"use client";
import Button from "@/components/common/DemoButton";
import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Grid, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const isAuth = true;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens);

  useLayoutEffect(() => {
    if (!isAuth) {
      route.push(`/auth/sign-in`);
    }
  }, [isAuth, route]);

  const demoItem1 = [1, 2, 3].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  const demoitems2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }
  );
  const [collapse, setCollapse] = useState<boolean>(false);
  //implement dashboard here
  //todo customize in need
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Button
          type="text"
          icon={
            collapse ? (
              <MenuUnfoldOutlined
                style={{
                  fontSize: "24px",
                }}
              />
            ) : (
              <MenuFoldOutlined
                style={{
                  fontSize: "24px",
                }}
              />
            )
          }
          onClick={() => setCollapse(!collapse)}
          style={{
            width: 64,
            height: 64,
            color: "#fff",
          }}
        >
          vewv
        </Button>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={demoItem1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          trigger={null}
          width={200}
          style={{
            background: "#fff",
          }}
          breakpoint="sm"
          collapsed={collapse}
          collapsedWidth={screens?.sm == true ? 80 : 0}
          onCollapse={() => setCollapse(!collapse)}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={demoitems2}
          />
        </Sider>
        <Layout
          style={{
            padding: "16px 16px",
          }}
        >
          <Content
            style={{
              padding: 16,
              margin: 0,
              minHeight: 280,
              background: "#fff",
              borderRadius: "12px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
