
var total=document.createElement("div")
total.setAttribute("class","total")

var middle=document.createElement("div")
middle.setAttribute("class","middle")

var content=document.createElement("div")
content.setAttribute("class","content")

var matter=document.createElement("div")
matter.setAttribute("class","matter")

var para=document.createElement("p")
para.setAttribute("class","fixed_matter")
para.setAttribute("id","fixed_matter")
var minTimer=document.createElement("p")
minTimer.innerText="1:00"
minTimer.setAttribute("id","countdown")

var textarea=document.createElement("textarea")

textarea.setAttribute("class","write_here")
textarea.setAttribute("id","write_here")
// textarea.addEventListener("onclick",updateCountdown)
var buttons=document.createElement("div")
buttons.style.display="flex"
var calculate=document.createElement("button")
calculate.innerText="Result"
calculate.setAttribute("class","cal")
calculate.addEventListener("click",cal)

var restart=document.createElement("button")
restart.setAttribute("class","restart")
restart.addEventListener("click",start)
restart.innerText="Restart"

// var calculate=document.createElement("button")
// calculate.setAttribute("class","start")
// newstart.innerText="Start"

// var cal=document.createElement("button")
// cal.innerText="cal"
// cal.setAttribute("class","start")
// cal.addEventListener("click",cal)
var stringE=["Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book. Nancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent head. The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious. When the class was over, I went to the teacher to apologize.When she saw that I had realized my mistake, she cooled down and then told me in a very kind manner how disheartening it.","Days are not of equal value in one’s life. Some bring happiness while others bring sadness. Sadness and happiness both are equally important to man’s life, since they are the two sides of a coin. As we cannot forget the happiest day, we are unable to forget the saddest day of our life too. The saddest day of my life was the Diwali Day. Diwali is considered to be a happy festival and till last Diwali, it was my favorite festival. On last Diwali, my sister, my brother and I were busy lighting the fireworks. I was holding a ‘fuljhari’ in my hand and unfortunately my younger brother, who was standing just beside me, had a cracker in his hand. This cracker caught fire and a very loud explosion was heard which shook my sister and me. After that, we all could think of nothing else than blood stained cotton, bandage, dettol etc. My cousin took my brother to the doctor where he got 14 stitches in his forefinger and thumb.","Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc. We can derive benefit from other’s experiences with the help of books. The various sufferings, endurance and joy described in books enable us to have a closer look at human life. They also inspire us to face the hardships of life courageously."]
var stringM=["Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!” When the villagers heard the cry, they came running up the hill to drive the wolf away. But, when they arrived, they saw no wolf. The boy was amused when seeing their angry faces “Don’t scream wolf, boy,” warned the villagers, the shepherd boy cried out once again, “Wolf! Wolf! The wolf is chasing the sheep!” To his amusement, he looked on as the villagers came running up the hill to scare the wolf away. As they saw there was no wolf, they said strictly, “Save your frightened cry for when there really is a wolf! Dont cry ‘wolf’ when there is no wolf!” But the boy grinned at their words while they walked grumbling down the hill once more. Later, the boy saw a real wolf sneaking around his flock. Alarmed, he jumped on his feet and cried out as loud as he could, “Wolf! Wolf!” But the villagers thought he was fooling them again, and so they didnt come to help.","There once was a king named Midas who did a good deed for a Satyr. And he was then granted a wish by Dionysus, the god of wine.For his wish, Midas asked that whatever he touched would turn to gold. Despite Dionysus’ efforts to prevent it, Midas pleaded that this was a fantastic wish, and so, it was bestowed.Excited about his newly-earned powers, Midas started touching all kinds of things, turning each item into pure gold.But soon, Midas became hungry. As he picked up a piece of food, he found he couldn’t eat it. It had turned to gold in his hand.Seeing his dismay, Midas’ beloved daughter threw her arms around him to comfort him, and she, too, turned to gold. “The golden touch is no blessing,” Midas cried.","One day, a fox became very hungry as he went to search for some food. He searched high and low, but couldn’t find something that he could eat.Finally, as his stomach rumbled, he stumbled upon a farmer’s wall. At the top of the wall, he saw the biggest, juiciest grapes he’d ever seen. They had a rich, purple color, telling the fox they were ready to be eaten.To reach the grapes, the fox had to jump high in the air. As he jumped, he opened his mouth to catch the grapes, but he missed. The fox tried again but missed yet again.",]
var stringH=["Born on April 14th, 1891, Bhimrao Ramji Ambedkar was an Indian nationalist,jurist, Dalit leader and a Buddhist revivalist. But most importantly, he was the chief architect of the Indian constitution. Born into a poor family, he spent his entire life fighting social discrimination against the lower castes. He overcome numerous social and financial obstacles to become the first ‘untouchable’ to obtain a college degree. He went on to earn a degree in law, and then doctorates in economics, and political science. Throughout his early life, Ambedkar was subjected to intense social discrimination; but his father who had received some formal education,encouraged all his children to go through school. He also gave them a thorough knowledge of the Indian classics.","As he entered college in Bombay, he became increasingly disturbed by the discrimination that he faced. Though, excelling in academics, he was still treated as an ‘untouchable’ by most people. After completing his degree in economics and political science from the USA, he was recognized as a leading Indian scholar and was invited to chair the committee set up to draft the constitution of India. He became independent India’s first law minister and was conferred the Bharat Ratna posthumously in 1990. He relentlessly fought for the promotion of education and socio – economic upliftment of the depressed classes. He launched active movements against untouchability and started public protests to open and share public drinking water resources. He also began a struggle for the right to enter Hindu temples.. He strongly believed that ‘God helps those who help themselves’ and being an ‘untouchable’ was no excuse for remaining a suppressed and backward community. ","When drafting the constitution he drew his inspiration from the Buddhist scriptures which he had read extensively. Voting by ballots, rules of debate and the formation of committees were incorporated from these scriptures. Thus,Ambedkar drew up a constitution that was shaped upon western models but was Indian in spirit. In it he provided a number of clauses that would help eradicate socio-economic inequalities and lack of opportunities. He also sought to expound gender equality in laws of inheritance, marriage and equality.Ambedkar was a major influence in transforming the way India looks at socioeconomic policies today. Regarded highly as a scholar, he passionately believed in the freedom of the individual."]
var Resultdiv=document.createElement("div")
Resultdiv.setAttribute("class","Resultdiv")
Resultdiv.setAttribute("id","Resultdiv")

