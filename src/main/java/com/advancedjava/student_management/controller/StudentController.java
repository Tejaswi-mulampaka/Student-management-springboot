// package com.advancedjava.student_management.controller;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.advancedjava.student_management.entity.Student;
// import com.advancedjava.student_management.service.StudentService;

// @RestController
// @RequestMapping("/students")
// public class StudentController {

//     private final StudentService studentService;

//     public StudentController(StudentService studentService) {
//         this.studentService = studentService;
//     }

//     @GetMapping("/{id}")
//     public Object getStudentById(@PathVariable int id) {

//         Student student = studentService.getStudentById(id);

//         if (student != null) {
//             return student;
//         }

//         return "Student Not Found";
//     }
// }

// package com.advancedjava.student_management.controller;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.advancedjava.student_management.entity.Student;
// import com.advancedjava.student_management.service.StudentService;

// @RestController
// @RequestMapping("/students")
// public class StudentController {
//     private final StudentService studentService;
//     public StudentController(StudentService studentService) {
//         this.studentService = studentService;
//     }
//     @GetMapping("/{id}")
//     public Object getStudentById(@PathVariable int id) {
//         Student student = studentService.getStudentById(id);
//         if (student != null) {
//             return student;
//         }
//         return "Student Not Found";
//     }
//     @PostMapping
//     public Student addStudent(@RequestBody Student student) {
//         return studentService.saveStudent(student);
//     }
// }

package com.advancedjava.student_management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.advancedjava.student_management.entity.Student;
import com.advancedjava.student_management.service.StudentService;


@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }



@DeleteMapping("/{id}")
public String deleteStudent(@PathVariable int id) {

    boolean deleted =
            studentService.deleteStudent(id);

    if (deleted) {
        return "Student Deleted Successfully";
    }

    return "Student Not Found";
}


    @GetMapping("/{id}")
    public Object getStudentById(@PathVariable int id) {

        Student student = studentService.getStudentById(id);

        if (student != null) {
            return student;
        }

        return "Student Not Found";
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {

        return studentService.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {

        return studentService.getAllStudents();
    }
 

@PutMapping("/{id}")
public Object updateStudent(
        @PathVariable int id,
        @RequestBody Student student) {

    Student updatedStudent =
            studentService.updateStudent(id, student);

    if (updatedStudent != null) {
        return updatedStudent;
    }

    return "Student Not Found";
}

}
