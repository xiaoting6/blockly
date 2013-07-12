// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="country1">Australien</span><span id="country1Flag">flag_au.png</span><span id="country1FlagHeight">50</span><span id="country1FlagWidth">100</span><span id="country1Language">Engelska</span><span id="country1City1">Melbourne</span><span id="country1City2">Sydney</span><span id="country1HelpUrl">http://sv.wikipedia.org/wiki/Australien</span><span id="country2">Tyskland</span><span id="country2Flag">flag_de.png</span><span id="country2FlagHeight">60</span><span id="country2FlagWidth">100</span><span id="country2Language">Tyska</span><span id="country2City1">Berlin</span><span id="country2City2">München</span><span id="country2HelpUrl">http://sv.wikipedia.org/wiki/Tyskland</span><span id="country3">Kina</span><span id="country3Flag">flag_cn.png</span><span id="country3FlagHeight">66</span><span id="country3FlagWidth">100</span><span id="country3Language">Kinesiska</span><span id="country3City1">Beijing</span><span id="country3City2">Shanghai</span><span id="country3HelpUrl">http://sv.wikipedia.org/wiki/Kina</span><span id="country4">Brasilien</span><span id="country4Flag">flag_br.png</span><span id="country4FlagHeight">70</span><span id="country4FlagWidth">100</span><span id="country4Language">Portugisiska</span><span id="country4City1">Rio de Janeiro</span><span id="country4City2">São Paulo</span><span id="country4HelpUrl">http://sv.wikipedia.org/wiki/Brasilien</span><span id="flag">flag:</span><span id="language">språk:</span><span id="languageChoose">välj...</span><span id="cities">städer:</span><span id="error0">Perfekt!\nAlla %1 block är rätt.</span><span id="error1">Nästan! Ett block är fel.</span><span id="error2">%1 block är fel.</span><span id="tryAgain">Det markerade blocket är inte rätt.\nFortsätt att prova.</span></div><table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html"><span id="blocklyName">Blockly</span></a> : Pussel</span></h1></td><td class="farSide"><select id="languageMenu" onchange="Puzzle.changeLanguage();"></select>&nbsp; &nbsp;<button id="helpButton" onclick="Puzzle.showHelp();">Hjälp</button>&nbsp; &nbsp;<button id="checkButton" class="launch" onclick="Puzzle.checkAnswers();">Kontrollera svar</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="shadow"></div><div id="help"><div style="padding-bottom: 0.7ex">För varje land (grön), sätt ut dess flagga, välj dess språk och göra en grupp av dess städer.</div><div><img src="help/help_sv.png"></div><div class="farSide" style="padding: 1ex 3ex 0"><button id="okButton" onclick="Puzzle.hideHelp()">OK</button></div></div>';
};