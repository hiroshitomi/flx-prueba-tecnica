import {Input, Select, Space, Flex} from "antd";
import ModalForm from "./AddForm";
import {useContext} from "react";
import {CloseOutlined} from "@ant-design/icons";
import {UserContext} from "../context/UserContext";
const {Search} = Input;

const FormSearch = () => {
  const {getUsers, handleStatus, handleSearch} = useContext(UserContext);

  const onClear = async () => {
    await getUsers();
  };

  return (
    <Flex justify="space-between" style={{marginBottom: "1rem"}}>
      <Space>
        <Search
          placeholder="Buscar usuario"
          onSearch={handleSearch}
          allowClear={{clearIcon: <CloseOutlined onClick={onClear} />}}
        />
        <Select
          showSearch
          placeholder="Filtrar por estado"
          optionFilterProp="label"
          onChange={handleStatus}
          onClear={onClear}
          allowClear={{clearIcon: <CloseOutlined />}}
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
      </Space>
      <ModalForm />
    </Flex>
  );
};

export default FormSearch;
