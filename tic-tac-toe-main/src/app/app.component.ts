import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tic-tac-toe';

  constructor(private toastr: ToastrService) { }

  winMessage: string = '';
  isCross: boolean = false
  itemArray: string[] = new Array(9).fill('empty')

  handleClick(itemNumber: number) {
    if (this.winMessage) {
      return this.toastr.success(this.winMessage)
    }
    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle'
      console.log("isCross:" + this.isCross);

      this.isCross = !this.isCross
    } else {
      return this.toastr.info('Already filled')
    }
    this.checkWinner()
  }

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false
    this.itemArray = new Array(9).fill('empty')
    this.toastr.info('Game Reloaded')
  }
  checkWinner = () => {
    if (this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[1] === this.itemArray[2] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`
    } else if (
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5] &&
      this.itemArray[3] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[3]} won`
    }
    else if (
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8] &&
      this.itemArray[6] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won`
    }
    else if (
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`
    }
    else if (
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7] &&
      this.itemArray[1] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[1]} won`
    }
    else if (
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8] &&
      this.itemArray[2] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} won`
    }
    else if (
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`
    }
    else if (
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6] &&
      this.itemArray[2] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} won`
    }
  }

}
