var formations = {
  i: {
    name: 'Basic I Formation',
    type: 'o'
  },
  power_i: {
    name: 'Power I',
    type: 'o'
  },
  maryland_i: {
    name: 'Maryland I',
    type: 'o'
  },
  i_fullback_offset_strongside: {
    name: 'I Fullback Offset Strongside',
    type: 'o'
  },
  i_fullback_offset_weakside: {
    name: 'I Fullback Offset Weakside',
    type: 'o'
  },
  shotgun: {
    name: 'Basic Shotgun Formation',
    type: 'o'
  },
  shotgun_trips_left: {
    name: 'Shotgun Trips Left',
    type: 'o'
  },
  shotgun_max_protect: {
    name: 'Shotgun Max Protect',
    type: 'o'
  },
  pistol: {
    name: 'Pistol',
    type: 'o'
  },
  wishbone: {
    name: 'Wishbone',
    type: 'o'
  },
  flexbone: {
    name: 'Flexbone',
    type: 'o'
  },
  '4_3': {
    name: 'Basic 4-3 Formation',
    type : 'd'
  },
  '4_3_under_defense': {
    name: '4-3 Under Defense',
    type : 'd'
  },
  '4_3_over_defense': {
    name: '4-3 Over Defense',
    type : 'd'
  }
};

window.onload = function() {
  $('li.formation').each(function(){
    $(this).click(function(){
      $('img.formation').attr('src', './img/' + (formations[$(this).attr('data-formation')].type == 'o' ? 'offence' : 'defense') + '/' + $(this).attr('data-formation') + '.svg');
      $('#formation-name').text(formations[$(this).attr('data-formation')].name);
    });
  });
}
