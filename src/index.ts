import { Statue } from "./Statue";
import { Artwork } from "./Artwork";

let lista:Artwork [] = [];

document.addEventListener('DOMContentLoaded', () =>{

    let statue = document.getElementById('statue') as HTMLInputElement;
    let artwork = document.getElementById('artwork') as HTMLInputElement;
    let nev = document.getElementById('nev') as HTMLInputElement;
    let ertek = document.getElementById('ertek') as HTMLInputElement;
    let ev = document.getElementById('ev') as HTMLInputElement;
    let magassag = document.getElementById('magassag') as HTMLInputElement;
    
    document.getElementById('nev')?.addEventListener('change',()=>{
        let check =false;
        if(nev.value){
            document.getElementById('nev')!.textContent="Hibás név";
            document.getElementById('nev')!.style.color="red"
            check=false;
        }else{
            document.getElementById('nev')!.textContent="";
            check=true;
        }
    })
    document.getElementById('ertek')?.addEventListener('change',() =>{
        if(ertek.value){

        }
    });
    document.getElementById('ev')?.addEventListener('change', () =>{
        if(ev.value){

        }
    });
    document.getElementById('magassag')?.addEventListener('change',()=>{
        if(magassag.value){

        }
    })
    document.getElementById('felvetel')?.addEventListener('click', () =>{
        if(artwork.checked){
        
        }
    })
    let counter =lista.length;
});




