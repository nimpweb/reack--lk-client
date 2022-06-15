import { landingRoutes } from "./landingRoutes";
import { accountRoutes } from "./accountRoutes";
import { orderRoutes } from "./orderRoutes";
import { authRoutes } from "./authRoutes";
import { appealRoutes } from "./appealRoutes";
import { newsRoutes } from './newsRoutes';
import { statementRoutes } from './statementRoutes';
import { dictionariesRoutes } from './dictionariesRoutes';
import { instructionsRoutes } from './instructionsRoutes';
import { userRoutes } from './userRoutes';

export const Routes = [
  ...landingRoutes,
  ...accountRoutes,
  ...orderRoutes,
  ...authRoutes,
  ...appealRoutes,
  ...newsRoutes,
  ...statementRoutes,
  ...dictionariesRoutes,
  ...instructionsRoutes,
  ...userRoutes
];