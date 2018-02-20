import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { StudentCRMService } from './student.services';
import { Course } from './clases/curso';

@Component({
    templateUrl: 'student.crud.html'
})

export class StudentCrudComponent implements OnInit {
    currentUID:string;
    student;
    newImageURL:string;
    img:boolean = false;
    private teachers;
    courses:Course[] = [];
    courses_db;
    id_course:any;
    Student_courses;

    constructor(
        public params:NavParams,
        public viewCtl:ViewController,
        public studnSrv:StudentCRMService,
    ) {
        this.currentUID = params.get('uid');
        this.student = params.get('student');
        console.log(this.student);
        this.Student_courses = studnSrv.listStudentCourses(this.currentUID);
        this.teachers = studnSrv.listTeachers();
        this.courses_db = studnSrv.listCourses();
     }

    ngOnInit() { }
    
    dismiss(){
        this.viewCtl.dismiss();
    }

    editImage(student){
        if (this.img) {
            this.newImageURL = (<HTMLInputElement>document.getElementById('url')).value;
            this.studnSrv.setImageUrl(this.newImageURL,student);
            console.log();
        }
    }

    getId(id){
        console.log(id);
        this.id_course = id;
    }

    addCourses(course){
        let coursen = new Course();
        coursen.name = course.name;
        coursen.schedule = course.schedule;
        coursen.teacher = course.teacher;
        coursen.classroom = course.classroom;
        coursen.id_course = this.id_course;
        
        if (course.teacher == undefined) {
            course.teacher = "";
        }

        this.courses.push(coursen);

        console.log(this.courses);
    }

    deleteCourse(id,key){
        this.studnSrv.eraseStudentCourse(id,key);
    }

    removeCourse(pos){
        this.courses.splice(pos,1);
        console.log(this.courses);
    }

    editStudent(student){
        this.studnSrv.editStudent(student,this.courses);
    }


}