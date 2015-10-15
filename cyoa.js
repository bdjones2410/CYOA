confirm("You are about to enter a high seas adventure!");

var deft = "You're in ability to follow directions and supply a propper answer has killed you and the game,";


function tryAgain(){
  var again = prompt("do you wish to play again?|Yes or No|").toUpperCase(); {
    if (again === 'YES') {
      console.log("Awesome! let's go matey!");
      sailing();
    }
    else if (again ==='NO') {
      console.log("well it's been fun! let's play again soon");
    }
    else {
      console.log("I didn't catch that, try yes or no")
      tryAgain();
    }
  }
};

function sailing() {
var user = prompt("are you ready to set sail!? |yes or no|").toUpperCase();

  switch(user) {

      case 'YES':
        console.log("Ye seem ready to sail! let's get underway!");

          var explore = prompt("As you sail through the seas, you see an island "+
           "in the distance, do you wish to explore? |yes or no|").toUpperCase();

              if(explore === 'YES') {
                var treasure = prompt("Do you wish to hunt for treasure? |Yes or No|").toUpperCase();
                var experience = prompt("Would you say you have much" +
                  " experience looking for treasure? |Yes or No|").toUpperCase();

                  if(treasure === 'YES' && experience === 'YES') {
                    console.log("Most excellent! your drive and experience pay off, " +
                  "you find your treasure in no time at all and your crew can die rich!");
                  tryAgain();
                  }

                  else if(treasure ==="NO" || experience ==='NO') {
                    console.log("Without both the desire and the experience to guide you, it takes " +
                  "years and the lives of most of the crew, but you find the riches");
                  tryAgain();
                  }
                  else {
                    console.log("your crew gets restless with your decision to explore the island and "+
                  "not bother searching for treasure.  They mutiny and leave you to explore the deserted "+
                "island for the rest of your life, before you die alone.");
                tryAgain();
                  }
                }
                else if (explore ==='NO') {
                  console.log("You continue sailing and become hoplessly lost, your only hope is to " +
                "pray to the Gods of the sea for aid");
                var pray = prompt("Do you wish to send out your prayers to the sea Dieties? |yes or no|").toUpperCase();
                  if(pray==='YES') {
                    console.log("The Gods are not kind to those without an explorers spirit wondering these "+
                  "seas, a maelstrom pops up destroying your ship and claiming the lives of your crew");
                  tryAgain();
                  }
                  else if (pray==='NO') {
                    console.log("Your crew admires your courage and belief in yourself, unfortunately it is misguided "+
                  "you are hoplessly lost at sea and you all perish");
                  tryAgain();
                  }
                  else {
                    console.log(deft);
                    tryAgain();
                  }
                }
                break;
        case 'NO' :
          var game =prompt("well then this was a short game, would you prefer another subject? |Yes or No|").toUpperCase();

            if (game === 'YES') {
              console.log("well then perhaps you should try another students choose your own adventure");
            }
            else if (game ==='NO') {
              console.log("well then be gone");
            }
            else {
              console.log(deft);
              tryAgain();
            }
            break;

            default :
            console.log(deft);
            tryAgain();;
        }
  };
  sailing();
