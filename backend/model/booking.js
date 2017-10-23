var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var BookSchema = mongoose.Schema({
    match: {
        type: String
    },
    matchid: {
        type: String
    },
    seats:{
        row1:{
            slots1:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots2:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots3:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots4:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots5:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots6:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            }
        },
        row2:{
            slots1:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots2:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots3:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots4:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots5:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots6:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            }
        },
        row3:{
            slots1:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots2:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots3:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots4:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots5:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots6:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            }
        },
        row4:{
            slots1:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots2:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots3:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots4:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots5:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots6:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            }
        },
        row5:{
            slots1:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean
                }
            },
            slots2:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean
                }
            },
            slots3:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean
                }
            },
            slots4:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean
                }
            },
            slots5:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean
                }
            },
            slots6:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean
                }
            }
        },
     row6:{
        slots1:{
            email:{
                type:String,
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots2:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots3:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots4:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots5:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots6:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        }
    },
    row7:{
        slots1:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots2:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots3:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots4:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots5:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots6:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
                default:false
            }
        }
    },
    row8:{
        slots1:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots2:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots3:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots4:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots5:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots6:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        }
    },
    row9:{
        slots1:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots2:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots3:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots4:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots5:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        },
        slots6:{
            email:{
                type:String
            },
            Status:{
                type:Boolean,
            default:false
            }
        }
    },
        row10:{
            slots1:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots2:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots3:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots4:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots5:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            },
            slots6:{
                email:{
                    type:String
                },
                Status:{
                    type:Boolean,
                    default:false
                }
            }
        }
    }
}, { collection:'tickets'});

var Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.createBooking = function(newUser, callback){
    console.log("SAVING DATA");
    newUser.save(callback);
};

/*
module.exports.getUserByEmail = function(email, callback){
    var query = {email: email};
    User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err)
            throw err;
        callback(null, isMatch);
    });
};
*/
