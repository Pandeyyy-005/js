interface Attendance{
    markAttendance(isPresent:boolean):string
}
class Student implements Attendance{
    markAttendance(isPresent: boolean): string {
        if(isPresent){
            return "present"
        }
        else{
            return "absent"
        }
    }

}
const s=new Student()
console.log(s.markAttendance(true));
