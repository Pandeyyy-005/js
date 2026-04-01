class Course{
    courseName:string
    courseCode:number
    instructor:string
    constructor(courseName:string,courseCode:number,instructor:string) {
        this.courseName=courseName
        this.courseCode=courseCode
        this.instructor=instructor
    }
    dsiplayCourseInfo(){
        return "courseName:"+this.courseName+" "+"courseCode:"+this.courseCode+" "+"cinstructor:"+this.instructor
    }
}
const c=new Course("ts",12,"abc")
console.log(c.dsiplayCourseInfo());
