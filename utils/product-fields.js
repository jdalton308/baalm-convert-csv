

const productFields = {
  'cleanser': {
    fieldColumns: {
      // BUILD IN JS - 1 through 10
      // '1': {
      //   name: '',
      //   meta: '',
      //   ingredients: '',
      // }, 
    },
    frequency: {
      id: 'how_often_cleanser',
      column: null,
      newValueMap: {
        'Once': 'once-daily',
        'Twice': 'twice-daily',
        '3+': 'three-daily',
      }
    },
  },

  'toneressence': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_day_toner',
      column: null,
      newValueMap: {
        'Once': 'once-daily',
        'Twice': 'twice-daily',
        '3+': 'three-daily',
      }
    },
  },

  'serum': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_day_serum',
      column: null,
      newValueMap: {
        'Once': 'once-daily',
        'Twice': 'twice-daily',
        '3+': 'three-daily',
      }
    },
  },

  'moisturizer': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_day_moisturizer',
      column: null,
      newValueMap: {
        'Once': 'once-daily',
        'Twice': 'twice-daily',
        '3+': 'three-daily',
      }
    },
  },

  'oil':  {
    fieldColumns: {},
    frequency: {
      id: 'times_a_day_oils',
      column: null,
      newValueMap: {
        'Once': 'once-daily',
        'Twice': 'twice-daily',
        '3+': 'three-daily',
      }
    },
  },

  'retinol':  {
    fieldColumns: {},
    frequency: {
      id: 'times_a_week_retinol',
      column: null,
      newValueMap: {
        'Once': 'once-weekly',
        'Twice': 'twice-weekly',
        '3+': 'three-five-weekly',
      }
    },
  },

  'sunscreen': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_day_sunscreen',
      column: null,
      newValueMap: {
        'Once': 'once-daily',
        'Twice': 'twice-daily',
        '3+': 'three-daily',
      }
    },
  },

  'chemex': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_week_chemex',
      column: null,
      newValueMap: {
        'Once': 'once-weekly',
        'Twice': 'twice-weekly',
        '3+': 'three-five-weekly',
      }
    },
  },

  'pex': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_week_pe',
      column: null,
      newValueMap: {
        'Once': 'once-weekly',
        'Twice': 'twice-weekly',
        '3+': 'three-five-weekly',
      }
    },
  },

  'mask': {
    fieldColumns: {},
    frequency: {
      id: 'times_a_week_mask',
      column: null,
      newValueMap: {
        'Once': 'once-weekly',
        'Twice': 'twice-weekly',
        '3+': 'three-five-weekly',
      }
    },
  },

}



module.exports = {
  productFields,
};


// ORIGINAL FIELDS

// cleanser_1_name
// cleanser_1_meta
// cleanser_1_ingredients


// NEW OBJECT


// Frequency Values

// "once-weekly"
// "twice-weekly"
// three-five-weekly
// "once-daily"
// "twice-daily"
// "three-daily"


// [
//   {
//     "id":1576480603481,
//     "name":"Product Name",
//     "type":"serum",
//     "frequency":"once-daily",
//     "ingredients":"Water, Green Tea",
//     "scores":{"valuesMismatches":[],"valuesScore":100,"concerns":[{"concernName":"dryness","score":0},{"concernName":"hyperpigmentation-post-breakout-spots","score":0}],"type":0}
//   }
// ]