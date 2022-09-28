import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test?directConnection=true', {
    
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))