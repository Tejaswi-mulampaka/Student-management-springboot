package com.advancedjava.student_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advancedjava.student_management.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}

