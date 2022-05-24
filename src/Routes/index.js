import { landingRoutes } from "./landingRoutes";
import { accountRoutes } from "./accountRoutes";
import { orderRoutes } from "./orderRoutes";
import { authRoutes } from "./authRoutes";
import { appealRoutes } from "./appealRoutes";
import { newsRoutes } from './newsRoutes';
import { statementRoutes } from './statementRoutes';

export const Routes = [
  ...landingRoutes,  ...accountRoutes, ...orderRoutes, ...authRoutes, ...appealRoutes, ...newsRoutes, ...statementRoutes
]