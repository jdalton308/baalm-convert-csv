
import { answers } from './storeAnswers.js';


// VALUE MAPS
//--------------

// key: answer prefix for products/ingredients; value: Product Type label
const productLabelToType = { 
  'cleansers': 'Cleanser',
  'toner-essence': 'Toner/Essence',
  'serum': 'Serum',
  'moisturizers': 'Moisturizer',
  'oils': 'Oil',
  'retinol': 'Retinol',
  'sunscreen': 'Sunscreen',
  'chemical-exfoliators': 'Chemical Exfoliator',
  'physical-exfoliators': 'Physical Exfoliator',
  'masks': 'Mask'
};

// Structure:
// [label of custom field in Shopify] : {
//   [key used in answer store - usually 'Yes'/'No'] : [human readable/expected value for Shopify field] 
// }
const answerGroups = {
  ethnicity: {
    'black-african-american': 'Black/African American',
    'american-indian': 'American Indian',
    'middle-eastern': 'Middle Eastern',
    'south-east-asian': 'South East Asian',
    'pacific-islander': 'South East Asian',
    'asian-asian-american': 'Asian/Asian-American',
    'hispanic-latino-american': 'Hispanic/Latino-American',
    'white-european-american': 'White/European-American',
    'ethnicity-other': 'Other',
  },

  gender_identity: {
    'woman': 'Woman',
    'man': 'Man',
    'trans-woman': 'Trans Woman',
    'trans-man': 'Trans Man',
    'transitioning': 'Transitioning',
    'third-gender-non-binary': 'Third gender/non-binary',
    'id-prefer-not-to-identify': 'I’d prefer not to identify',
  },
  age: {
    'teens': 'Teens',
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
  reason_for_joining: {
    'specific': 'I have a specific skin goal',
    'general': 'I want to learn more about my general skin health',
    'learn-more': 'I want to learn more about my skincare routine',
    'discover': 'I want to discover something new about my products',
  },
  skin_concerns: {
    'top-3-sensitivity': 'Sensitivity',
    'top-3-redness-rosacea': 'Redness & rosacea',
    'top-3-fine-lines-wrinkles': 'Fine lines & wrinkles',
    'top-3-firmness-elasticity': 'Firmness & elasticity',
    'top-3-hyperpigmentation-post-breakout-spots': 'Hyperpigmentation & post-breakout spots',
    'top-3-uneven-skin-texture': 'Uneven skin texture',
    'top-3-dryness-skin-feels-rough-looks-dry': 'Dryness',
    'top-3-dehydration-skin-is-tight-and-oily': 'Dehydration',
    'top-3-oiliness': 'Oiliness',
    'top-3-clogged-pores-blackheads': 'Clogged pores & blackheads',
    'top-3-sun-damage-dark-spots': 'Sun damage & dark spots',
    'top-3-undereye-puffiness-and-or-dark-circles': 'Undereye puffiness and/or dark circles',
    'top-3-acne-blemishes': 'Acne & blemishes',
    'top-3-uneven-skin-texture': 'Uneven skin texture'
  },
  skin_type: {
    'combination': 'Combination',
    'dry': 'Dry',
    'oily': 'Oily',
    'neutral': 'Neutral',
  },

  // Concern: Sensitivity
  how_often_sensitivity: {
    'how-often-does-your-skin-feel-sensitive-everyday': 'Everyday',
    'how-often-does-your-skin-feel-sensitive-weekly': 'Weekly',
    'how-often-does-your-skin-feel-sensitive-once-a-month': 'Once a month',
    'how-often-does-your-skin-feel-sensitive-only-on-certain-occassions-after-reactions': 'Only on certain occasions / after reactions',
  },
  irritation_sensitivity: {
    'do-you-experience-any-irritation-when-using-skincare-products-yes-i-do': 'Yes, I do!',
    'do-you-experience-any-irritation-when-using-skincare-products-nope-not-me': 'Nope, not me!',
  },
  burning_sensitivity: {
    'do-you-experience-a-burning-sensation-on-your-skin-yes-i-do': 'Yes, I do!',
    'do-you-experience-a-burning-sensation-on-your-skin-nope-not-me': 'Nope, not me!',
  },
  tightness_sensitivity: {
    'what-about-tautness-or-tightness-yeah-thats-me': 'Yeah, that’s me',
    'what-about-tautness-or-tightness-nope-not-me': 'Nope, not me!',
  },
  hot_sensitivity: {
    'does-it-feel-hot-yep-it-does': 'Yep, it does',
    'does-it-feel-hot-nope-not-me': 'Nope, not me!'
  },

  // Concern: Redness
  how_often_redness: {
    'how-often-do-you-experience-facial-redness-everyday': 'Everyday',
    'how-often-do-you-experience-facial-redness-weekly': 'Weekly',
    'how-often-do-you-experience-facial-redness-once-a-month': 'Once a month',
    'how-often-do-you-experience-facial-redness-only-on-certain-occassions-after-reactions': 'Only on certain occassions / after reactions',
  },
  persistent_redness: {
    'and-is-the-redness-persistent-yes-it-sure-is': 'Yes, it sure is',
    'and-is-the-redness-persistent-no-it-comes-and-goes': 'No, it comes and goes',
  },
  episodic_flushing: {
    'do-you-experience-episodic-facial-flushing-yep-i-can-look-blushed': 'Yep, I can look ~blushed~',
    'do-you-experience-episodic-facial-flushing-nope-not-me': 'Nope, not me',
  },
  oily_flaky_patches_redness: {
    'do-you-have-some-oily-patches-and-flaky-patches-yes-i-have-both': 'Yes, I have both!',
    'do-you-have-some-oily-patches-and-flaky-patches-i-only-have-oily-patches-no-dryness-here': 'I only have oily patches, no dryness here',
    'do-you-have-some-oily-patches-and-flaky-patches-i-only-have-dry-patches': 'I only have dry patches!',
    'do-you-have-some-oily-patches-and-flaky-patches-no-my-texture-is-pretty-even': 'No, my texture is pretty even',
  },
  visible_veins_redness: {
    'what-about-visible-facial-blood-vessels-and-veins-yes-they-peek-out-to-say-hi': 'Yes, they peek out to say hi',
    'what-about-visible-facial-blood-vessels-and-veins-no-i-can-t-see-them': 'No, I can’t see them',
  },

  // Concern: Fine Lines
  how_concerned_wrinkles: {
    'how-concerned-are-you-with-fine-lines-and-wrinkles-i-dont-think-about-them-too-much': 'I don’t think about them too much',
    'how-concerned-are-you-with-fine-lines-and-wrinkles-every-now-and-then-when-im-really-looking-in-the-mirror': 'Every now and then when I’m really looking in the mirror',
    'how-concerned-are-you-with-fine-lines-and-wrinkles-constantly': 'Constantly!',
  },
  area_target_wrinkles: {
    'which-areas-would-you-like-to-target-around-my-eyes': 'Around my eyes',
    'which-areas-would-you-like-to-target-my-forehead': 'My forehead',
    'which-areas-would-you-like-to-target-around-my-mouth-nose': 'Around my mouth & nose',
    'which-areas-would-you-like-to-target-my-neck': 'My neck',
    'which-areas-would-you-like-to-target-all-of-the-above': 'All of the above',
  },
  prevention_treatment_wrinkles: {
    'are-you-interested-in-prevention-or-treatment-prevention-im-setting-myself-up-for-success': 'Prevention. I’m setting myself up for success!',
    'are-you-interested-in-prevention-or-treatment-id-like-to-tackle-this-now-with-some-treatment': 'I’d like to tackle this now with some treatment',
  },

  // Concern: Firmness
  how_concerned_firmess: {
    'how-concerned-are-you-with-loss-of-firmness-and-elasticity-i-don-t-think-about-them-too-much': 'I don’t think about them too much',
    'how-concerned-are-you-with-loss-of-firmness-and-elasticity-every-now-and-then-when-i-m-really-looking-in-the-mirror': 'Every now and then when I’m really looking in the mirror',
  },
  sagging_firmness: {
    'do-you-experience-sagging-skin-nope-not-really': 'Nope, not really!',
    'do-you-experience-sagging-skin-yep-gravity-is-here': 'Yep, gravity is here',
  },
  loss_definition_firmness: {
    'how-about-loss-of-facial-shape-or-definition-things-are-still-pretty-defined': 'Things are still pretty defined',
    'how-about-loss-of-facial-shape-or-definition-i-d-like-to-get-some-shape-definition-back': 'I’d like to get some shape & definition back',
  },
  plumpness_firmness: {
    'what-about-the-status-of-your-skin-s-plumpness-things-are-still-plump': 'Things are still pretty defined',
    'what-about-the-status-of-your-skin-s-plumpness-i-d-like-to-add-some-volume-into-my-skin': 'I’d like to add some volume into my skin',
  },

  // Concern: Hyperpigmentation
  how_often_hyperpigmentation: {
    'how-often-do-you-experience-hyperpigmentation-or-dark-spots-everyday': 'Everyday',
    'how-often-do-you-experience-hyperpigmentation-or-dark-spots-weekly': 'Weekly',
    'how-often-do-you-experience-hyperpigmentation-or-dark-spots-nce-a-month': 'Once a month',
    'how-often-do-you-experience-hyperpigmentation-or-dark-spots-occassionally': 'Occasionally',
  },
  spots_raised_hyperpigmentation: {
    'do-the-spots-feel-raised-on-your-skin-yes-they-re-raised-to-the-touch': 'Yes, they’re raised to the touch',
    'do-the-spots-feel-raised-on-your-skin-nope-they-re-flush-with-the-rest-of-my-skin': 'Nope, they’re flush with the rest of my skin',
  },
  hormonal_hyperpigmentation: {
    'are-these-related-to-hormonal-changes-yes-i-ve-experienced-some-changes-lately': 'Yes, I’ve experienced some changes lately',
    'are-these-related-to-hormonal-changes-no-everything-is-the-same': 'No, everything is the same',
  },
  injuries_hyperpigmentation: {
    'are-these-spots-caused-by-acne-sites-or-other-injuries-to-your-skin-yes-i-ve-had-some-acne-or-a-skin-injury': 'Yes, I’ve had some acne or a skin injury',
    'are-these-spots-caused-by-acne-sites-or-other-injuries-to-your-skin-no-nothing-like-that': 'No, nothing like that',
  },

  // Concern: Dryness
  how_often_dryness: {
    'how-often-do-you-experience-dry-skin-everyday': 'Everyday',
    'how-often-do-you-experience-dry-skin-weekly': 'Weekly',
    'how-often-do-you-experience-dry-skin-once-a-month': 'Once a month',
    'how-often-do-you-experience-dry-skin-only-in-the-cold-dry-seasons': 'Only in the cold / dry seasons',
  },
  does_your_skin_feel_itchy: {
    'does-your-skin-feel-itchy-yes-it-s-definitely-itchy': 'Yes, it’s definitely itchy',
    'does-your-skin-feel-itchy-nope-no-itch-here': 'Nope, no itch here',
  },
  flaking_dryness: {
    'how-about-flaking-scaling-or-peeling-skin-yes-it-s-flake-city': 'Yes, it’s definitely itchy',
    'how-about-flaking-scaling-or-peeling-skin-no-just-business-as-usual': 'No, just business as usual',
  },
  rough_dryness: {
    'what-about-rough-and-patchy-skin-yep-it-s-rough-to-the-touch': 'Yep, it’s rough to the touch.',
    'what-about-rough-and-patchy-skin-no-things-are-smooth': 'No, things are smooth',
  },
  tightness_shower_dryness: {
    'what-about-skin-tightness-after-showering-yes-showers-make-my-skin-tight': 'Yes, showers make my skin tight',
    'what-about-skin-tightness-after-showering-nah-same-old-same-old': 'Nah, same old, same old',
  },

  // Concern: Oiliness
  how_often_oily: {
    'how-often-do-you-experience-oily-skin-everyday': 'Everyday',
    'how-often-do-you-experience-oily-skin-weekly': 'Weekly',
    'how-often-do-you-experience-oily-skin-once-a-month': 'Once a month',
    'how-often-do-you-experience-oily-skin-only-when-it-s-hot-or-humid-outside': 'Only when it’s hot or humid outside',
  },
  where_oily: {
    'where-do-you-get-oily-my-t-zone-forehead-nose': 'My T-Zone (Forehead, nose)',
    'where-do-you-get-oily-my-cheeks': 'My cheeks',
    'where-do-you-get-oily-my-chi': 'My chin',
    'where-do-you-get-oily-everywhere': 'Everywhere',
  },
  tight_but_oil: {
    'does-your-skin-feel-tight-but-also-produce-oil-yes-it-does': 'Yes, it does!',
    'does-your-skin-feel-tight-but-also-produce-oil-nope-no-tightness-for-me': 'Nope, no tightness for me',
  },
  after_washing_how_long_oily: {
    'after-washing-how-long-does-it-take-for-your-skin-to-get-oily-it-gets-oily-again-within-the-hour': 'It gets oily again within the hour',
    'after-washing-how-long-does-it-take-for-your-skin-to-get-oily-it-takes-3-4-hours': 'It takes 3-4 hours',
    'after-washing-how-long-does-it-take-for-your-skin-to-get-oily-it-s-oily-again-after-8-hours': 'It’s oily again after 8 hours',
  },

  // Concern: Clogged Pores
  where_blackheads: {
    'where-do-you-get-blackheads-mostly-on-my-forehead': 'Mostly on my forehead',
    'where-do-you-get-blackheads-mostly-on-my-nose-surrounding-area': 'Mostly on my nose & surrounding area',
    'where-do-you-get-blackheads-mostly-on-my-chin': 'Mostly on my chin',
    'where-do-you-get-blackheads-mostly-on-my-cheeks': 'Mostly on my cheeks',
    'where-do-you-get-blackheads-everywhere': 'Everywhere',
  },
  extractions_blackheads: {
    'do-you-get-extractions-yes-get-those-suckers-out': 'Yes! Get those suckers out!',
    'do-you-get-extractions-no-i-don-t': 'No, I don’t',
  },
  how_often_blackheads: {
    'how-often-if-yes-selected-often-1-2x-a-month': 'Often, 1-2x a month',
    'how-often-if-yes-selected-monthly': 'Monthly',
    'how-often-if-yes-selected-every-now-and-then-1-2x-a-year': 'Every now and then, 1-2x a year',
  },
  blackheads_persistent: {
    'are-your-blackheads-persistent-yes-they-keep-a-coming-back': 'Yes, they keep a-coming back',
    'are-your-blackheads-persistent-nope-once-they-re-gone-they-stay-that-way': 'Nope, once they’re gone, they stay that way',
  },

  // Concern: Uneven texture
  how_long_uneven: {
    'less-than-one-month': 'Less than one month',
    'several-month': 'Several months',
    'years': 'Years',
    'as-long-as-i-can-remember': 'As long as i can remember',
  },
  how_texture_manifests: {
    'raised-areas': 'Raised areas',
    'individual-bumps': 'Individual bumps',
    'inflammation': 'Inflammation',
  },
  texture_bumps: {
    'yes-bumps-uneven-skin-texture': 'Yes',
    'no-bumps-uneven-skin-texture': 'No',
  },
  texture_tags: {
    'yes-tags-uneven-skin-texture': 'Yes',
    'no-tags-uneven-skin-texture': 'No',
  },
  texture_pearls: {
    'yes-pearls-uneven-skin-texture': 'Yes',
    'no-pearls-uneven-skin-texture': 'No',
  },

  // Concern: Sun Damage
  sun_spots: {
    'do-you-have-sun-spots-yes-i-have-some-gracing-my-face': 'Yes, I have some gracing my face',
    'do-you-have-sun-spots-nope-no-signs-of-them': 'Nope, no signs of them',
  },
  dry_flakey_skin: {
    'do-you-have-areas-of-dry-flakey-skin-yes-my-skin-has-patches-of-dryness': 'Yes, my skin has patches of dryness',
    'do-you-have-areas-of-dry-flakey-skin-no-my-skin-is-pretty-uniform': 'No, my skin is pretty uniform',
  },
  fine_lines_wrinkles_sun_damage: {
    'do-you-have-some-fine-lines-and-wrinkles-yes-i-ve-got-some-lines-and-wrinkles-going-o': 'Yes, I’ve got some lines and wrinkles going on',
    'do-you-have-some-fine-lines-and-wrinkles-not-yet': 'Not yet!',
  },

  // Concern: Puffiness
  how_often_under_eye: {
    'how-often-do-you-experience-puffiness-everyday': 'Everyday',
    'how-often-do-you-experience-puffiness-weekly': 'Weekly',
    'how-often-do-you-experience-puffiness-once-a-month': 'Once a month',
  },
  dark_circles: {
    'do-you-have-dark-circles-i-do-yep': 'I do, yep.',
    'do-you-have-dark-circles-i-don-t-see-any-dark-circles-here': 'I don’t see any dark circles here',
  },
  circles_color: {
    'what-color-are-your-circles-purple': 'Purple',
    'what-color-are-your-circles-blue': 'Blue',
    'what-color-are-your-circles-pink': 'Pink',
  },

  // Concern: Acne
  how_often_acne: {
    'how-often-do-you-experience-acne-everyday': 'Everyday',
    'how-often-do-you-experience-acne-weekly': 'Weekly',
    'how-often-do-you-experience-acne-once-a-month': 'Once a month',
    'how-often-do-you-experience-acne-only-on-my-period': 'Only on my period',
  },
  where_acne: {
      'where-do-you-get-acne-my-t-zone-forehead-nose': 'My T-Zone (Forehead, nose)',
      'where-do-you-get-acne-my-cheeks': 'My cheeks',
      'where-do-you-get-acne-my-chin': 'My chin',
      'where-do-you-get-acne-everywhere': 'Everywhere',
  },
  red_inflamed_pimples: {
      'do-you-get-red-inflamed-pimples-yes-they-re-angry': 'Yes, they’re angry!',
      'do-you-get-red-inflamed-pimples-no-they-re-pretty-tame': 'No, they’re pretty tame',
  },
  small_red_and_tender_bumps: {
      'what-about-small-red-and-tender-bumps-yep-sounds-about-right': 'Yep, sounds about right',
      'what-about-small-red-and-tender-bumps-not-i': 'Not I',
  },
  large_painful_bumps: {
    'what-about-large-painful-bumps-under-your-skin-yes-darn-they-hurt': 'Yes! Darn they hurt!',
    'what-about-large-painful-bumps-under-your-skin-no-under-skin-bumps-here': 'No under-skin bumps here',
  },

  values: {
    'vegan': 'Vegan',
    'gluten-free': 'Gluten-free',
    'sulfate-free': 'Sulfate-free',
    'paraben-free': 'Paraben-free',
    'alcohol-free': 'Alcohol-free',
    'breastfeeding': 'Safe for pregnancy',
    'trying': 'Safe for pregnancy',
    'pregnant': 'Safe for pregnancy'
  },
  goal: {
    'i-want-to-switch-out-products-for-cheaper-alternatives-and-save-some': 'I want to switch out products for cheaper alternatives and save some $$$',
    'i-want-to-know-that-i-am-using-have-the-most-effective-active-ingredients': 'I want to know that I am using have the most effective active ingredients',
    'i-want-to-remove-any-duplicate-products-from-my-routine': 'I want to remove any duplicate products from my routine',
    'i-want-to-remove-any-products-that-cancel-each-other-out': 'I want to remove any products that cancel each other out',
    'i-want-to-make-the-switch-to-only-clean-products': 'I want to make the switch to only clean products',
  },
  how_would_you_characterize_you: {
    'minimal':'Minimal',
    'essential':'Essential',
    'complete':'Complete',
  },
  shopping_habits: {
    'drug-store':  'Drug Store',
    'specialty': 'Specialty',
    'clean': 'Clean',
    'luxury': 'Luxury',
  },
  pregnancy: {
    'pregnant': 'Pregnant',
    'breastfeeding': 'Breastfeeding',
    'trying': 'Trying',
    'no': 'No',
  },
};


const productKeys = { // index: key in shopify customer meta; value: key in quiz/product info prefix in answers
  'cleanser': 'cleansers',
  'toneressence': 'toner-essence',
  'serum': 'serum',
  'moisturizer': 'moisturizers',
  'oil': 'oils',
  'retinol': 'retinol',
  'sunscreen': 'sunscreen',
  'chemex': 'chemical-exfoliators',
  'pex': 'physical-exfoliators',
  'mask': 'masks'
};

const productTypeNames = { // index: key in shopify customer meta; value: key in quiz
  'cleanser': 'Cleanser',
  'toneressence': 'Toner/Essence',
  'serum': 'Serum',
  'moisturizer': 'Moisturizer',
  'oil': 'Oil',
  'retinol': 'Retinol',
  'sunscreen': 'Sunscreen',
  'chemex': 'Chemical Exfoliator',
  'pex': 'Physical Exfoliator',
  'mask': 'Mask'
};



// CONVERSION FUNCTIONS
//-----------------

function setMetaGroup(metaLabel) {
  let meta = [];

  for (let answerLabel in answerGroups[metaLabel]) {
    if (answers.getAnswer(answerLabel)) {
      meta.push(answerGroups[metaLabel][answerLabel]);
    }
  }

  return meta;
}

function setMetaItem(metaLabel) {
  const options = answerGroups[metaLabel];

  for (let option in options) {
    if (answers.getAnswer(option)) {
      return options[option];
    }
  }
}


function answersToMetaFields() {

  let send = {}
  send['firstName'] = answers.getAnswer('name');
  send['lastName'] = '';
  send['pronouns'] = answers.getAnswer('pronouns');
  send['email'] = answers.getAnswer('email');
  send['skin_tone'] = answers.getAnswer('skin-tone');
  send['skin_type'] = setMetaItem('skin_type');

  send['ethnicity'] = setMetaGroup('ethnicity');
  send['gender_identity'] = setMetaGroup('gender_identity');
  send['age'] = setMetaItem('age');
  send['reason_for_joining'] = setMetaGroup('reason_for_joining');
  send['skin_concerns'] = setMetaGroup('skin_concerns');

  if (send['skin_concerns'].includes('Sensitivity')) {
    send['how_often_sensitivity'] = setMetaItem('how_often_sensitivity');
    send['irritation_sensitivity'] = setMetaItem('irritation_sensitivity');
    send['burning_sensitivity'] = setMetaItem('burning_sensitivity');
    send['tightness_sensitivity'] = setMetaItem('tightness_sensitivity');
    send['hot_sensitivity'] = setMetaItem('hot_sensitivity');
  }

  if (send['skin_concerns'].includes('Redness & rosacea')) {
    send['how_often_redness'] = setMetaItem('how_often_redness');
    send['persistent_redness'] = setMetaItem('persistent_redness');
    send['episodic_flushing'] = setMetaItem('episodic_flushing');
    send['oily_flaky_patches_redness'] = setMetaItem('oily_flaky_patches_redness');
    send['visible_veins_redness'] = setMetaItem('visible_veins_redness');
  }

  if (send['skin_concerns'].includes('Fine lines & wrinkles')) {
    send['how_concerned_wrinkles'] = setMetaItem('how_concerned_wrinkles');
    send['area_target_wrinkles'] = setMetaItem('area_target_wrinkles');
    send['prevention_treatment_wrinkles'] = setMetaItem('prevention_treatment_wrinkles');
  }


  if (send['skin_concerns'].includes('Firmness & elasticity')) {
    send['how_concerned_firmess'] = setMetaItem('how_concerned_firmess');
    send['sagging_firmness'] = setMetaItem('sagging_firmness');
    send['loss_definition_firmness'] = setMetaItem('loss_definition_firmness');
    send['plumpness_firmness'] = setMetaItem('plumpness_firmness');
  }

  if (send['skin_concerns'].includes('Hyperpigmentation & post-breakout spots')) {
    send['how_often_hyperpigmentation'] = setMetaItem('how_often_hyperpigmentation');
    send['spots_raised_hyperpigmentation'] = setMetaItem('spots_raised_hyperpigmentation');
    send['hormonal_hyperpigmentation'] = setMetaItem('hormonal_hyperpigmentation');
    send['injuries_hyperpigmentation'] = setMetaItem('injuries_hyperpigmentation');
  }

  if (send['skin_concerns'].includes('Dryness')) {
    send['how_often_dryness'] = setMetaItem('how_often_dryness');
    send['does_your_skin_feel_itchy'] = setMetaItem('does_your_skin_feel_itchy');
    send['flaking_dryness'] = setMetaItem('flaking_dryness');
    send['rough_dryness'] = setMetaItem('rough_dryness');
    send['tightness_shower_dryness'] = setMetaItem('tightness_shower_dryness');
  }

  if (send['skin_concerns'].includes('Oiliness')) {
    send['how_often_oily'] = setMetaItem('how_often_oily');
    send['where_oily'] = setMetaItem('where_oily');
    send['tight_but_oil'] = setMetaItem('tight_but_oil');
    send['after_washing_how_long_oily'] = setMetaItem('after_washing_how_long_oily');
  }

  if (send['skin_concerns'].includes('Clogged pores / blackheads')) {
    send['where_blackheads'] = setMetaItem('where_blackheads');
    send['extractions_blackheads'] = setMetaItem('extractions_blackheads');
    send['how_often_blackheads'] = setMetaItem('how_often_blackheads');
    send['blackheads_persistent'] = setMetaItem('blackheads_persistent');
  }

  if (send['skin_concerns'].includes('Uneven skin texture')) {
    send['how_long_uneven'] = setMetaItem('how_long_uneven');
    send['how_texture_manifests'] = setMetaItem('how_texture_manifests');
    send['texture_bumps'] = setMetaItem('texture_bumps');
    send['texture_tags'] = setMetaItem('texture_tags');
    send['texture_pearls'] = setMetaItem('texture_pearls');
  }

  if (send['skin_concerns'].includes('Sun damage & dark spots')) {
    send['sun_spots'] = setMetaItem('sun_spots');
    send['dry_flakey_skin'] = setMetaItem('dry_flakey_skin');
    send['fine_lines_wrinkles_sun_damage'] = setMetaItem('fine_lines_wrinkles_sun_damage');
  }

  if (send['skin_concerns'].includes('Under eye puffiness / dark circles')) {
    send['how_often_under_eye'] = setMetaItem('how_often_under_eye');
    send['dark_circles'] = setMetaItem('dark_circles');
    send['circles_color'] = setMetaItem('circles_color');
  }

  if (send['skin_concerns'].includes('Acne / Blemishes')) {
    send['how_often_acne'] = setMetaItem('how_often_acne');
    send['where_acne'] = setMetaItem('where_acne');
    send['red_inflamed_pimples'] = setMetaItem('red_inflamed_pimples');
    send['small_red_and_tender_bumps'] = setMetaItem('small_red_and_tender_bumps');
    send['large_painful_bumps'] = setMetaItem('large_painful_bumps');
    send['circles_color'] = setMetaItem('circles_color');
  }

  send['values'] = setMetaGroup('values');
  send['goal'] = setMetaItem('goal');
  send['how_would_you_characterize_you'] = setMetaItem('how_would_you_characterize_you');
  send['shopping_habits'] = setMetaItem('shopping_habits');
  send['airplane_flights'] = setMetaItem('airplane_flights');
  send['pregnancy'] = setMetaItem('pregnancy');
  send['hours_per_day_on_phonecomputer'] = setMetaItem('hours_per_day_on_phonecomputer');

  send['how_often_cleanser'] = setMetaItem('how_often_cleanser');
  send['times_a_day_toner'] = setMetaItem('times_a_day_toner');
  send['times_a_week_toner'] = setMetaItem('times_a_week_toner');
  send['times_a_day_serum'] = setMetaItem('times_a_day_serum');
  send['times_a_week_serum'] = setMetaItem('times_a_week_serum');
  send['times_a_day_moisturizer'] = setMetaItem('times_a_day_moisturizer');
  send['times_a_day_oils'] = setMetaItem('times_a_day_oils');
  send['times_a_week_retinol'] = setMetaItem('times_a_week_retinol');
  send['times_a_day_sunscreen'] = setMetaItem('times_a_day_sunscreen');
  send['times_a_week_chemex'] = setMetaItem('times_a_week_chemex');
  send['times_a_week_pe'] = setMetaItem('times_a_week_pe');
  send['times_a_week_mask'] = setMetaItem('times_a_week_mask');


  send['allergies'] = answers.getAnswer('ingredients-im-allergic-to-comma-separated');
  send['date_of_quiz'] = getToday();

  send['zipcode'] = answers.getAnswer('zipcode');

  if (window.customerJSON['date_joined']) {
    send['date_joined'] = window.customerJSON['date_joined']
  } else {
    send['date_joined'] = getToday();
  }

  if (!window.customerJSON) {
    send['avatar_color'] = createAvatarColor();
  }

  send['product_types'] = setMetaGroup('product_types');

  // Products and Ingredients...
  Object.keys(productKeys).forEach((shopifyKey, index) => {
    for (var i = 0; i < 9; i++) {

      var quizKey = productKeys[shopifyKey];

      // if using the product category, write products, otherwise delete old ones

      if (answers.getAnswer(shopifyKey)) {
        send[shopifyKey+'_'+(i+1)+'_name'] = answers.getAnswer(quizKey+'-products-'+i) || '';
        send[shopifyKey+'_'+(i+1)+'_ingredients'] = answers.getAnswer(quizKey+'-ingredients-'+i) || '';
      } else {
        send[shopifyKey+'_'+(i+1)+'_name'] = '';
        send[shopifyKey+'_'+(i+1)+'_ingredients'] = '';
      }
    }
  });

  return send;
}


function getAndSetAnswer(answerGroup, answerValue) {
  const answerKey = Object.keys(answerGroup).find(answerKey => answerGroup[answerKey] === answerValue);
  answers.addAnswer(answerKey, true);
}



export {
  createAvatarColor,
  answersToMetaFields,
  productLabelToType,
  productTypeNames,
  productKeys,
}