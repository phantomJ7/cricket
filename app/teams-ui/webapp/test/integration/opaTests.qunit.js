sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'crickettournament/teamsui/test/integration/FirstJourney',
		'crickettournament/teamsui/test/integration/pages/TeamsList',
		'crickettournament/teamsui/test/integration/pages/TeamsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TeamsList, TeamsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('crickettournament/teamsui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTeamsList: TeamsList,
					onTheTeamsObjectPage: TeamsObjectPage
                }
            },
            opaJourney.run
        );
    }
);