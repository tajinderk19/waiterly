const UserSession = new mongoose.Schema({
    userId: { 
        type: Number, 
        default: -1 
    },
    timestamp: { 
        type: Date, 
        default: Date.now() 
    },
    isDeleted: { 
        type: Boolean, 
        required: false 
    },

});

module.exports = mongoose.model('User_session', UserSession);