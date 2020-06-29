import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Pet } from './../src/pet.js';


$(document).ready(function(){


  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let petName = $("input#name").val();
    let pet = new Pet(petName);
    pet.setAttributes();
    $("#submitbtn").hide();
    $("button#feedbtn").show();
    $("button#sleepbtn").show();
    $("button#playbtn").show();

    $("button#feedbtn").click(function() {
      pet.feed();
    });

    $("button#sleepbtn").click(function() {
      pet.sleep();
    });

    $("button#playbtn").click(function() {
      pet.play();
    });
    
    if (pet.death()) {
      //something happend
    }

    if (pet.warn === 1) {
      alert("food low!");
    } else if (pet.warn === 2){
      alert("sleep low!");
    }else if (pet.warn === 3){
      alert("play low!");
    }


  });
});