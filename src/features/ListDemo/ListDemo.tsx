import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getEmployees } from './services';
import { CourseCard } from '../CourseCard';

export function ListDemo() {
  const { isLoading, data: employees } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {employees?.map((employee) => (
        <CourseCard key={employee.id} {...employee} />
      ))}
    </div>
  );
}
