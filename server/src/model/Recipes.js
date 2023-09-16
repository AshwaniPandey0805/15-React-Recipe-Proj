import moogoose from "mongoose";

const RecipeSchema = new moogoose.Schema({
    name: {
        type: String,
        required: true,
    },
        ingredienats: [{ type: String, required: true }],
        instructions: { type: String, required: true },
        imageURL: { type: String, required: true },
        cookingTime: { type: Number, required: true },
        UserOwner: {
            type: moogoose.Schema.Types.ObjectId,
            ref: "users", 
            required: true,
    },
});

export const RecipeModel = moogoose.model("recipes", RecipeSchema);
