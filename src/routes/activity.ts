import { Router } from 'express';
import {
  createActivity,
  getAllActivities,
  updateActivity,
  deleteActivity,
} from 'controllers';

const router = Router();

// Driver Auth Routes
router.post('/', createActivity);
router.get('/', getAllActivities);
router.patch('/:id', updateActivity);
router.delete('/:id', deleteActivity);

export { router as activityRoutes };
