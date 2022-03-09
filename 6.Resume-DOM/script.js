const body      = document.querySelector("body");
const breaktag=document.createElement("br");
//Header Content
const headerEle = document.createElement("header");
const divEle    = document.createElement("div");
const image     = document.createElement("img");
divEle.classList.add("first");
divEle.append(image);
image.setAttribute("src","./brian.jpg");
image.setAttribute("alt","profilepic");
image.classList.add("logo");
headerEle.append(divEle);
body.append(headerEle);

 //BRAIN DUDEY
 const textdiv = document.createElement("div");
 textdiv.classList.add("text");
 const textpara= document.createElement("p");
 textpara.innerHTML="BRAIN DUDEY";
 textdiv.append(textpara);
 body.append(textdiv);

//Next Div
const divnext=document.createElement("div");
divnext.classList.add("next");
body.append(divnext);

//N.Damen Avenue,Chicago div
const divave=document.createElement("div");
const parave=document.createElement("p");
parave.classList.add("textnew");
parave.append(divave);
body.append(divave);

//Horizontal Ruler
const hr=document.createElement("hr");
body.append(hr);


const mainbox=document.createElement("div");
mainbox.classList.add("box");

const leftbox=document.createElement("div");
leftbox.classList.add("leftbox");

const divder    =document.createElement("div");
divder.classList.add("divider");
const divderhorz=document.createElement("hr");
divderhorz.append(divder);

const rightbox  =document.createElement("div");
rightbox.classList.add("rightbox");

mainbox.append(leftbox);
mainbox.append(divder);
mainbox.append(rightbox);
body.append(mainbox);

//1.Profile

const Profilediv=document.createElement("div");

const holderdiv=document.createElement("div")
holderdiv.classList.add("holder");

 const icondiv=document.createElement("div");
 icondiv.classList.add("icon");

const iconpro=document.createElement("i");
iconpro.classList.add("fas","fa-user","fa-sm");
icondiv.append(iconpro);

const tiltlediv=document.createElement("div");
tiltlediv.classList.add("title");

const spandiv=document.createElement("span");
spandiv.classList.add("title");
spandiv.innerHTML="Profile";
spandiv.append(tiltlediv);

holderdiv.append(icondiv);
holderdiv.append(spandiv);

Profilediv.append(holderdiv);

const infodiv  = document.createElement("div");
const info_ptag= document.createElement("p");
info_ptag.classList.add("info");
info_ptag.innerHTML="Innovative optimized solution seeker.Excited to be  at the deployment phase of my new career as a web developer. I am ambitious,adventrous,assiduos,animated, and am alliteration advocate.";
infodiv.append(info_ptag);

Profilediv.append(infodiv)
leftbox.append(Profilediv);

//2. SKill

const Skilldiv=document.createElement("div");
const holderdivS=document.createElement("div")
holderdivS.classList.add("holder");

 const icondivS=document.createElement("div");
 icondivS.classList.add("icon");

const iconskill=document.createElement("i");
iconskill.classList.add("fas","fa-flask","fa-sm");

icondivS.append(iconskill);

const tiltledivS=document.createElement("div");
tiltledivS.classList.add("title");

const spandivS=document.createElement("span");
spandivS.classList.add("title");
spandivS.innerHTML="Skills"
spandivS.append(tiltlediv);

holderdivS.append(icondivS);
holderdivS.append(spandivS);

//H3
const skillh3=document.createElement("h3");
skillh3.innerHTML="Technical Skills";
skillh3.classList.add("heading");

//Technical div

