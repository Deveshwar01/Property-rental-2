import { User } from "../models/user.js";
import{ Propertys }from "../models/property.js"
export const getAllBuyer = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (users.length === 0) return res.status(404).json({ success: false, message: "No user exist" })
        return res.status(200).json({ users, })
    } catch (error) {
        next(error)
    }
}

export const createProperty = async (req, res, next) => {
    try {
        const { Id, description, image, owner } = req.body;
        if (!Id || !title || !description || !owner || !image) {
            return res.status(400).json({
                success: false,
                message: "Id,Title, description,Image and owner are required fields"
            });
        }
        await Blog.create({ Id, description, image, owner });
        res.status(201).json({
            success: true,
            message: "property created successfully"
        });
    } catch (error) {
        next(error);
    }
}

export const deleteProperty = async (req, res, next) => {
    try {
        const { Id } = req.params;

        // Validate ID format (optional)
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid property ID",
            });
        }

        // Delete the property by Id
        const deletedproperty = await Blog.findOneAndDelete({ Id });

        if (!deletedproperty) {
            return res.status(404).json({
                success: false,
                message: "property not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "property deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
export const updateProperty = async (req, res, next) => {
    try {
        const { Id } = req.params;
        const { title, description, image, owner } = req.body;
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid property ID",
            });
        }
        const updateproperty = await Blog.findOneAndUpdate(
            { Id },
            { title, description, image, owner },
            { new: true }
        )

        if (!updateproperty) {
            return res.status(404).json({
                success: false,
                message: "property not updated",
            });
        }
        return res.status(200).json({
            success: true,
            message: "property Updated successfully",
            property: updateproperty,
        });


    } catch (error) {
        next(error)
    }

}