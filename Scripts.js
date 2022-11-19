let btns = new Array();
btns[0] = document.getElementById("b1");
btns[1] = document.getElementById("b2");
btns[2] = document.getElementById("b3");
btns[3] = document.getElementById("b4")

let snow = false;
let audio = new Audio();
audio = document.getElementById("audio");
let wind = new Audio();
wind = document.getElementById("wind");
function GetText(input) {
    switch (input) {
        //Q0
        case 0: return "He sat down on a snow covered log to eat."; break;
        case 1: return "He kept his brisk pace."; break;
        //Q1
        case 2: return "He called the dog to follow at his heels."; break;
        case 3: return "Suspecting danger, he compelled the dog to go on in front."; break;
        //Q2
        case 4: return "He started building his fire in the mossy clearing"; break;
        case 5: return "He started building his fire under a spruce tree."; break;
        //Q3
        case 6: return "Next he brought out his bunch of sulphur matches."; break;
        case 7: return "He began threshing his arms back and forth, beating the mittened hands against his sides. "; break;
        case 8: return "He tried fumbling the matches into his mouth."; break;
        case 9: return "Suddenly he bared both hands, removing the mittens with his teeth."; break;
        //Q4
        case 10: return "He ran blindly, without intention, in fear such as he had never known in his life."; break;
        case 11: return "He decided he must lunge at the dog with his knife"; break;
        case 12: return "He decided he must trick the dog and then strangle it"; break;
    }
}
function GetClip(input) {
    switch (input) {
        case 0: return "Prologue.mp3"; break;
        case 1: return "Lunch Break.mp3"; break;
        case 2: return "Keep Moving.mp3"; break;
        case 3: return "Ice Trap.mp3"; break;
        case 4: return "Building a Fire.mp3"; break;
        case 5: return ""; break;
        case 6: return "Matches.mp3"; break;
        case 7: return "Hands.mp3"; break;
        case 8: return "Mouth.mp3"; break;
        case 9: return ""; break;
        case 10: return "Moss.mp3"; break;
        case 11: return "Snow.mp3"; break;
        case 12: return ""; break;
        case 13: return "Send Dog.mp3"; break;
        case 14: return "Run.mp3"; break;
        case 15: return "Attack Dog.mp3"; break;
        case 16: return "Trick Dog.mp3"; break;
        case 17: return "Epilogue.mp3"; break;
    }
}
function SetClip(input) {
    audio.pause();
    audio.setAttribute("src", GetClip(input));
    audio.play();
}
function Q0() {
    Activate(0);
    wind.play();
    SetClip(0);
    btns[0].innerText = GetText(0);
    btns[0].setAttribute("onclick", 'Q2(true)');
    btns[1].hidden = false;
    btns[1].innerText = GetText(1);
    btns[1].setAttribute("onclick", 'Q1()');
}
function Q1() {
    Activate(2);
    SetClip(2)
    btns[0].innerText = GetText(2);
    btns[0].setAttribute("onclick", 'Q2(false)');
    btns[1].innerText = GetText(3);
    btns[1].setAttribute("onclick", 'Q4()');
}
function Q2(lunch) {
    if (lunch) {
        Activate(1);
        SetClip(1)
    } else {
        SetClip(3)
    };
    Activate(3);
    btns[0].innerText = GetText(4);
    btns[0].setAttribute("onclick", 'Q3(false)');
    btns[1].innerText = GetText(5);
    btns[1].setAttribute("onclick", 'Q3(true)');
}
function Q3(tree) {
    snow = tree;
    Activate(4)
    SetClip(4)
    btns[0].innerText = GetText(6);
    btns[0].setAttribute("onclick", 'LoopBack(0, 6, false)');
    btns[1].innerText = GetText(7);
    btns[1].setAttribute("onclick", 'LoopBack(1, 7, false)');
    btns[2].hidden = false;
    btns[2].innerText = GetText(8);
    btns[2].setAttribute("onclick", 'LoopBack(2, 8, false)');
    btns[3].hidden = false;
    btns[3].innerText = GetText(9);
    btns[3].setAttribute("onclick", 'snowMoss()');
}
function Q4() {
    Activate(13);
    SetClip(13);
    btns[0].innerText = GetText(10);
    btns[0].setAttribute("onclick", 'LoopBack(0, 14, true)');
    btns[1].innerText = GetText(11);
    btns[1].setAttribute("onclick", 'LoopBack(1, 15, true)');
    btns[2].hidden = false;
    btns[2].innerText = GetText(12);
    btns[2].setAttribute("onclick", 'LoopBack(2, 16, true)');
}
function snowMoss() {
    Activate(9);
    if (snow) {
        Activate(11);
        SetClip(11);
    } else {
        Activate(10);
        SetClip(10);
    }
    Activate(12);
    Q5();
}
function Q5() {
    Activate(17);
    Activate(18);
    btns[0].hidden = true;
    btns[1].hidden = true;
    btns[2].hidden = true;
    btns[3].hidden = true;
}
let end = false;
function LoopBack(btn, text, e) {
    btns[btn].hidden = true;
    Activate(text);
    SetClip(text);
    if (end) {
        setTimeout(function () { SetClip(17) }, 60000);
        Q5();
    }
    if (e) {
        end = true;
    }
}
function PsychButton() {
    document.getElementById("psych").innerText = "Psych!";
}

function Activate(text) {
    document.getElementById(text).hidden = false;

}