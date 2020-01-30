import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { async } from '@angular/core/testing';
import { RED, GREEN, GREY, WHITE, BLACK } from '../common/color';
import { swap } from '../common/utils';
import { SortConfig } from '../common/sort_config'

@Component({
  selector: 'app-bouble-sort',
  templateUrl: './bouble-sort.component.html',
  styleUrls: ['./bouble-sort.component.css'],
  providers: [SortConfig]
})
export class BoubleSortComponent implements OnInit {
  private p5;
  constructor(private sortConfig: SortConfig) { }

  ngOnInit() {
    let mySketch = this.defineSketch(this);
    this.p5 = new p5(mySketch)
    this.p5.sortConfig = this.sortConfig;
    console.log(p5);
  }

  defineSketch(self) {
    return function(p) {
      let canvas;
      let delay = self.sortConfig.delay;    
      let array: Array<number> = [];
      let state: Array<any> = [];
      let sample_size: number = self.sortConfig.sample_size;
      let right_shift: number = 0;
      let w = 1;
      
      p.setup = () => {
        // canvas = p.createCanvas(window.innerWidth, window.innerHeight-3.5).parent('bouble-sort-canvas');
        canvas = p.createCanvas(p.windowWidth, p.windowHeight).parent('bouble-sort-canvas');
        canvas.position(0, 0);
        canvas.style('z-index', '-1')
        w = Math.floor(p.width/sample_size);
        for(let i = 0; i < sample_size; i++) {
          array[i] = p.random(p.height);
          state[i] = WHITE;
        }
        right_shift = (p.width - w*sample_size)/2;
        bouble_sort(array, sample_size);
      }
  
      p.draw = () => {
        p.background(0);
        p.translate(right_shift, 0);
  
        for (let i = 0; i < sample_size; i++) {
          p.noStroke();
          
          p.fill(state[i]);
          p.rect(i*w, p.height - array[i], w, array[i]);
        }
      }
  
      let bouble_sort = async (arr: Array<number>, size: number) => {
        for(let i = 0; i <= size; i++) {
          for(let j = 0; j <= size - i - 1; j++) {
            state[j] = RED;
            state[j+1] = RED;
            if (arr[j] > arr[j+1]) {
              await swap(arr, j, j+1, delay);
              console.log(delay);
              
            }
            state[j] = WHITE;
            state[j+1] = GREEN;
          }
        }
        state[0] = GREEN;
        p.noLoop();
      }
    }
  }
}
