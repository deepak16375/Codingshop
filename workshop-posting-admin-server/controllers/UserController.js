import dotenv from 'dotenv';
dotenv.config();

import UserModel from '../models/User.js';

class UserController {

    //subscribe
    static subscribe = async (req, res) => {
        try {
            const workshop_id = req.params.workshop_id;
            const { email } = req.body;

            let user = await UserModel.findOne({ email: email });
            if (!user) {
                
                user = await UserModel.create({
                    email: email,
                    workshopSubscribed: []
                });
            } else {
                
                user.workshopSubscribed.push(workshop_id);
            }

            await user.save();
            res.send({
                status: "success",
                message: "User subscribed to the workshop successfully."
            });
        } catch (error) {
            res.send({
                status: "failed",
                message: error.message
            });
        }
    }

    //unsubscribe
    static unsubscribe = async (req, res) => {
        try {
            const workshop_id = req.params.workshop_id;
            const { email } = req.body;

            const user = await UserModel.findOne({ email: email });
            if (user) {
                
                user.workshopSubscribed = user.workshopSubscribed.filter(id => id !== workshop_id);
                await user.save();
                res.send({
                    status: "success",
                    message: "User unsubscribed from the workshop successfully."
                });
            } else {
                res.send({
                    status: "failed",
                    message: "User not found."
                });
            }
        } catch (error) {
            res.send({
                status: "failed",
                message: error.message
            });
        }

        
    }
    static getWorkshop = async(req, res)=>{
        try {
            const {email}=req.body

            const user = await UserModel.findOne({ email: email });     

            if(user)
            {
                res.send({
                    data: user.workshopSubscribed,
                    status:"success"
                })
            }
            else
            {
                res.send({
                    status: "failed",
                    message: "User not found !"
                })
            }
        } catch (error) {
            res.send({
                status: "success",
                message: error.message
            })
        }
    }
}

export default UserController;
