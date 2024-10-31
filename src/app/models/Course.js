import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String,  },
    videoId: { type: String ,require: true },
    level: { type: String  },
    slug: {type: String, slug: 'name', }
},{
    timestamps: true,
});

// add pulgin
mongoose.plugin(slug)
Course.plugin(mongooseDelete)

export default mongoose.model('Course', Course);
