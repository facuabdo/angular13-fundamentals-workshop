import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'RxJS for dummies',
      description: 'Learn the fundamentals of reactive programming in js',
      percentComplete: 0,
      favorite: false,
    },
    {
      id: 3,
      title: 'NgRx explained',
      description: 'Learn the fundamentals of reactive programming in Angular',
      percentComplete: 0,
      favorite: false,
    },
  ];
  selectedCourse: {
    id: number;
    title: string;
    description: string;
    percentComplete: number;
    favorite: boolean;
  };

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course) {
    this.selectedCourse = course;
  }
}
