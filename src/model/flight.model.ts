import mongoose from "mongoose";
const { Schema, Model }: any = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const FlightSchema = new Schema(
  [
    {
      flightDate: {
        type: Date,
        default: Date.now,
      },
      flightName: {
        type: String,
        required: false,
      },
      createdFlightCategory: {
        type: ObjectId,
        ref: "Category",
      },
      flightDescription: {
        type: String,
        required: false,
      },
      flightLocation: {
        type: String,
        required: false,
      },
      flightType: {
        type: String,
        required: false,
      },
      flightAmount: {
        type: String,
        required: false,
      },
      flightTax: {
        type: String,
        required: false,
        default: 0,
      },
      flightPhotoName: {
        type: String,
        required: false,
      },
      flightPhotoData: {
        type: String,
        required: false,
      },
      flightSellingUnit: {
        type: String,
        required: false,
      },
      flightSku: {
        type: String,
        required: false,
      },
      flightSellingPrice: {
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

export const Flight = Model("Flight", FlightSchema);