const techdiv=document.createElement("div");
techdiv.classList.add("range");
//HTML
const lblhtml=document.createElement("label");
lblhtml.innerHTML="html";
const htmlip=document.createElement("input");
htmlip.setAttribute("type","range");
htmlip.setAttribute("value","70");
htmlip.toggleAttribute("disabled");
//CSS
const lblCSS=document.createElement("label");
lblCSS.innerHTML="CSS";
const CSSip=document.createElement("input");
CSSip.setAttribute("type","range");
CSSip.setAttribute("value","30");
CSSip.toggleAttribute("disabled");
//JS
const lblJS=document.createElement("label");
lblJS.innerHTML="Javascript";
const JSip=document.createElement("input");
JSip.setAttribute("type","range");
JSip.setAttribute("value","70");
JSip.toggleAttribute("disabled");
//React
const lblReact=document.createElement("label");
lblReact.innerHTML="React";
const Reactip=document.createElement("input");
Reactip.setAttribute("type","range");
Reactip.setAttribute("value","60");
Reactip.toggleAttribute("disabled");
//Redux
const lblRedux=document.createElement("label");
lblRedux.innerHTML="Redux";
const Reduxip=document.createElement("input");
Reduxip.setAttribute("type","range");
Reduxip.setAttribute("value","60");
Reduxip.toggleAttribute("disabled");
//Mongo
const lblMongo=document.createElement("label");
lblMongo.innerHTML="Mongo";
const Mongoip=document.createElement("input");
Mongoip.setAttribute("type","range");
Mongoip.setAttribute("value","40");
Mongoip.toggleAttribute("disabled");
//deploy
const lbldeploy=document.createElement("label");
lbldeploy.innerHTML="deploy";
const deployip=document.createElement("input");
deployip.setAttribute("type","range");
deployip.setAttribute("value","40");
deployip.toggleAttribute("disabled");

techdiv.append(lblhtml);
techdiv.append(htmlip);
techdiv.append(breaktag);
techdiv.append(lblCSS);
techdiv.append(CSSip);
techdiv.append(breaktag);
techdiv.append(lblJS);
techdiv.append(JSip);
techdiv.append(breaktag);
techdiv.append(lblReact);
techdiv.append(Reactip);
techdiv.append(breaktag);
techdiv.append(lblRedux);
techdiv.append(Reduxip);
techdiv.append(breaktag);
techdiv.append(lblMongo);
techdiv.append(Mongoip);
techdiv.append(breaktag);
techdiv.append(lbldeploy);
techdiv.append(deployip);
techdiv.append(breaktag);
//H3
const Additonalh3=document.createElement("h3");
Additonalh3.innerHTML="Additional Skills";
Additonalh3.classList.add("heading");
//Additional Div

const Aditionaldiv=document.createElement("div");
Aditionaldiv.classList.add("range");
//Project Management
const lblProject=document.createElement("label");
lblProject.innerHTML="Project Management";
const Projectip=document.createElement("input");
Projectip.setAttribute("type","range");
Projectip.setAttribute("value","70");
Projectip.toggleAttribute("disabled");
//Recuirtment
const lblRecuirtment=document.createElement("label");
lblRecuirtment.innerHTML="Recuirtment";
const Recuirtmentip=document.createElement("input");
Recuirtmentip.setAttribute("type","range");
Recuirtmentip.setAttribute("value","30");
Recuirtmentip.toggleAttribute("disabled");
//Bussiness
const lblBussiness=document.createElement("label");
lblBussiness.innerHTML="Bussiness";
const Bussinessip=document.createElement("input");
Bussinessip.setAttribute("type","range");
Bussinessip.setAttribute("value","70");
Bussinessip.toggleAttribute("disabled");
//Editing
const lblEditing=document.createElement("label");
lblEditing.innerHTML="Editing";
const Editingip=document.createElement("input");
Editingip.setAttribute("type","range");
Editingip.setAttribute("value","60");
Editingip.toggleAttribute("disabled");
//fundraising
const lblfundraising=document.createElement("label");
lblfundraising.innerHTML="fundraising";
const fundraisingip=document.createElement("input");
fundraisingip.setAttribute("type","range");
fundraisingip.setAttribute("value","80");
fundraisingip.toggleAttribute("disabled");

Aditionaldiv.append(lblProject);
Aditionaldiv.append(Projectip);
Aditionaldiv.append(breaktag);
Aditionaldiv.append(lblRecuirtment);
Aditionaldiv.append(Recuirtmentip);
Aditionaldiv.append(breaktag);
Aditionaldiv.append(lblBussiness);
Aditionaldiv.append(Bussinessip);
Aditionaldiv.append(breaktag);
Aditionaldiv.append(lblEditing);
Aditionaldiv.append(Editingip);
Aditionaldiv.append(breaktag);
Aditionaldiv.append(lblfundraising);
Aditionaldiv.append(fundraisingip);
Aditionaldiv.append(breaktag);


