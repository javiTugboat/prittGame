import * as THREE from 'three'
import { scenery } from './client'

var spotLight;

export function createLights(){
var ambientLight = new THREE.AmbientLight(0xccddee, 1);
// La añadimos a la escena
scenery.add (ambientLight);

// Se crea una luz focal que va a ser la luz principal de la escena
// La luz focal, además tiene una posición, y un punto de mira
// Si no se le da punto de mira, apuntará al (0,0,0) en coordenadas del mundo
// En este caso se declara como   atributo   para que sea un atributo accesible desde otros métodos.
spotLight = new THREE.SpotLight( 0xffffff, 1);
spotLight.position.set( -19, 0, 30 );
console.log("SPOTLIGHT",spotLight)
scenery.add(spotLight)

}