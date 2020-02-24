document.addEventListener('DOMContentLoaded', function(){

    var form = document.querySelector('form');
    var inputs = document.querySelector('form').elements;
    var buttonDelete = document.querySelector('#button-delete');
    var deleteTableRow = document.querySelector('table tbody');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        var teamA = inputs[0].value;
        var scoreA = inputs[1].value;
        var teamB = inputs[2].value;
        var scoreB = inputs[3].value;
        if(teamA !== '' && parseInt(scoreA, 10) >= 0 && teamB !== '' && parseInt(scoreB, 10) >= 0 && teamA !== teamB){
            var newRow = document.createElement('tr');
            var teamATd = document.createElement('td');
            var teamBTd = document.createElement('td');
            var score = document.createElement('td');
            teamATd.innerText = teamA;
            teamBTd.innerText = teamB;
            score.innerText = scoreA + " - " + scoreB;
            newRow.appendChild(teamATd);
            newRow.appendChild(teamBTd);
            newRow.appendChild(score);
            document.querySelector('table tbody').appendChild(newRow);
            inputs[0].value = '';
            inputs[1].value = '';
            inputs[2].value = '';
            inputs[3].value = '';
        }
    });
    buttonDelete.addEventListener('click', function(){
        var lastElem = deleteTableRow.lastElementChild;
        lastElem.remove();
    });
    
});