Skilldiv.append(holderdivS);
Skilldiv.append(skillh3);
Skilldiv.append(techdiv);
Skilldiv.append(Additonalh3);
Skilldiv.append(Aditionaldiv);
leftbox.append(Skilldiv);


//3.Work Experience


const Workdiv=document.createElement("div");
const holderdivW=document.createElement("div")
holderdivW.classList.add("holder");

const icondivW=document.createElement("div");
icondivW.classList.add("icon");

const iconskillW=document.createElement("i");
iconskillW.classList.add("fas","fa-flask","fa-sm");
icondivW.append(iconskill);

const tiltledivW=document.createElement("div");
tiltledivW.classList.add("title");

const spandivW=document.createElement("span");
spandivW.classList.add("title");
spandivW.innerHTML="Education"
spandivS.append(tiltledivW);

holderdivW.append(icondivW);
holderdivW.append(spandivW);

//Event Manager
const eventdiv=document.createElement("div");

const spanhigh=document.createElement("span");
spanhigh.classList.add("highlight");
spanhigh.innerHTML="Event Manager";

const spanhighdate=document.createElement("span");
spanhighdate.classList.add("date");
spanhighdate.innerHTML="03/2014-02/2017";

const spanhighPresent=document.createElement("span");
spanhighPresent.innerHTML="C3 Presents,Washinton DC";


const workultag=document.createElement("ul");
workultag.classList.add("worklist");
const workli1=document.createElement("li");
workli1.innerHTML="Lead and execute all phases of event planning and production spanning commited Recruitment,training,vendor relationships and on-site facilitation"
const workli2=document.createElement("li");
workli2.innerHTML="Brought new bussiness to the organization through relentless networking and stewardship which helped the company win the bid for the state Department Summit on the MIddle East and , the companies"
const workli3=document.createElement("li");
workli3.innerHTML="Exercise fiscal control over budget creation tracking and reporting.collaborate with employees at all organization levels to advance cohesive operations."

workultag.append(workli1);
workultag.append(workli2);
workultag.append(workli3);


eventdiv.append(spanhigh);
eventdiv.append(spanhighdate);
eventdiv.append(breaktag);
eventdiv.append(spanhighPresent);
eventdiv.append(workultag);

Workdiv.append(holderdivW);
Workdiv.append(eventdiv)
leftbox.append(Workdiv);

//4. Work Experience 2 Right side

const Workdiv2=document.createElement("div");
const holderdivW2=document.createElement("div")
holderdivW2.classList.add("holder");

const icondivW2=document.createElement("div");
icondivW2.classList.add("icon");

const iconskillW2=document.createElement("i");
iconskillW2.classList.add("fas","fa-flask","fa-sm");
icondivW2.append(iconskillW2);

const tiltledivW2=document.createElement("div");
tiltledivW2.classList.add("title");

const spandivW2=document.createElement("span");
spandivW2.classList.add("title");
spandivW2.innerHTML="Education"
spandivW2.append(tiltledivW2);

holderdivW2.append(icondivW2);
holderdivW2.append(spandivW2);


//Event Manager
const eventdiv2=document.createElement("div");

const spanhigh2=document.createElement("span");
spanhigh2.classList.add("highlight");
spanhigh2.innerHTML="Engineering&nbsp;Immerision";

const spanhighdate2=document.createElement("span");
spanhighdate2.classList.add("date");
spanhighdate2.innerHTML="11/2018&nbsp;06/2018";

const spanhighprgm=document.createElement("span");
spanhighprgm.classList.add("highlight");
spanhighprgm.innerHTML="Program";

const spanhighPresent3=document.createElement("span");
spanhighPresent3.innerHTML="Project-focused intensive program"





eventdiv2.append(spanhigh2);
eventdiv2.append(spanhighdate2);
eventdiv2.append(breaktag);
eventdiv2.append(breaktag);
// eventdiv2.append(spanhighprgm);
eventdiv2.append(breaktag);
eventdiv2.append(spanhighPresent3);




