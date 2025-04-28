const body = document.querySelector('body');
body.className = "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-7";

const h1 = document.createElement('h1');
h1.innerHTML = "Qissa AL-QURAN";
h1.className = "text-6xl font-extrabold text-blue-400 justify-center text-center m-6";

const h3 = document.createElement('h3');
h3.innerHTML = "Qisatu Ibrahim (Calayhi Salam)";
h3.className = "text-xl font-semibold text-yellow-300 text-center underline m-12";

const flex = document.createElement('div');
flex.className = "flex flex-col md:flex-row items-center justify-center gap-40 m-8";

const p = document.createElement('p');
p.innerHTML = `Nabi Ibraahim (CS) wuxuu ahaa nabi caqli badan oo Ilaahay <br> u doortay inuu dadka ugu yeero Towxiidka. <br>
  Markii uu arkay in qoomkiisu ay caabudaan sanamyo,<br> wuxuu si xikmad leh u jabiyay sanamyadii, isagoo reebay midka ugu weyn.
  Wuxuu yiri:<br> <span class="italic text-green-400">"Bal weydiiya kii hadhay haddii uu hadli karo."</span><br>
  Kadibna dab ayaa lagu riday, laakiin Ilaahay wuxuu yiri:<br> 
  <span class="italic text-blue-300">"Qul yaa naaru Kuni bardan wa salaaman calaa Ibraahim."</span> <br>
  wuxuuna si mucjiso ah uga badbaaday dabkii.`;
p.className = "text-2xl max-w-xl text-center md:text-left";

const img = document.createElement('img');
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GMyLGRjZR4Xlj2Rljzkv-zf5_bC120Pdxg&s";
img.className = "w-96 rounded-lg shadow-lg";

flex.appendChild(p);
flex.appendChild(img);

body.appendChild(h1);
body.appendChild(h3);
body.appendChild(flex);