import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './component/users';
import { PostList, PostEdit, PostCreate } from './component/posts';
import Dashboard from './component/Dashboard';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App;