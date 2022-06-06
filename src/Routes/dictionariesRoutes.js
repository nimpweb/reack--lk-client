import BoardNavBar from '../components/BoardNavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import SkDictionaryList from '../pages/Dictionary/SkDictionaryList';

export const dictionariesRoutes = [
  {
    Path: '/dictionaries/sk',
    Component: SkDictionaryList,
    Title: 'Список сетевых компаний',
    Header: BoardNavBar,
    Sidebar: Sidebar,
    authRequired: false,
  },
];
