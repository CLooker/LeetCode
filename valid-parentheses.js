const isValid = ([...braces]) => {
  const bracePairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  let openingBraces = []; // stack

  const isBraceValid = brace =>
    bracePairs[brace] // if $brace is opening brace, a closing brace is returned, which is truthy
      ? openingBraces.push(brace) // pushing opening $brace onto stack is truthy
      : openingBraces.length && bracePairs[openingBraces.pop()] === brace; // $brace is closing brace but needs opening brace on stack to match with // matching closing brace is $brace

  // all braces are valid && there are no opening braces left to be matched
  return braces.every(isBraceValid) && !openingBraces.length;
};
