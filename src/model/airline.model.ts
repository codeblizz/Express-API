import mongoose from "mongoose";
const { Schema, model }: any = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const AirlineSchema = new Schema(
  [
    {
      airlineName: {
        type: String,
        required: false,
      },
      createdAirlineCategory: {
        type: ObjectId,
        ref: "Category",
      },
      airlineDescription: {
        type: String,
        required: false,
      },
      airlineLocation: {
        type: String,
        required: false,
      },
      airlineType: {
        type: String,
        required: false,
      },
      airlineAmount: {
        type: String,
        required: false,
      },
      airlineTax: {
        type: String,
        required: false,
        default: 0,
      },
      airlinePhotoName: {
        type: String,
        required: false,
      },
      airlinePhotoData: {
        type: String,
        required: false,
      },
      airlineSellingUnit: {
        type: String,
        required: false,
      },
      airlineSku: {
        type: String,
        required: false,
      },
      airlineSellingPrice: {
        type: String,
        required: false,
        // unique: false,
        // trim: false,
        // minlength: 3
      },
      createdBy: {
        type: ObjectId,
        ref: "User",
      },
      updatedBy: {
        type: ObjectId,
        ref: "User",
      },
      deletedBy: {
        type: ObjectId,
        ref: "User",
      },
    },
  ],
  {
    timestamps: true,
  }
);

export const Airline = model("Airline", AirlineSchema);
