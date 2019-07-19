!function(e){var t={};function s(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t){const s=["cow","ke$ha","curaçao","triscuit™","бык"];class r{constructor(){this.state={word:s[0].split(""),level:0,wrongCount:0,correctCount:0,wrongGuesses:[],correctGuesses:[],guessActive:!1,gameOver:!1}}startGame(){$("audio").each(function(){$(this)[0].volume=.5}),$("#sfx-start")[0].play(),this.state.word=s[0].split(""),this.displayNewWord(this.state.word),this.startListener(),$("#game").css("display","flex")}restartGame(e=!1){this.state={word:e?s[this.state.level+1].split(""):s[0].split(""),level:e?this.state.level+1:0,wrongCount:0,correctCount:0,wrongGuesses:[],correctGuesses:[],guessActive:!1,gameOver:!1},$("rect#Rleg").show(),$("rect#Lleg").show(),$("rect#Rarm").show(),$("rect#Larm").show(),$("rect#torso").show(),$("path#head").show(),$("#used").text(""),$("#lose").hide(),$("#face").hide(),$("#used-letters").hide(),$("#word-letters").show(),$("#sun").hide(),$("body").attr("class",""),$("#retry").css("display","none"),this.displayNewWord(this.state.word),this.startListener()}displayNewWord(e){$("#word-letters").html(e.map(e=>{const t=$("<div>",{class:"letter"});return t.text(e),t}))}startListener(){$(document).keypress(e=>{if(this.state.guessActive)return!1;this.state.guessActive=!0,window.setTimeout(()=>this.state.guessActive=!1,350),this.state.gameOver||(console.log(e.code),e.charCode>32&&this.guessLetter(e.key.toLowerCase()))})}guessLetter(e){$("#sfx-guess")[0].play(),$("#guess").text(e),$("#guess").addClass("glow"),window.setTimeout(()=>$("#guess").text("").removeClass("glow"),300),this.state.word.includes(e)?window.setTimeout(()=>this.correctGuess(e),300):window.setTimeout(()=>this.incorrectGuess(e),300)}correctGuess(e){if($("#sfx-correct")[0].play(),!this.state.correctGuesses.includes(e)){this.state.correctGuesses.push(e),++this.state.correctCount,$("#word-letters").children().toArray().forEach(t=>{t.innerText.toLowerCase()===e&&(t.innerText="")});const t=new Set(this.state.word).size;this.state.correctCount===t&&this.win()}}incorrectGuess(e){switch($("#sfx-wrong")[0].play(),$("body").addClass("wrong"),window.setTimeout(()=>$("body").removeClass("wrong"),300),this.state.wrongGuesses.push(e),$("#used").text(this.state.wrongGuesses.join("")),$("#used-letters").is(":hidden")&&$("#used-letters").show(),++this.state.wrongCount,this.state.wrongCount){case 0:console.error("incorrectGuess ran despite zero wrongCount?");break;case 1:$("rect#Rleg").hide();break;case 2:$("rect#Lleg").hide();break;case 3:$("rect#Rarm").hide();break;case 4:$("rect#Larm").hide();break;case 5:$("rect#torso").hide();break;case 6:$("path#head").hide(),window.setTimeout(()=>this.lose(),300)}}win(){console.log("Win!"),this.state.gameOver=!0,window.setTimeout(()=>{this.state.level===s.length-1?($("#word-letters").hide(),$("#used-letters").hide(),$("#face").show(),$("#sun").show(),$("body").addClass("win"),$("#sfx-win")[0].play(),window.setTimeout(()=>{$("#retry").css("display","block"),$(document).keypress(e=>{$(document).unbind("keypress"),this.restartGame(!1)})},500)):(console.log("Level up!"),$("#sfx-level")[0].play(),$("body").addClass("level-up"),window.setTimeout(()=>{$("body").removeClass("level-up"),this.restartGame(!0)},830))},200)}lose(){this.state.gameOver=!0,$("#sfx-lose")[0].play(),$("#lose").show(),window.setTimeout(()=>{$("#retry").css("display","block"),$(document).keypress(e=>{$(document).unbind("keypress"),this.restartGame(!1)})},500)}}window.onload=()=>{"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0?$("#touchscreen").show():$(document).keypress(e=>{$(document).unbind("keypress"),$("#welcome").hide(),(new r).startGame()})}}]);