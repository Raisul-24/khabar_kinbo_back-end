const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantDetailsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  openCloseTime: {
    opening: {
      type: String,
      required: true
    },
    closing: {
      type: String,
      required: true
    }
  },
  directions: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  facebook: {
    type: String
  },
  instagram: {
    type: String
  },
  twitter: {
    type: String
  },
  website: {
    type: String
  },
  images: [String],
  cuisineType: {
    type: String,
    required: true
  },
  paymentOptions: [String],
  deliveryOptions: [String],
  deliveryFee: {
    type: Number,
    required: true
  },
  minimumOrderAmount: {
    type: Number,
    required: true
  },
  openingDays: {
    Monday: {
      type: String
    },
    Tuesday: {
      type: String
    },
    Wednesday: {
      type: String
    },
    Thursday: {
      type: String
    },
    Friday: {
      type: String
    },
    Saturday: {
      type: String
    },
    Sunday: {
      type: String
    }
  },
  specialOffers: [
    {
      offerName: {
        type: String
      },
      offerDetails: {
        type: String
      },
      validity: {
        type: String
      }
    }
  ],
  restaurantFacilities: [String],
  businessHours: {
    Monday: {
      type: String
    },
    Tuesday: {
      type: String
    },
    Wednesday: {
      type: String
    },
    Thursday: {
      type: String
    },
    Friday: {
      type: String
    },
    Saturday: {
      type: String
    },
    Sunday: {
      type: String
    }
  },
  accessibilityFeatures: [String],
  averagePriceRange: {
    type: String
  },
  reservation: {
    available: {
      type: Boolean,
      required: true
    },
    reservationLink: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    reservationPolicies: {
      cancellationPolicy: {
        type: String
      },
      groupSizePolicy: {
        type: String
      }
    }
  },
  staff: [
    {
      name: {
        type: String
      },
      position: {
        type: String
      },
      bio: {
        type: String
      },
      image: {
        type: String
      }
    }
  ],
  reviews: [
    {
      rating: {
        type: Number,
        required: true
      },
      review: {
        type: String,
        required: true
      },
      user: {
        type: String,
        required: true
      },
      reviewDate: {
        type: Date,
        required: true
      },
      reviewImages: [String]
    }
  ],
  menuItems: [
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      ingredients: [String],
      allergens: [String]
    }
  ]
});

const RestaurantDetails = mongoose.model('RestaurantDetails', restaurantDetailsSchema);

module.exports = RestaurantDetails;
