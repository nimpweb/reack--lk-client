import SmtpSetupAdminInstruction from '../pages/Instructions/Admin/SmtpSetup';
import BoardNavBar from '../components/BoardNavBar';
import SidebarInstruction from '../components/SidebarInstruction';

export const instructionsRoutes = [
  {
    Path: '/instruction/admin/smtp-setup',
    Component: SmtpSetupAdminInstruction,
    Title: 'Настройка SMTP-сервера',
    Header: BoardNavBar,
    Sidebar: SidebarInstruction,
    authRequired: false,
  },
];
