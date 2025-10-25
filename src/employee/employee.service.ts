import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  create(employee: Employee) {
    return this.employeeRepo.save(employee);
  }

  findAll() {
    return this.employeeRepo.find();
  }

  async findOne(id: number) {
    const emp = await this.employeeRepo.findOne({ where: { id } });
    if (!emp) throw new NotFoundException(`Employee #${id} not found`);
    return emp;
  }

  async update(id: number, employee: Partial<Employee>) {
    await this.employeeRepo.update(id, employee);
    return this.findOne(id);
  }

  async remove(id: number) {
    const emp = await this.findOne(id);
    return this.employeeRepo.remove(emp);
  }
}
