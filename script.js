function firstWord(s) {
  // your code here
	// Trim leading spaces
  s = s.trim();

  // If the string is empty after trimming, return it
  if (s === "") return "";

  // Find the first space
  let spaceIndex = s.indexOf(" ");

  // If no space found, return the whole string
  if (spaceIndex === -1) return s;

  // Otherwise return from start to first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
