import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";

import ShowModal from "./OrderShow";

const OrderList = (props) => (
  <List {...props}>
    <Datagrid bulkActionButtons={false}>
      <DateField source="date" showTime />
      <TextField source="id" label="Order ID" />
      <ReferenceField source="userId" reference="users" label="User Nickname">
        <FunctionField render={record=>record.nickname}/> 
      </ReferenceField>
      <FunctionField label="items" render={(record) => record.items.length} />
      <FunctionField
        label="Total Price"
        render={(record) =>
          record.items.reduce(
            (total, current) => total + current.price * current.quantity, 0)
        }
      />
      <ShowModal/>
    </Datagrid>
  </List>
);

export default OrderList;
