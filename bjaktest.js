/*
  Given a chat log file and a number k, determine the top k chattiest users
  Chattiest means how many words a user has chatted (typed in)
  A word is simply anything between whitespace.
  
  *You can assume that the whole text above is a string in the same format.
  *You can assume the characters “<” and “>” only appear in the file to denote a username.

  Return a list of the chattiest users, in descending order.

*/
const logfile = "<user1> this is some chat word \n\
<user2> the sky is blue \n\
This line is still attributed to the user above haha \n\
<user1> more chat from me! 38gad81 \n\
<user3> wow i can't believe i fked up";
const list = descendingListChattiest(logfile);
console.log(list)


function descendingListChattiest() {
  const split = logfile.split(' ');

  const map = new Map();
  let currentUser;
  for (let word of split) {
    word = word.trim();  
    if(word[0] === '<' && word[word.length - 1] === '>')
    {
      currentUser = word;
      // username found in log
      if(!map.has(word)) {
        map.set(word, { wordCount: 0 })
        continue;
      }
    }

    if(currentUser == word){
      continue; // do not add wordCount if username is found in log
    }

    const current = map.get(currentUser);
    map.set(currentUser, {wordCount: ++current.wordCount})
  }

  // Create a sorted orderd list
  let orderedList = [];
  for (const entry of map){
    orderedList.push({user: entry[0], count: entry[1].wordCount})
  }

  return orderedList.sort((a,b) => a.count > b.count ? -1 : 1 );
}