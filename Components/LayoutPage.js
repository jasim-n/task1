import { Col, Layout, Row } from "antd";
import Link from "next/link";
import { Router } from "next/router";
import React from "react";

const LayoutPage = ({ children }) => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: "0", background: "white" }}>
        <Row
          style={{
            alignItems: "center",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid #F0F0F0",
          }}
        >
          <Col span={12}>
            <Link style={{ color: "inherit" }} href={"/"}>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "32px",
                }}
              >
                ProductName
              </p>
            </Link>
          </Col>
          <Col span={12}>
            <Row gutter={[55, 0]} style={{ justifyContent: "flex-end" }}>
              <Col>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Feedback
                </p>
              </Col>

              <Col>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Support
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default LayoutPage;
