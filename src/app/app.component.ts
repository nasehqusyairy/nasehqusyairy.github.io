import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskList = this.getData()
  value = ''
  getData() {
    const data = localStorage.getItem('todolist')
    return data ? JSON.parse(data) : []
  }
  onSubmit() {
    this.taskList.push({ name: this.value })
    this.value = ''
    localStorage.setItem('todolist', JSON.stringify(this.taskList))
  }
  onClick(i: number) {
    this.taskList.splice(i, 1)
    localStorage.setItem('todolist', JSON.stringify(this.taskList))
  }
}
