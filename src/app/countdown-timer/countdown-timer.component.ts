import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input()
  second = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }
  constructor() { }

  ngOnInit() {
    this.reset();
    this.start();
  }

  private stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  private reset() {
    this.clearTimer();
    this.remainingTime = this.second;
    this.message = `Click start button to start the Countdown`
  }

  private start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.second;
    }
  }


  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer()
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    },1000);
  }
  ngOnDestroy() {
    this.clearTimer();
  }
}
