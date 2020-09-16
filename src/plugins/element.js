import Vue from 'vue'
import '../element-variables.scss'
import {
    Pagination,
    Dropdown,
    Input,
    Container,
    Aside,
    Header,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    Main,
    DatePicker,
    Badge,
    Table,
    TableColumn,
    Radio,
    Loading,
    RadioGroup,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Message,
    Tooltip,
    Scrollbar,
    Tabs,
    TabPane,
    Dialog,
    InputNumber,
    MessageBox,
    Checkbox,
    CheckboxGroup,
    Switch,
    Tag
} from 'element-ui';
Vue.use(Dialog);
Vue.use(Tag);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tooltip);
Vue.use(Loading);
Vue.use(Badge);
Vue.use(TableColumn);
Vue.use(Main);
Vue.use(Table);
Vue.use(DatePicker);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Container);
Vue.use(Scrollbar);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Pagination);
Vue.use(Dropdown);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(InputNumber);
Vue.use(ButtonGroup);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
