import { Schema, model } from "mongoose";

interface Option {
    grade: string,
    fees: number,
    seats: number
}
interface Grade {
    category: string,
    options: Array<Option>
}
const optionSchema = new Schema<Option>({
    grade:
    {
        type: String,
        required: true
    },
    fees:
    {
        type: Number,
        required: true
    },
    seats:
        { 
            type: Number,
            required:true 
        }
})

const gradeSchema = new Schema<Grade>({
    category:
    {
        type: String,
        required: true
    },
    options: [optionSchema]
})
module.exports = model<Grade>("admission", gradeSchema);