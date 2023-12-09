import dotenv from 'dotenv';
dotenv.config();

import WorkshopModel from '../models/Workshop.js';

class WorkshopController {


    static workshopRegistration = async (req, res) => {
        try {
            const { title, description, pricing, date, tags, image, host_id } = req.body;

            if (!(title && description && tags && host_id)) {
                throw new Error("All fields are required");
            }

            const workshop = new WorkshopModel({
                title,
                description,
                pricing,
                tags,
                image,
                date,
                host_id,
            });

            await workshop.save();

            const savedWorkshop = await WorkshopModel.findOne({ title });

            res.send({
                _id: savedWorkshop._id,
                message: "Registered Successfully",
                status: "success",
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                message: error.message,
            });
        }
    };


    static workshopFetch = async (req, res) => {
        try {
            const workshops = await WorkshopModel.find();
    
            res.send({
                status: "success",
                message: "Workshops fetched successfully",
                data: workshops,
            });
        } catch (error) {
            res.send({
                status: "failed",
                message: error.message,
            });
        }
    };

    static workshopFetchById = async (req, res) => {
        try {
            const  id  = req.params._id;
    
            if (!id) {
                return res.status(400).send({
                    status: "failed",
                    message: `Workshop ${id} parameter is required`,
                });
                
            }
    
            const workshop = await WorkshopModel.findById(id);
    
            if (!workshop) {
                return res.status(404).send({
                    status: "failed",
                    message: "Workshop not found",
                });
            }
    
            res.send({
                status: "success",
                message: "Workshop fetched successfully",
                data: workshop,
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                message: error.message,
            });
        }
    };
    
    static workshopUpdate = async (req, res) => {
        try {
            const { title, description, pricing, date, tags, image } = req.body;
    
            if (!(title && description && pricing && date && tags && image)) {
                throw new Error("All fields are required");
            }
    
            const workshopData = {
                title,
                description,
                pricing,
                tags,
                image,
                date,
                host_id,
            };
    
            const { _id } = req.params;
    
            if (_id) {
                const updatedWorkshop = await WorkshopModel.findByIdAndUpdate(_id, workshopData, { new: true });
    
                if (!updatedWorkshop) {
                    throw new Error("Workshop not found");
                }
    
                res.send({
                    status: "success",
                    message: "Workshop updated successfully",
                    data: updatedWorkshop,
                });
            } else {
                const newWorkshop = new WorkshopModel(workshopData);
                const savedWorkshop = await newWorkshop.save();
    
                res.send({
                    status: "success",
                    message: "Workshop created successfully",
                    data: savedWorkshop,
                });
            }
        } catch (error) {
            res.status(500).send({
                status: "failed",
                message: error.message,
            });
        }
    };

    static workshopDeleteById = async (req, res) => {
        try {
            const id = req.params._id;

            if (!id) {
                return res.status(400).send({
                    status: "failed",
                    message: "Workshop ID parameter is required",
                });
            }

            const deletedWorkshop = await WorkshopModel.findByIdAndDelete(id);

            if (!deletedWorkshop) {
                return res.status(404).send({
                    status: "failed",
                    message: "Workshop not found",
                });
            }

            res.send({
                status: "success",
                message: "Workshop deleted successfully",
                data: deletedWorkshop,
            });
        } catch (error) {
            res.status(500).send({
                status: "failed",
                message: error.message,
            });
        }
    };
    
    
}

export default WorkshopController;