const workultag1=document.createElement("ul");
workultag1.classList.add("worklist");
const workl1=document.createElement("li");
workl1.innerHTML="Lead and execute all phases of event planning and production spanning commited Recruitment,training,vendor relationships and on-site facilitation"
const workl2=document.createElement("li");
workl2.innerHTML="Brought new bussiness to the organization through relentless networking and stewardship which helped the company win the bid for the state Department Summit on the MIddle East and , the companies"
const workl3=document.createElement("li");
workl3.innerHTML="Exercise fiscal control over budget creation tracking and reporting.collaborate with employees at all organization levels to advance cohesive operations."

workultag1.append(workl1);
workultag1.append(workl2);
workultag1.append(workl3);

eventdiv2.append(workultag1);



Workdiv2.append(holderdivW2);
Workdiv2.append(eventdiv2);
rightbox.append(Workdiv2);


//5.Workexperience 3


const Workdiv3=document.createElement("div");
const holderdivW3=document.createElement("div")
holderdivW3.classList.add("holder");

const icondivW3=document.createElement("div");
icondivW3.classList.add("icon");

const iconskillW3=document.createElement("i");
iconskillW3.classList.add("fas","fa-flask","fa-sm");
icondivW3.append(iconskillW3);

const tiltledivW3=document.createElement("div");
tiltledivW3.classList.add("title");

const spandivW3=document.createElement("span");
spandivW3.classList.add("title");
spandivW3.innerHTML="Education"
spandivW3.append(tiltledivW3);

holderdivW3.append(icondivW3);
holderdivW3.append(spandivW3);


//Event Manager
const eventdiv3=document.createElement("div");

const spanhigh3=document.createElement("span");
spanhigh3.classList.add("highlight");
spanhigh3.innerHTML="Engineering&nbsp;Immerision";

const spanhighdate3=document.createElement("span");
spanhighdate3.classList.add("date");
spanhighdate3.innerHTML="11/2018&nbsp;06/2018";

const spanhighprgm1=document.createElement("span");
spanhighprgm1.classList.add("highlight");
spanhighprgm1.innerHTML="Program";

const spanhighPresent4=document.createElement("span");
spanhighPresent4.innerHTML="Project-focused intensive program"

eventdiv3.append(spanhigh3);
eventdiv3.append(spanhighdate3);
eventdiv3.append(breaktag);
eventdiv3.append(breaktag);
// eventdiv2.append(spanhighprgm);
eventdiv3.append(breaktag);
eventdiv3.append(spanhighPresent4);


const workultag2=document.createElement("ul");
workultag2.classList.add("worklist");
const workl4=document.createElement("li");
workl4.innerHTML="Developed a full-stack web application,Renew U using React that allows users to explore various aspects of meditation.User's orogress is stored on a backend created using Node and MongoDB."
const workl5=document.createElement("li");
workl5.innerHTML="Developed a language learning app, using spaced repetition and a linked list datastructure.React was used to create a backend that stores user data."
const workl6=document.createElement("li");
workl6.innerHTML="Developed a concierge app,pley, for individuals looking for curated suggestions when visiting a new place,React was used to develo[ the front end which includes real-timechat,drag and drop and variety of advanced features.The backend, built using Node,Express,and Mongo, takes advantage of well-developed RESTful API,Geospatial searching,and user authentication with JWT."

workultag2.append(workl4);
workultag2.append(workl5);
workultag2.append(workl6);



eventdiv3.append(workultag2);
eventdiv3.append(breaktag);
eventdiv3.append(breaktag);
eventdiv3.append(breaktag);



const spanhighdate5=document.createElement("span");
spanhighdate5.classList.add("highlight");
spanhighdate5.innerHTML="BAEnglish";

const spanhighdate6=document.createElement("span");
spanhighdate6.classList.add("span6");
spanhighdate6.innerHTML="09/2001&nbsp;09/2015";

const spanhighdate7=document.createElement("span");
spanhighdate7.classList.add("california");
spanhighdate7.innerHTML="University of California";

Workdiv3.append(holderdivW3);
Workdiv3.append(eventdiv3);
Workdiv3.append(spanhighdate5);

Workdiv3.append(spanhighdate6);
Workdiv3.append(breaktag);
Workdiv3.append(spanhighdate7);
rightbox.append(Workdiv3);