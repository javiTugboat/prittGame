import * as THREE from 'three'
import { scenery } from './client'
import * as appControl from './client'
import { TIMEOUT } from 'dns';

export function recycleWorld(){

    while (scenery.children.length > 0) {
        scenery.remove(scenery.children[0]);
      }


      scenery.traverse(function (object) {
        if (object.isMesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      }); 
    
      setTimeout(function() {
        appControl.deleteScene()
      }, 500);    

}