var countdownEl = document.getElementById("countdown");

var startBtn = document.getElementById("start")
startBtn.addEventListener("click",start)


var touch=0
function start(){
  var selected=document.getElementById("timeValue");
  newtime = selected.value
  var level=document.getElementById("LevelValue");
  newlevel = level.value
  console.log(newlevel[0])
  ele=newlevel[0]
  var Main=document.getElementById("full_div")
  document.getElementById("full_div").innerHTML=" "
  function getRandomString() {
    if(ele=="E"){
    var randomIndex = Math.floor(Math.random() * stringE.length);
      return stringE[randomIndex];
    }
    else if(ele=="M"){
      var randomIndex = Math.floor(Math.random() * stringM.length);
      return stringM[randomIndex];
    }
    else if(ele=="H"){
      var randomIndex = Math.floor(Math.random() * stringH.length);
      return stringH[randomIndex];
    }
    }
    restart.addEventListener("click",newpage)
    para.innerText = getRandomString();
    buttons.append(restart,calculate)
    matter.append(para,textarea)
    content.append(matter)
    middle.append(content)
    total.append(middle)
    Main.append(total,buttons)
    console.log(para.innerText.length)
    console.log(textarea)

    var sum=0
time =newtime*60;
console.log(time)
return newtime,time;
}


function updateCountdown() {
  
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  time--
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  if (seconds < 0) {
          // console.log(seconds + ' seconds remaining...');
    //       // seconds--;
    textarea.readOnly = true;
    countdownEl.remove()
    //       matter.append(countdownEl)
         
      } else {
        
      }
  // countdownEl.innerHTML = `${minutes}:${seconds}`;
  textwords=document.getElementById("write_here").innerText
  console.log(textwords)
  matter.append(countdownEl)
  console.log(countdownEl)
  console.log(newtime)
  console.log(seconds)
  console.log(time)
  endtime=newtime*60000
  console.log(endtime)
  setTimeout(function() {
    countdownEl.innerText=" "
    countdownEl.innerText="Time's up!";
    textarea.readOnly = true;
    
    },endtime);  
}
// dou.addEventListener("keypress", function(event) {
//   if (event.key === "Backspace") {
//     event.preventDefault(); // Prevent the default Backspace behavior
//   }
// });
var interval;
textarea.addEventListener("focus",()=>{
  interval= setInterval(updateCountdown,1000);
  // touch++
  console.log("toiuched")
})



