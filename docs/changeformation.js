var formations = {
  i: {
    name: 'Basic I Formation'
  },
  power_i: {
    name: 'Power I'
  },
  maryland_i: {
    name: 'Maryland I'
  },
  i_fullback_offset_strongside: {
    name: 'I Fullback Offset Strongside'
  },
  i_fullback_offset_weakside: {
    name: 'I Fullback Offset Weakside'
  },
  shotgun: {
    name: 'Basic Shotgun Formation'
  },
  shotgun_trips_left: {
    name: 'Shotgun Trips Left'
  },
  shotgun_max_protect: {
    name: 'Shotgun Max Protect'
  }
};

window.onload = function() {
  $('li.formation').each(function(){
    $(this).click(function(){
      $('img.formation').attr('src', '../offence/' + $(this).attr('data-formation') + '.svg');
      $('#formation-name').text(formations[$(this).attr('data-formation')].name);
    });
  });
}
