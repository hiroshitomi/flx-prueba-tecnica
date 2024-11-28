import {useContext, useState} from "react";
import {Flex, Input, InputNumber, Modal, Select, Tooltip} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {UserContext} from "../context/UserContext";

const EditForm = ({record}) => {
  const {users, setUsers} = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState({
    id: 0,
    username: "",
    name: "",
    lastname: "",
    email: "",
    age: "",
    status: "",
  });

  const onEditUser = (record) => {
    setEditUser({...record});
    setOpen(true);
  };

  return (
    <div>
      <Tooltip placement="top" title="Editar">
        <EditOutlined
          style={{color: "blue", fontSize: "16px"}}
          onClick={() => {
            onEditUser(record);
          }}
        />
      </Tooltip>

      <Modal
        open={open}
        title="Editar Usuario"
        okText="Editar"
        cancelText="Cancelar"
        onCancel={() => setOpen(false)}
        onOk={() => {
          //He tenido problemas y no he sabido como resolver la edición de un registro. Intenté de todo pero no llegué a la solución.
          setUsers((previous) => {
            return previous.map((user) => {
              if (user.id === editUser.id) {
                return editUser;
              } else {
                user;
              }
            });
          });
          console.log(users);
        }}
      >
        <Flex gap="middle" style={{padding: "10px"}}>
          <div style={{flexBasis: 1, flexGrow: 1, flexShrink: 1}}>
            <label>Usuario</label>
            <Input
              value={editUser?.username}
              onChange={(e) => {
                setEditUser((previous) => {
                  return {...previous, username: e.target.value};
                });
              }}
            />
          </div>
          <div style={{flexBasis: 1, flexGrow: 1, flexShrink: 1}}>
            <label>Email</label>
            <Input
              value={editUser?.email}
              onChange={(e) => {
                setEditUser((previous) => {
                  return {...previous, email: e.target.value};
                });
              }}
            />
          </div>
        </Flex>

        <Flex gap="middle" style={{padding: "10px"}}>
          <div style={{flexBasis: 1, flexGrow: 1, flexShrink: 1}}>
            <label>Nombre</label>
            <Input
              value={editUser?.name}
              onChange={(e) => {
                setEditUser((previous) => {
                  return {...previous, name: e.target.value};
                });
              }}
            />
          </div>
          <div style={{flexBasis: 1, flexGrow: 1, flexShrink: 1}}>
            <label>Apellido</label>
            <Input
              value={editUser?.lastname}
              onChange={(e) => {
                setEditUser((previous) => {
                  return {...previous, lastname: e.target.value};
                });
              }}
            />
          </div>
        </Flex>

        <Flex gap="middle" style={{padding: "10px"}}>
          <div style={{flexBasis: 1, flexGrow: 1, flexShrink: 1}}>
            <label>Estado</label>
            <Select
              showSearch={false}
              placeholder="Seleccione un estado"
              value={editUser?.status}
              onChange={(e) => {
                setEditUser((previous) => {
                  return {...previous, status: e.target.value};
                });
              }}
              style={{width: "100%"}}
              options={[
                {
                  value: "active",
                  label: "Activo",
                },
                {
                  value: "inactive",
                  label: "Inactivo",
                },
              ]}
            ></Select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: 1,
              flexGrow: 1,
              flexShrink: 1,
            }}
          >
            <label>Edad</label>
            <InputNumber
              value={editUser?.age}
              onChange={(e) => {
                setEditUser((previous) => {
                  return {...previous, age: e.target.value};
                });
              }}
              style={{width: "100%"}}
            />
          </div>
        </Flex>
      </Modal>
    </div>
  );
};
export default EditForm;
