import mongoose from "mongoose";

const { Schema, model }: any = mongoose;
// const { Types } = Schema;
// const { ObjectId } = Types;

const UserSchema = new Schema(
  [
    {
      email: {
        type: String,
        required: true,
        unique: true,
        //sparse - allow null values which will later be filled with unique values 
        // sparse: true, 
        trim: true,
        minlength: 3,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
      },
      passwordConfirm: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
      },
    },
  ],
  {
    timestamps: true,
  }
);

export const User = model("User", UserSchema);
