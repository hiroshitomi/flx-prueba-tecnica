import {useContext, useEffect, useState} from "react";
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
} from "antd";
import {UserContext} from "../context/UserContext";

const ModalForm = () => {
  const {users, addUser} = useContext(UserContext);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    addUser(values);
    setOpen(false);
  };

  useEffect(() => {
    users;
  }, [users]);
  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        Agregar Usuario
      </Button>
      <Modal
        open={open}
        title="Agregar Usuario"
        okText="Agregar"
        cancelText="Cancelar"
        okButtonProps={{
          autoFocus: true,
          htmlType: "submit",
        }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{
              modifier: "public",
            }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Space size={"middle"}>
          <Form.Item
            name="username"
            label="Usuario"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
        </Space>
        <Space size={"middle"}>
          <Form.Item
            name="name"
            label="Nombre"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastname"
            label="Apellido"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Space>
        <Flex gap="middle" align="space-between">
          <Form.Item
            name="status"
            label="Estado"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Seleccione un estado"
              optionFilterProp="label"
              style={{width: "100%", flexGrow: 1}}
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
            />
          </Form.Item>

          <Form.Item
            name="age"
            label="Edad"
            rules={[
              {
                type: "number",
                required: true,
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber style={{width: "100%", flexGrow: 1}} />
          </Form.Item>
        </Flex>
      </Modal>
    </div>
  );
};
export default ModalForm;
