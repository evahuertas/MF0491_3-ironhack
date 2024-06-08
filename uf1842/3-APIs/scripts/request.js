async function getPuzzle(wordCount) {
    let hiddenSentence = "Buena Suerte";
    url = "https://puzzle.mead.io/puzzle";

    wordCount = Math.round(Math.random());
    const response = await fetch(`${url}?=wordCount${wordCount}`);
    const data = response.json();
    console.log("data log : ",data) //promise?
    return hiddenSentence;
}