var count=0
var carr=[]
var wrong=0
var warr=[]
var resultmaindiv=document.createElement("div")
  resultmaindiv.setAttribute("class","mainresult")
// button=document.createElement("button")
function cal(){
  touch++
  var anotherMain=document.getElementById("full_div")
  // anotherMain.style.display="flex"
  anotherMain.style.marginTop="0px"
  document.getElementById("full_div").value=" "
  var fixedwritten=document.getElementById("fixed_matter").innerText
  fixedwritten=fixedwritten.split(" ")
  var newwritten=document.getElementById("write_here").value
  newwritten=newwritten.split(" ")

  for(var i=0;i<=fixedwritten.length;i++){
    if(fixedwritten[i]===newwritten[i]){
      count++
      carr.push(newwritten[i])
    }
    if(fixedwritten[i]!==newwritten[i]){
      wrong++
      warr.push(newwritten[i])
    }
  }
  wrongarr=warr.filter(i => i !== undefined)
  
  var countf=count-1
  restart.style.marginLeft="215px"
  // anotherMain.append(Resultdiv)
  console.log(count)
  console.log(carr)
  console.log(wrong)
  console.log(wrongarr)
  console.log(newwritten.length)
  console.log(newwritten)
  console.log(typeof(fixedwritten))
  // calculate.replaceWith(Resultdiv)
  var gross=Math.floor(newwritten.length/5)
  var net=gross-wrongarr.length
  
  var left=accuracy-100
  console.log(accuracy)
  // if(accuracy>100){
  //   // console.log(accuracy)
  //   accuracy==(accuracy-left)
  // }
  console.log(gross)
  console.log(net)
  console.log(accuracy)
  var grossDiv=document.createElement("div")
  grossDiv.setAttribute("class","gross")
  textgross=document.createElement("div")
  textgross.innerText="Typing Speed"
  textgross.setAttribute("class","textgross")
  grossDiv.append(textgross,countf)
  var netDiv=document.createElement("div")
  netDiv.setAttribute("class","gross")
  textdiv=document.createElement("div")
  textdiv.innerText="Net Speed"
  textdiv.setAttribute("class","textgross")
  
  var accuracyDiv=document.createElement("div")
  accuracyDiv.setAttribute("class","gross")
  var textaccuracy=document.createElement("div")
  textaccuracy.setAttribute("class","textgross")
  textaccuracy.innerText="Accuracy"
  
  
  
  // var final_value=accuracy*count
  // accuracy=accuracy.toFixed(2); 
  var correctDiv=document.createElement("div")
  correctDiv.setAttribute("class","correctDiv")
  
  var wrongDiv=document.createElement("div")
  wrongDiv.setAttribute("class","wrongDiv")
  var wrongvalue
  if(wrongarr<=0){
    wrongarr.length==0
  }
  else if(wrongarr>0){
    wrongarr.length==wrongarr.length-1
  }
  
  var accuracy = ((countf/ newwritten.length)*100)
  accuracy=accuracy.toFixed(2)
  console.log(count)
  console.log(newwritten.length)
  console.log(accuracy)
if(accuracy>100){
    accuracy==100
}
  var countvalue= parseInt(countf)
  console.log(countvalue)
  var accuracyvalue=parseInt(accuracy)
  accuracyDiv.append(textaccuracy,(accuracy))
  var netvalue=Math.floor(((countvalue)*(accuracyvalue))/100)
  netDiv.append(textdiv,netvalue)
  correctDiv.append(grossDiv,accuracyDiv,netDiv)
  var br=document.createElement("br")
  wrongDiv.append("Correct Words="+(countf),br,"Wrong Words="+(wrongarr.length))
 
  // Resultdiv.append("Net Speed ="+count,br,"Wrong Words ="+wrongarr.length)
  Resultdiv.append(correctDiv,wrongDiv)
  resultmaindiv.append(Resultdiv,restart)
  restart.addEventListener("click",newpage)
  anotherMain.replaceWith(resultmaindiv)
  // 
}
function newpage(){
  window.location.href="file:///D:/programs/frontend/Typing.html"
}


