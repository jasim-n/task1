import { Col, Row } from 'antd';
import '../styles/globals.css'

// import client from "../apolloClient";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://profound-marmot-29.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }) {

  return  <ApolloProvider client={client}> <Row
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
</Row><Component {...pageProps} /></ApolloProvider>
}
