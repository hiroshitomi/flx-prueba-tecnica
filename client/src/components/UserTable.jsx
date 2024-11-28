import {capitalizeString} from "../utils/CapitalizeString";
import {Space, Spin, Table, Tag, Tooltip, Modal} from "antd";
import {useContext, useEffect, useState} from "react";
import {DeleteOutlined, ExclamationCircleFilled} from "@ant-design/icons";
import {UserContext} from "../context/UserContext";
import EditForm from "./EditForm";
const {confirm} = Modal;

const UserTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {users, setUsers, getUsers, deleteUser} = useContext(UserContext);

  const showDeleteConfirm = (record) => {
    confirm({
      title: `¿Está seguro que quiere eliminar el usuario ${
        record.name + " " + record.lastname
      }?`,
      icon: <ExclamationCircleFilled />,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        console.log(record);
        const newUsers = deleteUser(record);
        setUsers(newUsers);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getUsers();
      setIsLoading(false);
    }, 2000);
  }, []);

  const columns = [
    {
      title: "Usuario",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (_, {status}) => (
        <>
          <Tag color={status === "active" ? "green" : "volcano"}>
            {capitalizeString(status)}
          </Tag>
        </>
      ),
    },
    {
      title: "Acción",
      key: "action",
      render: (record) => (
        <>
          <Space size={"middle"}>
            <Tooltip placement="top" title="Editar">
              <EditForm record={record} />
            </Tooltip>
            <Tooltip placement="top" title="Eliminar">
              <DeleteOutlined
                style={{color: "red", fontSize: "16px"}}
                onClick={() => showDeleteConfirm(record)}
              />
            </Tooltip>
          </Space>
        </>
      ),
    },
  ];

  return (
    <Spin spinning={isLoading}>
      <Table
        dataSource={users}
        columns={columns}
        pagination={{
          total: users.length,
          pageSize: 9,
          showSizeChanger: false,
        }}
      />
    </Spin>
  );
};

export default UserTable;
