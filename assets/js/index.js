

// Scoping function to avoid creating globals
(function() {
    var target = document.getElementById('target');
    var titles = [
        "I love you because you treat me like an actual person with worth and value and that's so rare to me and honestly means so much babygirl",
        'I love you because because you are the kindest, sweetest, most caring person I know and I want nothing more than to make you happy.',
        'I love you because you are an absolute dork like me and we laugh together so much and you get all my jokes and you are my pink barbie jeep ride or die.',
        "I love you because you are always there for me and know just what to say to cheer me up when I'm feeling down.",
        'I love you because it is my favorite thing to do hehe',
        "I love you because I wouldn't ever want anyone else.",
        "I love you because you are my absolute favorite person and you are all I can ever think about.",
        "I love you because you are gorgeous and sweet and funny and amazing.",
        "I love you because we can be vulnerable with each other and I care for you so much and want to spend the rest of my life taking care of you and putting you first.",
        "I love you because I simply want to. No matter what you do or how hard things may get, I love you because I simply want to and nothing is going to change that.",
        "I love you because I can't imagine a life without you babygirl, you're the only one for me."
    ];

    

    document.getElementById("btn").addEventListener("click", newTitle, false);

    function newTitle() {
        var i = (Math.random() * titles.length) | 0;
        target.innerText = titles[i];
    }
})(); // Execute the scoping function