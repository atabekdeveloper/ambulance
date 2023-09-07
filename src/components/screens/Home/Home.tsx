import React from 'react';
import { useGetRolesQuery } from 'src/services';

const Home: React.FC = () => {
  const { data: roles } = useGetRolesQuery();
  return (
    <ul>
      {roles?.data.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};

export { Home };
