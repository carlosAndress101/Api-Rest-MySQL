import {Router} from 'express';
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployeeId } from '../controllers/employees.controller.js'

const router = Router();


router.get('/employees', getEmployees )

router.get('/employees/:id', getEmployeeId )

router.post('/employees', createEmployees)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)

export default router;