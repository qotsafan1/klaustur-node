var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var eventResults;
var db = require('./db_helper');

var groupsContestants  = {};

/* GET home page. */
router.get('/', function(req, res, next) {
	url = 'http://msisport.is/pages/motaskra/thatttakendalisti/?prm_race=8054';

    request(url, function(error, response, html){
        if(!error){
        	var group = {};
            //console.log(html);
            var $ = cheerio.load(html);

            $('.raceParticipantsEvent').each(function(i, element) {
            	var headerName = $(this).children('.raceParticipantsEventHeader').children().text();
//            	console.log(headerName);

        		groupsContestants[headerName] = [];
            	
            	$(this).children('.raceParticipantTable').children('tbody').children().each(function() {
	            	var number = $(this).children('.raceNumber').text();
	            	var name = $(this).children('.name').text();

        			var contestant = {number: number, name: name};
	            	groupsContestants[headerName].push(contestant);
            	});

            });

            //console.log(groupsContestants);
			
			res.render('contestants', { 
				groupsContestants: groupsContestants
			});
        }
    });

});

module.exports = router;
