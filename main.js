var randomArray = [
    {
        quote: '“Be the change that you wish to see in the world.”',
        author: '― Mahatma Gandhi'    
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        author: '― Mae West'
    },
    {
        quote: '“If you tell the truth, you dont have to remember anything.”',
        author: '― Mark Twain'
    },
    {
        quote: '“Always forgive your enemies; nothing annoys them so much.”',
        author: '― Oscar Wilde'
    },
    {
        quote: '“Without music, life would be a mistake.”',
        author: '― Friedrich Nietzsche, Twilight of the Idols'
    },
    {
        quote: '“We accept the love we think we deserve.”',
        author: '― Stephen Chbosky, The Perks of Being a Wallflower'
    }
];

function quoteRandom() {
    var randomNum = Number.parseInt(Math.random() * randomArray.length);
    document.querySelector('#quoteOutput').textContent = randomArray[randomNum].quote;
    document.querySelector('#authorOutput').textContent = randomArray[randomNum].author;
}

