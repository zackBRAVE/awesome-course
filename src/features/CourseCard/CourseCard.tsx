import React from 'react';
import { Employee } from '../ListDemo/services';

function CourseCard(props: Employee) {
  const { first_name, last_name, email, gender, status } = props;

  return (
    <div className="py-3">
      <div className="card-head">
        <span>{`${first_name} ${last_name}`}</span>
      </div>
      <div className="card-body [&_span]:pr-2">
        <span>{gender}</span>
        <span>{email}</span>
        <span>{status}</span>
      </div>
    </div>
  );
}

export { CourseCard };
