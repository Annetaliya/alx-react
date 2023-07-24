import $  from 'jquery';
import debounce from 'lodash/debounce';


$(function addDashboardElements() {
  const p1 = $('<p>').text('Holberton Dashboard');
  const p2 = $('<p>').text('Dashboard data for the students');
  const btn = $('<button>').text('Click here to get started');
  const p3 = $('<p>').attr('id', 'count');
  const p4 = $('<p>').text('Copyright - Holberton School');

  $('body').append(p1, p2, btn, p3, p4);

  //bind debounce function to the button's click event
  const debounceCounter = debounce(updateCounter, 500);

  $('button').on('click', function () {
    debounceCounter();
  });

});


let count = 0;

function updateCounter() {
    count++;
    const countParagraph = $('#count');
    countParagraph.text(`${count} clicks on the button`);

}

$(document).ready(addDashboardElements);