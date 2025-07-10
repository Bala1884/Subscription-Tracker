import Subscription from "../models/subscription.model.js";

export const createSubscription= async (req,res,next)=>{
    try{
        const subscription= await Subscription.create({
            ...req.body,
            user:req.user.id,
        })
        res.status(201).json({success:true, data: subscription});
    }catch(e){
        next(e);
    }
}

export const getUserSubscription = async(req,res,next)=>{
    try{
        if(req.user.id!=req.params.id){
            const error = new Error("You are not the owner");
            error.statusCode=401;
            throw error;
        }
        const subscriptions=await Subscription.find({user:req.params.id});
        res.status(201).json({success:true, data:subscriptions});
    }catch(e){
        next(e);
    }
}

export const getAllSubscriptions=async(req,res,next)=>{
    try{
        const allSubscriptions=await Subscription.find();
        res.status(201).json({success:true, data:allSubscriptions});
    }catch(e){
        next(e);
    }
}

export const getSubscription=async(req,res,next)=>{
    try{
        const subscription=await Subscription.findById(req.params.id);
        if(!subscription){
            const error=new Error("Subscription not found");
            error.statusCode=404;
            throw error;
        }
        res.status(200).json({success:true, data:subscription});
    }catch(e){
        next(e);
    }
}

export const updateSubscription=async(req,res,next)=>{
    const id=req.params.id;
    const update=req.body;
    const userId=req.user.id;
    try{
        const subscription=await Subscription.findById(req.params.id);
        if(!subscription){
            const error=new Error("Subscription not found");
            error.statusCode=404;
            throw error;
        }

         if (!subscription.user) {
            return res.status(400).json({ message: 'Subscription has no user field' });
        }
        if(userId!==subscription.user.toString()){
            return res.status(403).json({message:"Unauthorized"});
        }
        const updatedSubscription=await Subscription.findByIdAndUpdate(id,update,{new: true, runValidators:true,});
        res.status(200).json({success:true, data:updatedSubscription});

    }catch(e){
        next(e);
    }
}

export const deleteSubscription=async(req,res,next)=>{
    const id=req.params.id;
    const userID=req.user.id;
    try{
        const subscription=await Subscription.findById(req.params.id);
        if(!subscription){
            const error=new Error("Subscription not found");
            error.statusCode=404;
            throw error;
        }
        if(subscription.user.toString()!==userID){
            const error=new Error("Unauthorised to delete");
            error.statusCode=403;
            throw error;
        }
        await Subscription.findByIdAndDelete(id);
        res.status(200).json({message:"Subscription deleted",data:subscription});
    }catch(e){
        next(e);
    }
}
export const cancelSubscription=async(req,res,next)=>{
    const id=req.params.id;
    const userID=req.user.id;
    try{
        const subscription=await Subscription.findById(id);
        if(!subscription){
            const error=new Error("Subscription not found");
            error.statusCode=404;
            throw error;
        }
        if(subscription.user.toString()!==userID){
            const error=new Error("Unauthorized to cancel");
            error.statusCode=403;
            throw error;
        }
        const updatedSubscription=await Subscription.findByIdAndUpdate(id,{$set:{status:"cancelled"}},{new:true, runValidators:true});
        res.status(200).json({success:true,data:updatedSubscription}); 
    }catch(e){
        next(e);
    }
}

export const getUpcomingRenewals=async(req,res,next)=>{
    const  userID=req.user.id;
    const today=new Date();
    const nextWeek=new Date();
    nextWeek.setDate(today.getDate()+7);
    try{
        const renewals= await Subscription.find({
            user:userID,
            renewalDate:{$gte:today, $lte:nextWeek}
        })
        if(renewals.length==0){
            res.status(200).json({success:true,data:renewals,message:"No upcoming renewals"});
        }
        res.status(200).json({success:true,data:renewals});
    }catch(e){
        next(e);
    }
}