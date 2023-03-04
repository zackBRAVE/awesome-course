import { useRequest} from '../../utils/request';

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  status: string;
}

export async function getEmployees() {
  const { get } = useRequest();

  const employees = await get<Employee[]>('/employees');
  console.log('employees', employees);
  
  return employees;
}
