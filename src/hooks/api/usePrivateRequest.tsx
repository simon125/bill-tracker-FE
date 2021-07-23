// import React from "react";
// import { useMutation, useQuery } from "react-query";

// import React from 'react'

export const usePrivateRequest = () => {
  return <div></div>;
};

export const useGetExpense = () => {
  // it will come from react-router-dom push with state
  const getExepnse = async () => {
    return await console.log(123);
  };
  return { getExepnse };
};

export const useCreateExpense = () => {
  const createExpense = async () => {
    return await console.log(123);
  };
  return { createExpense };
};

export const useUpdateExpense = () => {
  const updateExpense = async () => {
    return await console.log(123);
  };
  return { updateExpense };
};

// const useGetExepnses = (
//   pageNumber: number,
//   pageSize: number,
//   fromDate: string,
//   toDate: string
// ) => {
//   /**
//  *
//   "items": [
//     {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "name": "string",
//       "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "isDraft": true,
//       "totalAmount": 0,
//       "expenses": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "name": "string",
//           "amount": 0,
//           "expenseTypeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "aggregateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//         }
//       ],
//       "bills": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "aggregateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "fileName": "string",
//           "fileUri": "string"
//         }
//       ]
//     }
//   ],
//   "totalItems": 0
//  */
// };

// export const useGetExepnse = (id: string) => {
//   const { get } = useAuthAxios();

//   return useQuery(()=>get('expenses',`${baseUrl}/expenses/aggregates/${id}`),{

//   })
// };
