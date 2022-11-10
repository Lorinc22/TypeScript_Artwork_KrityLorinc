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
        if(artwork.checked){

        }
    })
    document.getElementById('ertek')?.addEventListener('change',() =>{
        if(artwork.checked){

        }
    });
    document.getElementById('ev')?.addEventListener('change', () =>{
        if(artwork.checked){

        }
    });
    document.getElementById('magassag')?.addEventListener('change',()=>{
        if(artwork.checked){

        }
    })
    document.getElementById('felvetel')?.addEventListener('click', () =>{
        if(artwork.checked){
        
        }
    })
});




