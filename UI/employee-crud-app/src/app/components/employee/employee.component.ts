import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee = { id: 0, name: '', position: '', salary: 0, dateOfJoining: new Date() };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.createEmployee(this.selectedEmployee).subscribe((data) => {
      this.employees.push(data);
      this.resetSelectedEmployee();
    });
  }

  editEmployee(employee: Employee): void {
    this.selectedEmployee = { ...employee };
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.selectedEmployee).subscribe(() => {
      this.loadEmployees();
      this.resetSelectedEmployee();
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  resetSelectedEmployee(): void {
    this.selectedEmployee = { id: 0, name: '', position: '', salary: 0, dateOfJoining: new Date() };
  }
}
