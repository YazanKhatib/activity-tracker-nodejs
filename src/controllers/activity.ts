import { Request, Response, NextFunction } from 'express';
import { Logger } from 'lib';
import { v4 as uuid } from 'uuid';

interface activityI {
  id: string;
  name: string;
  type: string;
  duration?: string;
  start?: string;
  stop?: string;
}

let activities: activityI[] = [
  {
    id: uuid(),
    name: 'Gym',
    type: 'Sport',
  },
  {
    id: uuid(),
    name: 'Reading',
    type: 'Indoor',
  },
  {
    id: uuid(),
    name: 'Work',
    type: 'Outdoor',
  },
];

export const createActivity = async (req: Request, res: Response) => {
  try {
    const { name, type, duration } = req.body;
    const activity = { id: uuid(), name, type, duration };
    activities.push(activity);

    res.send({
      activity,
    });
  } catch (e: any) {
    Logger.error(e.message);
    res.status(400).send({ status: 400 });
  }
};

export const getAllActivities = async (req: Request, res: Response) => {
  try {
    res.send({
      activities,
    });
  } catch (e: any) {
    Logger.error(e.message);
    res.status(400).send({ status: 400 });
  }
};

export const updateActivity = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    const { name, type, duration, start, stop } = req.body;

    const result = activities.findIndex((activity) => activity.id === id);

    if (result === -1)
      return res.status(400).send({
        message: {
          en: 'Activity not Found',
        },
      });

    activities[result] = { ...activities[result], ...req.body };
    res.send({
      activity: activities[result],
    });
  } catch (e: any) {
    Logger.error(e.message);
    res.status(400).send({ status: 400 });
  }
};

export const deleteActivity = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = activities.find((activity) => activity.id === id);

    if (!result)
      return res.status(400).send({
        message: {
          en: 'Activity not Found',
        },
      });

    activities = activities.filter((activity) => activity.id !== id);
    res.send({
      activity: result,
    });
  } catch (e: any) {
    Logger.error(e.message);
    res.status(400).send({ status: 400 });
  }
};
