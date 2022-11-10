import { Router } from 'express';
import * as dashCtrl from '../controllers/dash.controller';
import { isAuthenticated } from "../helpers/auth";

const router = Router();

router.get('/dashboard', isAuthenticated, dashCtrl.dashboard);

router.get('/invoice', isAuthenticated, dashCtrl.invoice);

router.get('/faq', isAuthenticated, dashCtrl.faq);

router.get('/profile', isAuthenticated, dashCtrl.profile);

router.put('/profile/:id', isAuthenticated, dashCtrl.profileUpdate);

export default router;