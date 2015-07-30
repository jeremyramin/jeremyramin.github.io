$(document).ready(function () {

  // Set active navigation tabs
  var path = window.location.pathname;
  path = path.substring(0, path.length - 1);
  var active_links = $('li>a[href="' + path + '"]');
  active_links.addClass('active');
  active_links.parent().addClass('active');

  // Open active accordion
  $('.button-collapse').one('click', function() {
    active_links.closest('.collapsible-body').prev().trigger('click.collapse');
  });
});
