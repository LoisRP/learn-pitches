// JavaScript doc
/* Adapted from one found at http://wererat.net/tutorials/javascript1.htm

var nummidi = 4
day = new Date();
seed = day.getTime();
ran = parseInt(((seed - (parseInt(seed/1000,10) * 1000))/10)/100*nummidi + 1,10);

if (ran == (1)){
midi=("sounds/yourmidi1.mid")
title=("Midi 1")
leng=33
}

if (ran == (2)){
midi=("sounds/yourmidi2.mid")
title=("Midi 2")
leng=151
}

if (ran == (3)){
midi=("sounds/yourmidi3.mid")
title=("Midi 3")
leng=63
}

if (ran == (4)){
midi=("sounds/yourmidi4.mid")
title=("Midi 4")
leng=46
}



document.write("<META HTTP-EQUIV=REFRESH CONTENT='" + leng + "; URL=midiplayer.htm'>");
document.write("<EMBED SRC='"+ midi +"' AUTOSTART='true' LOOP='true' VOLUME=75 WIDTH=16 HEIGHT=16> <BR> ");
document.write("<FONT SIZE=-1>" + title + "</FONT> ");
//-->
</SCRIPT>