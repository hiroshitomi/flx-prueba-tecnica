import {Breadcrumb} from "antd";

const BreadCrumb = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: "Usuarios",
        },
        {
          title: <a href="">Lista Usuarios</a>,
        },
      ]}
    />
  );
};

export default BreadCrumb;
