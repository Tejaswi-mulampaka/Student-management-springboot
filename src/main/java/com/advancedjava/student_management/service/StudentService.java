// package com.advancedjava.student_management.service;

// import org.springframework.stereotype.Service;

// import com.advancedjava.student_management.entity.Student;
// import com.advancedjava.student_management.repository.StudentRepository;

// @Service
// public class StudentService {

//     private final StudentRepository studentRepository;

//     public StudentService(StudentRepository studentRepository) {
//         this.studentRepository = studentRepository;
//     }

//     public Student getStudentById(int id) {

//         return studentRepository.findById(id).orElse(null);
//     }
// }


// package com.advancedjava.student_management.service;
// import org.springframework.stereotype.Service;

// import com.advancedjava.student_management.entity.Student;
// import com.advancedjava.student_management.repository.StudentRepository;
// @Service
// public class StudentService {
//     private final StudentRepository studentRepository;
//     public StudentService(StudentRepository studentRepository) {
//         this.studentRepository = studentRepository;
//     }
//     public Student getStudentById(int id) {
//         return studentRepository.findById(id).orElse(null);
//     }
//     public Student saveStudent(Student student) {
//         return studentRepository.save(student);
//     }
// }


package com.advancedjava.student_management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.advancedjava.student_management.entity.Student;
import com.advancedjava.student_management.repository.StudentRepository;

@Service
public class StudentService {
    public boolean deleteStudent(int id) {

    Student student =
            studentRepository.findById(id).orElse(null);

    if (student != null) {

        studentRepository.delete(student);

        return true;
    }

    return false;
}


    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student getStudentById(int id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public Student updateStudent(int id, Student student) {

    Student existingStudent =
            studentRepository.findById(id).orElse(null);

    if (existingStudent != null) {

        existingStudent.setName(student.getName());
        existingStudent.setBranch(student.getBranch());
        existingStudent.setYear(student.getYear());
        existingStudent.setMobile(student.getMobile());

        return studentRepository.save(existingStudent);
    }

    return null;
}

}


