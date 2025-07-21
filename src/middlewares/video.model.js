import mongoose,{ Schema } from 'mongoose';
import mongooseAggregtePaginate from 'mongoose-aggregate-paginate-v2';
const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true,

        },
        thumbnail:{
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true
        },
        duration: {
            type: Number,


        },
        views: {
            type: Number,
            default: 0
        },
        isPublised: {

            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User",
        }        

    }
)

videoSchema.plugin(mongooseAggregtePaginate);

export const Video = mongoose.model("Video", videoSchema);