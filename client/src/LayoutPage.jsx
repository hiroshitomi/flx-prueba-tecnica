import {Breadcrumb, Layout, theme, Image} from "antd";
import FormSearch from "./components/FormSearch";
import UserTable from "./components/UserTable";
const {Header, Content, Footer} = Layout;

const LayoutPage = () => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100dvh",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#D9D9D9",
        }}
      >
        <Image src="logo.png" preview={false} />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
          items={[
            {
              title: "Usuarios",
            },
            {
              title: "Lista Usuarios",
            },
          ]}
        />
        <FormSearch />
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <UserTable />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Created by Hiroshi Adauto
      </Footer>
    </Layout>
  );
};
export default LayoutPage;
