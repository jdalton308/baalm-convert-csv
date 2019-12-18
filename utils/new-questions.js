
export const pages = [
  {
    title: 'Welcome! Let’s get to know each other. What’s your name and preferred pronouns?',
    tip: 'Before we create an account for you, we need to analyze your skin and routine in order to provide your personalized recommendations. At this time, it is best to complete this skin quiz on your desktop or laptop computer.',
    id: 'welcome',
    questions: [
      {
        type: 'Field',
        config: {
          id: 'name',
          label: 'Your Name',
          type: 'text'
        }
      },
      {
        type: 'Field',
        config: {
          id: 'pronouns',
          label: 'Your Pronouns',
          type: 'text'
        }
      }
    ]
  },
  {
    title: 'What brings you here today?',
    id: 'reason_for_joining',
    questions: [
      {
        type: 'SelectList',
        config: {
          id: 'reason_for_joining',
          selectable: 4,
          values: [
            {
              val: 'specific',
              title: 'I have a specific skin goal'
            },
            {
              val: 'general',
              title: 'I want to learn more about my general skin health'
            },
            {
              val: 'learn-more',
              title: 'I want to learn more about my skincare routine'
            },
            {
              val: 'discover',
              title: 'I want to discover something new about my products'
            },
            {
              val: 'big-event',
              title: 'I have a big event coming up'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'What should we address?',
    tip: '[TODO: Copy for top 3] Tell us which concerns you’d like to focus on so we can help you learn more and find products that target them!',
    id: 'skin_concerns',
    questions: [
      {
        type: 'SelectList',
        config: {
          id: 'skin_concerns',
          columns: 3,
          selectable: 3,
          values: [
            {
              title: 'Sensitivity',
              val: 'sensitivity',
              followup: ['sensitivity']
            },
            {
              title: 'Redness & rosacea',
              val: 'redness-rosacea',
              followup: ['redness']
            },
            {
              title: 'Fine lines & wrinkles',
              val: 'fine-lines-wrinkles',
              followup: ['wrinkles']
            },
            {
              title: 'Firmness & elasticity',
              val: 'firmness-elasticity',
              followup: ['firmness']
            },
            {
              title: 'Hyperpigmentation & post-breakout spots',
              val: 'hyperpigmentation-post-breakout-spots',
              followup: ['hyperpigmentation']
            },
            {
              title: 'Dryness (skin feels rough, looks dry)',
              val: 'dryness',
              followup: ['dryness']
            },
            {
              title: 'Oiliness',
              val: 'oiliness',
              followup: ['oiliness']
            },
            {
              title: 'Uneven skin texture',
              val: 'uneven-skin-texture',
              followup: ['uneven-skin']
            },
            {
              title: 'Clogged pores & blackheads',
              val: 'clogged-pores-blackheads',
              followup: ['blackheads']
            },
            {
              title: 'Sun damage & dark spots',
              val: 'sun-damage-dark-spots',
              followup: ['sun-damage']
            },
            {
              title: 'Undereye puffiness and/or dark circles',
              val: 'undereye-puffiness-dark-circles',
              followup: ['undereye-puffiness']
            },
            {
              title: 'Acne & blemishes',
              val: 'acne-blemishes',
              followup: ['acne']
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Sensitivity',
    tip: 'Sensitive skin can range from minor dryness and irritation to full-blown ouch-factor. Help us find out how sensitive your skin is so you we can help you meet your skin goal!',
    id: 'sensitivity',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'How often does your skin feel sensitive?',
          id: 'how_often_sensitivity',
          selectable: 1,
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'Only on certain occassions / after reactions',
              val: 'certain-occassions'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'Do you experience any irritation when using skincare products?',
          id: 'irritation_sensitivity',
          selectable: 1,
          values: [
            {
              title: 'Yes, I do!',
              val: 'yes'
            },
            {
              title: 'Nope, not me!',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'Do you experience a burning sensation on your skin?',
          id: 'burning_sensitivity',
          selectable: 1,
          values: [
            {
              title: 'Yes, I do!',
              val: 'yes'
            },
            {
              title: 'Nope, not me!',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'What about tautness or tightness?',
          id: 'tightness_sensitivity',
          selectable: 1,
          values: [
            {
              title: 'Yeah, that’s me',
              val: 'yes'
            },
            {
              title: 'Nope, not me!',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'Does it feel hot?',
          id: 'hot_sensitivity',
          selectable: 1,
          values: [
            {
              title: 'Yep, it does',
              val: 'yes'
            },
            {
              title: 'Nope, not me!',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Fine lines & wrinkles',
    tip: 'We all get fine lines and wrinkles eventually! Aging gracefully is totally normal, but if you’re looking to prevent or target fine lines and wrinkles, let us know a bit more about your skin so we can recommend the right products for your goal.',
    id: 'wrinkles',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'How concerned are you with fine lines and wrinkles?',
          id: 'how_concerned_wrinkles',
          selectable: 1,
          values: [
            {
              title: 'I don’t think about them too much',
              val: 'not-much'
            },
            {
              title: 'Every now and then when I’m really looking in the mirror',
              val: 'mirror'
            },
            {
              title: 'Constantly!',
              val: 'constantly'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'Which areas would you like to target?',
          id: 'area_target_wrinkles',
          selectable: 1,
          values: [
            {
              title: 'Around my eyes',
              val: 'around-my-eyes'
            },
            {
              title: 'My forehead',
              val: 'my-forehead'
            },
            {
              title: 'Around my mouth & nose',
              val: 'mouth-nose'
            },
            {
              title: 'My neck',
              val: 'my-neck'
            },
            {
              title: 'All of the above',
              val: 'all-of-the-above'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'Are you interested in prevention or treatment?',
          id: 'prevention_treatment_wrinkles',
          selectable: 1,
          values: [
            {
              title: 'Prevention. I’m setting myself up for success!',
              val: 'prevention'
            },
            {
              title: 'I’d like to tackle this now with some treatment',
              val: 'treatment'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Redness & Rosacea',
    tip: 'So you’re feeling a bit flushed? Rosacea is a condition where blood vessels in the face are enlarged, giving you that rosy glow. Let us know a few more details so you can meet your skin goal!',
    id: 'redness',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'How often do you experience facial redness?',
          id: 'how_often_redness',
          selectable: 1,
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'Only on certain occassions / after reactions',
              val: 'certain-occassions'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3,
          label: 'And is the redness persistent?',
          id: 'persistent_redness',
          selectable: 1,
          values: [
            {
              title: 'Yes, it sure is',
              val: 'yes'
            },
            {
              title: 'No, it comes and goes',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you experience episodic facial flushing?',
          id: 'episodic_flushing',
          selectable: 1,
          values: [
            {
              title: 'Yep, I can look ~blushed~',
              val: 'yes'
            },
            {
              title: 'Nope, not me',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have some oily patches and flaky patches?',
          id: 'oily_flaky_patches_redness',
          selectable: 1,
          values: [
            {
              title: 'Yes, I have both!',
              val: 'both'
            },
            {
              title: 'I only have oily patches, no dryness here',
              val: 'oily'
            },
            {
              title: 'I only have dry patches!',
              val: 'dry'
            },
            {
              title: 'No, my texture is pretty even',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What about visible facial blood vessels and veins?',
          id: 'visible_veins_redness',
          selectable: 1,
          values: [
            {
              title: 'Yes, they peek out to say hi',
              val: 'yes'
            },
            {
              title: 'No, I can’t see them',
              val: 'no'
            }
          ]
        }
      },
    ]
  },
  {
    title: 'Firmness & Elasticity',
    tip: 'If your skin is feeling a bit less defined than you’re used to, let us know more about it so we can recommend some products to support more definition!',
    id: 'firmness',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How concerned are you with loss of firmness and elasticity?',
          id: 'how_concerned_firmess',
          selectable: 1,
          values: [
            {
              title: 'I don’t think about them too much',
              val: 'not-much'
            },
            {
              title: 'Every now and then when I’m really looking in the mirror',
              val: 'mirror'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you experience sagging skin?',
          id: 'sagging_firmness',
          selectable: 1,
          values: [
            {
              title: 'Nope, not really!',
              val: 'no'
            },
            {
              title: 'Yep, gravity is here',
              val: 'yes'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How about loss of facial shape or definition?',
          id: 'loss_definition_firmness',
          selectable: 1,
          values: [
            {
              title: 'Things are still pretty defined',
              val: 'no'
            },
            {
              title: 'I’d like to get some shape & definition back',
              val: 'yes'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What about the status of your skin’s plumpness?',
          id: 'plumpness_firmness',
          selectable: 1,
          values: [
            {
              title: 'Things are still plump',
              val: 'no'
            },
            {
              title: 'I’d like to add some volume into my skin ',
              val: 'yes'
            }
          ]
        }
      },
    ]
  },
  {
    title: 'Hyperpigmentation & post-breakout spots',
    tip: 'Hyperpigmentation and post-breakout spots are caused by excess melanin in the skin. These are totally normal and totally treatable! Let us know more about your skin so we can find the right products for you.',
    id: 'hyperpigmentation',
    questions: [
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How often do you experience new instances of hyperpigmentation or dark spots?',
          id: 'how_often_hyperpigmentation',
          selectable: 1,
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'Occassionally',
              val: 'occassionally'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do the spots feel raised on your skin?',
          selectable: 1,
          id: 'spots_raised_hyperpigmentation',
          values: [
            {
              title: 'Yes, they’re raised to the touch',
              val: 'yes'
            },
            {
              title: 'Nope, they’re flush with the rest of my skin',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Are these related to hormonal changes?',
          selectable: 1,
          id: 'hormonal_hyperpigmentation',
          values: [
            {
              title: 'Yes, I’ve experienced some changes lately',
              val: 'yes'
            },
            {
              title: 'No, everything is the same',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Are these spots caused by acne sites or other injuries to your skin?',
          id: 'injuries_hyperpigmentation',
          selectable: 1,
          values: [
            {
              title: 'Yes, I’ve had some acne or a skin injury',
              val: 'yes'
            },
            {
              title: 'No, nothing like that',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Dryness (skin feels rough, looks dry)',
    tip: 'Dry skin is very common, but by adding the right products into your routine, it is easy to get hydrated! Tell us more about your dryness so we can recommend the right products for you.',
    id: 'dryness',
    questions: [
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How often do you experience dry skin?',
          selectable: 1,
          id: 'how_often_dryness',
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'Only in the cold / dry seasons',
              val: 'only-seasons'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Does your skin feel itchy?',
          id: 'does_your_skin_feel_itchy',
          selectable: 1,
          values: [
            {
              title: 'Yes, it’s definitely itchy',
              val: 'yes'
            },
            {
              title: 'Nope, no itch here',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How about flaking, scaling or peeling skin?',
          id: 'flaking_dryness',
          selectable: 1,
          values: [
            {
              title: 'Yes, it’s flake city!',
              val: 'yes'
            },
            {
              title: 'No, just business as usual',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What about rough and patchy skin?',
          id: 'rough_dryness',
          selectable: 1,
          values: [
            {
              title: 'Yep, it’s rough to the touch.',
              val: 'yes'
            },
            {
              title: 'No, things are smooth',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What about skin tightness after showering?',
          selectable: 1,
          id: 'tightness_shower_dryness',
          values: [
            {
              title: 'Yes, showers make my skin tight',
              val: 'yes'
            },
            {
              title: 'Nah, same old, same old',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Oiliness',
    tip: 'Did you know that despite having oily skin, your skin can still be dehydrated? Sometimes the oil is a result of your skin trying to produce moisture. Tell us more about how your skin is feeling so you can learn more!',
    id: 'oiliness',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How often do you experience oily skin?',
          id: 'how_often_oily',
          selectable: 1,
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'Only when it’s hot or humid outside',
              val: 'hot-outside'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Where do you get oily?',
          id: 'where_oily',
          selectable: 1,
          values: [
            {
              title: 'My T-Zone (Forehead, nose)',
              val: 't-zone'
            },
            {
              title: 'My cheeks',
              val: 'cheeks'
            },
            {
              title: 'My chin',
              val: 'chin'
            },
            {
              title: 'Everywhere',
              val: 'everywhere'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Does your skin feel tight but also produce oil?',
          id: 'tight_but_oil',
          selectable: 1,
          values: [
            {
              title: 'Yes, it does!',
              val: 'yes'
            },
            {
              title: 'Nope, no tightness for me',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'After washing, how long does it take for your skin to get oily?',
          id: 'after_washing_how_long_oily',
          selectable: 1,
          values: [
            {
              title: 'It gets oily again within the hour',
              val: 'within-hour'
            },
            {
              title: 'It takes 3-4 hours',
              val: '3-4-hours'
            },
            {
              title: 'It’s oily again after 8 hours',
              val: 'after-8-hours'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Uneven Skin Texture',
    id: 'uneven-skin',
    tip: 'Uneven skin texture can manifest in may different ways, which is normal! Let’s identify what’s going on with your texture so we can recommend products.',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How long have you experienced uneven skin texture?',
          id: 'how_long_uneven',
          selectable: 1,
          values: [
            {
              title: 'Less than one month',
              val: 'less-than-one-month'
            },
            {
              title: 'Several months',
              val: 'months'
            },
            {
              title: 'Years',
              val: 'years'
            },
            {
              title: 'As long as i can remember',
              val: 'forever'
            }
          ]
        }
      },
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How does the texture manifest?',
          id: 'how_texture_manifests',
          selectable: 1,
          values: [
            {
              title: 'Raised areas',
              val: 'raised-areas'
            },
            {
              title: 'Individual bumps',
              val: 'individual-bumps'
            },
            {
              title: 'Inflammation',
              val: 'inflammation'
            }
          ]
        }
      },
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have bumps that are off-white and look like tiny pearls near the eyes?',
          id: 'texture_pearls',
          selectable: 1,
          values: [
            {
              title: 'Yes',
              val: 'yes'
            },
            {
              title: 'No',
              val: 'no'
            }
          ]
        }
      },
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have white bumps where acne used to be?',
          id: 'texture_bumps',
          selectable: 1,
          values: [
            {
              title: 'Yes',
              val: 'yes'
            },
            {
              title: 'No',
              val: 'no'
            }
          ]
        }
      },
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have soft, fleshy pieces of skin that are usually connected to the skin by a small stem?',
          id: 'texture_tags',
          selectable: 1,
          values: [
            {
              title: 'Yes',
              val: 'yes'
            },
            {
              title: 'No',
              val: 'no'
            }
          ]
        }
      },
    ]
  },
  {
    title: 'Clogged pores / blackheads',
    tip: 'Blackheads and clogged pores are a result of a buildup of sebum. Let us know a bit more about your pores so we can help you find a fix.',
    id: 'blackheads',
    questions: [
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Where do you get blackheads?',
          id: 'where_blackheads',
          selectable: 1,
          values: [
            {
              title: 'Mostly on my forehead',
              val: 'forehead'
            },
            {
              title: 'Mostly on my nose & surrounding area',
              val: 'nose'
            },
            {
              title: 'Mostly on my chin',
              val: 'chin'
            },
            {
              title: 'Mostly on my cheeks',
              val: 'cheeks'
            },
            {
              title: 'Everywhere',
              val: 'everywhere'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you get extractions? ',
          id: 'extractions_blackheads',
          selectable: 1,
          values: [
            {
              title: 'Yes! Get those suckers out!',
              val: 'yes'
            },
            {
              title: 'No, I don’t',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How often? (if YES selected)',
          id: 'how_often_blackheads',
          selectable: 1,
          values: [
            {
              title: 'Often, 1-2x a month',
              val: '1-2-a-month'
            },
            {
              title: 'Monthly',
              val: 'monthly'
            },
            {
              title: 'Every now and then, 1-2x a year',
              val: '1-2x-a-year'
            },
            {
              title: 'N/A',
              val: 'n-a'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Are your blackheads persistent?',
          id: 'blackheads_persistent',
          selectable: 1,
          values: [
            {
              title: 'Yes, they keep a-coming back',
              val: 'yes'
            },
            {
              title: 'Nope, once they’re gone, they stay that way',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Sun damage & dark spots',
    tip: 'Sun damage can lead to pigmented spots, flakey skin, and finelines due toby prolonged exposure to UV rays. Help us determine your sun damage levels by answering a few quick q’s!',
    id: 'sun-damage',
    questions: [
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have sun spots?',
          id: 'sun_spots',
          selectable: 1,
          values: [
            {
              title: 'Yes, I have some gracing my face',
              val: 'yes'
            },
            {
              title: 'Nope, no signs of them',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have areas of dry, flakey skin?',
          id: 'dry_flakey_skin',
          selectable: 1,
          values: [
            {
              title: 'Yes, my skin has patches of dryness',
              val: 'yes'
            },
            {
              title: 'No, my skin is pretty uniform',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have some fine lines and wrinkles?',
          id: 'fine_lines_wrinkles_sun_damage',
          selectable: 1,
          values: [
            {
              title: 'Yes, I’ve got some lines and wrinkles going on',
              val: 'yes'
            },
            {
              title: 'Not yet!',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Under eye puffiness / dark circles',
    tip: 'You may be tired, but sometimes puffiness and dark circles just won’t go away! Let us know about your experience so we can recommend a product that’s right for you.',
    id: 'undereye-puffiness',
    questions: [
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How often do you experience puffiness?',
          id: 'how_often_under_eye',
          selectable: 1,
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'N/A',
              val: 'n-a'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you have dark circles?',
          id: 'dark_circles',
          selectable: 1,
          values: [
            {
              title: 'I do, yep.',
              val: 'yes'
            },
            {
              title: 'I don’t see any dark circles here',
              val: 'no'
            },
            {
              title: 'N/A',
              val: 'n-a'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What color are your circles?',
          id: 'circles_color',
          selectable: 1,
          values: [
            {
              title: 'Purple',
              val: 'purple'
            },
            {
              title: 'Blue',
              val: 'blue'
            },
            {
              title: 'Pink',
              val: 'pink'
            },
            {
              title: 'N/A',
              val: 'n-a'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Acne / Blemishes',
    tip: 'Acne can be the result of a variety of things, like diet, hormones, and stress. Tell us a bit more about your experience with acne so we can determine the right products for you!',
    id: 'acne',
    questions: [
    {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'How often do you experience acne?',
          id: 'how_often_acne',
          selectable: 1,
          values: [
            {
              title: 'Everyday',
              val: 'everyday'
            },
            {
              title: 'Weekly',
              val: 'weekly'
            },
            {
              title: 'Once a month',
              val: 'once-a-month'
            },
            {
              title: 'Only on my period',
              val: 'period'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Where do you get acne?',
          id: 'where_acne',
          selectable: 1,
          values: [
            {
              title: 'My T-Zone (Forehead, nose)',
              val: 't-zone'
            },
            {
              title: 'My cheeks',
              val: 'cheeks'
            },
            {
              title: 'My chin',
              val: 'chin'
            },
            {
              title: 'Everywhere',
              val: 'everywhere'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'Do you get red inflamed pimples?',
          id: 'red_inflamed_pimples',
          selectable: 1,
          values: [
            {
              title: 'Yes, they’re angry!',
              val: 'yes'
            },
            {
              title: 'No, they’re pretty tame',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What about small red and tender bumps?',
          id: 'small_red_and_tender_bumps',
          selectable: 1,
          values: [
            {
              title: 'Yep, sounds about right',
              val: 'yes'
            },
            {
              title: 'Not I',
              val: 'no'
            }
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'What about large painful bumps under your skin?',
          id: 'large_painful_bumps',
          selectable: 1,
          values: [
            {
              title: 'Yes! Darn they hurt!',
              val: 'yes'
            },
            {
              title: 'No under-skin bumps here',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'How would you describe your skin tone?',
    id: 'skin_tone',
    questions: [
      {
        type: 'Slider',
        config: {
          id: 'skin_tone',
        }
      }
    ]
  },
  {
    title: 'What is your ethnicity?',
    id: 'ethnicity',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 3,
          id: 'ethnicity',
          values: [{
            title: 'Black/African American',
            val: 'black-african-american'
          },
          {
            title: 'American Indian',
            val: 'american-indian'
          },
          {
            title: 'Middle Eastern',
            val: 'middle-eastern'
            
          },
          {
            title: 'South East Asian',
            val: 'south-east-asian'
          },
          {
            title: 'Pacific Islander',
            val: 'pacific-islander'
          },
          {
            title: 'Asian/Asian-American',
            val: 'asian-asian-american'
          },
          {
            title: 'Hispanic/Latino-American',
            val: 'hispanic-latino-american'
          },
          {
            title: 'White/European-American',
            val: 'white-european-american'
          },
          {
            title: 'Other',
            val: 'ethnicity-other'
          }]
        }
      }
    ]
  },
  {
    title: 'What’s your skin type?',
    tip: 'We think labels suck but they help us provide a framework for understanding skin needs.',
    id: 'skin_type',
    questions: [
      {
        type: 'SelectList',
        config: {
          selectable: 1,
          id: 'skin_type',
          values: [
            {
              title: 'Combination',
              description: 'You have areas of dry and oily skin neighboring each other.',
              val: 'combination'
            },
            {
              title: 'Dry',
              description: 'Your skin feels tight, you experience flakiness and irritation, and maybe you have a layer of oil that sits on top of your skin. If your skin is dehydrated, your glands will produce excess oil!',
              val: 'dry'
            }, 
            {
              title: 'Oily',
              description: 'You have oil on the skin, breakouts, and clogged pores.',
              val: 'oily'
            },
            {
              title: 'Neutral',
              description: 'Your skin is balanced with minimal breakouts, clogged pores, dryness and irritation.',
              val: 'neutral'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'What is your age?',
    tip: 'As you age gracefully, so does your skin. It requires different ingredients as you get older, and we’ll be here to recommend products for everyone at every age.',
    id: 'what-is-your-age',
    questions: [
      {
        type: 'SelectList',
        config: {
          selectable: 1,
          columns: 3,
          id: 'age',
          values: [
            {
              title: 'Teens',
              val: 'teens'
            },
            {
              title: '20s',
              val: '20s'
            },
            {
              title: '30s',
              val: '30s'
            },
            {
              title: '40s',
              val: '40s'
            },
            {
              title: '50s',
              val: '50s'
            },
            {
              title: '60s',
              val: '60s'
            },
            {
              title: '70s',
              val: '70s'
            },
            {
              title: '80s',
              val: '80s'
            },
            {
              title: '90s',
              val: '90s'
            },
            {
              title: '100s',
              val: '100s'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'How do you identify?',
    id: 'how-do-you-identify',
    questions: [
      {
        type: 'SelectList',
        config: {
          id: 'gender_identity',
          columns: 2,
          selectable: 4,
          values: [
            {
              title: 'Woman',
              val: 'woman'
            },
            {
              title: 'Man',
              val: 'man'
            },
            {
              title: 'Trans Woman',
              val: 'trans-woman'
            },
            {
              title: 'Trans Man',
              val: 'trans-man'
            },
            {
              title: 'Transitioning',
              val: 'transitioning'
            },
            {
              title: 'Third gender/non-binary',
              val: 'third-gender-non-binary'
            },
            {
              title: 'I’d prefer not to identify',
              val: 'prefer-not'
            }
          ],
        }
      }
    ]
  },
  {
    title: 'Are you pregnant, breastfeeding or soon to be?',
    tip: 'Some ingredients aren’t good for growing babies. Let us know if you’re pregnant, trying, or breastfeeding, and we’ll recommend products that are safe for you both.',
    id: 'pregnant_breastfeeding_or_tryi',
    questions: [
      {
        type: 'SelectList',
        config: {
          id: 'pregnant_breastfeeding_or_tryi',
          columns: 2,
          selectable: 1,
          values: [
            {
              title: 'Yes',
              val: 'yes'
            },
            {
              title: 'No',
              val: 'no'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Where do you spend the most time?',
    tip: 'Climate can impact your skin in a variety of ways. Let us know where you spend the most time so we can factor in air pollution, heat, and humidity.',
    id: 'zipcode',
    questions: [
      {
        type: 'Field',
        config: {
          id: 'zipcode',
          label: 'Zip Code',
          type: 'text'
        }
      }
    ]
  },

  {
    title: 'Do you have any formulation or ingredient preferences?',
    tip: `If you prefer a clean routine or don't care for gluten in your products, let us know so we can find the best products for you. All of the products we recommend are already cruelty-free, petrolatum-free, and mineral-oil-free. Read more about our curation standards <a href="https://love.lecultureclub.com/blogs/news/paying-it-forward" target="_blank">here</a>.`,
    id: 'do-you-have-any-formulation-or-ingredient-preferences',
    questions: [
      {
      type: 'SelectList',
      config: {
        selectable: 6,
        columns: 3,
        id: 'values',
        optional: true,
        values: [
          {
            title: 'Vegan',
            val: 'vegan'
          },
          {
            title: 'Gluten-free',
            val: 'gluten-free'
          },
          {
            title: 'Sulfate-free',
            val: 'sulfate-free'
          },
          {
            title: 'Paraben-free',
            val: 'paraben-free'
          },
          {
            title: 'Alcohol-free',
            val: 'alcohol-free'
          },
          {
            title: 'N/A',
            val: 'n-a'
          }
        ]
      }
    }]
  },
  {
    title: 'How would you like to enhance your routine?',
    tip: 'We tailor the type of recommendations to your personal goals for your routine. Are you looking for cheaper alternatives? Or only clean ingredients? Let us know!',
    id: 'how-would-you-like-to-enhance-your-routine',
    questions: [
      {
        type: 'SelectList',
        config: {
          selectable: 1000,
          id: 'goal',
          values: [
            {
              title: 'I want to switch out products for cheaper alternatives and save some $$$',
              val: 'cheaper-alternatives',
            },
            {
              title: 'I want to know that I am using have the most effective active ingredients',
              val: 'effective-active-ingredients',
            },
            {
              title: 'I want to remove any duplicate products from my routine',
              val: 'remove-duplicate-products',
            },
            {
              title: 'I want to remove any products that cancel each other out',
              val: 'remove-products-that-cancel-each-other',
            },
            {
              title: 'I want to make the switch to only clean products',
              val: 'only-clean-products',
            }
          ]
        }
      }
    ]
  },
  {
    title: 'How would you characterize your current routine?',
    tip: 'We want you to love the products we recommend, so let us know a bit about how products fit into your current routine, and how you like to get them.',
    id: 'how-would-you-characterize-your-current-routine',
    questions: [
      {
        type: 'SelectList',
        config: {
          selectable: 1,
          id: 'how_would_you_characterize_you',
          values: [
            {
              title: 'Minimal',
              description: 'I don’t have much of a routine, but I like to use a few key products that work for me',
              val: 'minimal'
            },
            {
              title: 'Essential',
              description: 'I have a routine, but I like to keep it simple with only my essential products',
              val: 'essential'
            },
            {
              title: 'Complete',
              description: 'I have a comprehensive routine with multiple steps and lots of products',
              val: 'complete'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'How would you characterize your skincare shopping habits?',
    tip: 'We want you to love the products we recommend, so let us know a bit about how products fit into your current routine, and how you like to get them.',
    id: 'shopping_habits',
    questions: [
      {
        type: 'SelectList',
        config: {
          selectable: 1,
          id: 'shopping_habits',
          values: [
            {
              title: 'Drug Store',
              description:' I do most of my shopping at the drugstore or Amazon',
              val: 'drug-store'
            },
            {
              title: 'Specialty',
              description: 'You can find me browsing the new releases at the nearest beauty-only stores like Sephora or Ulta',
              val: 'specialty'
            },
            {
              title: 'Clean',
              description: 'I prefer to shop where I know my products are clean, like Credo Beauty or Follain',
              val: 'clean'
            },
            {
              title: 'Luxury',
              description: 'I love the cream of the crop, so I shop at luxury stores like Violet Grey or Goop',
              val: 'luxury'
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Are you allergic to any ingredients?',
    tip: 'Let us know, and we’ll leave these ingredients out of your recommendations.',
    id: 'are-you-allergic-to-any-ingredients',
    questions: [
      {
        type: 'Field',
        config: {
          type: 'textarea',
          label: 'Ingredients I’m allergic to (comma-separated)',
          id: 'allergies',
          optional: true
        }
      }
    ]
  },
  {
    title: 'When would you prefer to meet with your Baalm Trainer?',
    tip: 'We will try our best to match you with a Baalm Trainer that has the availability that you prefer. We want to work around your schedule!',
    id: 'trainer_time_preference',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 2, 
          label: 'Which times of the week work best?',
          id: 'trainer_week_times',
          selectable: 1,
          values: [
            {
              title: 'Weekdays',
              val: 'weekdays'
            },
            {
              title: 'Weekends',
              val: 'weekends'
            },
            {
              title: 'No Preference',
              val: 'no-preference'
            },
          ]
        }
      },
      {
        type: 'SelectList',
        config: {
          columns: 3, 
          label: 'And what times of the day?',
          id: 'trainer_day_times',
          selectable: 3,
          values: [
            {
              title: 'Morning',
              val: 'morning'
            },
            {
              title: 'Afternoon',
              val: 'afternoon'
            },
            {
              title: 'Evening',
              val: 'evening'
            },
            {
              title: 'No Preference',
              val: 'no-preference'
            },
          ]
        }
      },
    ]
  },
  {
    title: 'Which skin philosophies do you vibe with?',
    tip: 'All of our Baalm Trainers are true skin experts, but they may approach solutions differently. Tell us your preferences so we can match you to the right trainer.',
    id: 'skin_philosophies',
    questions: [
      {
        type: 'SelectList',
        config: {
          columns: 2,
          id: 'skin_philosophies',
          selectable: 6,
          values: [
            {
              title: 'Holistic',
              val: 'holistic'
            },
            {
              title: 'All Natural',
              val: 'natural'
            },
            {
              title: 'Ingredient-Focused',
              val: 'ingredient-focused'
            },
            {
              title: 'Medical',
              val: 'medical'
            },
            {
              title: 'Trendy',
              val: 'trendy'
            },
            {
              title: 'No Preference',
              val: 'no-preference'
            },
          ]
        }
      }
    ]
  }

]