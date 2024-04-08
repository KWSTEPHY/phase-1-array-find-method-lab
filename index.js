function superbowlWin(record) {
    // Use the find() method to search for the first object where result is "W"
    const winningYear = record.find(game => game.result === "W");
  
    // If a winning year is found, return the year
    if (winningYear) {
      return winningYear.year;
    } else {
      // If no win is found, return undefined
      return undefined;
    }
  }
  