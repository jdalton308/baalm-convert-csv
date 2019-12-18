

const answerMap = {
  ethnicity: {
    valueMap: {
      'Black/African American':'black-african-american',
      'American Indian':'american-indian',
      'Middle Eastern':'middle-eastern',
      'South East Asian':'south-east-asian',
      'South East Asian':'pacific-islander',
      'Asian/Asian-American':'asian-asian-american',
      'Hispanic/Latino-American':'hispanic-latino-american',
      'White/European-American':'white-european-american',
      'Other':'ethnicity-other',
    },
  },

  gender_identity: {
    valueMap: {
      'Woman': 'woman',
      'Man': 'man',
      'Trans Woman': 'trans-woman',
      'Trans Man': 'trans-man',
      'Transitioning': 'transitioning',
      'Third gender/non-binary': 'third-gender-non-binary',
      'I’d prefer not to identify': 'prefer-not',
    },
  },

  age: {
    valueMap: {
      'Teens': 'teens',
      '20s': '20s',
      '30s': '30s',
      '40s': '40s',
      '50s': '50s',
      '60s': '60s',
      '70s': '70s',
      '80s': '80s',
      '90s': '90s',
      '100s': '100s',
    },
  },

  reason_for_joining: {
    valueMap: {
      'I have a specific skin goal': 'specific',
      'I want to learn more about my general skin health': 'general',
      'I want to learn more about my skincare routine': 'learn-more',
      'I want to discover something new about my products': 'discover',
    },
  },

  skin_concerns: {
    valueMap: {
      'Sensitivity': 'sensitivity',
      'Redness & rosacea': 'redness-rosacea',
      'Fine lines & wrinkles': 'fine-lines-wrinkles',
      'Firmness & elasticity': 'firmness-elasticity',
      'Hyperpigmentation & post-breakout spots': 'hyperpigmentation-post-breakout-spots',
      'Uneven skin texture': 'uneven-skin-texture',
      'Dryness': 'dryness',
      'Dehydration': 'dehydration',
      'Oiliness': 'oiliness',
      'Clogged pores & blackheads': 'clogged-pores-blackheads',
      'Sun damage & dark spots': 'sun-damage-dark-spots',
      'Undereye puffiness and/or dark circles': 'undereye-puffiness-dark-circles',
      'Acne & blemishes': 'acne',
      'Uneven skin texture': 'uneven-skin-texture',
    },
  },

  skin_type: {
    valueMap: {
      'Combination': 'combination',
      'Dry': 'dry',
      'Oily': 'oily',
      'Neutral': 'neutral',
    },
  },

  how_often_sensitivity: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
      'Only on certain occasions / after reactions': 'certain-occassions',
    },
  },
  irritation_sensitivity: {
    valueMap: {
      'Yes, I do!': 'yes',
      'Nope, not me!': 'no',
    },
  },
  burning_sensitivity: {
    valueMap: {
      'Yes, I do!': 'yes',
      'Nope, not me!': 'no',
    },
  },
  tightness_sensitivity: {
    valueMap: {
      'Yeah, that’s me': 'yes',
      'Nope, not me!': 'no',
    },
  },
  hot_sensitivity: {
    valueMap: {
      'Yep, it does': 'yes',
      'Nope, not me!': 'no',
    },
  },

  how_often_redness: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
      'Only on certain occassions / after reactions': 'certain-occassions',
    }    
  },
  persistent_redness: {
    valueMap: {
      'Yes, it sure is': 'yes',
      'No, it comes and goes': 'no',
    }
  },
  episodic_flushing: {
    valueMap: {
      'Yep, I can look ~blushed~': 'yes',
      'Nope, not me': 'no',
    }
  },
  oily_flaky_patches_redness: {
    valueMap: {
      'Yes, I have both!': 'both',
      'I only have oily patches, no dryness here': 'oily',
      'I only have dry patches!': 'dry',
      'No, my texture is pretty even': 'no',
    }
  },
  visible_veins_redness: {
    valueMap: {
      'Yes, they peek out to say hi': 'yes',
      'No, I can’t see them': 'no',
    }
  },

  how_concerned_wrinkles: {
    valueMap: {
      'I don’t think about them too much': 'not-much',
      'Every now and then when I’m really looking in the mirror': 'mirror',
      'Constantly!': 'constantly',
    }
  },
  area_target_wrinkles: {
    valueMap: {
      'Around my eyes': 'around-my-eyes',
      'My forehead': 'my-forehead',
      'Around my mouth & nose': 'mouth-nose',
      'My neck': 'my-neck',
      'All of the above': 'all-of-the-above',
    }
  },
  prevention_treatment_wrinkles: {
    valueMap: {
      'Prevention. I’m setting myself up for success!': 'prevention',
      'I’d like to tackle this now with some treatment': 'treatment',
    }
  },

  how_concerned_firmess: {
    valueMap: {
      'I don’t think about them too much': 'not-much',
      'Every now and then when I’m really looking in the mirror': 'mirror',
    }
  },
  sagging_firmness: {
    valueMap: {
      'Nope, not really!': 'no',
      'Yep, gravity is here': 'yes',
    }
  },
  loss_definition_firmness: {
    valueMap: {
      'Things are still pretty defined': 'no',
      'I’d like to get some shape & definition back': 'yes',
    }
  },
  plumpness_firmness: {
    valueMap: {
      'Things are still pretty defined': 'no',
      'I’d like to add some volume into my skin': 'yes',
    }
  },

  how_often_hyperpigmentation: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
      'Occasionally': 'occassionally',
    }
  },
  spots_raised_hyperpigmentation: {
    valueMap: {
      'Yes, they’re raised to the touch': 'yes',
      'Nope, they’re flush with the rest of my skin': 'no',
    }
  },
  hormonal_hyperpigmentation: {
    valueMap: {
      'Yes, I’ve experienced some changes lately': 'yes',
      'No, everything is the same': 'no',
    }
  },
  injuries_hyperpigmentation: {
    valueMap: {
      'Yes, I’ve had some acne or a skin injury': 'yes',
      'No, nothing like that': 'no',
    }
  },

  how_often_dryness: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
      'Only in the cold / dry seasons': 'only-seasons',
    }
  },
  does_your_skin_feel_itchy: {
    valueMap: {
      'Yes, it’s definitely itchy': 'yes',
      'Nope, no itch here': 'no',
    }
  },
  flaking_dryness: {
    valueMap: {
      'Yes, it’s definitely itchy': 'yes',
      'No, just business as usual': 'no',
    }
  },
  rough_dryness: {
    valueMap: {
      'Yep, it’s rough to the touch.': 'yes',
      'No, things are smooth': 'no',
    }
  },
  tightness_shower_dryness: {
    valueMap: {
      'Yes, showers make my skin tight': 'yes',
      'Nah, same old, same old': 'no',
    }
  },

  how_often_oily: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
      'Only when it’s hot or humid outside': 'hot-outside',
    }
  },
  where_oily: {
    valueMap: {
      'My T-Zone (Forehead, nose)': 't-zone',
      'My cheeks': 'cheeks',
      'My chin': 'chin',
      'Everywhere': 'everywhere',
    }
  },
  tight_but_oil: {
    valueMap: {
      'Yes, it does!': 'yes',
      'Nope, no tightness for me': 'no',
    }
  },
  after_washing_how_long_oily: {
    valueMap: {
      'It gets oily again within the hour': 'within-hour',
      'It takes 3-4 hours': '3-4-hours',
      'It’s oily again after 8 hours': 'after-8-hours',
    }
  },

  where_blackheads: {
    valueMap: {
      'Mostly on my forehead': 'forehead',
      'Mostly on my nose & surrounding area': 'nose',
      'Mostly on my chin': 'chin',
      'Mostly on my cheeks': 'cheeks',
      'Everywhere': 'everywhere',
    }
  },
  extractions_blackheads: {
    valueMap: {
      'Yes! Get those suckers out!': 'yes',
      'No, I don’t': 'no',
    }
  },
  how_often_blackheads: {
    valueMap: {
      'Often, 1-2x a month': '1-2-a-month',
      'Monthly': 'monthly',
      'Every now and then, 1-2x a year': '1-2x-a-year',
    }
  },
  blackheads_persistent: {
    valueMap: {
      'Yes, they keep a-coming back': 'yes',
      'Nope, once they’re gone, they stay that way': 'no',
    }
  },

  how_long_uneven: {
    valueMap: {
      'Less than one month': 'less-than-one-month',
      'Several months': 'months',
      'Years': 'years',
      'As long as i can remember': 'forever',
    }
  },
  how_texture_manifests: {
    valueMap: {
      'Raised areas': 'raised-areas',
      'Individual bumps': 'individual-bumps',
      'Inflammation': 'inflammation',
    }
  },
  texture_bumps: {
    valueMap: {
      'Yes': 'yes',
      'No': 'no',
    }
  },
  texture_tags: {
    valueMap: {
      'Yes': 'yes',
      'No': 'no',
    }
  },
  texture_pearls: {
    valueMap: {
      'Yes': 'yes',
      'No': 'no',
    }
  },

  sun_spots: {
    valueMap: {
      'Yes, I have some gracing my face': 'yes',
      'Nope, no signs of them': 'no',
    }
  },
  dry_flakey_skin: {
    valueMap: {
      'Yes, my skin has patches of dryness': 'yes',
      'No, my skin is pretty uniform': 'no',
    }
  },
  fine_lines_wrinkles_sun_damage: {
    valueMap: {
      'Yes, I’ve got some lines and wrinkles going on': 'yes',
      'Not yet!': 'no',
    }
  },

  how_often_under_eye: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
    }
  },
  dark_circles: {
    valueMap: {
      'I do, yep.': 'yes',
      'I don’t see any dark circles here': 'no',
    }
  },
  circles_color: {
    valueMap: {
      'Purple': 'purple',
      'Blue': 'blue',
      'Pink': 'pink',
    }
  },

  how_often_acne: {
    valueMap: {
      'Everyday': 'everyday',
      'Weekly': 'weekly',
      'Once a month': 'once-a-month',
      'Only on my period': 'period',
    }
  },
  where_acne: {
    valueMap: {
      'My T-Zone (Forehead, nose)': 't-zone',
      'My cheeks': 'cheeks',
      'My chin': 'chin',
      'Everywhere': 'everywhere',
    }
  },
  red_inflamed_pimples: {
    valueMap: {
      'Yes, they’re angry!': 'yes',
      'No, they’re pretty tame': 'no',
    }
  },
  small_red_and_tender_bumps: {
    valueMap: {
      'Yep, sounds about right': 'yes',
      'Not I': 'no',
    }
  },
  large_painful_bumps: {
    valueMap: {
      'Yes! Darn they hurt!': 'yes',
      'No under-skin bumps here': 'no',
    }
  },

  values: {
    valueMap: {
      'Vegan': 'vegan',
      'Gluten-free': 'gluten-free',
      'Sulfate-free': 'sulfate-free',
      'Paraben-free': 'paraben-free',
      'Alcohol-free': 'alcohol-free',
    }
  },
  goal: {
    valueMap: {
      'I want to switch out products for cheaper alternatives and save some $$$': 'cheaper-alternatives',
      'I want to know that I am using have the most effective active ingredients': 'effective-active-ingredients',
      'I want to remove any duplicate products from my routine': 'remove-duplicate-products',
      'I want to remove any products that cancel each other out': 'remove-products-that-cancel-each-other',
      'I want to make the switch to only clean products': 'only-clean-products',
    }
  },
  how_would_you_characterize_you: {
    valueMap: {
      'Minimal': 'minimal',
      'Essential': 'essential',
      'Complete': 'complete',
    }
  },
  shopping_habits: {
    valueMap: {
      'Drug Store': 'drug-store',
      'Specialty': 'specialty',
      'Clean': 'clean',
      'Luxury': 'luxury',
    }
  },
  pregnancy: {
    valueMap: {
      'Pregnant': 'yes',
      'Breastfeeding': 'yes',
      'Trying': 'yes',
      'No': 'no',
    },
    newId: 'pregnant_breastfeeding_or_tryi',
  },

};


module.exports = {
  answerMap,
};