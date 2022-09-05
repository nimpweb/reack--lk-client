import BoardNavBar from '../components/BoardNavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import SkDictionaryList from '../pages/Dictionary/SkDictionaryList';
import SkDictionaryAdd from '../pages/Dictionary/SkDictionaryAdd';

export const dictionariesRoutes = [
  {
    Path: '/dictionaries/sk',
    Component: SkDictionaryList,
    Title: 'Список сетевых компаний',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false,
  },
  {
    Path: '/dictionaries/sk/add',
    Component: SkDictionaryAdd,
    Title: 'Добавление сетевой компании',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false,
  },
];
