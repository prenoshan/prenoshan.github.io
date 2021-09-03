//gets each block from the table
var blocks = document.getElementsByTagName("td");

//player's turn
var turn = true;

//count the turns
var turnCount = 0;

//when block clicked
function blockClicked() {

    //if player is X
    if (turn == true) {

        //set block text to X
        this.innerHTML = "X";

        //disable click event on block
        this.style.pointerEvents = "none";

        //change turn to O
        turn = false;


    }

    //if player is O
    else if (turn == false) {

        //set block text to O
        this.innerHTML = "O";

        //disable click event on block
        this.style.pointerEvents = "none";

        //change turn to X
        turn = true;

    }

    //increment turn count
    turnCount++;

    console.log(turnCount);

    //check for winner
    checkWinner();

}

//adds event listeners to check if td was clicked
for (i = 0; i < blocks.length; i++) {

    blocks[i].addEventListener('click', blockClicked);

}

//2d array to store column ids
var blockIDs = [
    [],
    [],
    []
];

var counter = 0;

//populates block id array
for (i = 0; i < blocks.length; i++) {

    //gets column ids of first row
    if (i >= 0 && i < 3) {

        //counter set to 0 first then incremented
        blockIDs[0][counter++] = blocks[i].id;

    }

    //gets column ids of second row
    else if (i > 2 && i < 6) {

        blockIDs[1][counter++] = blocks[i].id;

    }

    //gets column ids of third row
    else if (i > 5 && i < 9) {

        blockIDs[2][counter++] = blocks[i].id;

    }

    //resets counter when populating new row
    if (counter == 3) {

        counter = 0;
    }


}

//disable click events after winner found
function disableClickEvents() {

    for (k = 0; k < blocks.length; k++) {

        document.getElementById(blocks[k].id).style.pointerEvents = "none";
    }

}

//check for winner
function checkWinner() {

    var isDraw = false;
    var isWinner = false;

    //check for win
    for (i = 0; i < 3; i++) {


        //horizontal checks
        if (document.getElementById(blockIDs[i][0]).innerHTML == document.getElementById(blockIDs[i][1]).innerHTML && document.getElementById(blockIDs[i][1]).innerHTML == document.getElementById(blockIDs[i][2]).innerHTML &&

            //to check if one column required for a win is disabled 
            //to avoid false win where all blocks equal because of empty string
            document.getElementById(blockIDs[i][0]).style.pointerEvents == "none") {

            isWinner = true;

        }

        //vertical checks
        else if (document.getElementById(blockIDs[0][i]).innerHTML == document.getElementById(blockIDs[1][i]).innerHTML && document.getElementById(blockIDs[1][i]).innerHTML == document.getElementById(blockIDs[2][i]).innerHTML &&

            //to check if one column required for a win is disabled 
            //to avoid false win where all blocks equal because of empty string
            document.getElementById(blockIDs[0][i]).style.pointerEvents == "none") {

            isWinner = true;

        }

        //two diagonal checks
        else if (document.getElementById(blockIDs[0][0]).innerHTML == document.getElementById(blockIDs[1][1]).innerHTML && document.getElementById(blockIDs[1][1]).innerHTML == document.getElementById(blockIDs[2][2]).innerHTML && document.getElementById(blockIDs[0][0]).style.pointerEvents == "none") {

            isWinner = true;

        } 
        
        else if (document.getElementById(blockIDs[0][2]).innerHTML == document.getElementById(blockIDs[1][1]).innerHTML && document.getElementById(blockIDs[1][1]).innerHTML == document.getElementById(blockIDs[2][0]).innerHTML && document.getElementById(blockIDs[0][2]).style.pointerEvents == "none") {

            isWinner = true;

        }

    }

    //check for draw
    if (turnCount == 9) {

        isDraw = true;
    }

    //get result div to display results
    var resultText = document.getElementById("result");
    
    //if winner found
    if (isWinner == true) {

        //disable all click events
        disableClickEvents();

        //show winner text
        resultText.style.display = "flex";

        //if winner is X
        if (turn == false) {

            resultText.innerText = "X is the winner";
        } 
        
        //if winner is O
        else if (turn == true) {

            resultText.innerText = "O is the winner";
        }

    } 
    
    //executes only when game is tied
    else if (isDraw == true) {

        //disable all click events
        disableClickEvents();

        //show winner text
        resultText.style.display = "flex";
        
        resultText.innerText = "Game is tied";

    }

}
