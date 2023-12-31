import * as THREE from 'three'
import { scenery } from './client'
import e from 'express';

var spotLight,ambientLight;
var lightsCreated = false;
export function createLights(){
    if(!lightsCreated){
        ambientLight = new THREE.AmbientLight(0xccddee, 0.6);
        // La añadimos a la escena
        ambientLight.name="mainLight";
        scenery.add (ambientLight);

        // Se crea una luz focal que va a ser la luz principal de la escena
        // La luz focal, además tiene una posición, y un punto de mira
        // Si no se le da punto de mira, apuntará al (0,0,0) en coordenadas del mundo
        // En este caso se declara como   atributo   para que sea un atributo accesible desde otros métodos.
        spotLight = new THREE.SpotLight( 0xffffff, 1);
        spotLight.position.set( -19, 0, 30 );
        // console.log("SPOTLIGHT",spotLight)
        scenery.add(spotLight)
        lightsCreated = true;
    }else{}    
    }

export function removeLights(){


    scenery.remove(spotLight)
    scenery.remove(ambientLight)
}