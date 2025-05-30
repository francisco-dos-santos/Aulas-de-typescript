interface UserData{
  nome?: string;
  email?: string;
  bi?: string;
}

interface Window { 
  UserData: any;
}
window.UserData = {};

function isUserData(value:unknown):value is UserData{
  if(value && typeof value === "object" &&
    ("nome" in value || "email" in value || "bi" in value)){
    return true
  }else{
    return false
  }
}

function validJSON(str:string){
  try{
    JSON.parse(str)
  }catch(e){
    return false
  }
  return true
}
function loadLocalStorage(){
  const localUserData=localStorage.getItem('UserData');
  if(localUserData && validJSON(localUserData)){
    const UserData= JSON.parse(localUserData);
    if(isUserData(UserData)){
      Object.entries(UserData).forEach(([key,value])=>{
        const input= document.getElementById(key);
        if(input instanceof HTMLInputElement){
          input.value=value;
          window.UserData[key]=value
        }
      })
    }
  }
}

loadLocalStorage()

function handleInput({target}:KeyboardEvent){
  if(target instanceof HTMLInputElement){
    window.UserData[target.id]=target.value
    localStorage.setItem('UserData',JSON.stringify(window.UserData))
  }
}
const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', handleInput);
