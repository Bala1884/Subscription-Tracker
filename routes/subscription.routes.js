import { Router } from "express";
import authorize from "../config/middlewares/auth.middleware.js";
import { cancelSubscription, createSubscription, deleteSubscription, getAllSubscriptions, getSubscription, getUpcomingRenewals, getUserSubscription, updateSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter=Router();

subscriptionRouter.get('/',getAllSubscriptions);

subscriptionRouter.get('/upcoming-renewals',authorize,getUpcomingRenewals);

subscriptionRouter.get('/:id',getSubscription);

subscriptionRouter.post('/',authorize, createSubscription);

subscriptionRouter.put('/:id',authorize,updateSubscription);

subscriptionRouter.delete('/:id',authorize,deleteSubscription);

subscriptionRouter.get('/user/:id',authorize,getUserSubscription);

subscriptionRouter.put('/:id/cancel',authorize,cancelSubscription);


export default subscriptionRouter;