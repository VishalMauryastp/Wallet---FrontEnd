import React from "react";

const Trasections = () => {
  const data = [
    {
      td1:"vishal",
      td2:"2000",
      td3:"successful",
      td4:"remark",
    },
    {
      td1:"vishal",
      td2:"2000",
      td3:"successful",
      td4:"remark",
    },
    {
      td1:"vishal",
      td2:"2000",
      td3:"successful",
      td4:"remark",
    },
    {
      td1:"vishal",
      td2:"2000",
      td3:"successful",
      td4:"remark",
    },
    {
      td1:"vishal",
      td2:"2000",
      td3:"successful",
      td4:"remark",
    },
    {
      td1:"vishal",
      td2:"2000",
      td3:"successful",
      td4:"remark",
    },
  ]
  return (
    <div className="w-full no-scrollbar overflow-x-scroll  text-white p-4">
      {/* <h1 className='text-2xl font-semibold w-fit mx-auto mt-6 '>Trasection History</h1>  */}
      <div className="   ">
        <table className="w-[400px] md:w-full table-fixed    ">
          <tr className=" bg-[#ffffff35] ">
            <th className="py-2">Name</th>
            <th>Amount </th>
            <th>Status </th>
            <th>remark </th>
          </tr>
          {data.map((val, i) => {
            return <tr className="text-center">
              <td>{val.td1}</td>
              <td>{val.td2}</td>
              <td>{val.td3}</td>
              <td>{val.td4}</td>
            </tr>;
          })}

          {/* <tr>
            <td className='b'>Name</td>
            <td>Amount </td>
            <td>Status </td>
            <td>remark </td>

            </tr>
            <tr>
            <td className='b'>Name</td>
            <td>Amount </td>
            <td>Status </td>
            <td>remark </td>

            </tr>
            <tr>
            <td className='b'>Name</td>
            <td>Amount </td>
            <td>Status </td>
            <td>remark </td>

            </tr>
            <tr>
            <td className='b'>Name</td>
            <td>Amount </td>
            <td>Status </td>
            <td>remark </td>

            </tr> */}
        </table>
      </div>
    </div>
  );
};

export default Trasections;
