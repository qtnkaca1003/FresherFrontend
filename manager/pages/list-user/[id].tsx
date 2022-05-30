import { GetServerSideProps } from "next";
import React from "react";
import apiUser from "../../api/User";
import { IPage, IUser } from "../../types/interface";
import ListUser from "../../components/organisms/main/list-user";
interface IProps {
  users: IUser[];
  status: number;
  pages: IPage
}
const ViewListUser = ({ users, status,pages }: IProps) => {
  return (
    <>
      <ListUser pages={pages} status={status} users={users} />
    </>
  );
};
export default ViewListUser;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page: string | string[] | number = query.id || 1;
  const data = await (await apiUser.getPagin(page)).data;
  console.log(data);

  /* const itemPerPage = 5;
  const currenPage = Number(page);
  const indexOfLastItem = currenPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem); */
  return {
    props: {
      users: data.data,
      pages: {
        page: data.page,
        per_page: data.per_page,
        total: data.total,
        total_pages: data.total_pages,
      },
      status: (data.status = "200"),
    },
  };
};
