import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Pet } from './pet.js';
import { displayStat } from './display.js';


$(document).ready(function(){
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let petName = $("input#name").val();
    let pet = new Pet(petName);
    // pet.setAttributes();

    $("#form-one").hide();
    $("#feedbtn").show();
    $("#sleepbtn").show();
    $("#playbtn").show();

    $('.food').text(pet.foodLevel);
    $('.play').text(pet.playLevel);
    $('.sleep').text(pet.sleepLevel);
    $('#stats').show();

    displayStat(pet);

    $("button#feedbtn").click(function() {
      pet.feed();
      displayStat(pet);
    });

    $("button#sleepbtn").click(function() {
      pet.sleep();
    });

    $("button#playbtn").click(function() {
      pet.play();
    });
  });
});