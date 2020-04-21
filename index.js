import { fifaData } from "./fifa.js";
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// (A)
console.log(
  fifaData.filter((data) => {
    if (data.Year === 2014 && data.Stage === "Final") {
      return data["Home Team Name"];
    }
  })
);

// (B)
console.log(
  fifaData.filter((data) => {
    if (data.Year === 2014 && data.Stage === "Final") {
      return data["Away Team Name"];
    }
  })
);

// (C)
console.log(
  fifaData.filter((data) => {
    if (data.Year === 2014 && data.Stage === "Final") {
      return data["Home Team Goals"];
    }
  })
);

// (D)
console.log(
  fifaData.filter((data) => {
    if (data.Year === 2014 && data.Stage === "Final") {
      return data["Away Team Goals"];
    }
  })
);

// (E)
console.log(
  fifaData.filter((data) => {
    if (data.Year === 2014 && data.Stage === "Final") {
      return data["Win conditions"];
    }
  })
);

//
//
//


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// function getFinals(data) {
//   const finalsTeams = data.filter(function (item) {
//     return item.Stage === "Final";
//   });
//   return finalsTeams;
// }



function getFinals(data) {
  return data.filter(function(item) {
    return item["Stage"] === "Final"
  })
}
console.log(getFinals(fifaData));


/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(data, getFinals) {
//   return getFinals(data).map((item) => item.Year);
// }
// getYears();

function getYears(callback) { // 
  
  let years = callback.map(function(final) {
    return final['Year']
  })

    return years
}

console.log(getYears(getFinals(fifaData)));


/* Task 4: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

// function getWinners(item, getFinals) {
//   const newArray = getFinals(item);
//   const winners = newArray.map(function (item) {
//     if (item["Away Team Goals"] > item["Home Team Goals"]) {
//       return item["Away Team Name"];
//     } else {
//       return item["Home Team Name"];
//     }
//   });
// }
// getWinners();

function getWinners(callback) {
  let winners = callback.map(function(final) {
    if (final['Home Team Goals'] > final['Away Team Goals']) {
      return final['Home Team Name'] 
    } else {
      return final['Away Team Name'];
    }

  })

  return winners
}
console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

// Parameters: 
//  * callback function getWinners
//  * callback function getYears
//  */

function getWinnersByYear (winners, years) {
  for (let i = 0; i < winners.length; i++) {
    console.log(`In ${years[i]}, ${winners[i]} won the World Cup`)
  }
};





const getWinnersByYear=[];

fifaData.forEach(function (item) {
    if (data.Stage === "Final") {
      return getWinnersByYear.push(item.["Year"]["Win conditions"])
    };
})

getAllWinners();

getWinnersByYear(getWinners(getFinal(data)),getYears(getFinals(data)));



/* Task 6: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// without Reduce
function getCountryWins(data, teamInitials) {
  let count = 0;
  let teamMatches = data.map(function(match) {
    if (match['Home Team Goals'] > match['Away Team Goals'] || match['Win conditions'].includes(match['Home Team Name'])) {
      return match['Home Team Initials']
    } else {
      return match['Away Team Initials']
    }

  })

teamMatches.forEach(function(item) {
  if (item === teamInitials) {
    count++
  }

})
return `${teamInitials} has won ${count} games`

}

console.log(getContryWins(data, 'GHA'));



/* Task 7: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    fifaData.filter((data) => {
        if (data.Stage === "Final"); {
            return getGoals(data);
        }
    })
}

getGoals();


/* Task 8: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data) {
    console.log(
        fifaData.filter((data) => {
          if (data.Year === 2014 && data.Stage === "Final") {
            return data["Home Team Name"];
          }
        })
      );
}

badDefense();

function getGoals(data) {

  let teams = []
  let goals = []
  let bestAvg = 0
  let bestTeam
  data.forEach(game => {
    if ()
    })
  })
}



//
//
//


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {
//   const totalHomeGoals = fifaData["Home Team Goals"].reduce(function (accumulator, data) {
//        console.log(`Here is the accumulator for Home Goals ${accumulator}`);
//        console.log(`Here is the current value ${data}`);
//        return accumulator + data.["Home Team Goals"];
//   }, 0);
// }




function getAverageGoals(data) {
  let homeTeamGoals = data.map(function(item) {
    return item["Home Team Goals"]
  })
  let awayTeamGoals = data.map(function(item) {
    return item["Away Team Goals"]
  })

  let avgHomeGoals = homeTeamGoals.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0) / homeTeamGoals.length

  let avgAwayGoals = awayTeamGoals.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0) / awayTeamGoals.length


  console.log(`Home Team Avg: ${avgHomeGoals.toFixed(2)}, Away Team Avg: ${avgAwayGoals.toFixed(2)}`);
}
getAverageGoals(data);

/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */
