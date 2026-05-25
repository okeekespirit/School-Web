
function sendMessage(){
const input=document.getElementById('chatInput');
const msg=input.value.trim();
if(!msg)return;

const box=document.getElementById('chatMessages');
box.innerHTML += `<div><b>You:</b> ${msg}</div>`;

let reply='Ebony AI is ready to assist you.';

if(msg.toLowerCase().includes('math'))
reply='Mathematics resources are available in Curriculum.';

if(msg.toLowerCase().includes('science'))
reply='Science practical guides are available.';

if(msg.toLowerCase().includes('assignment'))
reply='Assignments can be uploaded in Cloud Storage.';

if(msg.toLowerCase().includes('exam'))
reply='Upcoming exams are shown on your dashboard.';

box.innerHTML += `<div><b>Ebony AI:</b> ${reply}</div>`;
box.scrollTop=box.scrollHeight;
input.value='';
}
